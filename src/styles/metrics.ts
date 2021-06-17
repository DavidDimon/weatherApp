import {
  widthPercentageToDP,
  heightPercentageToDP,
} from 'react-native-responsive-screen'

export const wp = (width: string | number, noCalc?: boolean) => {
  if (noCalc) return width

  const value = typeof width === 'number' ? `${width}%` : width

  return widthPercentageToDP(value)
}

export const hp = (height: string | number, noCalc?: boolean) => {
  if (noCalc) return height

  const value = typeof height === 'number' ? `${height}%` : height

  return heightPercentageToDP(value)
}
