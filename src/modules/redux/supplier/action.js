import actionType from "./actionType";

export const getSupplier = (supplier) => ({
    type: actionType.GET_SUPPLIER,
    data: supplier
});

export const postSupplier = (supplier) => ({
    type: actionType.POST_SUPPLIER,
    data: supplier
});

export const deleteSupplier = (supplier) => ({
    type: actionType.DELETE_SUPPLIER,
    data: supplier
});

export const updateSupplier = (supplier) => ({
    type: actionType.UPDATE_SUPPLIER,
    data: supplier
});

export const searchSupplier = (supplier) => ({
    type: actionType.SEARCH_SUPPLIER,
    data: supplier
});