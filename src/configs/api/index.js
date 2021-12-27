import baseUrl from "configs/api/url";
import ApiRequest from "configs/api/config";

const API = {};

// Auth
API.login = ApiRequest.post(baseUrl.auth.login);

// Customer
API.postCustomer = ApiRequest.post(baseUrl.customer);
API.getCustomer = ApiRequest.get(baseUrl.customer);
API.deleteCustomer = ApiRequest.delete(baseUrl.customer);
API.patchCustomer = ApiRequest.patch(baseUrl.customer);

// Order
API.getOrder = ApiRequest.get(baseUrl.order);


export default API;
