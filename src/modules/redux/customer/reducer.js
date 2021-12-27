import actionType from "./actionType";
import { updateObject } from "utils";

const initialState = {
    customers: [],
};

const getCustomer = (state, action) => {
    return updateObject(state, {
        customers: action.data
    });
};

const customerReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.GET_CUSTOMER: return getCustomer(state, action);
        default: return state;
    }
};

export default customerReducer;