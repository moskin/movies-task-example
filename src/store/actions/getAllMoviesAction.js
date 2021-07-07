import {httpClient} from "../../services/service";
export const  ALL_MOVIES = "ALL_MOVIES";

export const getAllMovies = () => {
    return (dispatch) => {
        httpClient
            .get("movies?sort=title")
            .then((res) => {
                dispatch({ type: ALL_MOVIES, payload: res.data.data });
            })
            .catch((err) => {
                console.log(err, "ERROR")
            });
    };
};