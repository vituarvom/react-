// src/hooks/useList.test.ts
import { renderHook, act } from '@testing-library/react-hooks';
import useList from './useList';

describe('useList Hook', () => {
  it('should initialize with an empty list by default', () => {
    const { result } = renderHook(() => useList());
    expect(result.current.list).toEqual([]);
  });

  it('should initialize with a given list of fruits', () => {
    const initialList = ['Apple', 'Cherry', 'Banana', 'Pineapple'];
    const { result } = renderHook(() => useList(initialList));
    expect(result.current.list).toEqual(initialList);
  });

  it('should add new fruit names', () => {
    const { result } = renderHook(() => useList<string>());
    act(() => {
      result.current.push('Grapes');
    });
    act(() => {
      result.current.push('Mango');
    });
    expect(result.current.list).toEqual(['Grapes', 'Mango']);
  });

  it('should update a fruit at a specific index', () => {
    const initialList = ['Apple', 'Banana', 'Orange'];
    const { result } = renderHook(() => useList(initialList));
    act(() => {
      result.current.updateAt(1, 'Strawberry'); // Replace 'Banana' with 'Strawberry'
    });
    expect(result.current.list).toEqual(['Apple', 'Strawberry', 'Orange']);
  });

  it('should remove a fruit at a specific index', () => {
    const initialList = ['Apple', 'Banana', 'Mango'];
    const { result } = renderHook(() => useList(initialList));
    act(() => {
      result.current.removeAt(1); // Remove 'Banana'
    });
    expect(result.current.list).toEqual(['Apple', 'Mango']);
  });

  it('should clear the entire fruit list', () => {
    const initialList = ['Apple', 'Banana', 'Cherry'];
    const { result } = renderHook(() => useList(initialList));
    act(() => {
      result.current.clear();
    });
    expect(result.current.list).toEqual([]);
  });

  it('should insert a fruit at a specific index', () => {
    const initialList = ['Apple', 'Banana'];
    const { result } = renderHook(() => useList(initialList));
    act(() => {
      result.current.insertAt(1, 'Cherry'); // Insert 'Cherry' at index 1
    });
    expect(result.current.list).toEqual(['Apple', 'Cherry', 'Banana']);
  });

  it('should move a fruit from one index to another', () => {
    const initialList = ['Apple', 'Banana', 'Cherry'];
    const { result } = renderHook(() => useList(initialList));
    act(() => {
      result.current.move(0, 2); // Move 'Apple' from index 0 to index 2
    });
    expect(result.current.list).toEqual(['Banana', 'Cherry', 'Apple']);
  });

  it('should not change the list when moving a fruit to the same index', () => {
    const initialList = ['Apple', 'Banana', 'Cherry'];
    const { result } = renderHook(() => useList(initialList));
    act(() => {
      result.current.move(1, 1); // Move 'Banana' from index 1 to index 1
    });
    expect(result.current.list).toEqual(initialList);
  });
});
