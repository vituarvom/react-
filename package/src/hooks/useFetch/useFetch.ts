import { useState, useEffect, useMemo } from 'react';

/**
 * The `useFetch` hook handles API calls and provides loading and error states.
 *
 * @param {string} url - The API endpoint to fetch data from.
 * @param {RequestInit} [options] - Optional configuration for the fetch request (e.g., method, headers).
 * 
 * @returns An object containing:
 * - `data`: The fetched data or null if the request hasn't completed.
 * - `loading`: A boolean indicating whether the request is in progress.
 * - `error`: Any error encountered during the fetch, or null if no error.
 */
export const useFetch = <T>(url: string, options?: RequestInit) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  
  const memoizedOptions = useMemo(() => options, [JSON.stringify(options)]);

  useEffect(() => {
    setLoading(true);
    setError(null);

    const controller = new AbortController();
    const signal = controller.signal;
    let timeoutId: ReturnType<typeof setTimeout> | null = null;

    const fetchData = async () => {
      try {
        timeoutId = setTimeout(() => controller.abort(), 10000); 
        const response = await fetch(url, { ...memoizedOptions, signal });
        
        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }

       
        let result: T;
        try {
          result = await response.json();
        } catch {
          setError('Failed to parse response as JSON');
          return;
        }

        setData(result);
      } catch (err) {
        if (err instanceof DOMException && err.name === 'AbortError') {
          setError('Request timed out');
        } else {
          setError(err instanceof Error ? err.message : 'An unknown error occurred');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      controller.abort(); 
      if (timeoutId) {
        clearTimeout(timeoutId); 
      }
    };
  }, [url, memoizedOptions]);

  return { data, loading, error };
};
