import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DrawerHamburgerIconButton from '../components/DrawerHamburgerIconButton';
import Colors from '../constants/Colors';

import SettingsScreen from '../screens/SettingsScreen';

const SettingsStackNavigator = createNativeStackNavigator();

export const SettingsNavigator = () => {
    return (
        <SettingsStackNavigator.Navigator>
            <SettingsStackNavigator.Screen 
                name='Settings'
                component={SettingsScreen}
                options={{
                    headerStyle: {
                        backgroundColor: Colors.primary,
                    },
                    headerTintColor: Colors.lightText,
                    headerLeft: () => (
                      <DrawerHamburgerIconButton/>
                    ),
                }}
            />
        </SettingsStackNavigator.Navigator>
    )
}