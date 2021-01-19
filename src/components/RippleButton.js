import { useRef, useState } from "react";
import styled, {keyframes} from 'styled-components';

const Button = styled.button`
  position: relative;
  min-width: 150px;
  margin: 8px;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  line-height: 1.5;
  border-radius: 5px;
  color: #fff;
  overflow: hidden;
  user-select: none;
  border: none;
  outline: none;
  cursor: pointer;
  ${({size}) => {
    switch(size){
    case 'sm': 
    return 'padding: 10px 18px; font-size: 14px';
    case 'md': 
    return 'padding: 13px 22px; font-size: 16px';
    case 'lg': 
    return 'padding: 15px 26px; font-size: 18px';
    }
  }};
  background: ${({color}) => color ? color : '#1976d2'};
`;

const fadeIn  = keyframes`
  0% {
    opacity: 0;
  }
  25% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: scale(1);
  }
`;

const Ripple = styled.span`
  display: block;
  width: 0;
  height: 0;
  left: 0;
  top: 0;
  position: absolute;
  border-radius: 100%;
  background: rgba(255,255,255,0.35);
  transform-origin: center;
  transform: scale(0);
  opacity: 0;
  animation: ${fadeIn} 0.5s;
`;

const SPEED = 500;
let i = 0;

const RippleButton = ({size = 'md', color, children, onClick, ...props}) => {
  const [ripple, setRipple] = useState([]);
  const button = useRef();
  const handleClick = ({clientX, clientY}) => {
    onClick?.();
    const {width, left, top} = button.current.getBoundingClientRect();
    const circleProperties = {
      key: `circle-${i++}`,
      width: width*2,
      height: width*2,
      left: (clientX-left)-(width*2/2),
      top: (clientY-top)-(width*2/2),
    }
    setRipple(circle => [...circle, circleProperties]);
    setTimeout(setRipple, SPEED, prev => prev.slice(1));
  }

  return <Button ref={button} size={size} color={color} onClick={handleClick} {...props}>
    <span>{children}</span>
    {ripple.map(({key, ...styleProperties}) => 
      <Ripple key={key} style={styleProperties}></Ripple>
    )}
  </Button>
}

export default RippleButton;