import { wp, hp } from './metrics'
import { getColor } from './colors'

export interface IPaddingProps {
  p?: string | number
  ph?: string | number
  pv?: string | number
  pr?: string | number
  pl?: string | number
  pt?: string | number
  pb?: string | number
}

export const paddingProps = ({ p, ph, pv, pr, pl, pt, pb }: IPaddingProps) => `
    ${p ? `padding: ${hp(p)};` : ''}
    ${ph ? `padding-horizontal: ${wp(ph)};` : ''}
    ${pv ? `padding-vertical: ${hp(pv)};` : ''}
    ${pr ? `padding-right: ${wp(pr)};` : ''}
    ${pl ? `padding-left: ${wp(pl)};` : ''}
    ${pt ? `padding-top: ${hp(pt)};` : ''}
    ${pb ? `padding-bottom: ${hp(pb)};` : ''}
  `

export interface IMarginProps {
  m?: string | number
  mh?: string | number
  mv?: string | number
  mr?: string | number
  ml?: string | number
  mt?: string | number
  mb?: string | number
}

export const marginProps = ({ m, mh, mv, mr, ml, mt, mb }: IMarginProps) => `
    ${m ? `margin: ${hp(m)};` : ''}
    ${mh ? `margin-horizontal: ${wp(mh)};` : ''}
    ${mv ? `margin-vertical: ${hp(mv)};` : ''}
    ${mr ? `margin-right: ${wp(mr)};` : ''}
    ${ml ? `margin-left: ${wp(ml)};` : ''}
    ${mt ? `margin-top: ${hp(mt)};` : ''}
    ${mb ? `margin-bottom: ${hp(mb)};` : ''}
  `

export interface ISizeProps {
  height?: string | number
  width?: string | number
  maxHeight?: string | number
  maxWidth?: string | number
  fontSize?: string | number
  fluid?: 'vertical' | 'horizontal' | boolean
  overflow?: 'hidden' | 'scroll' | null
}

export const sizeProps = ({
  height,
  width,
  maxHeight,
  maxWidth,
  fontSize,
  fluid,
  overflow,
}: ISizeProps) => `
  ${height ? `height: ${hp(height)};` : ''}
  ${width ? `width: ${wp(width)};` : ''}
  ${maxHeight ? `max-height: ${hp(maxHeight)};` : ''}
  ${maxWidth ? `max-width: ${wp(maxWidth)};` : ''}
  ${fontSize ? `font-size: ${wp(fontSize)};` : ''}
  ${fluid ? (fluid === 'vertical' ? 'height: 100%;' : 'width: 100%;') : ''}
  ${overflow ? `overflow: ${overflow};` : ''}
  `

export interface IColorProps {
  color?: string
  bgColor?: string
  theme?: any
}

export const colorProps = ({ color, bgColor, theme }: IColorProps) => `
  ${color ? `color: ${getColor(theme.colors, color)};` : ''}
  ${bgColor ? `background-color: ${getColor(theme.colors, bgColor)};` : ''}
  `

export interface IFlexProps {
  flex?: number
  flexGrow?: number
  flexDir?: 'row' | 'column' | 'column-reverse' | 'row-reverse'
  flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse'
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline'
  alignSelf?: string
}

export const flexProps = ({
  flex,
  flexDir,
  flexGrow,
  flexWrap,
  justifyContent,
  alignItems,
  alignSelf,
}: IFlexProps) => `
  ${flex ? `flex: ${flex};` : ''}
  ${flexDir ? `flex-direction: ${flexDir};` : ''}
  ${flexGrow ? `flex-grow: ${flexGrow};` : ''}
  ${flexWrap ? `flex-wrap: ${flexWrap};` : ''}
  ${justifyContent ? `justify-content: ${justifyContent};` : ''}
  ${alignItems ? `align-items: ${alignItems};` : ''}
  ${alignSelf ? `align-self: ${alignSelf};` : ''}
`

export interface IFontProps {
  underline?: boolean
  align?: string
}

export const fontProps = ({ underline, align }: IFontProps) => `
  ${underline ? `text-decoration-line: underline;` : ''}
  ${align ? `text-align: ${align};` : ''}
`

export interface IBorderProps {
  borderWidth?: number
  borderTopWidth?: number
  borderBottomWidth?: number
  borderLeftWidth?: number
  borderRightWidth?: number
  radius?: number
  topLeftRadius?: number
  topRightRadius?: number
  bottomRightRadius?: number
  bottomLeftRadius?: number
  borderColor?: string
  theme?: any
}

export const borderProps = ({
  borderWidth,
  borderTopWidth,
  borderBottomWidth,
  borderLeftWidth,
  borderRightWidth,
  radius,
  topLeftRadius,
  topRightRadius,
  bottomRightRadius,
  bottomLeftRadius,
  borderColor,
  theme,
}: IBorderProps) => `
  ${borderWidth ? `border-width: ${borderWidth}px;` : ''}
  ${borderTopWidth ? `border-top-width: ${borderTopWidth}px;` : ''}
  ${borderBottomWidth ? `border-bottom-width: ${borderBottomWidth}px;` : ''}
  ${borderLeftWidth ? `border-left-width: ${borderLeftWidth}px;` : ''}
  ${borderRightWidth ? `border-right-width: ${borderRightWidth}px;` : ''}
  ${radius ? `border-radius: ${radius}px;` : ''}
  ${topLeftRadius ? `border-top-left-radius: ${topLeftRadius}px;` : ''}
  ${topRightRadius ? `border-top-right-radius: ${topRightRadius}px;` : ''}
  ${
    bottomRightRadius
      ? `border-bottom-right-radius: ${bottomRightRadius}px;`
      : ''
  }
  ${bottomLeftRadius ? `border-bottom-left-radius: ${bottomLeftRadius}px;` : ''}
  ${borderColor ? `border-color: ${getColor(theme.colors, borderColor)};` : ''}
`
