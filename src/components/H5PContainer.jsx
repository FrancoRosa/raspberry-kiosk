import { useParams } from 'react-router-dom';
import { H5P } from  'h5p-standalone'
import { useState } from 'react';

const H5PContainer = ({ history }) => {
  
  const returnToMenu = () => {
    history.push('/h5ps');
  }
  
  const {id} = useParams();

  useState(()=>{
    const el = document.getElementById('root');
    const h5pLocation = '/h5p/urbangardens.h5p';
    const h5p = new H5P(el, h5pLocation);
  },[])

  return (
    <div className="container h5p">
      
    </div>
  );
}

export default H5PContainer;
