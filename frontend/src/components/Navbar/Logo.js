import { useHistory } from 'react-router-dom';

import "./Logo.css";

const Logo = () => {
    const history = useHistory();

    const visitRoot = e => {
        history.push("/");
    }

    return (
        <div className="logo-box" onClick={visitRoot}>
            <div className='small-logo'>
                <i className="fa-brands fa-airbnb"></i>
            </div>
            <h1 className="text-logo">bearbnb</h1>
        </div>
    )
}

export default Logo;