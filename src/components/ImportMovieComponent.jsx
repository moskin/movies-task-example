import React from "react";

const ImportMovieComponent = ({changeHandler, handleSubmission, selectedFile, errorMessage}) => {

    return (
        <div>
            <h1>Import movie</h1>
            {errorMessage ?
                <p htmlFor="file">{errorMessage}</p>
                : <p></p>
            }
            <input type="file" name="file" id="file" accept=".txt"
                   onChange={changeHandler}
                   hidden
            />
            <label htmlFor="file" className={"labelUploadFile"}>{errorMessage}👉🏻 Choose file</label>
            {
                selectedFile ?
                    <button type={"submit"} onClick={handleSubmission} >Upload</button> :
                    <button disabled={true} >Upload</button>
            }
        </div>

    );
};

export default ImportMovieComponent;