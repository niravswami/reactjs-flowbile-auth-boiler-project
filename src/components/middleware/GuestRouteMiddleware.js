import React, { useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";
import isTokenValid from "../../helpers/isTokenValid";

export default function GuestRouteMiddleware({ children }) {
	const navigate = useNavigate();

	useLayoutEffect(() => {
		async function check() {
			try {
				const isValid = await isTokenValid(localStorage.getItem("token"));
				if (isValid) {
					navigate(-1);
				}
			} catch (error) {
				console.error(error);
			}
		}
		check();
	}, [navigate]);

	return <div>{children}</div>;
}
