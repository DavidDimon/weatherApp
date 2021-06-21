export const colors: any = {
  light: {
    white: '#fff',
    black: '#000',
    transparent: 'transparent',
    background: '#050C11',
    brand: '#42858C',
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

export const getColor = (colors: any, key: string) => {
  if (!key) return null

  if (key.includes('.') && !key.includes('rgb')) {
    const splited = key.split('.')
    return colors?.light[splited[0]][splited[1]] || '#fff'
  }

  return (
    colors?.light[key] || ((key.includes('rgb') || key.includes('#')) && key)
  )
}
