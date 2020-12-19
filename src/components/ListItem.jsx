import { Link } from 'react-router-dom';

const ListItem = ({category, selected, file}) => {
  return (
    <Link to={`/${category}/${file}`} className={selected ? 'selected-i' : 'not-selected-i'}>
      <img src={`thumbs/${file}.png`} alt={`${file}`} />
    </Link>
  );
};

export default ListItem;