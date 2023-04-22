import { useEffect, useRef } from 'react';

const DEFAULT_USE_TITLE_OPTIONS = {
  restoreOnUnmount: false,
};

function useTitle(title, options = DEFAULT_USE_TITLE_OPTIONS) {
  const prevTitleRef = useRef(document.title);

  if (document.title !== title) document.title = title;

  useEffect(() => {
    if (options && options.restoreOnUnmount) {
      const ref = prevTitleRef.current;
      return () => {
        document.title = ref;
      };
    } else {
      return;
    }
  }, [options]);
}

export default typeof document !== 'undefined' ? useTitle : (_title) => {};