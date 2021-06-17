import styled from 'styled-components/native'

import {
  colorProps,
  IColorProps,
  flexProps,
  IFlexProps,
  marginProps,
  IMarginProps,
  paddingProps,
  IPaddingProps,
  sizeProps,
  ISizeProps,
  borderProps,
  IBorderProps,
} from '@styles/styledSystem'

interface IBoxProps
  extends IColorProps,
    IFlexProps,
    IMarginProps,
    IPaddingProps,
    ISizeProps,
    IBorderProps {}

const Box = styled.View<IBoxProps>`
  ${colorProps}
  ${flexProps}
  ${marginProps}
  ${paddingProps}
  ${sizeProps}
  ${borderProps}
`

export default Box
