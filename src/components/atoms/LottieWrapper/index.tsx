import React from 'react'
import LottieView from 'lottie-react-native'
import { omit, pick } from 'ramda'

import Box from '../Box'
import * as LottieFiles from '@assets/lottie'

const lottieProps = ['autoPlay', 'loop', 'colorFilters']

const LottieWrapper = ({ name, ...props }) => (
  <Box
    justifyContent="center"
    alignItems="center"
    {...omit(lottieProps, props)}
  >
    <LottieView source={LottieFiles[name]} {...pick(lottieProps, props)} />
  </Box>
)

export default LottieWrapper
