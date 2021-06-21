import React from 'react'

import { Container, Text } from '@components'
import { IScreenDefault } from '@interfaces/screen'
import { useGetLocation } from '@services/api/hooks'

const Home: React.FC & IScreenDefault = () => {
  const { location } = useGetLocation()

  return (
    <Container>
      <Text fontSize={5} translate={false}>
        {location?.city}
      </Text>
    </Container>
  )
}

Home.routeName = 'Home'

export default Home
