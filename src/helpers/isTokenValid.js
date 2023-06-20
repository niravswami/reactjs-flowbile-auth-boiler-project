import jwt_decode from "jwt-decode";

const isTokenValid = async (token) => {
	const currentTimestamp = Math.floor(new Date().getTime() / 1000.0);
	if (token) {
		var decoded = token ? await jwt_decode(token) : "";

		return decoded.exp > currentTimestamp;
	} else {
		return false;
	}
};
export default isTokenValid;
