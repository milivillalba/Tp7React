import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen, TasksScreen } from '../screens';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Tasks" component={TasksScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
