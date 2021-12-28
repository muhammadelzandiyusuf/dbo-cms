import { API } from 'configs';
import { handleAsync } from 'utils';

export const postLogin = async (payload = {}) => {
    const [res, err] = await handleAsync(API.login(payload));
    if (err) {
        throw err;
    }
    const data = res.axiosResponse.data;
    return data;
};
