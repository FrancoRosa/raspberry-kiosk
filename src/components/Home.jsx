import { connect } from 'react-redux';
import React, { useState } from 'react';
import useKey from '../js/useKey';
import Icon from './Icon';
import { setControl } from '../actions';

const Home  = ({ setControl }) => {
  const links = 3
  const [count, setCount] = useState(0);

  const nextItem = () => {
    setControl('d');
    if (count < links - 1) setCount(count + 1);
  }
  
  const prevItem = () => {
    setControl('a');
    if (count > 0) setCount(count - 1);
  }

  const selectItem = () => {
    setControl('p');
    document.querySelector('.selected').parentElement.click();
  }
  
  useKey("KeyA", prevItem);
  useKey("KeyD", nextItem);
  useKey("KeyP", selectItem);
  
  useKey("KeyO", () => setControl('o'));
  useKey("KeyW", () => setControl('w'));
  useKey("KeyS", () => setControl('s'));

  return (
    <div className="home">
      <Icon selected={0 === count} category="pdf" />
      <Icon selected={1 === count} category="fig" />
      <Icon selected={2 === count} category="vid" />
    </div>
  );
}


const mapDispatchToProps = dispatch => ({
  setControl: control => dispatch(setControl(control)),
});

export default connect(null,mapDispatchToProps)(Home);

