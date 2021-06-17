import styled from 'styled-components/native'

import {
  colorProps,
  IColorProps,
  marginProps,
  IMarginProps,
  paddingProps,
  IPaddingProps,
  sizeProps,
  ISizeProps,
} from '@styles/styledSystem'

export const StyledText = styled.Text<
  IColorProps & IMarginProps & IPaddingProps & ISizeProps
>`
  ${colorProps}
  ${marginProps}
  ${paddingProps}
  ${sizeProps}
`
