import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DrawerHamburgerIconButton from '../components/DrawerHamburgerIconButton';
import Colors from '../constants/Colors';

import { RestaurantsPickerNavigator } from './RestaurantsPickerNavigator';
import MenuScreen from '../screens/MenuScreen';
import MenuProductsDetailScreen from '../screens/MenuProductsDetailScreen';

const RestaurantsStackNavigator = createNativeStackNavigator();

export const RestaurantsNavigator = (props) => {
    // console.log(props);
    return (
        <RestaurantsStackNavigator.Navigator>
            <RestaurantsStackNavigator.Screen 
                name="RestaurantsPickerNavigator"
                component={RestaurantsPickerNavigator}
                options={{
                    title: 'Restaurants',
                    headerStyle: {
                        backgroundColor: Colors.primary,
                    },
                    headerTintColor: Colors.lightText,
                    headerLeft: () => (
                      <DrawerHamburgerIconButton/>
                    ),
                }}
            />
            <RestaurantsStackNavigator.Group
                screenOptions={{
                    headerStyle: {
                        backgroundColor: Colors.primary,
                    },
                    headerTintColor: Colors.lightText,
                }}
            >
                <RestaurantsStackNavigator.Screen 
                    name='Menu'
                    component={MenuScreen}
                    options={({ route }) => ({ 
                        title: route.params.restaurantName,
                        headerLeft: () => (
                            <DrawerHamburgerIconButton/>
                        )
                    })}
                />
                <RestaurantsStackNavigator.Screen 
                    name='MenuProductsDetail'
                    component={MenuProductsDetailScreen}
                    options={({ route }) => ({ title: route.params.productName })}
                />
            </RestaurantsStackNavigator.Group>
        </RestaurantsStackNavigator.Navigator>
    )
}