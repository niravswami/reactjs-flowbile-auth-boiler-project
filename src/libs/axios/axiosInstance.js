export function axiosSuccesInterceptor(config) {
	config.headers["X-Requested-With"] = "XMLHttpRequest";
	config.headers["Accept"] = "application/json";
	config.headers["Content-Type"] = "application/json";
	config.headers["Authorization"] = `Bearer ${localStorage.getItem("token")}`;
	config.withCredentials = true;
	// Do something before request is sent
	return config;
}

export function axiosErrorInterceptor(error) {
	// Do something with request error
	return Promise.reject(error);
}

export const axiosResponseSuccesInterceptor = (response) => {
	// Any status code that lie within the range of 2xx cause this function to trigger
	// Do something with response data
	// console.log("interceptors response", response);
	return response;
};
export const axiosResponseErrorInterceptor = (error) => {
	// Any status codes that falls outside the range of 2xx cause this function to trigger
	// Do something with response error
	// console.log("interceptors error", error);
	return Promise.reject(error);
};
