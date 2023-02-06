import { Route } from "react-router-dom";

import Navbar from "../Navbar";
import AuthFormPage from "../AuthFormPage";

const Feed = () => {
    return (
        <>
            <Navbar />
            <Route path="/auth">
                <AuthFormPage />
            </Route>
        </>
    );
}

export default Feed;