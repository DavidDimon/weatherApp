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
  fontProps,
  IFontProps,
} from '@styles/styledSystem'

interface ITextProps
  extends IFontProps,
    IColorProps,
    IMarginProps,
    IPaddingProps,
    ISizeProps {}

export const StyledText = styled.Text<ITextProps>`
  ${fontProps}
  ${colorProps}
  ${marginProps}
  ${paddingProps}
  ${sizeProps}
`
