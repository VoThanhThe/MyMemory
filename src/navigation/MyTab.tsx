import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HomeScreen from '../screens/home/HomeScreen';
import SettingScreen from '../screens/setting/SettingScreen';
import { Text, View } from 'react-native';
import BrowerScreen from '../screens/brower/BrowerScreen';

const Tab = createMaterialTopTabNavigator();

export function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Setting" component={SettingScreen} />
      <Tab.Screen name="Brower" component={BrowerScreen} />
    </Tab.Navigator>
    // <View>
    //     <Text>hees</Text>
    // </View>
  );
}