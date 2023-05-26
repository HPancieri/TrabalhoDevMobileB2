import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import PublicRoute from "./src/routes/PublicRoute";

export default function App() {
	return (
		<NavigationContainer>
			<PublicRoute />
		</NavigationContainer>
	);
}
