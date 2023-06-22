import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import PublicRoute from "./routes/PublicRoute";

const App = () => {
	return (
		<NavigationContainer>
			<PublicRoute />
		</NavigationContainer>
	);
}

export default App;
