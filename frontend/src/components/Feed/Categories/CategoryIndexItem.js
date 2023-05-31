import { Link } from 'react-router-dom';

const CategoryIndexItem = ({category, icon}) => {

    // debugger

    return (
        <li className="cat-idx-item-container">
            <Link className='cat-idx-item' to={`/?category=${category.toLowerCase()}`}>
                <img src={icon} alt={icon} className='cat-idx-item-icon'></img>
                <span className='font-var2'>{category}</span>
            </Link>
        </li>
    );
};

export default CategoryIndexItem;