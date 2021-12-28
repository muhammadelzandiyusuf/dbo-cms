import { API } from 'configs';
import { handleAsync } from 'utils';
import { store, getCustomer } from 'modules';

const { dispatch } = store;

export const getCustomers = async (payload = {}) => {
    const [res, err] = await handleAsync(API.getCustomer(payload));
    if (err) {
        throw err;
    }

    const data = res.axiosResponse.data;

    dispatch(getCustomer(data));
    return data;
};

export const deleteCustomer = async (payload = {}) => {
    const [res, err] = await handleAsync(API.getCustomer(payload));
    if (err) {
        throw err;
    }

    return res;
};

export const postCustomer = async (payload = {}) => {
    const [res, err] = await handleAsync(API.getCustomer(payload));
    if (err) {
        throw err;
    }

    return res;
};

export const updateCustomer = async (payload = {}) => {
    const [res, err] = await handleAsync(API.getCustomer(payload));
    if (err) {
        throw err;
    }

    return res;
};