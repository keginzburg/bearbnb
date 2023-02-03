import { useState } from "react";

const LoginFormPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div>
            <form>
                <label htmlFor="email">Email</label>
                <input type="text" id="email"  value={email} onChange={e => setEmail(e.target.value)}/>

                <label htmlFor="password">Password</label>
                <input type="password" id="password"  value={password} onChange={e => setPassword(e.target.value)}/>

                <input type="submit" value="Log In" />
            </form>
        </div>    
    );
};

export default LoginFormPage;