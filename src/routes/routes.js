import { PROTECTED_ROUTES } from "./protectedRouter";
import { ERROR_ROUTER } from "./errorRouter";
import { AUTH_ROUTES } from "./authRoutes";

export const BACKEND_API_DOMAIN = "http://localhost:5001";
export const BACKEND_API_URL_V1 = `${BACKEND_API_DOMAIN}/api/v1`;

export const apiV1 = (uri) => `${BACKEND_API_URL_V1}/${uri}`;

export const ROUTER = [
	...PROTECTED_ROUTES,
	...AUTH_ROUTES,

	// -------------- ADD NEW ROUTERS ABOVE ---------------
	...ERROR_ROUTER,
];
