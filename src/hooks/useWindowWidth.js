import { useEffect, useState } from 'react'

export const useWindowWidth = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth); //This use to
    //hide and show the <Sidebar /> component below
  
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
  
    useEffect(() => {
      window.addEventListener("resize", handleResize);
  
      //cleanup
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);

    return windowWidth;
}
