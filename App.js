import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './src/screen/Home';

const RootStack = createStackNavigator()

const App=()=>{
  return(
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{headerShown:false}}>
        <RootStack.Screen
          name={'Home'}
          component={Home}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  )
}


export default App;

