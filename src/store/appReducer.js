import {ALL_MOVIES} from "./actions/getAllMoviesAction";
import {SEARCH_MOVIE_BY_ACTOR_OR_TITLE} from "./actions/searchMovieAction";
import {IMPORT_MOVIE_RESPONSE} from "./actions/importMovieAction";
import {FULL_MOVIE} from "./actions/fullInfoMovieAction";
import {SET_USER_AUTHORIZE_DATA} from "./actions/userAuthorizeCheckAction"

const initStore = {
    allMovies: [],
    searchMovie: [],
    errorResponseFromImportedMovies: "",
    fullMovie: [],
    userAuth: false
};

export const appReducer = (initialState = initStore, action) => {
    switch (action.type) {
        case ALL_MOVIES:
            return {...initialState, allMovies: action.payload};
        case SEARCH_MOVIE_BY_ACTOR_OR_TITLE:
            return {...initialState, searchMovie: action.payload};
        case IMPORT_MOVIE_RESPONSE:
            return {...initialState, errorResponseFromImportedMovies: action.payload};
        case FULL_MOVIE:
            return {...initialState, fullMovie: action.payload};
        case SET_USER_AUTHORIZE_DATA:
            return {...initialState, userAuth: action.payload};
        default:
            return initialState;
    }
};