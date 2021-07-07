import {httpClient} from "../../services/service";
import {getAllMovies} from "./getAllMoviesAction";
export const  CREATE_MOVIE = "CREATE_MOVIE";

export const createMovieAction = (createData) => {

    return (dispatch) => {
        httpClient
            .post(`/movies`, createData)
            .then((res) => {
                dispatch({ type: CREATE_MOVIE, payload: res.data});
            })
            .then((res) => {
                dispatch(getAllMovies());
            })
            .catch((err) => {
                console.log(err, "ERROR")
            });
    };
};