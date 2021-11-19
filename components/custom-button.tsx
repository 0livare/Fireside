import React from 'react'
import {Pressable, PressableProps} from 'react-native'
import styled from 'styled-components/native'

import {Text, TextProps} from '../components/themed-text'
import {cs} from '../util'

export type CustomButtonProps = PressableProps & {
  children: TextProps['children']
  styles?: {
    root?: PressableProps['style']
    text?: TextProps['style']
  }
  title?: string
}

export function CustomButton(props: CustomButtonProps) {
  const {children, style, styles = {}, title, ...rest} = props
  const childIsString = typeof children === 'string'

  return (
    <Pressable
      {...rest}
      style={cs([
        style,
        styles.root,
        {justifyContent: 'center', alignItems: 'center'},
      ])}
      accessibilityLabel={title || childIsString ? String(children) : ''}
    >
      {childIsString && (
        <Text
          // React native does not support the cascade
          // style={[{color: 'currentColor', fontWeight: 'inherit'}, styles.text]}
          style={styles.text}
        >
          {children}
        </Text>
      )}
      {!childIsString && children}
    </Pressable>
  )
}
