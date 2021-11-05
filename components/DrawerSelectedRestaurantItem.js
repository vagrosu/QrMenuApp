import React from 'react';
import { DrawerItem } from '@react-navigation/drawer';
import { StackActions } from '@react-navigation/native';

function DrawerSelectedRestaurantItem(props) {
    return (
        <DrawerItem
            label={props.restaurantName}
            onPress={() => {
                props.navigation.closeDrawer();
                props.navigation.dispatch(StackActions.replace('RestaurantsPickerNavigator'))
            }}
        />
    )
}

export default DrawerSelectedRestaurantItem;