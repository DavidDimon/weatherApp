import React from 'react'

import Pressable from '../Pressable'
import Text from '../Text'
import {
  IBorderProps,
  IColorProps,
  IFlexProps,
  IMarginProps,
  IPaddingProps,
  ISizeProps,
} from '@styles/styledSystem'

interface IButtonTypes {
  Outline: any
}

interface IButtonProps
  extends IColorProps,
    IMarginProps,
    IPaddingProps,
    IFlexProps,
    IBorderProps,
    ISizeProps {
  translate?: boolean
  children: any
  onPress?: () => void
}

const Button: React.FC<IButtonProps> & IButtonTypes = ({
  children,
  color,
  ...props
}) => (
  <Pressable
    radius={8}
    borderWidth={1}
    borderColor="transparent"
    bgColor="brand"
    justifyContent="center"
    alignItems="center"
    pv={2}
    ph={4}
    fluid
    {...props}
  >
    {typeof children === 'string' ? (
      <Text fontSize={4} weight="bold" color={color || 'white'}>
        {children}
      </Text>
    ) : (
      children
    )}
  </Pressable>
)

Button.Outline = ({ children, ...props }) => (
  <Button
    bgColor="transparent"
    borderColor={props?.bgColor || 'brand'}
    color={props?.color || 'brand'}
    {...props}
  >
    {children}
  </Button>
)

export default Button
