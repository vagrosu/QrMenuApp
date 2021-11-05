import React from 'react';
import { View, Text } from 'react-native';

function MenuProductsDetailScreen(props) {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>{props.route.params.productName}</Text>
        </View>
    )
}

export default MenuProductsDetailScreen;