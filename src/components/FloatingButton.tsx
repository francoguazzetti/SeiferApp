import { Pressable, StyleSheet, Text } from 'react-native';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type Props = { onPress: () => void };

export default function FloatingButton({onPress} : Props) {
     const tabBarHeight = useBottomTabBarHeight();
     const { bottom: insetBottom } = useSafeAreaInsets();
     const bottomOffset = tabBarHeight - 200;
    return (
        <Pressable style={[styles.fab, { bottom: bottomOffset }]} onPress = {onPress}>
            <Text style={styles.label}>S</Text>
        </Pressable>
    )
}


const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    alignSelf: 'center',
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: '#CB6730',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
  },
  label: { color: '#fff', fontSize: 36, fontWeight: 'bold' },
});