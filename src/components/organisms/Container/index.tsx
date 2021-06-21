import React from 'react'

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

const Container: React.FC<IContainerProps> = ({ children, ...props }) => (
  <SafeArea flex={1} {...props}>
    {children}
  </SafeArea>
)

export default Container
