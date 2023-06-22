import PrivateRoute from "../PrivateRoute";
import PublicRoute from "../PublicRoute";
import { useAuth } from "../../contexts/AuthContext";


const RouteHandler = () => {
	const { authed } = useAuth();

	return (
		authed ?
			<PrivateRoute /> :
			<PublicRoute />
	);
}

export default RouteHandler;