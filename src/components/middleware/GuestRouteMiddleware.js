import React from "react";
import useRedirectBackIfAuthenticated from "../../hooks/useRedirectBackIfAuthenticated";
import { Spinner } from "flowbite-react";

export default function GuestRouteMiddleware({ children }) {
	const { isChecking } = useRedirectBackIfAuthenticated();

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
