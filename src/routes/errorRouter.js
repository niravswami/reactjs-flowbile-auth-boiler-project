import { lazy } from "react";
import UnauthorizedPage from "../pages/Error/UnauthorizedPage";

const PageNotFound = lazy(() => import("../pages/Error/PageNotFound"));

export const ERROR_PATH = {
	UNAUTHORIZED: "/unauthorized",
};

export const ERROR_ROUTER = [
	{
		path: ERROR_PATH.UNAUTHORIZED,
		element: <UnauthorizedPage />,
		errorElement: <div>Oops! There was an error.</div>,
	},
	{
		path: "*",
		element: <PageNotFound />,
		errorElement: <div>Oops! There was an error.</div>,
	},
];
