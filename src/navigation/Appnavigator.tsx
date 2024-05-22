import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/home/HomeScreen';
import SettingScreen from '../screens/setting/SettingScreen';
import ExploreScreen from '../screens/explore/ExploreScreen';
import BrowserScreen from '../screens/brower/BrowerScreen';
import { HomeStack } from './HomeStack/HomeStack';
import  Ionicons  from 'react-native-vector-icons/Ionicons';
import { Colors } from '../contants/Theme';
const Tab = createBottomTabNavigator();

export function AppNavigator() {
  return (
    <Tab.Navigator screenOptions={({route}) => ({
      tabBarIcon: ({focused, color, size}) => {
        let iconName = 'home-outline'; // giá trị mặc định

        if (route.name === 'Home') {
          iconName = focused ? 'home' : 'home-outline';
        } else if (route.name === 'Explore') {
          iconName = focused ? 'bookmark' : 'bookmark-outline';
        } else if (route.name === 'Browser') {
          iconName = focused ? 'browsers' : 'browsers-outline';
        } else if (route.name === 'OfferScreen') {
          iconName = focused ? 'pricetag' : 'pricetag-outline';
        } else if (route.name === 'Setting') {
          iconName = focused ? 'settings' : 'settings-outline';
        }

        // You can return any component that you like here!
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: Colors.LIGTH_COLOR.PRIMARY,
      tabBarInactiveTintColor: '#4E4B66',
      // tabBarLabelStyle: {
      //   fontSize: 14,
      //   color: '#4E4B66',
      // },
      headerShown: false,
    })} initialRouteName="Home">
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Explore" component={ExploreScreen} />
      <Tab.Screen name="Browser" component={BrowserScreen} />
      <Tab.Screen name="Setting" component={SettingScreen} />
    </Tab.Navigator>
  );
}
