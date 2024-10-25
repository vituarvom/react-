export const formatTime = (
  format: "hh:mm" | "hh:mm:ss" | "mm:ss" | "ss" | undefined,
  seconds: number
): string => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;

  switch (format) {
    case "hh:mm":
      return `${hours}:${minutes < 10 ? "0" : ""}${minutes}`;
    case "hh:mm:ss":
      return `${hours}:${minutes < 10 ? "0" : ""}${minutes}:${
        secs < 10 ? "0" : ""
      }${secs}`;
    case "mm:ss":
      return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
    case "ss":
      return `${seconds}s`;
    default:
      return seconds.toString();
  }
};
