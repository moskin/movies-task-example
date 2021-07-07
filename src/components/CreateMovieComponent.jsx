import React from "react";


const CreateMovieComponent = ({handleCreateMovie, generateYears, inputDataChange}) => {

    return (
        <div>
            <h1>Create movie</h1>
            <form className={"createForm"} onSubmit={handleCreateMovie}>
                <label for={"title"}>Title</label>
                <input type="text" name="title" id="title" required={true} onChange={inputDataChange}/>

                <select id={"year"} name={"year"} onChange={inputDataChange}>
                    <option disabled>Choose Year</option>
                    <option defaultValue={"2021"}>2021</option>
                    {generateYears()}
                </select>

                <select id={"format"} name={"format"} onChange={inputDataChange}>
                    <option disabled>Choose Format</option>
                    <option defaultValue={"DVD"}>DVD</option>
                    <option value={"VHS"}>VHS</option>
                    <option value={"Blue-ray"}>Blue-ray</option>
                </select>

                <label htmlFor={"actors"}>Actors (insert name of actors separating by commas)</label>
                <input type="text" name="actors" id="actors" required={true} onChange={inputDataChange}/>
                <button type={"submit"}>Create</button>
            </form>
        </div>
    );
};

export default CreateMovieComponent;