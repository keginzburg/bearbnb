import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { logout } from '../../store/session';

const SessionLinks = () => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);

    const handleLogout = async e => {
        e.preventDefault();
        const response = await dispatch(logout());
    }

    if (sessionUser) {
        return (
            <button className='l-h4' onClick={handleLogout}>Log out</button>
        );
    } else {
        return (
            <>
                <NavLink to="/auth" className="l-h4">Sign up</NavLink>
                <NavLink to="/auth" className="l-h5">Log in</NavLink>
            </>
        );
    }
}

export default SessionLinks;