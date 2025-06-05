import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import BottomBar from './src/components/BottomBar';
import InfoScreen from './src/screens/InfoScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import MoreScreen from './src/screens/MoreScreen';
import MapView2 from './src/screens/TestMap';
import BottomSheet from './src/components/BottomSheet';


console.log('App render')

export default function App() {
  const [overlay, setOverlay] = useState<'none'|'info'|'profile'|'more'>('none');

  const TransparentTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent',
  },
};
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <MapView2 />
        {overlay === 'info' && (
          <InfoScreen onClose={() => setOverlay('none')} />
        )}
        {overlay === 'profile' && (
          <ProfileScreen onClose={() => setOverlay('none')} />
        )}
        {overlay === 'more' && (
          <MoreScreen onClose={() => setOverlay('none')} />
        )}
        <BottomSheet />
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#564',
  },
  boton: {
    backgroundColor: '#4682B4',
    color: 'white',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    fontSize: 16,
    textAlign: 'center',
  },
  bienvenidaContainer: {
  padding: 20,
  alignItems: 'center',
  justifyContent: 'center',
},
imagen: {
  width: 300,
  height: 200,
  marginVertical: 20,
  borderRadius: 10,
},

input: {
  borderColor: '#aaa',
  borderWidth: 1,
  borderRadius: 8,
  padding: 10,
  width: '100%',
  marginBottom: 20,
  fontSize: 16,
}
});

