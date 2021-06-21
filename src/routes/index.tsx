import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import * as routes from '@screens'

const Stack = createStackNavigator()

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen" headerMode="none">
        {Object.keys(routes).map((key, index) => (
          <Stack.Screen
            key={`route_${index}`}
            name={routes[key].routeName}
            component={routes[key]}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigator
