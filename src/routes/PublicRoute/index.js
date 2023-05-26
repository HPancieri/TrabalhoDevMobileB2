import {createNativeStackNavigator} from "@react-navigation/native-stack";
import LoginPage from "../../pages/LoginPage";
import CreateAccountPage from "../../pages/CreateAccountPage";
import ForgotPasswordPage from "../../pages/ForgotPasswordPage";


const Stack = createNativeStackNavigator();

const PublicStack = () => {
	return (
		<Stack.Navigator
			initialRouteName={'LoginPage'}
		>
			<Stack.Screen
				name={'LoginPage'}
				component={LoginPage}
				options={{
					headerShown: false,
				}}
			/>
			<Stack.Screen
				name={'CreateAccountPage'}
				component={CreateAccountPage}
				options={{
					headerShown: false,
				}}
			/>
			<Stack.Screen
				name={'ForgotPasswordPage'}
				component={ForgotPasswordPage}
				options={{
					headerShown: false,
				}}
			/>

		</Stack.Navigator>
	);
}

export default PublicStack;