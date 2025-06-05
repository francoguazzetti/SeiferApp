import React from 'react';
import { View, Text, StyleSheet, Pressable   } from 'react-native';

type InfoScreenProps = { onClose: () => void };

export default function ProfileScreen({ onClose }: InfoScreenProps) {
  return (
    <View style={styles.center}>
      <Pressable onPress={onClose}>
        <Text>Cerrar</Text>
      </Pressable>
      <Text>Profile Screen (datos del usuario)</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  center: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'transparent' },
});
