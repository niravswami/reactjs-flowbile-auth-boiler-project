import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import isTokenValid from "../helpers/isTokenValid";
import { GUEST_ROUTES } from "../routes/guestRoutes";

export default function useRedirectToLoginPageIfNotAuthenticated() {
	const navigate = useNavigate();
	const [isChecking, setIsChecking] = useState(true);

	useEffect(() => {
		async function check() {
			// using promise to avoid batching of setIsChecking
			Promise.resolve().then(() => setIsChecking(true));
			// await new Promise((resolve) => setTimeout(() => resolve(), 5000));
			try {
				const isValid = await isTokenValid(localStorage.getItem("token"));
				if (!isValid) {
					navigate(GUEST_ROUTES.LOGIN);
				}
			} catch (error) {
				console.error(error);
			} finally {
				console.log("final");
				Promise.resolve().then(() => setIsChecking(false));
			}
		}
		check();
	}, [navigate]);

	return { isChecking };
}
