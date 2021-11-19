const tintColorLight = '#2f95dc'
const tintColorDark = '#fff'

export type ThemedColors = {
  text: string
  background: string
  tint: string
  tabIconDefault: string
  tabIconSelected: string
}

export type ConstantColors = {
  red: string
  green: string
}

export type ColorPalette = ThemedColors & ConstantColors

export const colors: ConstantColors & {
  light: ThemedColors
  dark: ThemedColors
} = {
  light: {
    text: '#000',
    background: '#fff',
    tint: tintColorLight,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#fff',
    background: '#000',
    tint: tintColorDark,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorDark,
  },

  red: '#FF7679',
  green: '#65CD97',
}
