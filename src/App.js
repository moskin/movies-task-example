import React, {useEffect} from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import './App.css';
import AllMoviesContainer from "./containers/AllMoviesContainer";
import {useDispatch, useSelector} from "react-redux";
import FullMovieContainer from "./containers/FullMovieContainer";
import {getAuthoriseCheck} from "./store/actions/userAuthorizeCheckAction";

function App() {

    const {app} = useSelector((state) => state);
    const {userAuth} = app;
    const dispatch = useDispatch();

    useEffect(() => {
        if (!userAuth) {
            dispatch(getAuthoriseCheck());
        }
    }, []);

    return ( userAuth ?
        <div className={"appWrapper"}>
                <BrowserRouter>
                    <Switch>
                        <Route path={"/"} exact component={AllMoviesContainer}/>
                        <Route path={"/movie/:id"} exact component={FullMovieContainer}/>
                    </Switch>
                </BrowserRouter>
        </div> : ''
    );
}

export default App;