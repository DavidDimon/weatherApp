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

interface IContainerProps
  extends IColorProps,
    IFlexProps,
    IMarginProps,
    IPaddingProps,
    ISizeProps,
    IBorderProps {
  children?: any
}

const Container: React.FC<IContainerProps> = ({ children, ...props }) => (
  <Box flex={1} {...props}>
    {children}
  </Box>
)

export default Container
