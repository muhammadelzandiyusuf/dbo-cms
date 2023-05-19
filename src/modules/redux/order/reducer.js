import actionType from "./actionType";
import { updateObject } from "utils";

const initialState = {
    orders: [],
    list: []
};

const getOrder = (state, action) => {
    return updateObject(state, {
        ...state,
        orders: action.data,
        list: action.data
    });
};

const searchOrder = (state, action) => {
    const originalList = state.list;
    const search = action.data.toLowerCase();
    const searchList = originalList.filter((row) => (
        (row.orderNumber.toLowerCase().indexOf(search) > -1 || row.user.firstName.toLowerCase().indexOf(search) > -1
            || row.user.lastName.toLowerCase().indexOf(search) > -1 || row.status.toLowerCase().indexOf(search) > -1)
    ));
    return updateObject(state, {
        ...state,
        orders: searchList
    });
};

const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.GET_ORDER: return getOrder(state, action);
        case actionType.SEARCH_ORDER: return searchOrder(state, action);
        default: return state;
    }
};

export default orderReducer;