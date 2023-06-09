import { useEffect, useState } from "react";
import { ActivityIndicator, SafeAreaView, ScrollView, View } from "react-native";
import styles from "./style"
import MovieCard from "../../components/MovieCard";


const AllMoviesPage = ({ navigation }) => {
	const apiURL = "https://api.otaviolube.com";
	const extMovies = "/api/filmes?populate=*";

	let [ movies, setMovies ] = useState([]);

	useEffect(() => {
		fetch(apiURL + extMovies)
			.then(data => data.json())
			.then(obj => setMovies(obj.data))
		;
	}, []);

	return (
		<SafeAreaView style={styles.Container}>
			{
				movies.length > 0 ?
					<View style={styles.MainView}>
						<ScrollView horizontal pagingEnabled>
							{ movies.map(movie => <MovieCard movie={movie} apiURL={apiURL} key={movie.id}/>) }
						</ScrollView>

						{/*<TouchableOpacity onPress={() => {navigation.pop()}} style={styles.OptionsBtn}>*/}
						{/*	<Text style={styles.OptionsText}>Voltar</Text>*/}
						{/*</TouchableOpacity>*/}
					</View> :
					<ActivityIndicator size={"large"} color={"#2e3440"}/>
			}
		</SafeAreaView>
	);
}

export default AllMoviesPage;