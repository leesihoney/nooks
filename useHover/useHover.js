export const useHover = onClick => {
  if (typeof onClick !== "function") {
    return;
  }
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      element.current.addEventListener("hover", onClick);
    }
    return () => {
      if (element.current) {
        element.current.removeEventListener("hover", onClick);
      }
    };
  }, []);
  return element;
};