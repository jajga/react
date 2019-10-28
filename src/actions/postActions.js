import { FETCH_USERS , NEW_USER } from "./types";

export const fetchUsers = () => dispatch => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((data) => dispatch({
                type: FETCH_USERS,
                payload:data
            }))
    }

