import React from 'react';

import {NavigationContainer, RouteProp} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from './src/screens/home-screen/HomeScreen';
import Icon from 'react-native-vector-icons/Entypo';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';

const Stack = createNativeStackNavigator();
export type HomeStackParamList = {
  ['Home']: undefined;
};
export type HomeStackRouteProp<RouteName extends keyof HomeStackParamList> =
  RouteProp<HomeStackParamList, RouteName>;

const App = () => {
  Icon.loadFont();
  Icon2.loadFont();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          options={{headerShown: false}}
          component={HomeScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
