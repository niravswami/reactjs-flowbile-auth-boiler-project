import axios from "axios";
import { useNavigate } from "react-router-dom";
import { PROTECTED_PATH } from "../routes/protectedRouter";
import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { BACKEND_API_URL_V1 } from "../routes/routes";
import { AUTH_PATH } from "../routes/authRoutes";

export default function useAuth() {
	const navigate = useNavigate();
	const { setAuthUser, resetAuthUser } = useContext(AuthContext);

	const resetuserAndNavigate = () => {
		resetAuthUser();
		navigate(AUTH_PATH.LOGIN, { replace: true });
	};

	const signup = async ({ formValues, setErrors, ...rest }) => {
		try {
			const res = await axios.post(`${BACKEND_API_URL_V1}/signup`, formValues);

			setAuthUser({ userData: res?.data?.user, token: res?.data?.token });
			navigate(PROTECTED_PATH.DASHBOARD);
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
			setAuthUser({ userData: res?.data?.user, token: res?.data?.token });
			navigate(PROTECTED_PATH.DASHBOARD);
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
			if (data?.success) {
				resetuserAndNavigate();
			}
		} catch (error) {
			console.error("err", error);
			if (error?.response?.status === 401) {
				resetuserAndNavigate();
			}
		}
	};

	const forgotPassword = async ({
		formValues,
		setErrors,
		setStatus,
		...rest
	}) => {
		try {
			const res = await axios.post(
				`${BACKEND_API_URL_V1}/forgot-password`,
				formValues
			);
			console.log("login res", res);
			setStatus({ success: res?.data?.msg });
		} catch (error) {
			console.error("err", error);
			setStatus({ fail: error?.response?.data?.msg });
			if (error?.response?.data?.errors)
				setErrors(error?.response?.data?.errors);
		} finally {
			rest?.setIsLoading?.(false);
		}
	};

	const resetPassword = async ({
		formValues,
		resetToken,
		setErrors,
		setStatus,
		...rest
	}) => {
		try {
			const res = await axios.post(
				`${BACKEND_API_URL_V1}/reset-password/${resetToken}`,
				formValues
			);

			setStatus({ success: res?.data?.msg });
		} catch (error) {
			console.error("err", error);
			setStatus({ fail: error?.response?.data?.msg });
			if (error?.response?.data?.errors)
				setErrors(error?.response?.data?.errors);
		} finally {
			rest?.setIsLoading?.(false);
		}
	};

	return { login, logout, signup, forgotPassword, resetPassword };
}
