import { API } from 'configs';
import { handleAsync } from 'utils';
import { store, getOrder } from 'modules';

const { dispatch } = store;

export const getOrders = async (payload = {}) => {
    const [res, err] = await handleAsync(API.getOrder(payload));
    if (err) {
        throw err;
    }

    const data = res.axiosResponse.data;

    dispatch(getOrder(data));
    return data;
};