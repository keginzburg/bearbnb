import { Switch, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Navbar from "../Navbar";
import Categories from "./Categories";
import ListingsIndex from "../Listings";
import ListingsShow from "../Listings/ListingsShow";
import AuthFormPage from "../AuthFormPage";
import NotFound from "../NotFound";
import Footer from "../Footer";

const Feed = () => {
    const modal = useSelector(state => state.ui.modal);

    return (
        <>
            {modal === "authModal" && <AuthFormPage/>}
            <Navbar />
            <Switch>
                <Route path="/listings/:id">
                    <ListingsShow />
                </Route>
                <Route exact path="/">
                    <Categories />
                    <ListingsIndex />
                </Route>
                <Route>
                    <NotFound />
                </Route>
            </Switch>
            <Footer />
        </>
    );
}

export default Feed;