import React from 'react'

import {
  IColorProps,
  IMarginProps,
  IPaddingProps,
  ISizeProps,
  IFontProps,
} from '@styles/styledSystem'
import { translate as t } from '@services/locale'
import { StyledText } from './styles'

interface ITextProps
  extends IColorProps,
    IMarginProps,
    IPaddingProps,
    ISizeProps,
    IFontProps {
  children?: string | any
  translate?: boolean
}

const Text: React.FC<ITextProps> = ({
  children,
  translate = true,
  ...props
}) => (
  <StyledText fontSize={4} {...props}>
    {translate && typeof children === 'string' ? t(children) : children}
  </StyledText>
)

export default Text
