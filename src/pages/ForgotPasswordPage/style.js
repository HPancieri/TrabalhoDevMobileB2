import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	Container: {
		flex: 1,
		backgroundColor: '#5e81ac',
		alignItems: 'center',
		justifyContent: 'center',
	},
	InputInfo: {
		flexDirection: 'row',
		padding: 25,
		width: '100%',
		justifyContent: 'space-around',
	},
	InputContainer: {
		backgroundColor: '#3b4252',
		borderRadius: 10,
		justifyContent: 'space-around',
		alignItems: 'center',
		width: '80%',
		height: '20%',
		paddingBottom: 20,
		paddingTop: 20,
	},
	TextInput: {
		borderRadius: 10,
		backgroundColor: '#d8dee9',
		padding: 10,
		width: '80%',
	},
	TextStyle: {
		fontSize: 15,
		fontWeight: '600',
		color: '#e5e9f0',
	},
	LinkText: {
		color: '#2e3440',
		fontWeight: 'bold',
	},
	Title: {
		color: '#2e3440',
		fontSize: 25,
		fontWeight: 'bold',
		marginBottom: 20,
	},
	ConfirmBtn: {
		borderRadius: 10,
		backgroundColor: '#81a1c1',
		width: '50%',
		textAlign: 'center',
		padding: 8,
		marginTop: 5,
	},
	LinksContainer: {
		marginTop: 20,
	},
});

export default styles;