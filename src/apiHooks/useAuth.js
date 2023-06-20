import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { PROTECTED_PATH } from "../routes/protectedRouter";
import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { BACKEND_API_URL_V1 } from "../routes/routes";
import { AUTH_PATH } from "../routes/authRoutes";

export default function useAuth() {
	const navigate = useNavigate();
	const { setAuthUser, resetAuthUser } = useContext(AuthContext);

	const signup = async ({ formValues, setErrors, ...rest }) => {
		try {
			const res = await axios.post(`${BACKEND_API_URL_V1}/signup`, formValues);

			setAuthUser({ userData: res?.data?.user, token: res?.data?.token });
			navigate(PROTECTED_PATH.HOME);
		} catch (error) {
			console.error("err", error);
			if (error?.response?.data?.errors)
				setErrors(error?.response?.data?.errors);
		} finally {
			rest?.setIsLoading?.(false);
		}
	};

	const login = async ({ credentials, setErrors, ...rest }) => {
		try {
			const res = await axios.post(`${BACKEND_API_URL_V1}/login`, credentials);

			console.log("login res", res);
			setAuthUser({ userData: res?.data?.user, token: res?.data?.token });
			navigate(PROTECTED_PATH.HOME);
		} catch (error) {
			console.error("err", error);
			if (error?.response?.data?.errors)
				setErrors(error?.response?.data?.errors);
		} finally {
			rest?.setIsLoading?.(false);
		}
	};

	const logout = async () => {
		try {
			const res = await axios.post(`${BACKEND_API_URL_V1}/logout`);
			const data = res?.data;
			console.log("res", res);
			if (data?.success) {
				resetAuthUser();
				navigate(AUTH_PATH.LOGIN, { replace: true });
			}
		} catch (error) {
			console.error("err", error);
		}
	};

	return { login, logout, signup };
}
