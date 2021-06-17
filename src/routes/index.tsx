import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import * as routes from '@screens'

const Stack = createStackNavigator()

const Navigator = () => {
  return (
    <Stack.Navigator initialRouteName="SplashScreen" headerMode="none">
      {Object.keys(routes).map((key, index) => (
        <Stack.Screen
          key={`route_${index}`}
          name={routes[key].routeName}
          component={routes[key].component}
        />
      ))}
    </Stack.Navigator>
  )
}

export default Navigator
