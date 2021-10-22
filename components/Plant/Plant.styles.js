import { StyleSheet } from "react-native";

export const plantStyles = StyleSheet.create({
	container: {
        backgroundColor: "white",
        borderRadius: 20,
        padding: 20,
        marginBottom: 20,
        flexDirection: "row",
        alignItems: "center"
	},
    title: {
        fontSize: 20,
        fontWeight: "bold",
    },
    image: {
        width: 100,
        height: 100,
        marginRight: 20,
    }
});