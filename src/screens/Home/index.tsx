import React from 'react'

import { Container } from '@components'
import { IScreenDefault } from '@interfaces/screen'

const Home: React.FC<{}> & IScreenDefault = () => {
  return <Container></Container>
}

Home.routeName = 'Home'

export default Home
