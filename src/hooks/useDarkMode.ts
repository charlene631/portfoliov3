import { useEffect, useState } from "react";

export default function useDarkMode(): ["dark" | "light", (value: "dark" | "light") => void] {
  const [theme, setTheme] = useState<"dark" | "light">(() => {
    if (typeof globalThis.window !== "undefined") {
      const saved = localStorage.getItem("theme");
      return saved ==="light" ? "light" : "dark";
    }
    return "dark";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme",theme);
  }, [theme]);

  return [theme, setTheme];
}

