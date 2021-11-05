import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

import RestaurantCard from '../components/RestaurantCard';

import { getRestaurants } from '../api/getRestaurants';

function RestaurantsScreen(props) {
    return (
        <View style={styles.container}>
            <FlatList 
                style={styles.restaurantsList}
                data={getRestaurants()}
                renderItem={restaurantData => (
                    <RestaurantCard 
                        restaurantName={restaurantData.item.restaurantName}
                        navigation={props.navigation}
                    />
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    restaurantsList: {
        flex: 1,
        width: '100%'
    }
})

export default RestaurantsScreen;