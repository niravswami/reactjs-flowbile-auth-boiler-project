import React, { lazy } from "react";
import GuestRouteMiddleware from "../components/middleware/GuestRouteMiddleware";

const GuestLayout = lazy(() =>
	import("../components/Layout/GuestLayout/GuestLayout")
);
const Login = lazy(() => import("../pages/Auth/Login"));
const Register = lazy(() => import("../pages/Auth/Register"));

const ErrorEle = <div>Oops! There was an error.</div>;

export const AUTH_PATH = {
	LOGIN: "/login",
	REGISTER: "/signup",
	FORGOT_PASSWORD: "/forgot-password",
};

export const AUTH_ROUTES = [
	{
		element: (
			<GuestRouteMiddleware>
				<GuestLayout />
			</GuestRouteMiddleware>
		),
		children: [
			{
				element: <Login />,
				path: AUTH_PATH.LOGIN,
				errorElement: ErrorEle,
			},
			{
				element: <Register />,
				path: AUTH_PATH.REGISTER,
				errorElement: ErrorEle,
			},
		],
	},
];
