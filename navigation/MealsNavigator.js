import React from "react";

import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Ionicons } from "@expo/vector-icons";

import FiltersScreen from "../screens/FiltersScreen";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import Colors from "../constants/Colors.js"
import FavoritesScreen from "../screens/FavoritesScreen"

const MealsNavigator = createStackNavigator({
    Categories: {
        screen: CategoriesScreen,
    },
    CategoryMeals: {
        screen: CategoryMealsScreen,
    },
    MealDetail: MealDetailScreen
}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Colors.primaryColor
        },
        headerTintColor: "white"
    }
});

const FavNavigator = createStackNavigator({
    Favorites: FavoritesScreen,
    MealDetail: MealDetailScreen
}, {
    defaultNavigationOptions: {

    }
})

const MealsFavTabNavigator = createBottomTabNavigator({
    Meals: {
        screen: MealsNavigator,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <Ionicons 
                    name="ios-restaurant"
                    size={25}
                    color={tabInfo.tintColor}
                />
            }
        }
    },
    Favorites: {
        screen: FavNavigator,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <Ionicons 
                    name="ios-star"
                    size={25}
                    color={tabInfo.tintColor}
                
                />
            }
        }
    }
}, {
    tabBarOptions: {
        activeTintColor: Colors.accentColor
    }
})

const FiltersNavigator = createStackNavigator({
    Filters: FiltersScreen
}, {
    navigationOptions: {
        drawerLabel: "Filters!!!!!"
    },
    defaultNavigationOptions:{
        headerStyle: {
        backgroundColor: Colors.primaryColor
    },
    headerTintColor: "white"
}
})
const MainNavigator = createDrawerNavigator({
    MealsFavs: { 
        screen: MealsFavTabNavigator, 
        navigationOptions: {
            drawerLabel: "FAVORITES!!! WHEE!!!"
        }
    
    },
    Filters:  FiltersNavigator
}, {
    contentOptions: {
        activeTintColor: Colors.accentColor
    }
})

export default createAppContainer(MainNavigator);