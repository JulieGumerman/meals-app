import React from "react";
import { Text, View, StyleSheet } from "react-native";

const FavoritesScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>The favorites screen</Text>
        </View>
    );
}

FavoritesScreen.navigationOptions = {
    headerTitle: "Favorites"
}
const styles = StyleSheet.create({
    screen: {
        flex: 1, 
        justifyContent: "center",
        alignItems: "center"
    }
})
export default FavoritesScreen;
