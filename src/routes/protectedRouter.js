import { lazy } from "react";

import { DateFromTodayProvider } from "../context/DateFromTodayProvider";

const Layout = lazy(() => import("../components/Layout/Layout"));
const ProtectedRoutes = lazy(() => import("../components/ProtectedRoutes"));
const Dashboard = lazy(() => import("../pages/Dashboard"));
const About = lazy(() => import("../pages/About"));
const DateFromToday = lazy(() => import("../pages/DateFromToday"));
const Contact = lazy(() => import("../pages/Contact"));

export const PROTECTED_PATH = {
	DASHBOARD: "/dashboard",
	ABOUT: "/about",
	DATE_FROM_TODAY: "/date-from-today",
	CONTACT_US: "/contact-us",
};

const ErrorEle = <div>Oops! There was an error.</div>;

export const PROTECTED_ROUTES = [
	{
		element: (
			<ProtectedRoutes>
				<Layout />
			</ProtectedRoutes>
		),
		children: [
			{
				path: PROTECTED_PATH.DASHBOARD,
				element: <Dashboard />,
				errorElement: ErrorEle,
			},
			{
				path: PROTECTED_PATH.ABOUT,
				element: <About />,
				errorElement: ErrorEle,
			},
			{
				path: PROTECTED_PATH.DATE_FROM_TODAY,
				name: "Date from today page",
				element: (
					<DateFromTodayProvider>
						<DateFromToday />
					</DateFromTodayProvider>
				),
			},
			{
				path: PROTECTED_PATH.CONTACT_US,
				name: "Contact us page",
				element: <Contact />,
			},
		],
	},
];
