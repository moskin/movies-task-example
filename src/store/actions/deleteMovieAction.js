import {httpClient} from "../../services/service";
import {getAllMovies} from "./getAllMoviesAction";
export const  DELETE_MOVIE = "DELETE_MOVIE";

export const deleteMovie = (id) => {

    return (dispatch) => {
        httpClient
            .delete(`/movies/${id}`)
            .then((res) => {
                dispatch({ type: DELETE_MOVIE, payload: res.data});
            })
            .then((res) => {
                dispatch(getAllMovies());
            })
            .catch((err) => {
                console.log(err, "ERROR")
            });
    };
};