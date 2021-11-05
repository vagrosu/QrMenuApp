import React from 'react';
import { DrawerItem } from '@react-navigation/drawer';
import { StackActions } from '@react-navigation/native';

function DrawerRestaurantsItem(props) {
    return (
        <DrawerItem 
            label='Restaurants'
            onPress={() => props.navigation.dispatch(StackActions.replace('RestaurantsPickerNavigator'))}
        />
    )
}

export default DrawerRestaurantsItem;