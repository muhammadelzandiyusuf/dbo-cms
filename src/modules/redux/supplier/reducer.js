import actionType from "./actionType";
import { updateObject } from "utils";

const initialState = {
    suppliers: [],
    list: []
};

const getSupplier = (state, action) => {
    return updateObject(state, {
        ...state,
        suppliers: action.data,
        list: action.data
    });
};

const searchSupplier = (state, action) => {
    const originalList = state.list;
    const search = action.data.toLowerCase();
    const searchList = originalList.filter((row) => (
        (row.name.toLowerCase().indexOf(search) > -1 || row.code.toLowerCase().indexOf(search) > -1)
    ));
    return updateObject(state, {
        ...state,
        suppliers: searchList
    });
};

const supplierReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.GET_SUPPLIER: return getSupplier(state, action);
        case actionType.SEARCH_SUPPLIER: return searchSupplier(state, action);
        default: return state;
    }
};

export default supplierReducer;