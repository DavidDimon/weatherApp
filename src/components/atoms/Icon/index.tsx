import React from 'react'
import { useTheme } from 'styled-components'
import { omit, pick } from 'ramda'

import * as icons from '@assets/icons'
import Box from '../Box'
import { getColor } from '@styles/colors'
import { IMarginProps, IPaddingProps, ISizeProps } from '@styles/styledSystem'

interface IconProps extends IMarginProps, IPaddingProps, ISizeProps {
  name: string
  color?: string
  fillColor?: string
  strokeColor?: string
}

const Icon: React.FC<IconProps> = ({
  name,
  color,
  fillColor,
  strokeColor,
  ...props
}) => {
  const theme: any = useTheme()
  const IconSVG = icons[name]
  const parsedFillColor = React.useMemo(
    () => getColor(theme.colors, fillColor),
    [theme, fillColor]
  )
  const parsedStrokeColor = React.useMemo(
    () => getColor(theme.colors, strokeColor || color),
    [theme, strokeColor, color]
  )

  return (
    <Box {...omit(['height', 'width'], props)}>
      {!!IconSVG && (
        <IconSVG
          {...pick(['height', 'width'], props)}
          fill={parsedFillColor || 'transparent'}
          stroke={parsedStrokeColor || theme.black}
        />
      )}
    </Box>
  )
}

export default Icon
