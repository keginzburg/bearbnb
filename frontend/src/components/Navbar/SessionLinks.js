import { useDispatch, useSelector } from 'react-redux';
import { openAuthModal } from '../../store/uiReducer';
import * as sessionActions from '../../store/session';

const SessionLinks = () => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);

    const handleLogout = e => {
        e.preventDefault();
        dispatch(sessionActions.logout());
    }

    const handleAuth = e => {
        e.preventDefault();
        dispatch(openAuthModal());
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
                <button className="l-h4 session" onClick={handleAuth}>Sign up</button>
                <button className="l-h4 session" onClick={handleAuth}>Log in</button>
            </>
        );
    }
}

export default SessionLinks;