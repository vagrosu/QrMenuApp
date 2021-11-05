import React, { useState } from 'react';
import { 
    createDrawerNavigator,
     DrawerContentScrollView, 
     DrawerItemList 
} from '@react-navigation/drawer';

import DrawerSelectedRestaurantItem from '../components/DrawerSelectedRestaurantItem';
import DrawerRestaurantsItem from '../components/DrawerRestaurantsItem';

import { RestaurantsNavigator } from './RestaurantsNavigator';
import { SettingsNavigator } from './SettingsNavigator';

const HomeDrawerNavigator = createDrawerNavigator();

export const DrawerNavigator = () => {
    const [restaurantIsSelected, setRestaurantIsSelected] = useState(true);
    const [restaurantName, setRestaurantName] = useState('Back');
    // const checkIfRestaurantIsSelected = (route) => {    
        // setRestaurantIsSelected = state;
        // setRestaurantName = restaurantName;
    // }

    return (
            <HomeDrawerNavigator.Navigator 
                drawerContent={(props) => 
                    // console.log(props.navigation.isFocused()) ||
                    <DrawerContentScrollView {...props}>
                        {restaurantIsSelected &&  <DrawerSelectedRestaurantItem 
                                restaurantName={restaurantName}
                                navigation={props.navigation}
                            />
                        }
                        {/* <DrawerRestaurantsItem 
                            navigation={props.navigation}
                        /> */}
                        <DrawerItemList {...props} />
                    </DrawerContentScrollView>
                }
            >
                <HomeDrawerNavigator.Screen 
                    name='RestaurantsNavigator'
                    component={RestaurantsNavigator}
                    options={{
                        headerShown: false,
                        title: 'Restaurants',    
                    }}
                    // initialParams={{setRestaurantIsSelected: () => {setRestaurantIsSelected(true)}}}
                />
                <HomeDrawerNavigator.Screen 
                    name='SettingsNavigator'
                    component={SettingsNavigator}
                    options={{
                        headerShown: false,
                        title: 'Settings'
                    }}
                />
            </HomeDrawerNavigator.Navigator>
    )
}