import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	MovieContainer: {
		flex: 1,
		backgroundColor: "#3b4252",
		justifyContent: "space-evenly",
		alignItems: "center",
		padding: 10,
	},
	Image: {
		width: "90%",
		height: "50%",
		margin: 10,
		borderRadius: 10,
		resizeMode: "cover",
	},
	Description: {
		color: "#d8dee9",
	},
	Title: {
		fontWeight: "bold",
		textAlign: "center",
		fontSize: 20,
		color: "#d8dee9",
	},
	TextContainer: {
		width: "90%",
		// justifyContent: "space-around",
	},
	BuyBtn: {
		backgroundColor: "#bf616a",
		color: "#eceff4",
		borderRadius: 10,
		textAlign: "center",
		padding: 10,
		margin: 10,
	},
	BuyText: {
		fontSize: 18,
		fontWeight: "bold",
		color: "#d8dee9",
		justifyContent: "center",
		alignItems: "center",
	},
	ShowMoreText: {
		textAlign: "center",
		color: "#e5e9f0",
		fontWeight: "bold",
		marginTop: 5,
	},
	Subtitle: {
		textAlign: "center",
		fontWeight: "bold",
		color: "#d8dee9",
	},
	TitleSubtitleContainer: {
		margin: 10,
	},
	GoBackBtn: {
		backgroundColor: "#d08770",
		color: "#eceff4",
		borderRadius: 10,
		textAlign: "center",
		padding: 10,
		margin: 10,
	},
});
export default styles;