import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import * as sessionActions from "../../store/session";
import csrfFetch from "../../store/csrf";

import './AuthFormPage.css';

const AuthFormPage = () => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const history = useHistory();

    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [hasSubmittedEmail, setHasSubmittedEmail] = useState(false);
    const [errors, setErrors] = useState([]);
    const [login, setLogin] = useState(false);
    const [signup, setSignup] = useState(false);

    useEffect(() => {
        const errors = [];
        const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

        if (email.length === 0) {
            errors.push("Email is required.");
        } else if (regex.test(email) === false) {
            errors.push("Enter a valid email.");
        }
        setErrors(errors);
    }, [email])

    const handleEmail = async e => {
        e.preventDefault();
        setHasSubmittedEmail(true);
        if (errors.length > 0) return;   

        const response = await csrfFetch("/api/find", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email})
        });

        if (response.ok) {
            const data = await response.json();
            if (data.user) setLogin(true);
            else setSignup(true);
        }
        setErrors([]);
    }

    const handleLogin = async e => {
        e.preventDefault();
        const user = {
            email,
            password
        }

        return dispatch(sessionActions.login(user))
            .catch(async response => {
                let data;
                try {
                    data = await response.clone().json();
                } catch {
                    data = await response.text();
                }
                if (data?.errors) setErrors(data.errors);
            });
    }

    const handleSignup = async e => {
        e.preventDefault();
        const newUser = {
            fname,
            lname,
            email,
            password
        }

        return dispatch(sessionActions.signup(newUser))
            .catch(async response => {
                let data;
                try {
                    data = await response.clone().json();
                } catch {
                    data = await response.text();
                }
                if (data?.errors) setErrors(data.errors);
            });
    }

    const handleDemo = async e => {
        e.preventDefault();
        const demo = {
            email: 'demo_user@aa.io',
            password: 'password'
        }

        return dispatch(sessionActions.login(demo))
            .catch(async response => {
                let data;
                try {
                    data = await response.clone().json();
                } catch {
                    data = await response.text();
                }
                if (data?.errors) setErrors(data.errors);
            });
    }

    const handleReturn = async e => {
        e.preventDefault();
        await setLogin(false);
        await setSignup(false);
        await setFname("");
        await setLname("");
        await setEmail("");
        await setPassword("");
        await setHasSubmittedEmail(false);
        await setErrors([]);
        history.push("/")
    }

    const renderError = field => {
        if (field === 'Name') return (
            <ul className="auth-errors">
                {errors.map(error => {
                    if (error.includes("L name")) return (
                        <div key={error} className="auth-error">
                            <div className="error-icon"><i className="fa-solid fa-circle-exclamation"></i></div>
                            <li className='auth-error-message'>Last name is required</li>
                        </div>
                    );
                    else if (error.includes("F name")) return (
                        <div key={error} className="auth-error">
                            <div className="error-icon"><i className="fa-solid fa-circle-exclamation"></i></div>
                            <li className='auth-error-message'>First name is required</li>
                        </div>)
                    else return null;
                })}
            </ul>
        )
        else return (
            <ul className="auth-errors">
                {errors.map(error => {
                    if (error.includes(`${field}`)) return (
                        <div key={error} className="auth-error">
                            <div className="error-icon"><i className="fa-solid fa-circle-exclamation"></i></div>
                            <li className='auth-error-message'>{error}</li>
                        </div>
                    );
                    else return null;
                })}
            </ul>
        )
    }

    if (sessionUser) return <Redirect to="/" />

    if (login) return (
        <div className='auth-form-modal-bg'>
            <div className="login-form-modal" >
                <div className="auth-header">
                    <div className="exit-icon" onClick={handleReturn}>
                        <i class="fa-solid fa-chevron-left"></i>
                    </div>
                    <h1 className="login-h1">Log in</h1>
                </div>
                <form className="auth-form" onSubmit={handleLogin}>

                    <input className={`${errors.length > 0 ? 'email-error' : null}`} type="password" id="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password"/>
                    <ul className="auth-errors">
                        {errors.map(error => {
                            return <div className="auth-error">
                                <div className="error-icon"><i className="fa-solid fa-circle-exclamation"></i></div>
                                <li key={error} className='auth-error-message'>{error}</li>
                            </div>
                        })}
                    </ul>

                    <input type="submit" value="Log in" />
                </form>
            </div>
        </div>
    )

    if (signup) return (
        <div className="auth-form-modal-bg">
            <div className="login-form-modal" >
                <div className="auth-header">
                    <div className="exit-icon" onClick={handleReturn}>
                        <i class="fa-solid fa-chevron-left"></i>
                    </div>
                    <h1 className="auth-h1">Finish signing up</h1>
                </div>
                <form className="auth-form" onSubmit={handleSignup}>
                    <input className={`${errors.length > 0 ? 'email-error' : null} fname`} type="text" id="fname" value={fname} onChange={e => setFname(e.target.value)} placeholder="First name"/>

                    <input className={`${errors.length > 0 ? 'email-error' : null} lname`} type="text" id="lname" value={lname} onChange={e => setLname(e.target.value)} placeholder="Last name" />
                    {renderError('Name')}

                    <input className={`${errors.some(error => error.includes("Email")) ? 'email-error' : null}`} type="text" id="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
                    {renderError('Email')}

                    <input className={`${errors.some(error => error.includes("Password")) ? 'email-error' : null}`} type="password" id="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
                    {renderError('Password')}

                    <p className="terms-conditions">By selecting <span>Agree and continue</span>, I agree to Bearbnb's Terms of Service, Payments Terms of Service, and Nondiscrimination Policy and acknowledge the Privacy Policy.</p>

                    <input type="submit" value="Agree and continue" />
                </form>
            </div>
        </div>
    )

    return (
        <div className="auth-form-modal-bg" >
            <div className="auth-form-modal">
                <div className="auth-header">
                    <div className="exit-icon" onClick={handleReturn}>
                        <i className="fa-solid fa-xmark"></i>
                    </div>
                    <h1 className="auth-h1">Log in or sign up</h1>
                </div>
                <form className="auth-form" onSubmit={handleEmail}>
                    <h2>Welcome to Bearbnb</h2>
                    <input className={`${errors.length > 0 && hasSubmittedEmail ? 'email-error' : null}`} type="text" id="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email"/>
                    <ul className="auth-errors">
                        {hasSubmittedEmail && errors.map(error => {
                        return <div className="auth-error">
                                <div className="error-icon"><i className="fa-solid fa-circle-exclamation"></i></div>
                                <li key={error} className='auth-error-message'>{error}</li>
                            </div>
                        })}
                    </ul>

                    <input type="submit" value="Continue" />
                    <input type="button" value="Demo User"  onClick={handleDemo} />
                </form>
            </div>
        </div>    
    );
};

export default AuthFormPage;