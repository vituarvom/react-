import React from "react";
import { useLocalStorage } from "react-smart-utils";

const UseLocalStorage = () => {
  const [value, setValue] = useLocalStorage<"dark" | "light">("theme", undefined);

  console.log(value)
  return (
    <div>
      <button onClick={() => value === "light" || !value ? setValue('dark') : setValue('light')}>
        Set {value === "light" || !value ? "Dark" : "Light"} Theme
      </button>
      <p>Check the localstorage to see the result</p>
    </div>
  );
};

export default UseLocalStorage;
