import actionType from "./actionType";

export const getSupplier = (customer) => ({
    type: actionType.GET_SUPPLIER,
    data: customer
});

export const postSupplier = (customer) => ({
    type: actionType.POST_SUPPLIER,
    data: customer
});

export const deleteSupplier = (customer) => ({
    type: actionType.DELETE_SUPPLIER,
    data: customer
});

export const updateSupplier = (customer) => ({
    type: actionType.UPDATE_SUPPLIER,
    data: customer
});

export const searchSupplier = (customer) => ({
    type: actionType.SEARCH_SUPPLIER,
    data: customer
});