import React, { useState } from 'react';
import useKey from '../js/useKey';
import Icon from './Icon'


const Home  = () => {
  const links = 3
  const [count, setCount] = useState(0);

  const nextItem = () => {
    if (count < links - 1) setCount(count + 1);
  }
  
  const prevItem = () => {
    if (count > 0) setCount(count - 1);
  }

  const selectItem = () => {
    document.querySelector('.selected').parentElement.click();
  }
  
  useKey("KeyA", prevItem);
  useKey("KeyD", nextItem);
  useKey("KeyP", selectItem);

  return (
    <div className="home">
      <Icon
        selected={0 === count}
        category="vid"
        file="animation.mp4"
      />
      <Icon
        selected={1 === count}
        category="pdf"
        file="guide.pdf"
      />
      <Icon
        selected={2 === count}
        category="fig"
        file="sch.jpeg"
      />
    </div>
  );
}

export default Home;
