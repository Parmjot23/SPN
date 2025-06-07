import { useRef, useEffect, useState } from 'react';

const useIntersection = <T extends HTMLElement>(
  options?: IntersectionObserverInit
): [React.RefObject<T>, boolean] => {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      });
    }, options);

    observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [options]);

  return [ref, visible];
};

export default useIntersection;
