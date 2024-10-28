import { useState } from 'react';

export function useClipboard(initialText = '') {
  const [isCopied, setIsCopied] = useState(false);
  const [copiedText, setCopiedText] = useState(initialText);

  if (typeof initialText !== 'string') {
    throw new Error('useClipboard only accepts strings');
  }

  const copy = async (text: string) => {
    if (typeof text !== 'string') {
      throw new Error('copy function only accepts strings');
    }
  
    try {
      const textToCopy = text || initialText;
      await navigator.clipboard.writeText(textToCopy);
      setCopiedText(textToCopy);
      setIsCopied(true);
    } catch (err) {
      console.error('Failed to copy text: ', err);
      setIsCopied(false);
    }
  };

  return { isCopied, copy, copiedText } as const;
}
