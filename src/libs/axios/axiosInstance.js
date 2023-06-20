import axios from "axios";

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

const axiosInstance = axios.create();
axiosInstance.defaults.baseURL = "http://localhost:5001/api/v1";

axiosInstance.defaults.headers.post["Content-Type"] =
	"application/x-www-form-urlencoded";

// Add a request interceptor
axiosInstance.interceptors.request.use(
	function (config) {
		console.log({ config });
		config.headers["Authorization"] = `Bearer ${localStorage.getItem("token")}`;
		console.log({ config });
		// Do something before request is sent
		return config;
	},
	function (error) {
		// Do something with request error
		return Promise.reject(error);
	}
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
	function (response) {
		// Any status code that lie within the range of 2xx cause this function to trigger
		// Do something with response data
		return response;
	},
	function (error) {
		// Any status codes that falls outside the range of 2xx cause this function to trigger
		// Do something with response error
		return Promise.reject(error);
	}
);

export { axiosInstance };
