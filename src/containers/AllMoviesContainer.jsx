import React, {useEffect, useState} from "react";
import AllMoviesComponent from "../components/AllMoviesComponent";
import get from "lodash/get";
import isEmpty from "lodash/isEmpty";
import {useDispatch, useSelector} from "react-redux";
import {getAllMovies} from "../store/actions/getAllMoviesAction";
import {getSearchMovie} from "../store/actions/searchMovieAction";
import ImportMovieContainer from "./ImportMovieContainer";
import {deleteMovie} from "../store/actions/deleteMovieAction";
import CreateMovieContainer from "./CreateMovieContainer";
import SearchComponent from "../components/SearchComponent";

const AllMoviesContainer = () => {
        const {app: {allMovies, searchMovie}} = useSelector((state) => state);
        const dispatch = useDispatch();
        const [isSearch, setIsSearch] = useState(false);


        useEffect(() => {
            if (!get(allMovies, "allMovies", []).length) {
                dispatch(getAllMovies());
            }
        }, [isSearch]);

        const handleSearchData = (event) => {
            const input = document.getElementById("search")
            dispatch(getSearchMovie(input.value))
            setIsSearch(!isEmpty(input.value))
        }

        const handleDeleteMovie = (e) => {
            const id = e.target.getAttribute('data-id');
            dispatch(deleteMovie(id))
        }


        return (
            <>
                <ImportMovieContainer/>
                <CreateMovieContainer/>
                <div >
                    <h1>Search here</h1>
                    <input type={"text"}
                           id={"search"}
                           placeholder={"Search movie here"}
                    />
                    <button onClick={handleSearchData}>GO</button>
                </div>
                {
                    isSearch ?
                        !isEmpty(searchMovie)
                            ? <SearchComponent movies={searchMovie}
                                               handleSearchData={handleSearchData}
                                               handleDeleteMovie={handleDeleteMovie}/>
                            : <h1>No movies</h1>
                        :
                        !isEmpty(allMovies)
                            ? <AllMoviesComponent movies={allMovies}
                                                  handleDeleteMovie={handleDeleteMovie}/>
                            : <h1>No movies</h1>
                }
            </>
        );
    }
;

export default AllMoviesContainer;