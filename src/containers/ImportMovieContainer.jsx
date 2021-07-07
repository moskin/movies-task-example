import React, {useState} from "react";
import ImportMovieComponent from "../components/ImportMovieComponent";
import {useDispatch, useSelector} from "react-redux";
import {importMovie} from "../store/actions/importMovieAction";

const ImportMoviesContainer = () => {
        const {app: {errorResponseFromImportedMovies}} = useSelector((state) => state)
        const dispatch = useDispatch();

        const [selectedFile, setSelectedFile] = useState();
        const [isFilePicked, setIsFilePicked] = useState(false);


        const changeHandler = (event) => {
            const file = event.target.files[0]
            setSelectedFile(file);
            if (file) {
                setIsFilePicked(true);
            } else {
                setIsFilePicked(false);
            }
        };

        const handleSubmission = async (e) => {
            dispatch(importMovie(selectedFile))
        }

        return (
            <>
                <ImportMovieComponent changeHandler={changeHandler}
                                      handleSubmission={handleSubmission}
                                      selectedFile={selectedFile}
                                      errorMessage={errorResponseFromImportedMovies}/>
            </>
        );
    }
;

export default ImportMoviesContainer;