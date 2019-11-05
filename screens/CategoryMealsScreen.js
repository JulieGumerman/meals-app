import React from "react";
import { Text, View, FlatList, StyleSheet, Button } from "react-native";

const CategoryMealsScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>The categories meal screen</Text>
            <Button title="go to Details" onPress={() => {
                props.navigation.navigate({ routeName: "MealDetail"})
            }} />
            <Button title="go back" on Press={() => {
                props.navigation.goBack();
            }} />
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1, 
        justifyContent: "center",
        alignItems: "center"
    }
})
export default CategoryMealsScreen;
