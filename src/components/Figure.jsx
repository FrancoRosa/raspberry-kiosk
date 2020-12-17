import useKey from '../js/useKey';
import { useParams } from 'react-router-dom';

const Figure = ({ history }) => {
  
  const returnToMenu = () => {
    history.push('/');
  }

  useKey('KeyO', returnToMenu);
  const { id } = useParams();
  return (
    <div className="container">
      <p>This is a figure</p>
      <img className="image" src={`/fig/${id}`} alt="figure"/>
    </div>
  );
}

export default Figure;
