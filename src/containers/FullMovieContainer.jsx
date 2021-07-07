import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import FullMovieComponent from "../components/FullMovieComponent";
import {getFullMovieInfo} from "../store/actions/fullInfoMovieAction";
import isEmpty from "lodash/isEmpty";

const FullMovieContainer = () => {
        const {app: {fullMovie}} = useSelector((state) => state)
        const dispatch = useDispatch();
        const {id} = useParams();

        useEffect(() => {
            dispatch(getFullMovieInfo(id));
        }, []);

        return (
            <>
                {
                    !isEmpty(fullMovie) ?
                        <FullMovieComponent fullMovie={fullMovie}/> :
                        <h1>Movie has gone</h1>
                }
            </>
        );
    }
;

export default FullMovieContainer;