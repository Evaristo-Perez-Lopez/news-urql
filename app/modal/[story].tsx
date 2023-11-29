import { StatusBar } from "expo-status-bar";
import { Platform, ScrollView, StyleSheet } from "react-native";

import { STORY_BY_ID } from "@/graphql/queries/stories";
import { useLocalSearchParams } from "expo-router";
import { useQuery } from "urql";
import { Text, View } from "../../components/Themed";

export default function StoryModalScreen() {
	const params = useLocalSearchParams<{ story: string }>();
	const [{ data, fetching, error }] = useQuery({
		query: STORY_BY_ID,
		variables: { id: params.story },
	});

	if (fetching) return <Text>Loading...</Text>;
	if (error) return <Text>Error...</Text>;

	return (
		<ScrollView
			style={{
				flex: 1,
				padding: 20,
			}}>
			<Text style={styles.title}>{data.story.title}</Text>
			<Text>{data.story.summary}</Text>
			<View
				style={styles.separator}
				lightColor="#eee"
				darkColor="rgba(255,255,255,0.1)"
			/>
			<Text>{data.story.text}</Text>

			<StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
		</ScrollView>
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
	separator: {
		marginVertical: 30,
		height: 1,
		width: "80%",
	},
});
