import React from 'react';
import { StyleSheet } from 'react-native';
import MapView from 'react-native-maps';

export default function TestMap() {
  return (
    <MapView
      style={StyleSheet.absoluteFillObject}
    />
  );
}
