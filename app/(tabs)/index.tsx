import { FlatList, StyleSheet } from "react-native";

import { ALL_STORIES } from "@/graphql/queries/stories";
import { useQuery } from "urql";
import { Text, View } from "../../components/Themed";

export default function TabOneScreen() {
	const [{ data, fetching, error }] = useQuery({
		query: ALL_STORIES,
	});

	if (fetching) return <Text>Loading...</Text>;
	if (error) return <Text>Error...</Text>;

	return (
		<View style={styles.container}>
			<FlatList
				data={data?.stories}
				style={{ width: "100%" }}
				contentContainerStyle={{ width: "100%", padding: 20, gap: 10 }}
				renderItem={({ item }) => (
					<View style={styles.story}>
						<Text style={styles.title}>{item.title}</Text>
						<Text>{item.summary}</Text>
					</View>
				)}
				keyExtractor={(item) => item.id}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	title: {
		fontSize: 20,
		fontWeight: "bold",
	},
	story: {
		width: "100%",
		padding: 20,
		borderRadius: 10,
		backgroundColor: "#aff",
	},
	separator: {
		marginVertical: 30,
		height: 1,
		width: "80%",
	},
});
