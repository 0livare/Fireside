/**
 * Learn more about Light and Dark modes:
 * https://docs.expo.io/guides/color-schemes/
 */

import React from 'react'
import {View as DefaultView} from 'react-native'

import {useThemeColor} from '../hooks'

export type ThemeProps = {
  lightColor?: string
  darkColor?: string
}

export type ViewProps = ThemeProps & DefaultView['props']

export function View(props: ViewProps) {
  const {style, lightColor, darkColor, ...otherProps} = props
  const backgroundColor = useThemeColor(
    {light: lightColor, dark: darkColor},
    'background',
  )

  return <DefaultView style={[{backgroundColor}, style]} {...otherProps} />
}
