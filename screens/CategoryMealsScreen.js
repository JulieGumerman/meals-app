import React from "react";
import { Text, View, FlatList, StyleSheet, Button } from "react-native";

import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealList from "../components/MealList";
import MealItem from "../components/MealItem";


const CategoryMealsScreen = props => {
    const renderMealItem = itemData => {
        return (
            <MealItem 
                title={itemData.item.title}
                image={itemData.item.imageUrl}
                onSelectMeal={() => {
                    props.navigation.navigate({
                        routeName: "MealDetail",
                        params: {
                            mealId: itemData.item.id
                        }
                    })
                }}
                duration={itemData.item.duration}
                complexity={itemData.item.complexity}
                affordability={itemData.item.affordability}
            />
        );
    }
    const catId = props.navigation.getParam("categoryId");

    // const selectedCategory = CATEGORIES.find(cat => cat.id === catId)
    const displayedMeals = MEALS.filter(cat => cat.categoryIds.indexOf(catId) >= 0)

    return (
        <MealList 
            renderMealItem={renderMealItem} 
            displayedMeals={displayedMeals}
        />
    );
}

CategoryMealsScreen.navigationOptions = (navigationData) => {
    const catId = navigationData.navigation.getParam("categoryId");
    const selectedCategory = CATEGORIES.find(cat => cat.id === catId)
    return {
        headerTitle: selectedCategory.title,
    };
}

const styles = StyleSheet.create({
    screen: {
        flex: 1, 
        justifyContent: "center",
        alignItems: "center",
        padding: 15
    }
})
export default CategoryMealsScreen;
