import { View, Text, TextInput, SafeAreaView, TouchableOpacity } from "react-native";
import { useState } from "react";
import styles from "./style";
import { Link } from "@react-navigation/native";

const ForgotPasswordPage = ({ navigation }) => {
	let [ email, setEmail ] = useState('');

	return (
		<SafeAreaView style={styles.Container}>
			<Text style={styles.Title}>Reset Password</Text>

			<View style={styles.InputContainer}>
				<View style={styles.InputInfo}>
					<TextInput
						value={email}
						onChangeText={text => setEmail(text)}
						style={styles.TextInput}
						placeholder={'Email'}
						inputMode={'email'}
						keyboardType={'email-address'}
					/>
				</View>

				<TouchableOpacity style={styles.ConfirmBtn}>
					<Text style={styles.ConfirmText}>Resetar Senha</Text>
				</TouchableOpacity>
			</View>

			<View style={styles.LinksContainer}>
				<Link
					to={{
						screen: 'LoginPage'
					}}
				>
					<Text style={styles.LinkText}>Voltar para Login</Text>
				</Link>
			</View>
		</SafeAreaView>
	);
}

export default ForgotPasswordPage;