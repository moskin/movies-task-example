import {NavLink} from "react-router-dom";
import React from "react";

const SearchComponent = ({handleDeleteMovie, movies}) => {

    return (
        <>
            <h2>Result</h2>
            <div className={"generalWrapper"}>
                {movies.map(movie => (
                    <ul className={"movieCard"}>
                        <li>
                            <h3>{movie.title}</h3>
                            <div className={"cardInfo"}>
                                <h4>{movie.year}</h4>
                                <h4>{movie.format}</h4>
                            </div>

                        </li>
                        <div className={"movieCardButtons"}>
                            <NavLink to={"/movie/" + movie.id}>
                                <button data-id={movie.id}>More info</button>
                            </NavLink>
                            <button data-id={movie.id} onClick={handleDeleteMovie}>Delete film</button>
                        </div>
                    </ul>
                ))}
            </div>
        </>
    );
};

export default SearchComponent;