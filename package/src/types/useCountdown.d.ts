declare module "hooks" {
  export type FormatOptions =
    | "hh:mm"
    | "hh:mm:ss"
    | "mm:ss"
    | "ss"
    | ((timeInSeconds: number) => string);

  export interface UseCountdownOptions {
    interval?: number; // Interval in milliseconds for countdown updates (default 1000ms)
    onTick?: () => void; // Callback invoked on each tick
    onComplete?: () => void; // Callback invoked when countdown reaches zero
    format?: FormatOptions; // Format string or function for formatting countdown time
  }

  export interface CountdownControls {
    start: () => void; // Start the countdown
    pause: () => void; // Pause the countdown
    resume: () => void; // Resume the countdown
    reset: () => void; // Reset the countdown to the initial state
    increaseTime: (seconds: number) => void; // Increase the countdown by x seconds
    decreaseTime: (seconds: number) => void; // Decrease the countdown by x seconds
  }

  /**
   * useCountdown hook to create a countdown timer with extra functionalities like pause, reset, and more.
   *
   * @param {number} initialTimeInSeconds - The initial countdown time in seconds.
   * @param {UseCountdownOptions} options - Optional settings like interval, onTick, onComplete, and format.
   *   - `interval` (number): The interval in milliseconds for countdown updates (default is 1000ms).
   *   - `onTick` (function): A callback function invoked on each tick.
   *   - `onComplete` (function): A callback function invoked when the countdown reaches zero.
   *   - `format` (string or function):  Predefined format options ('hh:mm', 'hh:mm:ss', 'mm:ss', 'ss') or a custom formatting function.
 *
 * @returns [formattedTime, countdownControls] - Countdown time and control functions.
   - `formattedTime` (string | number | null): The current countdown time, formatted according to the specified format.
   - `countdownControls` (CountdownControls): An object containing methods to control the countdown:
     - `start`: Starts the countdown.
     - `pause`: Pauses the countdown.
     - `resume`: Resumes the countdown.
     - `reset`: Resets the countdown to the initial time.
     - `increaseTime(seconds: number)`: Increases the countdown time by the specified number of seconds.
     - `decreaseTime(seconds: number)`: Decreases the countdown time by the specified number of seconds.
   */
  declare function useCountdown(
    initialTimeInSeconds: number, // Initial countdown time in seconds
    options?: UseCountdownOptions // Optional countdown settings
  ): [string | number | null, CountdownControls];
}
