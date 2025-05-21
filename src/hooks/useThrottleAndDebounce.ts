import { useCallback, useEffect, useRef } from 'react';

const DEBOUNCE_DELAY = 0.5 * 1000;
const THROTTLE_DELAY = 1 * 1000;

export default function useThrottleAndDebounce<T extends unknown[]>(
  callback: (...args: T) => void,
) {
  const throttleTimerRef = useRef<number | null>(null);
  const debounceTimerRef = useRef<number | null>(null);

  const throttleAndDebounce: (...args: T) => void = useCallback(
    (...args) => {
      if (debounceTimerRef.current) {
        window.clearTimeout(debounceTimerRef.current);
      }

      // Throttling
      if (!throttleTimerRef.current) {
        throttleTimerRef.current = window.setTimeout(() => {
          throttleTimerRef.current = null;
        }, THROTTLE_DELAY);
        callback(...args);
      }

      // Debouncing for final touch
      debounceTimerRef.current = window.setTimeout(() => {
        callback(...args);
      }, DEBOUNCE_DELAY);
    },
    [callback],
  );

  useEffect(() => {
    return () => {
      if (throttleTimerRef.current) {
        window.clearTimeout(throttleTimerRef.current);
      }
      if (debounceTimerRef.current) {
        window.clearTimeout(debounceTimerRef.current);
      }
    };
  }, []);

  return throttleAndDebounce;
}
