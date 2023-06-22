import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import RouteHandler from "./routes/RouteHandler";
import { AuthProvider } from "./contexts/AuthContext";


const App = () => {
	return (
		<NavigationContainer>
			<AuthProvider>
				<RouteHandler />
			</AuthProvider>
		</NavigationContainer>
	);
}

export default App;
