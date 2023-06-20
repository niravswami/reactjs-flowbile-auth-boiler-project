import React, { useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GUEST_ROUTES } from "../routes/guestRoutes";
import isTokenValid from "../helpers/isTokenValid";

export default function ProtectedRoutes({ children }) {
	const navigate = useNavigate();

	useLayoutEffect(() => {
		async function check() {
			try {
				const isValid = await isTokenValid(localStorage.getItem("token"));
				if (!isValid) {
					navigate(GUEST_ROUTES.LOGIN);
				}
			} catch (error) {
				console.error(error);
			}
		}
		check();
	}, [navigate]);

	return <div>{children}</div>;
}
