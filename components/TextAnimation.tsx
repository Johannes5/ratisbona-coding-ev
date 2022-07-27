import React, { useCallback, useEffect, useState } from 'react';
import useInterval from '../utilities/useInterval';

import Style from './TextWrapper.module.css';



export default function TextAnimation(props: { wordArray: string[] }) {
  const newWordArray = props.wordArray.map((word) => word.split(','));
  const [items, setItems] = useState(newWordArray[0]);
  const [count, setCount] = useState(0);
  const [delay, setDelay] = useState(6000);
  const [currentItem, setCurrentItem] = useState(false);
  const [play, setPlay] = useState(false);


  useInterval(
    () => {
      // Animate React
      for (let i = 0; i < newWordArray.length; i++) {
        const element = newWordArray[currentItem ? 2 : i];
        setCurrentItem(false);
        if (count === i) {
          if (!currentItem) setCount(count + 1);
          if (currentItem) setCount(count + 3);
          if (i === props.wordArray.length - 1) setCount(0);
          return setItems(element);
        } else {
          setItems(newWordArray[0]);
          setCount(1);
        }
      }
    },
    play ? 3000 : null  // the speed can be changed here, but must also be changed in the styles .kqOLaA { animation-duration: 3s; } to reflect the same value
  );

  useEffect(() => {
    for (let i = 1; i < newWordArray.length; i++) {
      console.log(i);
      const element = newWordArray[i];
      const timer = setTimeout(() => {
        // Animate Swift after
        setPlay(true);
        // setDelay(6000);
        setCurrentItem(true);
        setItems(element);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <span className={Style.kqOLaE}>
      {items.map((item) => (
        <>
          {item?.split('')?.map((text, index) => (
            <>
              <span key={index} className={Style.kqOLaA}>
                {text}
              </span>
            </>
          ))}
        </>
      ))}
    </span>
  );
}
/*
const animation = keyframes`
  50% {
    opacity: 1;
    transform: scale(1) translateY(0px) skewx(0deg) skewY(0deg) rotate(0deg);
    filter: blur (0px)
  }
  60% {
    opacity: 0;
    transform: scale(2) translateX(100px) skewX(10deg) skewY (10deg) rotateZ(30deg);
    filter: blur (10px)
  }
  70% {
    opacity: 0;
    transform: scale(2) translateY(-100px) skewX(10deg) skewY(10deg) rotateZ(30deg);
    filter: blur(10px)
  }
  80% {
    opacity: 1;
    transform: scale(1) translateY(0px) skewx(0deg) skewY(0deg) rotateZ(0deg);
    filter: blur (Opx)
  }
`;


const Wrapper = styled.span`
  display: inline-flex;
  flex-direction: row;
  font-weight: bold;
  /!* overflow: hidden; *!/

  span {
    animation-name: ${animation};
    animation-duration: 6s;
    animation-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;

    span:nth-child(1) {
      animation-delay: 0.1s;
    }

    span:nth-child(2) {
      animation-delay: 0.2s;
    }

    span:nth-child(3) {
      animation-delay: 0.3s;
    }

    span:nth-child(4) {
      animation-delay: 0.4S;
    }

    span:nth-child(5) {
      animation-delay: 0.5s;
    }
  }
`
*/
