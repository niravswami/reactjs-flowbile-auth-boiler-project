import React, { lazy } from "react";
import GuestRouteMiddleware from "../components/middleware/GuestRouteMiddleware";

const GuestLayout = lazy(() =>
	import("../components/Layout/GuestLayout/GuestLayout")
);
const Login = lazy(() => import("../pages/Auth/Login"));
const Register = lazy(() => import("../pages/Auth/Register"));
const ForgotPassword = lazy(() => import("../pages/Auth/ForgotPassword"));
const ResetPassword = lazy(() => import("../pages/Auth/ResetPassword"));

const ErrorEle = <div>Oops! There was an error.</div>;

export const AUTH_PATH = {
	LOGIN: "/login",
	REGISTER: "/signup",
	FORGOT_PASSWORD: "/forgot-password",
	RESET_PASSWORD: "/reset-password/:resetToken",
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
			{
				element: <ForgotPassword />,
				path: AUTH_PATH.FORGOT_PASSWORD,
				errorElement: ErrorEle,
			},
			{
				element: <ResetPassword />,
				path: AUTH_PATH.RESET_PASSWORD,
				errorElement: ErrorEle,
			},
		],
	},
];
