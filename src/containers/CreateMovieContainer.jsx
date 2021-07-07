import React from "react";
import {useDispatch} from "react-redux";
import CreateMovieComponent from "../components/CreateMovieComponent";
import {createMovieAction} from "../store/actions/createMovieAction";

const CreateMovieContainer = () => {

        const dispatch = useDispatch();

        let dataForCreateMovie = {
            "title": "",
            "year": 2021,
            "format": "DVD",
            "actors": []
        }

        const generateYears = () => {
            const minOffset = 1, maxOffset = 60;
            const thisYear = (new Date()).getFullYear();
            const yearOptions = []
            for (let i = minOffset; i <= maxOffset; i++) {
                let year = thisYear - i;
                yearOptions.push(<option value={year}>{year}</option>)
            }
            return yearOptions
        }

        const inputDataChange = (e) => {
            const name = e.target.getAttribute('name')
            if (name === 'actors') {
                dataForCreateMovie[name] = e.target.value.split(",")
            } else {
                dataForCreateMovie[name] = e.target.value
            }
        }

        const handleCreateMovie = (e) => {
            e.preventDefault();
            dispatch(createMovieAction(dataForCreateMovie));
        }

        return (
            <>
                <CreateMovieComponent handleCreateMovie={handleCreateMovie}
                                      inputDataChange={inputDataChange}
                                      generateYears={generateYears}/>
            </>
        );
    }
;

export default CreateMovieContainer;