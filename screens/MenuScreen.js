import React, { useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

import ProductDetailCard from '../components/ProductDetailCard'; 

import { getMenus } from '../api/getMenus';

function MenuScreen(props) {
    const [selectedMenu, setSelectedMenu] = useState(getMenus(props.route.params.restaurantName).products);
    return (
        <View style={styles.container}>
            <FlatList 
                style={styles.productList}
                data={selectedMenu}
                renderItem={productData => (
                    <ProductDetailCard 
                        productName={productData.item.name}
                        navigation={props.navigation} 
                    />
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center',
    },
    productList: {
        flex: 1,
        width: '100%'
    }
})

export default MenuScreen;