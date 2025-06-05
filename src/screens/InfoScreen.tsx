import React from 'react';
import { View, Text, StyleSheet, Pressable  } from 'react-native';

type InfoScreenProps = { onClose: () => void };

export default function InfoScreen({ onClose }: InfoScreenProps) {
  return (
    <View style={styles.center}>
      <Pressable onPress={onClose}>
        <Text>Cerrar</Text>
      </Pressable>
      <Text>Info Screen (eventos / alertas)</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  center: { flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: 'rgba(203,103,48,0.8)' },
});













