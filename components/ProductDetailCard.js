import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

function ProductDetailCard(props) {

    return (
        <View style={styles.container}>
            <TouchableOpacity 
                onPress={() => {
                    props.navigation.navigate('MenuProductsDetail', 
                    {
                        productName: props.productName
                    })
                    
                }}
                // style={}
            >
                <View style={styles.productNameTextContainer}>
                    <Text style={styles.productNameText}>
                        {props.productName}
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: '5%',
        borderBottomWidth: 1,
        borderBottomColor: 'lightgray',
    }, 
    productNameText: {
        marginLeft: '7%',
        fontSize: 16,
    },
    productNameTextContainer: {
        paddingVertical: '10%',
    }
});

export default ProductDetailCard;