import baseUrl from "configs/api/url";
import ApiRequest from "configs/api/config";

const API = {};

// Auth
API.login = ApiRequest.get(baseUrl.auth.login);

// Customer
API.postCustomer = ApiRequest.post(baseUrl.customer);
API.getCustomer = ApiRequest.get(baseUrl.customer);
API.deleteCustomer = ApiRequest.delete(baseUrl.customer);
API.patchCustomer = ApiRequest.patch(baseUrl.customer);

// Order
API.getOrder = ApiRequest.get(baseUrl.order);

// Supplier
API.getSupplier = ApiRequest.get(baseUrl.supplier);
API.postSupplier = ApiRequest.post(baseUrl.supplier);
API.deleteSupplier = ApiRequest.delete(baseUrl.supplier);
API.patchSupplier = ApiRequest.patch(baseUrl.supplier);


export default API;
