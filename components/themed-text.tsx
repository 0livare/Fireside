/**
 * Learn more about Light and Dark modes:
 * https://docs.expo.io/guides/color-schemes/
 */

import * as React from 'react'
import {Text as DefaultText} from 'react-native'

import {useThemeColor} from '../hooks'
import {ThemeProps} from './themed-view'

export type TextProps = ThemeProps & DefaultText['props']

export function Text(props: TextProps) {
  const {style, lightColor, darkColor, ...otherProps} = props
  const color = useThemeColor({light: lightColor, dark: darkColor}, 'text')

  return <DefaultText style={[{color}, style]} {...otherProps} />
}
