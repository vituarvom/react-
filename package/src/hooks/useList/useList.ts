// src/hooks/useList.ts
import { useState } from 'react';

function useList<T>(initialList: T[] = []) {
  const [list, setList] = useState<T[]>(initialList);

  const push = (item: T) => setList((currentList) => [...currentList, item]);
  const updateAt = (index: number, newItem: T) =>
    setList((currentList) =>
      currentList.map((item, i) => (i === index ? newItem : item))
    );
  const removeAt = (index: number) =>
    setList((currentList) => currentList.filter((_, i) => i !== index));
  const clear = () => setList([]);
  const insertAt = (index: number, item: T) =>
    setList((currentList) => [
      ...currentList.slice(0, index),
      item,
      ...currentList.slice(index),
    ]);
  const move = (from: number, to: number) => {
    if (from === to) return;
    setList((currentList) => {
      const updatedList = [...currentList];
      const [movedItem] = updatedList.splice(from, 1);
      updatedList.splice(to, 0, movedItem);
      return updatedList;
    });
  };

  return { list, setList, push, updateAt, removeAt, clear, insertAt, move };
}

export default useList;
