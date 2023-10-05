import React from "react";

import { Spinner } from "flowbite-react";
import useRedirectToLoginPageIfNotAuthenticated from "../hooks/useRedirectToLoginPageIfNotAuthenticated";

export default function ProtectedRoutes({ children }) {
	const { isChecking } = useRedirectToLoginPageIfNotAuthenticated();

	return (
		<div>
			{isChecking ? (
				<div className="pt-3  h-screen flex justify-center items-center">
					<Spinner aria-label="Center-aligned spinner example" size="xl" />
				</div>
			) : (
				children
			)}
		</div>
	);
}
