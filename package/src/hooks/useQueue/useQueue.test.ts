// useQueue.test.ts

import { renderHook, act } from '@testing-library/react-hooks';
import { useQueue } from './useQueue';

describe('useQueue Hook', () => {
  it('should enqueue items', () => {
    const { result } = renderHook(() => useQueue<string>());

    act(() => {
      result.current.enqueue('item1');
      result.current.enqueue('item2');
    });

    expect(result.current.items).toEqual(['item1', 'item2']);
    expect(result.current.size).toBe(2);
  });

  it('should dequeue items', () => {
    const { result } = renderHook(() => useQueue<string>());

    act(() => {
      result.current.enqueue('item1');
      result.current.enqueue('item2');
    });

    act(() => {
      result.current.dequeue(); // This should remove 'item1'
    });

    expect(result.current.items).toEqual(['item2']); // Now only 'item2' should remain
    expect(result.current.size).toBe(1); // Size should be 1 after dequeue
  });

  it('should return undefined when dequeue is called on an empty queue', () => {
    const { result } = renderHook(() => useQueue<string>());

    let dequeuedItem;
    act(() => {
      dequeuedItem = result.current.dequeue();
    });

    expect(dequeuedItem).toBeUndefined();
    expect(result.current.items).toEqual([]);
  });

  it('should clear the queue', () => {
    const { result } = renderHook(() => useQueue<string>());

    act(() => {
      result.current.enqueue('item1');
      result.current.enqueue('item2');
      result.current.clear();
    });

    expect(result.current.items).toEqual([]);
    expect(result.current.size).toBe(0);
  });
});
