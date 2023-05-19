import { API } from 'configs';
import { handleAsync } from 'utils';
import { store, getSupplier } from 'modules';

const { dispatch } = store;

export const getSuppliers = async (payload = {}) => {
    const [res, err] = await handleAsync(API.getSupplier(payload));
    if (err) {
        throw err;
    }

    const data = res.axiosResponse.data;

    dispatch(getSupplier(data));
    return data;
};

export const deleteSupplier = async (payload = {}) => {
    const [res, err] = await handleAsync(API.getSupplier(payload));
    if (err) {
        throw err;
    }

    return res;
};

export const postSupplier = async (payload = {}) => {
    const [res, err] = await handleAsync(API.getSupplier(payload));
    if (err) {
        throw err;
    }

    return res;
};

export const updateSupplier = async (payload = {}) => {
    const [res, err] = await handleAsync(API.getSupplier(payload));
    if (err) {
        throw err;
    }

    return res;
};