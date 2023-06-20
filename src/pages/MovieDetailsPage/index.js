import { Image, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import styles from "./style";

const MovieDetailsPage = ({ navigation, route }) => {
	const { apiURL, movie } = route.params;

	return (
		<SafeAreaView style={styles.MovieContainer}>
			<Image
				source={{ uri: apiURL + movie.attributes.poster.data.attributes.url }}
				style={styles.Image}
			/>

			<View style={styles.TextContainer}>
				<View style={styles.TitleSubtitleContainer}>
					<Text style={styles.Title}>{movie.attributes.titulo}</Text>

					{
						// Renders subtitle information, if it exists;
						(movie.attributes.subtitulo) ?
							<Text style={styles.Subtitle}>{movie.attributes.subtitulo}</Text> :
							<></>
					}
				</View>

				<Text style={styles.Description}>{movie.attributes.sinopse}</Text>

				<TouchableOpacity style={styles.GoBackBtn} onPress={() => {navigation.pop()}}>
					<Text style={styles.BuyText}>Voltar</Text>
				</TouchableOpacity>

				<TouchableOpacity style={styles.BuyBtn} onPress={() => {}}>
					<Text style={styles.BuyText}>Comprar Ingresso</Text>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
}

export default MovieDetailsPage;