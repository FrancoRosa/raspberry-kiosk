import React, { useState, useEffect } from 'react';
import useKey from '../js/useKey';
import ListItem from './ListItem';
import { useHistory } from "react-router-dom";

const List = ({ category }) => {
  let links = 0;
  let prelist = [];

  const getFiles = async () =>  {
    const response = await fetch('files.json');
    const files = await response.json()
    prelist = getList(category, files);
    links = prelist.length;
    setList(prelist);
  }

  useEffect(getFiles, []);

  const history = useHistory();
  const getList = (category, files) => {
    
    switch (category) {
      case 'pdf':
        return files.pdf;
      case 'vid':
        return files.vid;
      case 'fig':
        return files.fig;
      default:
        return;
    }
  }

  const [count, setCount] = useState(0);
  const [list, setList] = useState([]);
  
  const nextItem = () => {
    if (count < links - 1) setCount(count + 1);
  }
  
  const prevItem = () => {
    if (count > 0) setCount(count - 1);
  }

  const selectItem = () => {
    document.querySelector('.selected-i').click();
  }

  const returnToMenu = () => {
    history.push('/');
  }

  useKey("KeyA", prevItem);
  useKey("KeyD", nextItem);
  useKey("KeyP", selectItem);
  useKey("KeyO", returnToMenu);

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
