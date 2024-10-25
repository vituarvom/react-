import { renderHook } from '@testing-library/react-hooks';
import { useFetch } from './useFetch';

const mockData = { id: 1, name: 'Test' };
const mockUrl = 'https://api.example.com/data';

describe('useFetch Hook', () => {
  beforeEach(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockData),
      })
    ) as jest.Mock;
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return data after successful fetch', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFetch(mockUrl));

    expect(result.current.loading).toBe(true);
    expect(result.current.data).toBe(null);
    expect(result.current.error).toBe(null);

    await waitForNextUpdate();

    expect(result.current.loading).toBe(false);
    expect(result.current.data).toEqual(mockData);
    expect(result.current.error).toBe(null);
  });

  it('should set error when fetch fails', async () => {
    global.fetch = jest.fn(() => Promise.reject(new Error('Fetch error'))) as jest.Mock;

    const { result, waitForNextUpdate } = renderHook(() => useFetch(mockUrl));

    expect(result.current.loading).toBe(true);
    expect(result.current.data).toBe(null);
    expect(result.current.error).toBe(null);

    await waitForNextUpdate();

    expect(result.current.loading).toBe(false);
    expect(result.current.data).toBe(null);
    expect(result.current.error).toBe('Fetch error');  
  });

  it('should handle non-200 responses as errors', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: false,
        status: 404,
        statusText: 'Not Found',
      })
    ) as jest.Mock;

    const { result, waitForNextUpdate } = renderHook(() => useFetch(mockUrl));

    expect(result.current.loading).toBe(true);
    expect(result.current.data).toBe(null);
    expect(result.current.error).toBe(null);

    await waitForNextUpdate();

    expect(result.current.loading).toBe(false);
    expect(result.current.data).toBe(null);
    expect(result.current.error).toBe('Error: 404 Not Found');  
  });

  it('should handle a request timeout', async () => {
    global.fetch = jest.fn(
      () =>
        new Promise((_, reject) =>
          setTimeout(() => reject(new Error('Request timed out')), 500)  
        )
    ) as jest.Mock;
  
    const { result, waitForNextUpdate } = renderHook(() => useFetch(mockUrl));
  
    expect(result.current.loading).toBe(true);
    expect(result.current.data).toBe(null);
    expect(result.current.error).toBe(null);
  
    await waitForNextUpdate();
  
    expect(result.current.loading).toBe(false);
    expect(result.current.data).toBe(null);
    expect(result.current.error).toBe('Request timed out');
  });
  

  it('should not update state if component unmounts before fetch completes', async () => {
    global.fetch = jest.fn(
      () =>
        new Promise(resolve =>
          setTimeout(() => resolve({ ok: true, json: () => Promise.resolve(mockData) }), 1000)
        )
    ) as jest.Mock;

    const { result, unmount, waitForNextUpdate } = renderHook(() => useFetch(mockUrl));

    expect(result.current.loading).toBe(true);
    expect(result.current.data).toBe(null);
    expect(result.current.error).toBe(null);

    unmount();
    
    await waitForNextUpdate({ timeout: 1500 }).catch(() => {
      
      expect(result.current.data).toBe(null);
      expect(result.current.loading).toBe(true); 
    });
  });
});
