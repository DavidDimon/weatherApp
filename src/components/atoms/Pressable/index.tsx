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

interface IPressableProps
  extends IColorProps,
    IFlexProps,
    IMarginProps,
    IPaddingProps,
    ISizeProps,
    IBorderProps {}

const Pressable = styled.TouchableOpacity<IPressableProps>`
  ${colorProps}
  ${flexProps}
  ${marginProps}
  ${paddingProps}
  ${sizeProps}
  ${borderProps}
`

export default Pressable
