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

const ListItem = ({category, selected, file}) => {
  return (
    <Link to={`/${category}/${file}`} className={selected ? 'selected-i' : 'not-selected-i'}>
      {categoryIcon(category, selected ? 'selected-i' : 'not-selected-i')}
      <span>{file}</span>
    </Link>
  );
};

export default ListItem;