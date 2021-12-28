import appConfig from "configs/appConfigs";

export const config = appConfig;

const baseUrl = {
    customer: `${config.url.api}customer/`,
    order: `${config.url.api}order/`,
    supplier: `${config.url.api}supplier/`,
    auth: {
        login: `${config.url.api}auth/`,
    }
};

export default baseUrl;