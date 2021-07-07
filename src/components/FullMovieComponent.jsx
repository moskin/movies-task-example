import React from "react";

const FullMovieComponent = ({fullMovie}) => {

    return (
        <div className={"fullPage"}>
            <h1>Full Info about movie</h1>
            <div className={"fullMovieInfoContainer"}>
                <div>
                    <h3 className={"hoverText"}>Movie title: {fullMovie.title}</h3>
                    <h4 className={"hvr-sweep-to-top"}>Release year: {fullMovie.year}</h4>
                    <h4 className={"hvr-sweep-to-top"}>Movie format: {fullMovie.format}</h4>
                </div>
                <div>
                    <h3 className={"hoverText"}>Actors:</h3>
                    <ul>
                        {
                            fullMovie.actors.map(actor =>
                                <li className={"hvr-sweep-to-top"}>{actor.name}</li>
                            )
                        }
                    </ul>
                </div>
            </div>

        </div>

    );
};

export default FullMovieComponent;