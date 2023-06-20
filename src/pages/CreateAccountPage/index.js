import { View, Text, TextInput, SafeAreaView, TouchableOpacity } from "react-native";
import { useState } from "react";
import styles from "./style";
import { Link } from "@react-navigation/native";

const CreateAccountPage = ({ navigation }) => {
	let [ email, setEmail ] = useState('');
	let [ passwd, setPasswd ] = useState('');
	let [ repPasswd, setRepPasswd ] = useState('');

	return (
		<SafeAreaView style={styles.Container}>
			<Text style={styles.Title}>Create Account</Text>

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
						placeholder={'Password'}
					/>
				</View>

				<View style={styles.InputInfo}>
					<TextInput
						value={repPasswd}
						onChangeText={text => setRepPasswd(text)}
						secureTextEntry
						style={styles.TextInput}
						placeholder={'Repeat Password'}
					/>
				</View>

				<TouchableOpacity style={styles.ConfirmBtn}>
					<Text style={styles.ConfirmText}>Create Account</Text>
				</TouchableOpacity>
			</View>

			<View style={styles.LinksContainer}>
				<Link
					to={{
						screen: 'LoginPage'
					}}
				>
					<Text style={styles.LinkText}>Back to Login</Text>
				</Link>
			</View>
		</SafeAreaView>
	);
}

export default CreateAccountPage;