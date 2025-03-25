import { useRef } from "react";

export function useDebounce<T>(callback: (args: T) => void, delay: number) {
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  return (args: T) => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      callback(args);
    }, delay);
  };
}
