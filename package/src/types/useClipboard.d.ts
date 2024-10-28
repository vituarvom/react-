/**
 * The useClipboard function in TypeScript allows for copying text to the clipboard and provides
 * feedback on whether the operation was successful.
 * @param [initialText] - The `initialText` parameter in the `useClipboard` function is used to set the
 * initial text that will be copied to the clipboard if no text is provided when calling the `copy`
 * function.
 * @returns The function `useClipboard` returns an object with three properties: `isCopied`, `copy`,
 * and `copiedText`. These properties are returned as a constant object using TypeScript's `as const`
 * syntax.
 */
export declare function useClipboard(initialText?: string): Readonly<{
  isCopied: boolean;
  copy: (text: string) => Promise<void>;
  copiedText: string;
}>;
