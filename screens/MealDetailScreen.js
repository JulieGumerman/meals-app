import React from "react";
import { ScrollView, Image, Text, View, Button, StyleSheet } from "react-native";
import CustomHeaderButton from "../components/HeaderButton";
import { HeaderButtons, Item } from "react-navigation-header-buttons";


import { MEALS } from "../data/dummy-data";

const ListItem = props => {
    return <View style={styles.listItem}>
        <Text>{props.children}</Text>
    </View>
}
const MealDetailScreen = props => {
    const mealId = props.navigation.getParam("mealId");
    
    const selectedMeal = MEALS.find(meal => meal.id === mealId) 

    return (
        <ScrollView>
            <Image 
                source={{uri: selectedMeal.imageUrl}}
                style={styles.image}
            />
            <View style={styles.details}>
                        <Text>{selectedMeal.duration} minutes</Text>
                        <Text>{selectedMeal.complexity}</Text>
                        <Text>{selectedMeal.affordability}</Text>
                    </View>
            <Text style={styles.title}>Ingredients</Text>
            {selectedMeal.ingredients.map(item => <ListItem key={item}>{item}</ListItem>)}
            <Text style={styles.title}>Steps</Text>
    {selectedMeal.steps.map(item => <ListItem key={item}>{item}</ListItem>)}
        </ScrollView>
    );
}

MealDetailScreen.navigationOptions = (navigationData) => {
    const mealId = navigationData.navigation.getParam("mealId");
    const selectedMeal = MEALS.find(meal => meal.id ===mealId)
    return {
        headerTitle: selectedMeal.title,
        headerRight: 
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item title="Favorite" iconName="ios-star" onPress={() => {
                    console.log("Mark as favorite")
                }}/>
            </HeaderButtons>
    };
}

const styles = StyleSheet.create({
    title: {
        fontSize: 22,
        textAlign: "center",
        fontWeight: "bold"        
    },
    image: {
        width: "100%",
        height: 200,
  
    },
    details: {
        flexDirection: "row",
        padding: 15,
        justifyContent: "space-around"
    },
    listItem: {
        marginVertical: 10,
        marginHorizontal: 20,
        borderColor: "#ccc",
        borderWidth: 1,
        padding: 10
    }
})
export default MealDetailScreen;
