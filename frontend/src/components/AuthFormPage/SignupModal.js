import { useState } from 'react';

const SignupModal = () => {
    return (
        <div className="login-form-container" >
            <div>
                {"<"}
                <h1>Finish signin up</h1>
            </div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="fname">First name</label>
                <input type="text" id="fname" value={fname} onChange={e => setFname(e.target.value)} />

                <label htmlFor="password">Password</label>
                <input type="password" id="password" value={password} onChange={e => setPassword(e.target.value)} />
                <ul>
                    {errors.map(error => <li key={error}>{error}</li>)}
                </ul>

                <input type="submit" value="Log in" />
            </form>
        </div>
    );
}

export default SignupModal;