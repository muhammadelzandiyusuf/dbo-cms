import actionType from "./actionType";

export const getOrder = (order) => ({
    type: actionType.GET_ORDER,
    data: order
});

export const searchOrder = (order) => ({
    type: actionType.SEARCH_ORDER,
    data: order
});
