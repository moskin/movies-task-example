import {httpClient} from "../../services/service";
import {getAllMovies} from "./getAllMoviesAction";
export const  IMPORT_MOVIE_RESPONSE = "IMPORT_MOVIE_RESPONSE";

export const importMovie = (file) => {

    let fd = new FormData()

    fd.append('movies', file)

    return (dispatch) => {
        httpClient
            .post(`movies/import`, fd)
            .then((res) => {
                if(res.data.status === 0){
                    dispatch({ type: IMPORT_MOVIE_RESPONSE, payload: res.data.error.code});
                }
            })
            .then((res) => {
                dispatch(getAllMovies());
            })
            .catch((err) => {
                console.log(err, "ERROR")
            });
    };
};