import React from 'react';
import { View, Text, StyleSheet, Pressable   } from 'react-native';

type InfoScreenProps = { onClose: () => void };

export default function MapScreen({ onClose }: InfoScreenProps) {
  return (
    <View style={styles.container}>
      <Pressable onPress={onClose}>
        <Text>Cerrar</Text>
      </Pressable>
      <Text style={styles.options}>
        Acá va cada botón</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, padding: 24},
  options : {fontSize: 14, color: '#666'}
})