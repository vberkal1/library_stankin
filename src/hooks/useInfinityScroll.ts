import { useRef, useEffect } from 'react';

export default function useInfinityScroll(
  loadUpItems: () => void,
  options: IntersectionObserverInit,
  deps: Array<any>,
) {
  const observableElementRef = useRef<HTMLLIElement | null>(null);
  const intersectionObserverRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    intersectionObserverRef.current = new IntersectionObserver(
      (entries: Array<IntersectionObserverEntry>) => {
        entries[0].isIntersecting && loadUpItems();
      },
      options,
    );
  }, [loadUpItems]);

  useEffect(() => {
    const { current: intersectionObserver } = intersectionObserverRef;
    const { current: observableElement } = observableElementRef;

    intersectionObserver && intersectionObserver.disconnect();
    observableElement
      && intersectionObserver
      && intersectionObserver.observe(observableElement);

    return () => {
      intersectionObserver && intersectionObserver.disconnect();
    };
  }, [...deps]);

  return [observableElementRef];
}
