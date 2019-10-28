import { FETCH_USERS , NEW_USER } from "../actions/types";

const initialState = {
    items : [],
    item : {}
}

export default function (state = initialState ,action) {
    switch (action.types) {
        case FETCH_USERS:
            return {
                ...state,
                items: action.payload
            }
        default:
            return state;
    }
}