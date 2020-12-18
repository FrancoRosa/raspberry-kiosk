import React, { useState } from 'react';
import files from '../js/files.json';
import useKey from '../js/useKey';
import ListItem from './ListItem';

const List  = ({category}) => {
  const getList = category => {
    switch (category) {
      case 'pdf':
        return  files.pdf;
      case 'vid':
        return  files.vid;
      case 'fig':
        return  files.fig;
      default:
        return;
    }
  }
  const list = getList(category);
  const links = list.length
  const [count, setCount] = useState(0);
  
  const nextItem = () => {
    if (count < links - 1) setCount(count + 1);
  }
  
  const prevItem = () => {
    if (count > 0) setCount(count - 1);
  }

  const selectItem = () => {
    document.querySelector('.selected-i').click();
    console.log('P')
  }

  useKey("KeyW", prevItem);
  useKey("KeyS", nextItem);
  useKey("KeyP", selectItem);

  return (
    <div className="list">
      {list.map(file => <ListItem 
        category={category}
        selected={list.indexOf(file) === count}
        file={file}
        key={list.indexOf(file)}
      />)}
    </div>
  );
}

export default List;
