import React, { useState } from "react";
import { Text, View, StyleSheet, Switch } from "react-native";

import {HeaderButtons, Item} from "react-navigation-header-buttons";

import Colors from "../constants/Colors";
import HeaderButton from "../components/HeaderButton";
const FiltersScreen = props => {
    const [isGlutenFree, setIsGlutenFree] = useState(false);
    const [isVegan, setIsVegan] = useState(false);
    const [isVegetarian, setIsVegetarian] = useState(false);
    const [isLactoseFree, setIsLactoseFree] = useState(false);

    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Available Filters</Text>
            <View style={styles.filterContainer}>
                <Text>Gluten-Free</Text>
                <Switch 
                    thumbColor={Colors.accentColor}
                    trackColor={{true: Colors.primaryColor}}
                    value={isGlutenFree} 
                    onValueChange={newValue => setIsGlutenFree(newValue)}
                />
            </View>
            <View style={styles.filterContainer}>
                <Text>Vegan</Text>
                <Switch 
                    thumbColor={Colors.accentColor}
                    trackColor={{true: Colors.primaryColor}}
                    value={isVegan} 
                    onValueChange={newValue => setIsVegan(newValue)}
                />                
            </View>
            <View style={styles.filterContainer}>
                <Text>Vegetarian</Text>
                <Switch 
                    thumbColor={Colors.accentColor}
                    trackColor={{true: Colors.primaryColor}}
                    value={isVegetarian} 
                    onValueChange={newValue => setIsVegetarian(newValue)}
                />
            </View>
            <View style={styles.filterContainer}>
                <Text>Lactose-Free</Text>
                <Switch 
                    thumbColor={Colors.accentColor}
                    trackColor={{true: Colors.primaryColor}}
                    value={isLactoseFree} 
                    onValueChange={newValue => setIsLactoseFree(newValue)}
                />
            </View>
        </View>
    );
}

FiltersScreen.navigationOptions = (navData) => {
    return {
        headerTitle: "filters",
        headerLeft: <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title="Filter" iconName="ios-menu" onPress={() => {
                navData.navigation.toggleDrawer();
            }}/>
        </HeaderButtons>    
    }
    
}

const styles = StyleSheet.create({
    screen: {
        flex: 1, 
        alignItems: "center"
    },
    title: {
        fontSize: 22,
        fontWeight: "bold",
        margin: 20,
        textAlign: "center"
    }, 
    filterContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "80%",
        marginBottom: 30
    }
})
export default FiltersScreen;
