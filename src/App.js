import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import axios from "axios";
import {
	axiosErrorInterceptor,
	axiosResponseErrorInterceptor,
	axiosResponseSuccesInterceptor,
	axiosSuccesInterceptor,
} from "./libs/axios/axiosInstance";
import { BACKEND_API_DOMAIN, ROUTER } from "./routes/routes";
import { AuthProvider } from "./context/AuthProvider";
import { Flowbite } from "flowbite-react";

axios.defaults.baseURL = BACKEND_API_DOMAIN;
axios.interceptors.request.use(axiosSuccesInterceptor, axiosErrorInterceptor);
axios.interceptors.response.use(
	axiosResponseSuccesInterceptor,
	axiosResponseErrorInterceptor
);

const loading = (
	<div className="pt-3 text-center">
		<div className="sk-spinner sk-spinner-pulse"></div>
	</div>
);

function processRoutes(routes) {
	return routes.map((route) => {
		const { element, children, middleware, ...rest } = route;

		if (children && children.length > 0) {
			return (
				<Route key={`with-child${route.path}`} {...rest} element={element}>
					{processRoutes(children)}
				</Route>
			);
		}
		return (
			<Route key={`without-child${route.path}`} {...rest} element={element} />
		);
	});
}

function App() {
	return (
		<div className="App">
			<AuthProvider>
				<Flowbite>
					<Suspense fallback={loading}>
						<BrowserRouter>
							<Routes>{processRoutes(ROUTER)}</Routes>
						</BrowserRouter>
					</Suspense>
				</Flowbite>
			</AuthProvider>
		</div>
	);
}

export default App;
