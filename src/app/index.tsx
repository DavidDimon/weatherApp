import 'react-native-gesture-handler'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import FlashMessage from 'react-native-flash-message'

import Navigator from '@routes'
import { colors, wp, hp } from '@styles'

const App = () => (
  <ThemeProvider theme={{ colors, wp, hp }}>
    <Navigator />
    <FlashMessage position="top" />
  </ThemeProvider>
)

export default App
