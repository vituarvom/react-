

declare module "hooks" {
  /**
   * The `useUnmount` hook returns a boolean state value and a function to toggle that value.
   *
   *  @param callback - The `callback` parameter in the `useUnmount` function is a function that will be
   * executed when the component using this hook is unmounted. It is a function that you pass to
   * `useUnmount` to perform cleanup or any necessary actions before the component is removed from the DOM.
   */
  export function useUnmount(callback: () => void): void;
}
