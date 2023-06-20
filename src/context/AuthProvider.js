import axios from "axios";
import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

	const setAuthUser = ({ userData, token = "" }) => {
		setUser(userData);
		localStorage.setItem("token", token);
		localStorage.setItem("user", JSON.stringify(userData));
	};

	const resetAuthUser = () => {
		setUser(null);
		localStorage.removeItem("user");
		localStorage.removeItem("token");
	};

	useEffect(() => {
		const fetchUserData = async () => {
			const storedUser = localStorage.getItem("user");
			if (storedUser) {
				setUser(JSON.parse(storedUser));
			}

			const token = localStorage.getItem("token");
			if (token && !storedUser) {
				try {
					// Make an API call to fetch user information using the token
					const response = await axios.get(
						"http://localhost:5001/api/v1/users/user-info"
					);
					console.log("response", response);

					if (response?.success) {
						const userData = await response?.user;
						setUser(userData);
						localStorage.setItem("user", JSON.stringify(userData));
					} else {
						// logout();
					}
				} catch (error) {
					// logout();
					console.error("error", error);
				}
			}

			setIsLoading(false);
		};

		fetchUserData();
	}, []);

	const authContextValue = {
		user,
		setAuthUser,
		resetAuthUser,
		isLoading,
	};

	return (
		<AuthContext.Provider value={authContextValue}>
			{isLoading ? <div>Loading...</div> : children}
		</AuthContext.Provider>
	);
};
