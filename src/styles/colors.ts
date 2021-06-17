export const colors: any = {
  light: {
    white: '#fff',
    black: '#000',
    transparent: 'transparent',
    background: '#050C11',
  },
}

export const getColor = (colors: any, key: string) => {
  if (!key) return null

  if (key.includes('.') && !key.includes('rgb')) {
    const splited = key.split('.')
    return colors[splited[0]][splited[1]] || '#fff'
  }

  return colors[key] || ((key.includes('rgb') || key.includes('#')) && key)
}
