import React, { useRef, useEffect } from 'react';
import { useState } from 'react';

function MyComponent({numero}) {
  const elementRef = useRef(null);
  const observer = useRef(null);
  const [actualObserver, setActualObserver] = useState(false);
  const [actualPer, setActualPer] = useState(0);
  useEffect(() => {
    observer.current = new IntersectionObserver(handleIntersection, { threshold: [0, 0.25, 0.6, 0.7, 0.75, 0.8, 0.9, 0.99, 1] });
    if (elementRef.current) {
      observer.current.observe(elementRef.current);
    }
    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [elementRef]);

  function handleIntersection(entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        
        console.log(`${entry.intersectionRatio * 100}% of element ${numero} is in view`);
        console.log(entry.intersectionRatio);
        setActualPer(parseFloat(entry.intersectionRatio).toFixed(2));
        if(entry.intersectionRatio * 100 >= 60){
            setActualObserver(true);

        }else{
         //   setActualObserver(false);
        }
      } else {
      //  setActualObserver(false);
        console.log("Element is out of view");
      }
    });
  }

  return (
    <div>
      <div style={{height:'100vh'}} ref={elementRef}>This element will be observed {actualPer > 0.50 ? <>
      <div style={{opacity:actualPer > 0.9 ? 1 : actualPer, transition:'all 0.3s'}}>
        
        <img src="https://i.picsum.photos/id/1/5000/3333.jpg?hmac=Asv2DU3rA_5D1xSe22xZK47WEAN0wjWeFOhzd13ujW4" alt="" />
      </div>
      </>:"" }</div>
    </div>
  );
}

export default MyComponent;
