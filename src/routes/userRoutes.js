import { lazy } from "react";
import Layout from "../components/Layout/Layout";
import ProtectedRoutes from "../components/ProtectedRoutes";

const Profile = lazy(() => "../pages/Profile/Profile");
const ProfileSettings = lazy(() => "../pages/Profile/ProfileSettings");

export const USER_PATH = {
	PROFILE: "/profile",
	PROFILE_SETTING: "/profile/setting",
};

const ErrorEle = <div>Oops! There was an error.</div>;

export const USER_ROUTES = [
	{
		element: (
			<ProtectedRoutes>
				<Layout />
			</ProtectedRoutes>
		),
		children: [
			{
				path: USER_PATH.PROFILE,
				element: <Profile />,
				errorElement: ErrorEle,
			},
			{
				path: USER_PATH.PROFILE_SETTING,
				element: <ProfileSettings />,
				errorElement: ErrorEle,
			},
		],
	},
];
