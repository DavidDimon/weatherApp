import React from 'react'

import { Box, Text, Icon } from '@components/atoms'

interface InfoItemProps {
  children: string
  icon: string
  translate?: boolean
  description?: string
  fillColor?: boolean
  strokeColor?: boolean
}

const InfoItem: React.FC<InfoItemProps> = ({
  children,
  icon,
  description,
  strokeColor,
  fillColor,
}) => (
  <Box flexDir="column" alignItems="center">
    <Icon
      name={icon}
      strokeColor={strokeColor ? 'white' : 'transparent'}
      fillColor={fillColor ? 'white' : 'transparent'}
      width={30}
      height={30}
    />
    <Text mr={2} fontSize={5} color="white" translate={false}>
      {children}
    </Text>
    {description && (
      <Text fontSize={3.5} color="grey.300">
        {description}
      </Text>
    )}
  </Box>
)

export default InfoItem
