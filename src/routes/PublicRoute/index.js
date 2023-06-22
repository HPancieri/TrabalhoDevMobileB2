import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginPage from "../../pages/LoginPage";
import CreateAccountPage from "../../pages/CreateAccountPage";
import ForgotPasswordPage from "../../pages/ForgotPasswordPage";


const Stack = createNativeStackNavigator();

const PublicStack = () => {
	return (
		<Stack.Navigator
			initialRouteName={'LoginPage'}
			screenOptions={{
				headerShown: false,
			}}
		>
			<Stack.Screen
				name={'LoginPage'}
				component={LoginPage}
			/>
			<Stack.Screen
				name={'CreateAccountPage'}
				component={CreateAccountPage}
			/>
			<Stack.Screen
				name={'ForgotPasswordPage'}
				component={ForgotPasswordPage}
			/>
		</Stack.Navigator>
	);
}

export default PublicStack;