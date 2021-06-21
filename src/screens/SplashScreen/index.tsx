import React from 'react'
import { ActivityIndicator } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { Container } from '@components'
import { IScreenDefault } from '@interfaces/screen'
import { useGetLocation } from '@services/api/hooks'

const SplashScreen: React.FC & IScreenDefault = () => {
  const navigation: any = useNavigation()
  const { loading, statusPermission } = useGetLocation()

  const checkLocationPermission = async () => {
    if (loading) return

    if (statusPermission) {
      navigation.replace('Home')
      return
    }
    navigation.replace('Onboarding')
  }

  React.useEffect(() => {
    checkLocationPermission()
  }, [loading])

  return (
    <Container alignItems="center" justifyContent="center">
      <ActivityIndicator size="large" color="blue" />
    </Container>
  )
}

SplashScreen.routeName = 'SplashScreen'

export default SplashScreen
