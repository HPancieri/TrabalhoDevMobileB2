import { Dimensions, StyleSheet } from "react-native";

const maxWidth = Dimensions.get("window").width * 0.9;
const maxHeight = Dimensions.get("window").height * 0.8;

const styles = StyleSheet.create({
	MovieContainer: {
		width: maxWidth,
		height: maxHeight,
		backgroundColor: "#3b4252",
		justifyContent: "space-evenly",
		alignItems: "center",
		padding: 10,
		margin: 15,
		borderRadius: 10,
	},
	Image: {
		width: "90%",
		height: "60%",
		margin: 10,
		borderRadius: 10,
		resizeMode: "cover",
	},
	Description: {
		color: "#d8dee9",
		marginBottom: 10,
	},
	Title: {
		fontWeight: "bold",
		textAlign: "center",
		fontSize: 20,
		color: "#d8dee9",
	},
	TextContainer: {
		width: "90%",
		alignItems: "center",
		// justifyContent: "space-around",
	},
	BuyBtn: {
		backgroundColor: "#bf616a",
		color: "#eceff4",
		borderRadius: 10,
		textAlign: "center",
		justifyContent: "center",
		alignItems: "center",
		padding: 10,
		margin: 10,
		width: "80%",
	},
	ReadMoreBtn: {
		backgroundColor: "#d08770",
		color: "#eceff4",
		borderRadius: 10,
		textAlign: "center",
		justifyContent: "center",
		alignItems: "center",
		padding: 10,
		margin: 10,
		width: "80%",
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
});
export default styles;