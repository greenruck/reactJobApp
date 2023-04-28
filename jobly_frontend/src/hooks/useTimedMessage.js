import { useRef, useState, useEffect } from "react";

/** Hook for flash messages
 * 
 * adds item to state  , 'active', which resets to flase after timeInMsec to stop showing message
*/

function useTimedMessage(timeInMsec = 3000) {
    const [active, setActive] = useState(false);
  
    const messageShownRef = useRef(false);
  
    useEffect(
        function showSavedMessage() {
          console.debug(
              "useTimedMessage useEffect showSavedMessage", "active=", active);
  
          if (active && !messageShownRef.current) {
            messageShownRef.current = true;
            setTimeout(function removeMessage() {
              setActive(false);
              messageShownRef.current = false;
            }, timeInMsec);
          }
        },
        [active, timeInMsec],
    );
  
    return [active, setActive];
  }
  
  export default useTimedMessage;
  