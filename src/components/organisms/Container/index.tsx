import React from 'react'

import { Box } from '@components/atoms'
import {
  IColorProps,
  IFlexProps,
  IMarginProps,
  IPaddingProps,
  ISizeProps,
  IBorderProps,
} from '@styles/styledSystem'
import { SafeArea } from './styles'

interface IContainerProps
  extends IColorProps,
    IFlexProps,
    IMarginProps,
    IPaddingProps,
    ISizeProps,
    IBorderProps {
  children?: any
}

const Container: React.FC<IContainerProps> = ({
  children,
  bgColor,
  ...props
}) => (
  <SafeArea flex={1} bgColor={bgColor || 'background'}>
    <Box flexDir="column" flex={1} bgColor={bgColor || 'background'} {...props}>
      {children}
    </Box>
  </SafeArea>
)

export default Container
