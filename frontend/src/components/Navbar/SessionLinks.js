import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import * as sessionActions from '../../store/session';

const SessionLinks = () => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);

    const handleLogout = e => {
        e.preventDefault();
        dispatch(sessionActions.logout());
    }

    if (sessionUser) {
        return (
            <>
                <span className='l-h5 session welcome'>Welcome {sessionUser.fName + " " + sessionUser.lName}!</span> 
                <button className='l-h4 session' onClick={handleLogout}>Log out</button>
            </>
        );
    } else {
        return (
            <>
                <NavLink to="/auth" className="l-h4 session">Sign up</NavLink>
                <NavLink to="/auth" className="l-h4 session">Log in</NavLink>
            </>
        );
    }
}

export default SessionLinks;