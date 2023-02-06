import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { login, signup } from "../../store/session";
import csrfFetch from "../../store/csrf";

const AuthFormPage = () => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);

    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [hasSubmittedEmail, setHasSubmittedEmail] = useState(false);
    // const [hasSubmitted, setHasSubmitted] = useState(false);
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
    }

    const handleBack = e => {
        e.preventDefault();
        setFname("");
        setLname("");
        setEmail("");
        setPassword("");
        setHasSubmittedEmail(false);
    }

    const handleLogin = async e => {
        e.preventDefault();
        const user = {
            email,
            password
        }

        return dispatch(login(user))
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

        return dispatch(signup(newUser))
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

    if (sessionUser) return <Redirect to="/" />

    if (login) return (
        <div className="login-form-container" >
            <div>
                {"<"}
                <h1>Log in</h1>
            </div>
            <form onSubmit={handleLogin}>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" value={password} onChange={e => setPassword(e.target.value)} />
                <ul>
                    {errors.map(error => <li key={error}>{error}</li>)}
                </ul>

                <input type="submit" value="Log in" />
            </form>
        </div>
    )
    if (signup) return (
        <div className="login-form-container" >
            <div>
                {"<"}
                <h1>Finish signing up</h1>
            </div>
            <form onSubmit={handleSignup}>
                <label htmlFor="fname">First name</label>
                <input type="text" id="fname" value={fname} onChange={e => setFname(e.target.value) } />

                <label htmlFor="lname">Last name</label>
                <input type="text" id="lname" value={lname} onChange={e => setLname(e.target.value) } />

                <label htmlFor="email">Email</label>
                <input type="text" id="email" value={email} onChange={e => setEmail(e.target.value)} />

                <label htmlFor="password">Password</label>
                <input type="password" id="password" value={password} onChange={e => setPassword(e.target.value)} />
                <ul>
                    {errors.map(error => <li key={error}>{error}</li>)}
                </ul>

                <p>By selecting <span>Agree and continue</span>, I agree to Bearbnb's Terms of Service, Payments Terms of Service, and Nondiscrimination Policy and acknowledge the Privacy Policy</p>

                <input type="submit" value="Agree and continue" />
            </form>
        </div>
    )

    return (
        <div className="login-form-container" >
            <div>
                X
                <h1>Log in or sign up</h1>
            </div>
            <form onSubmit={handleEmail}>
                <h2>Welcome to Bearbnb</h2>
                <label htmlFor="email">Email</label>
                <input type="text" id="email"  value={email} onChange={e => setEmail(e.target.value)}/>
                <ul>
                    {hasSubmittedEmail && errors.map(error => <li key={error}>{error}</li>)}
                </ul>

                <input type="submit" value="Continue" />
            </form>
        </div>    
    );
};

export default AuthFormPage;