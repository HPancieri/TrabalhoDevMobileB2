import PrivateRoute from "../PrivateRoute";
import PublicRoute from "../PublicRoute";
import { useContext } from "react";
import AuthContext from "../../contexts/AuthContext";


const RouteHandler = () => {
	const { authed } = useContext(AuthContext);

	return (
		authed ?
			<PrivateRoute /> :
			<PublicRoute />
	);
}

export default RouteHandler;