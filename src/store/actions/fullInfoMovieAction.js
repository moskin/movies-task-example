import {httpClient} from "../../services/service";
export const  FULL_MOVIE = "DELETE_MOVIE";

export const getFullMovieInfo = (id) => {
    return (dispatch) => {
        httpClient
            .get(`/movies/${id}`)
            .then((res) => {
                dispatch({ type: FULL_MOVIE, payload: res.data.data});
            })
            .catch((err) => {
                console.log(err, "ERROR")
            });
    };
};