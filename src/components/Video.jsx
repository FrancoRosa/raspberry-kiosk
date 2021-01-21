import ReactPlayer from 'react-player';
import useKey from '../js/useKey';
import { useParams } from 'react-router-dom';

const Video = ({ history }) => {
  
  const returnToMenu = () => {
    history.push('/vids');
  }
  
  useKey("KeyO", returnToMenu);

  const {id} = useParams();

  return (
    <div className="container">
      <ReactPlayer width="800px"
        url={`/vid/${id}`}
        playing={true}
        controls
      />
    </div>
  );
}

export default Video;
