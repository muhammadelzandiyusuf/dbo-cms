import actionType from "./actionType";

export const getCustomer = (customer) => ({
    type: actionType.GET_CUSTOMER,
    data: customer
});

export const postCustomer = (customer) => ({
    type: actionType.POST_CUSTOMER,
    data: customer
});

export const deleteCustomer = (customer) => ({
    type: actionType.DELETE_CUSTOMER,
    data: customer
});

export const updateCustomer = (customer) => ({
    type: actionType.UPDATE_CUSTOMER,
    data: customer
});

export const searchCustomer = (customer) => ({
    type: actionType.SEARCH_CUSTOMER,
    data: customer
});