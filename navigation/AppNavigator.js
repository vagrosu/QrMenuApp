import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { DrawerNavigator } from './DrawerNavigator';

export const AppNavigator = () => {
    return (
        <NavigationContainer>
            <DrawerNavigator />
        </NavigationContainer>
    )
}