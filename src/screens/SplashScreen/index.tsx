import React from 'react'
import { ActivityIndicator } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import DeviceInfo from 'react-native-device-info'

import { Container } from '@components'
import { IScreenDefault } from '@interfaces/screen'

const SplashScreen: React.FC & IScreenDefault = () => {
  const navigation: any = useNavigation()

  const checkLocationPermission = async () => {
    const enabled = await DeviceInfo.isLocationEnabled()
    if (enabled) {
      navigation.replace('Home')
      return
    }
    navigation.replace('Onboarding')
  }

  React.useEffect(() => {
    checkLocationPermission()
  }, [])

  return (
    <Container alignItems="center" justifyContent="center">
      <ActivityIndicator size="large" color="blue" />
    </Container>
  )
}

SplashScreen.routeName = 'SplashScreen'

export default SplashScreen
