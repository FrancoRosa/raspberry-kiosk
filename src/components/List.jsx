import React, { useState } from 'react';
import useKey from '../js/useKey';
import ListItem from './ListItem';
import { useHistory } from "react-router-dom";

const List = ({ category }) => {
  const history = useHistory();
  const [count, setCount] = useState(0);
  const [list, setList] = useState([]);
  const [flag, setFlag] = useState(false);
  const [links, setLinks] = useState(0);

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

  const getFiles = async () =>  {
    if (!flag) {
      const response = await fetch('files.json');
      const files = await response.json()
      setList(getList(category, files));
      setLinks(list.length);
      setFlag(true);
    }
  }

  getFiles();

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
