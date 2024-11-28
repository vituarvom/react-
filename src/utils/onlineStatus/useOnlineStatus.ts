import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [isOnline, setIsOnline] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const checkOnlineStatus = () => {
    if (
      typeof navigator !== "undefined" &&
      typeof navigator.onLine === "boolean"
    ) {
      setIsOnline(navigator.onLine);
    } else {
      setError("Unable to determine online status");
      console.error(
        "Navigator object is not available or onLine is not supported"
      );
    }
  };

  const handleOnline = () => {
    setIsOnline(true);
  };

  const handleOffline = () => {
    setIsOnline(false);
  };

  useEffect(() => {
    checkOnlineStatus();

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return { isOnline, error };
};

export default useOnlineStatus;
