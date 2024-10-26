import { useState } from 'react';

type Queue<T> = {
  enqueue: (item: T) => void;
  dequeue: () => T | undefined;
  peek: () => T | undefined;
  isEmpty: () => boolean;
  clear: () => void;
  size: number;
  items: T[];
};

export function useQueue<T>(): Queue<T> {
  const [queue, setQueue] = useState<T[]>([]);

  const enqueue = (item: T) => {
    setQueue((prevQueue) => [...prevQueue, item]);
  };

  const dequeue = () => {
    if (queue.length === 0) return undefined;
    const [firstItem, ...rest] = queue;
    setQueue(rest);
    return firstItem;
  };

  const peek = () => {
    return queue.length > 0 ? queue[0] : undefined;
  };

  const isEmpty = () => queue.length === 0;

  const clear = () => setQueue([]);

  return {
    enqueue,
    dequeue,
    peek,
    isEmpty,
    clear,
    size: queue.length,
    items: queue,
  };
}