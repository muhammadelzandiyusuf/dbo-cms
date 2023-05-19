import actionType from "./actionType";
import { updateObject } from "utils";

const initialState = {
    customers: [],
    list: []
};

const getCustomer = (state, action) => {
    return updateObject(state, {
        ...state,
        customers: action.data,
        list: action.data
    });
};

const searchCustomer = (state, action) => {
    const originalList = state.list;
    const search = action.data.toLowerCase();
    const searchList = originalList.filter((row) => (
        (row.firstName.toLowerCase().indexOf(search) > -1 || row.lastName.toLowerCase().indexOf(search) > -1)
    ));
    return updateObject(state, {
        ...state,
        customers: searchList
    });
};

const customerReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.GET_CUSTOMER: return getCustomer(state, action);
        case actionType.SEARCH_CUSTOMER: return searchCustomer(state, action);
        default: return state;
    }
};

export default customerReducer;