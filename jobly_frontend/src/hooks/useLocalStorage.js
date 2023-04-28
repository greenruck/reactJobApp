import { useState, useEffect } from "react";

/**Hook to sync state to localstorage
 * creates item as state and checks localstorage for current value
 * 
 * defaults to localstorage
 * 
 * if null, removes from localstorage
 * re-runs if item changes
 */


 function useLocalStorage(key, firstValue = null) {
    const initialValue = localStorage.getItem(key) || firstValue;
  
    const [item, setItem] = useState(initialValue);
  
    useEffect(function setKeyInLocalStorage() {
      console.debug("hooks useLocalStorage useEffect", "item=", item);
  
      if (item === null) {
        localStorage.removeItem(key);
      } else {
        localStorage.setItem(key, item);
      }
    /** when to  run effect*/
    }, [key, item]);

    return [item, setItem];
  }
  
  export default useLocalStorage;
  