## About project
This project has been developed with the help of webbylabhub [dockerized api](https://hub.docker.com/r/webbylabhub/movies).

## Usage example
Using this project, you can view, delete existing movies, add new items to the base one-by-one and/or upload a film bundle using a file (.txt format). You may find my template `test.txt` file as an example by the following project path: `root directory => src => supplements => test.txt`.

## Demo
![MovieApp](https://user-images.githubusercontent.com/54911340/124720897-48938e80-df11-11eb-846d-c588f168f40f.gif)

## Project Installation
Make sure all npm packages are installed on your computer. Otherwise, perform the following steps: 
### `git clone https://github.com/moskin/movies-task-example.git`
### `npm install`
### `npm start`

### Notes
Everyone who uses this project and wants to upload the external `.txt` file with movies data needs to have a valid Authorization token. This project was developed with the authorization check. Since the hardcoded user exists in the project (and does not have a token), you may have an issue while attempting the first file upload. However, everything will work as it should when you add a file the second time - a new Authorization token will be created for you.

Enjoy!



