import { Route } from "react-router-dom";

import Navbar from "../Navbar";
import ListingsIndex from "../Listings";
import AuthFormPage from "../AuthFormPage";

const Feed = () => {
    return (
        <>
            <Navbar />
            <Route path="/">
                <ListingsIndex />
            </Route>
            <Route path="/auth">
                <AuthFormPage />
            </Route>
        </>
    );
}

export default Feed;