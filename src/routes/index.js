import { Customer, Order, Auth, Supplier } from "pages";

const appRoutes = [
    {
        title: "Customer",
        element: <Customer />,
        path: "/customer"
    },
    {
        title: "Order",
        element: <Order />,
        path: "/order"
    },
    {
        title: "Supplier",
        element: <Supplier />,
        path: "/supplier"
    },
    {
        title: "Auth",
        element: <Auth />,
        path: "/",
        exact: true,
    }
];

export { appRoutes };
