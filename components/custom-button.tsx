import React from 'react'
import {Pressable, PressableProps} from 'react-native'
import styled from 'styled-components/native'

import {Text, TextProps} from '../components'

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

  return (
    <StyledPressable
      {...rest}
      style={[style, styles.root] as any}
      accessibilityLabel={title || String(children)}
    >
      <Text
        // React native does not support the cascade
        // style={[{color: 'currentColor', fontWeight: 'inherit'}, styles.text]}
        style={styles.text}
      >
        {children}
      </Text>
    </StyledPressable>
  )
}

const StyledPressable = styled(Pressable)`
  justify-content: center;
  align-items: center;
`
