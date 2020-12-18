import ReactPlayer from 'react-player';
import useKey from '../js/useKey';
import { useParams } from 'react-router-dom';

const Video = ({ history }) => {
  
  const returnToMenu = () => {
    history.push('/');
  }
  
  useKey("KeyO", returnToMenu);

  const {id} = useParams();

  return (
    <div className="container">
      <p>This is a video</p>
      <ReactPlayer width="840px"
        url={`/vid/${id}`}
        playing={true}
        controls
      />
    </div>
  );
}

export default Video;
