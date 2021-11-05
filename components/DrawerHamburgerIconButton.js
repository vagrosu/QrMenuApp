import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Colors from '../constants/Colors';

function DrawerHamburgerIconButton(props) {
    // const [drawerIsOpen, setDrawerIsOpen] = useState(false);
    const navigation = useNavigation();

    return (
        <View>
            <MaterialCommunityIcons
                name="menu"
                color={Colors.icons}
                size={26}
                onPress={() => {navigation.openDrawer()}}
            />
        </View>
    )
}

export default DrawerHamburgerIconButton;