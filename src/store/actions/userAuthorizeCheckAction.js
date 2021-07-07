import {httpClient} from "../../services/service";

export const SET_USER_AUTHORIZE_DATA = "SET_USER_AUTHORIZE_DATA";
const user = {
    email: "test@gmail.com",
    name: "Petrov Petro",
    password: "super-password",
    confirmPassword: "super-password"
}

export const getAuthoriseCheck = () => {
    return (dispatch) => {
        httpClient
            .post('sessions', {
                email:user.email,
                password:user.password
            })
            .then((res) => {
                if (res.data.token) {
                    window.sessionStorage.setItem("session", res.data.token)
                    dispatch({type: SET_USER_AUTHORIZE_DATA, payload: true});
                } else {
                    httpClient.post(
                        'users',
                        user
                    ).then(res => {
                        window.sessionStorage.setItem("session", res.data.token)
                        dispatch({type: SET_USER_AUTHORIZE_DATA, payload: true});
                    }).catch(err=>console.log(err))
                }
            })
            .catch(err => console.log(err)
            );
    };
};
