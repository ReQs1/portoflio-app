import { useEffect, useState } from "react";
/* eslint-disable @typescript-eslint/no-explicit-any */

export default function useLocalTheme(initialState: any, key: string) {
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key);

    if (!storedValue) {
      initialState === true
        ? document.documentElement.classList.add("dark-mode")
        : document.documentElement.classList.add("light-mode");
    } else if (storedValue === "true") {
      document.documentElement.classList.add("dark-mode");
    } else if (initialState === false || storedValue === "false") {
      document.documentElement.classList.add("light-mode");
    }

    return storedValue ? JSON.parse(storedValue) : initialState;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
    if (value === true) {
      document.documentElement.classList.remove("light-mode");
      document.documentElement.classList.add("dark-mode");
    } else if (value === false) {
      document.documentElement.classList.remove("dark-mode");
      document.documentElement.classList.add("light-mode");
    }
  }, [key, value]);

  return [value, setValue];
}
