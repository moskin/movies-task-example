import {httpClient} from "../../services/service";
export const  SEARCH_MOVIE_BY_ACTOR_OR_TITLE = "SEARCH_MOVIE_BY_ACTOR_OR_TITLE";

export const getSearchMovie = (searchValue) => {
    return (dispatch) => {
        httpClient
            .get(`movies?sort=title&search=${searchValue}`)
            .then((res) => {
                dispatch({ type: SEARCH_MOVIE_BY_ACTOR_OR_TITLE, payload: res.data.data });
            })
            .catch((err) => {
                console.log(err, "ERROR")
            });
    };
};