import { useEffect } from "react";

export const useUnmount = (callback: () => void) => {
  useEffect(() => {
    return () => {
      try {
        callback();
      } catch (error) {
        console.error("Error in unmount callback", error);
      }
    };
  }, []);
};
