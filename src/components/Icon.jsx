import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo, faFile, faImage } from '@fortawesome/free-solid-svg-icons';

const categoryIcon = (category, mode) => {
  switch(category) {
    case 'vid':
      return <FontAwesomeIcon className={mode} icon={faVideo} />
    case 'pdf':
      return <FontAwesomeIcon className={mode} icon={faFile} />
    case 'fig':
      return <FontAwesomeIcon className={mode} icon={faImage} />
    default:
      return;
  };
};

const Icon = ({category, selected, file}) => {
  return (
    <Link to={`/${category}/${file}`}>
      {categoryIcon(category, selected ? 'selected' : 'not-selected')}
    </Link>
  );
};

export default Icon;