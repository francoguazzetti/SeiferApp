import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import InfoScreen    from '../screens/InfoScreen';
import ProfileScreen from '../screens/ProfileScreen';
import MoreScreen    from '../screens/MoreScreen';
import { Ionicons }  from '@expo/vector-icons';
import FloatingButton from '../components/FloatingButton';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

/*
const Tab = createBottomTabNavigator();

export default function BottomTabs() {
    const { bottom: insetBottom } = useSafeAreaInsets();
  return (
    < Tab.Navigator
        initialRouteName="Map"
        screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#CB6730',   // naranja activo
        tabBarInactiveTintColor: '#888',    // gris inactivo 
        tabBarStyle: {
            height: 150 + insetBottom, // altura de la barra de pestañas
            paddingBottom: insetBottom, // espacio para el área segura
        },
    }} >
        <Tab.Screen
        name="Info"
        component={InfoScreen}
        options={{
            tabBarIcon: ({ color, size, focused }) => (
            <Ionicons name="alert-circle" 
            color={color}
            size={focused ? size + 6 : size} />
            ),
        }}
        />
        <Tab.Screen
            name="Map"
            component={MapScreen}
            options={{ tabBarIcon: () => null }}
        />
        <Tab.Screen
            name="MoreScreen"
            component={MoreScreen}
            options={{ tabBarIcon: () => null }}
        />
        <Tab.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
                tabBarIcon: ({ color, size, focused }) => (
                <Ionicons name="person-outline" 
                color={color}
                size={focused ? size + 6 : size} />
                ),
        }}
        />
    </Tab.Navigator>
  )
}
*/
