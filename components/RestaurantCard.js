import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { StackActions } from '@react-navigation/native';

import Colors from '../constants/Colors';

function RestaurantCard(props) {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => {
                    props.navigation.dispatch(
                        StackActions.replace(
                            'Menu', {
                                restaurantName: props.restaurantName
                            }
                        )
                    );
                    // props.navigation.navigate('Menu', {
                    //         restaurantName: props.restaurantName
                    //     }
                    // );
                }}
            >
                <View style={styles.restaurantNameTextContainer}>
                    <Text style={styles.restaurantNameText}>{props.restaurantName}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    restaurantNameTextContainer: {
        flex: 1,
        justifyContent: 'center',
        marginVertical: '3%',
        paddingVertical: '15%',
        paddingHorizontal: '35%',
        backgroundColor: Colors.primary,
        borderRadius: 25
    },
    restaurantNameText: {
       color: Colors.lightText, 
       fontWeight: "bold"
    }
});

export default RestaurantCard;