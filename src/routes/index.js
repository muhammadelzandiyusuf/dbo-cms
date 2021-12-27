import { Customer, Order, Auth } from "pages";

const appRoutes = [
    {
        name: "Customer",
        element: <Customer />,
        path: "/customer"
    },
    {
        name: "Order",
        element: <Order />,
        path: "/order"
    },
    {
        name: "Auth",
        element: <Auth />,
        path: "/",
        exact: true,
    }
];

export { appRoutes };
