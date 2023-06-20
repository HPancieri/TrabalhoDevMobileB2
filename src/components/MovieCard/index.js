import { Image, View, Text, TouchableOpacity } from "react-native";
import styles from "./style";
import { Link } from "@react-navigation/native";

const MovieCard = ({ apiURL, movie }) => {
	let tooMuchText = movie.attributes.sinopse.length >= 250;

	return (
		<View style={styles.MovieContainer}>
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

				{
					tooMuchText ?
						<Text style={styles.Description}>{movie.attributes.sinopse.substring(0, 250)}...</Text> :
						<Text style={styles.Description}>{movie.attributes.sinopse}</Text>
				}

				<Link style={styles.ReadMoreBtn}
					to={{
						screen: 'MovieDetailsPage',
						params: { apiURL: apiURL, movie: movie }
					}}
				>
					<Text style={styles.BuyText}>Ler mais...</Text>
				</Link>

				<TouchableOpacity style={styles.BuyBtn} onPress={() => {}}>
					<Text style={styles.BuyText}>Comprar Ingresso</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}

export default MovieCard;