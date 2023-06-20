import { lazy } from "react";

const PageNotFound = lazy(() => import("../pages/Error/PageNotFound"));

export const ERROR_ROUTER = [
	{
		path: "*",
		element: <PageNotFound />,
		errorElement: <div>Oops! There was an error.</div>,
	},
];
