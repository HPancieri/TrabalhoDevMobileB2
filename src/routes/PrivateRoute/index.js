import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AllMoviesPage from "../../pages/AllMoviesPage";
import MovieDetailsPage from "../../pages/MovieDetailsPage";


const Stack = createNativeStackNavigator();

const PrivateRoute = () => {
	return (
		<Stack.Navigator
			initialRouteName={'AllMoviesPage'}
			screenOptions={{
				headerShown: false,
			}}
		>

			<Stack.Screen
				name={'AllMoviesPage'}
				component={AllMoviesPage}
			/>

			<Stack.Screen
				name={'MovieDetailsPage'}
				component={MovieDetailsPage}
			/>
		</Stack.Navigator>
	);
}

export default PrivateRoute;