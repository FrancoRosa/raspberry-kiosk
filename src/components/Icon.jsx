import { Link } from 'react-router-dom';

const categoryIcon = (category, mode) => {
  switch(category) {
    case 'vid':
      return <img src="/icons/vid-icon.png" className={mode} alt="icon"/>
    case 'pdf':
      return <img src="/icons/pdf-icon.png" className={mode} alt="icon"/>
    case 'fig':
      return <img src="/icons/fig-icon.png" className={mode} alt="icon"/>
    default:
      return;
  };
};

const Icon = ({category, selected }) => {
  return (
    <Link to={`/${category}s`}>
      {categoryIcon(category, selected ? 'selected' : 'not-selected')}
    </Link>
  );
};

export default Icon;