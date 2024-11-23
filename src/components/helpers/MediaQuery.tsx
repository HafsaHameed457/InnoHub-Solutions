import { useState, useEffect } from "react";

// Custom Hook to handle media queries
const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState<boolean>(false);

  useEffect(() => {
    // Initialize the media query
    const mediaQueryList = window.matchMedia(query);

    // Set initial state
    setMatches(mediaQueryList.matches);

    // Handler for when the media query changes
    const handleChange = () => {
      setMatches(mediaQueryList.matches);
    };

    // Add listener for changes in media query
    mediaQueryList.addEventListener("change", handleChange);

    // Cleanup the listener on component unmount
    return () => mediaQueryList.removeEventListener("change", handleChange);
  }, [query]);

  return matches;
};

export default useMediaQuery;
