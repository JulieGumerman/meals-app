import React from "react";

import MealList from "../components/MealList";
import MealItem from "../components/MealItem";
import {MEALS} from "../data/dummy-data";

const FavoritesScreen = props => {
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

    const displayedMeals = MEALS.filter(meal => meal.id === "m1" || meal.id === 
    "m2")
    return (
        <MealList 
            displayedMeals={displayedMeals}
            renderMealItem={renderMealItem}
        />
    );
}

FavoritesScreen.navigationOptions = {
    headerTitle: "Favorites"
}

export default FavoritesScreen;
