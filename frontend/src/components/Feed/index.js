import { Switch, Route } from "react-router-dom";

import Navbar from "../Navbar";
import Categories from "./Categories";
import ListingsIndex from "../Listings";
import ListingsShow from "../Listings/ListingsShow";
import AuthFormPage from "../AuthFormPage";

const Feed = () => {
    return (
        <>
            <Navbar />
            <Switch>
                <Route path="/listings/:id">
                    <ListingsShow />
                </Route>
                <Route path="/">
                    <Categories />
                    <ListingsIndex />
                </Route>
                <Route path="/auth">
                    <AuthFormPage />
                </Route>
            </Switch>
        </>
    );
}

export default Feed;