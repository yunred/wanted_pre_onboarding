import React, { useState, useEffect } from 'react';

function useMedia(query) {
  const [matches, setMatches] = useState(window.matchMedia(query).matches);

  useEffect(() => {
    let media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    let listener = () => setMatches(media.matches);
    media.addListener(listener);
    return () => media.removeListener(listener);
  }, [query, matches]);

  return matches;
}

export default useMedia;
