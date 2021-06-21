import 'react-native-gesture-handler'
import React from 'react'
import { useColorScheme } from 'react-native'
import { ThemeProvider } from 'styled-components'
import FlashMessage from 'react-native-flash-message'

import Navigator from '@routes'
import { colors, wp, hp } from '@styles'

const App = () => {
  const isDarkMode = useColorScheme() === 'dark'
  return (
    <ThemeProvider
      theme={{ colors: colors[isDarkMode ? 'dark' : 'light'], wp, hp }}
    >
      <Navigator />
      <FlashMessage position="top" />
    </ThemeProvider>
  )
}

export default App
