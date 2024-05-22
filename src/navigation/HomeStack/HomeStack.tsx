import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../../screens/home/HomeScreen';
import DetailScreen from '../../screens/detail/DetailScreen';
import NoteScreen from '../../screens/note/NoteScreen';
import SearchScreen from '../../screens/search/SearchScreen';

const Stack = createStackNavigator();

export const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="HomeScreen">
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="DetailScreen" component={DetailScreen} />
      <Stack.Screen name="NoteScreen" component={NoteScreen} />
      <Stack.Screen name="SearchScreen" component={SearchScreen} />
    </Stack.Navigator>
  );
};
