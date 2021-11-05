import React, { useState, useEffect } from 'react';
import { View, Button, Text, StyleSheet, Dimensions } from 'react-native';
import { StackActions } from '@react-navigation/native'
import { BarCodeScanner } from 'expo-barcode-scanner';
import BarcodeMask from 'react-native-barcode-mask';
import { useHeaderHeight } from '@react-navigation/elements';


const finderWidth = 280;
const finderHeight = 230;

function QrCodeScannerScreen(props) {
  const headerHeight = useHeaderHeight();
  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;
  const viewMinX = (width - finderWidth) / 2;
  const viewMinY = (height - finderHeight) / 2;

  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
      (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
      })();
  }, []);

  const handleQrCodeScanned = ({ type, data, bounds: {origin} = {} }) => {
    const x = origin.x;
    const y = origin.y + headerHeight; 
    if (x >= viewMinX && y >= viewMinY && x <= (viewMinX + finderWidth / 2) && y <= (viewMinY + finderHeight / 2)) {
      setScanned(true);
      // alert(`Bar code with type ${type} and data ${data} has been scanned!`);
      props.navigation.dispatch(
        StackActions.replace('Menu', {
          restaurantName: data
        })
      );
    }
  };

  if (hasPermission === null) {
      return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
      return <Text>No access to camera</Text>;
  }

  // For testing purposes

  // props.navigation.dispatch(
  //   StackActions.replace('Menu', {
  //     restaurantName: 'Timeout'
  //   })
  // );

  return (
      <View style={{flex: 1,
        flexDirection: 'column',
        justifyContent: 'center'}}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleQrCodeScanned}
          barCodeTypes={[BarCodeScanner.Constants.BarCodeType.qr]}
          style={StyleSheet.absoluteFillObject}
        />
        <BarcodeMask edgeColor="#62B1F6" showAnimatedLine/>
        {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
      </View>
    );
}

export default QrCodeScannerScreen;