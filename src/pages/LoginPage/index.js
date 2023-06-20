import { View, Text, TextInput, SafeAreaView, TouchableOpacity } from "react-native";
import { useState } from "react";
import styles from "./style";
import { Link } from "@react-navigation/native";

const LoginPage = ({ navigation }) => {
	let [ email, setEmail ] = useState('');
	let [ passwd, setPasswd ] = useState('');

	return (
		<SafeAreaView style={styles.Container}>
			<Text style={styles.Title}>Login</Text>

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

				<View style={styles.InputInfo}>
					<TextInput
						value={passwd}
						onChangeText={text => setPasswd(text)}
						secureTextEntry
						style={styles.TextInput}
						placeholder={'Senha'}
					/>
				</View>

				<TouchableOpacity style={styles.ConfirmBtn}>
					<Text style={styles.ConfirmText}>Login</Text>
				</TouchableOpacity>
			</View>

			<View style={styles.LinksContainer}>
				<Link
					to={{
						screen:'AllMoviesPage'
					}}
				>
					<Text style={styles.LinkText}>Ver Filmes em Cartaz</Text>
				</Link>
				<Link
					to={{
						screen: 'CreateAccountPage'
					}}
				>
					<Text style={styles.LinkText}>Criar Conta</Text>
				</Link>

				<Link
					to={{
						screen: 'ForgotPasswordPage'
					}}
				>
					<Text style={styles.LinkText}>Esqueceu sua senha?</Text>
				</Link>

			</View>
		</SafeAreaView>
	);
}

export default LoginPage;