import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Colors from '../constants/Colors';

import RestaurantsScreen from '../screens/RestaurantsScreen';
import QrCodeScannerScreen from '../screens/QrCodeScannerScreen';

const RestaurantsTabNavigator = createMaterialBottomTabNavigator();

export const RestaurantsPickerNavigator = () => {
    return (
        <RestaurantsTabNavigator.Navigator>
            <RestaurantsTabNavigator.Screen 
                name='Restaurants'
                component={RestaurantsScreen}
                options={{
                    tabBarLabel: 'Restaurants',
                    tabBarIcon: () => (
                        <MaterialCommunityIcons
                            name="store"
                            color={Colors.icons}
                            size={26}
                        />
                    ),
                }}
            />
            <RestaurantsTabNavigator.Screen 
                name='QrCodeScanner'
                component={QrCodeScannerScreen}
                options={{
                    tabBarLabel: 'Scanner',
                    tabBarIcon: () => (
                        <MaterialCommunityIcons
                            name="qrcode-scan"
                            color={Colors.icons}
                            size={22}
                        />
                    ),
                }}
            />
        </RestaurantsTabNavigator.Navigator>
    )
}