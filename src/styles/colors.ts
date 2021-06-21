export const colors: any = {
  light: {
    white: '#fff',
    black: '#000',
    transparent: 'transparent',
    background: '#fff',
    brand: '#8483FF',
    textDark: '#000',
    textMedium: '#90AAAD',
    textLight: '#fff',
    grey: {
      '100': '#FAFAFA',
      '200': '#E2E9E9',
      '300': '#C4D3D4',
      '400': '#90AAAD',
      '500': '#6C9093',
      '600': '#577375',
    },
  },
  dark: {
    white: '#fff',
    black: '#000',
    transparent: 'transparent',
    background: '#1C2638',
    brand: '#9C3DF3',
    textDark: '#fff',
    textMedium: '#90AAAD',
    textLight: '#000',
    grey: {
      '100': '#FAFAFA',
      '200': '#E2E9E9',
      '300': '#C4D3D4',
      '400': '#90AAAD',
      '500': '#6C9093',
      '600': '#577375',
    },
  },
}

export const getColor = (colors: any, key?: string) => {
  if (!key) return null

  if (key.includes('.') && !key.includes('rgb')) {
    const splited = key.split('.')
    return colors[splited[0]][splited[1]] || '#fff'
  }

  return colors[key] || ((key.includes('rgb') || key.includes('#')) && key)
}
