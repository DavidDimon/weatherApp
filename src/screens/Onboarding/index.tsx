import React from 'react'
import { useNavigation } from '@react-navigation/native'

import { Container, LottieWrapper, Text, Button } from '@components'
import { IScreenDefault } from '@interfaces/screen'
import { useGetLocation } from '@services/api/hooks'

const Onboarding: React.FC & IScreenDefault = () => {
  const navigation: any = useNavigation()
  const { location, requestPermission } = useGetLocation()

  React.useEffect(() => {
    if (location) navigation.replace('Home')
  }, [location])

  return (
    <Container alignItems="center" flexDir="column">
      <LottieWrapper
        width={70}
        height={30}
        name="location"
        loop={false}
        mt={10}
        autoPlay
      />
      <Text weight="bold" fontSize={5}>
        {'enable_location'}
      </Text>

      <Text
        fontSize={4.5}
        color="grey.600"
        maxWidth="70%"
        mt={2}
        align="center"
      >
        {'enable_location_description'}
      </Text>

      <Button mt={4} fluid={false} onPress={requestPermission}>
        {'request_permission'}
      </Button>
    </Container>
  )
}

Onboarding.routeName = 'Onboarding'

export default Onboarding
