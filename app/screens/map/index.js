import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';

const MapScreen = () => {
  return (
    <View style={{flex: 1}}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={{flex: 1}}
        region={{
          latitude: 41.4662184,
          longitude: 48.8000175,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}></MapView>
    </View>
  );
};

export default MapScreen;
