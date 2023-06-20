import React, { Suspense } from "react";
import { Link, Route, Routes } from "react-router-dom";
import GuestLayout from "../../components/Layout/GuestLayout/GuestLayout";
import { Navbar } from "flowbite-react";
// import ProfileSettings from "./ProfileSettings";
// import Profile from "./Profile";

const Profile = React.lazy(() => import("./Profile"));
const ProfileSettings = React.lazy(() => import("./ProfileSettings"));

export default function ProfileComp() {
	const NavbarLinkList = [
		{
			href: "/profile",
			label: "Profile",
		},
		{
			href: "/profile/settings",
			label: "settings",
		},
	];
	return (
		<>
			<GuestLayout>
				<div>
					{NavbarLinkList.map((item) => (
						<Link key={item.href} to={item.href}>
							<div>{item.label}</div>
						</Link>
					))}
				</div>
				<div>
					<Routes>
						<Route path="/" name="profile Page" element={<Profile />} />
						<Route
							path="/settings"
							name="settings Page"
							element={<ProfileSettings />}
						/>
					</Routes>
				</div>
			</GuestLayout>
		</>
	);
}
