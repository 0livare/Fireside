import React from 'react'
import {MaterialIcons} from '@expo/vector-icons'
import tinycolor from 'tinycolor2'

import {CustomButton, CustomButtonProps} from '../../components'
import {useColorPalette} from '../../hooks'

type VoteButtonProps = Omit<CustomButtonProps, 'children'> & {
  direction: 'up' | 'down'
  color: string
}

function VoteButton(props: VoteButtonProps) {
  const {direction, color, ...rest} = props

  return (
    <CustomButton
      {...rest}
      styles={{
        text: {color: 'white', fontWeight: 'bold', fontSize: 16},
        root: ({pressed}) => ({
          backgroundColor: pressed
            ? tinycolor(props.color).darken().toHexString()
            : props.color,
          background: 'red',
          width: 72,
          height: 72,
          borderRadius: 999,
        }),
      }}
    >
      <MaterialIcons
        name={direction === 'up' ? 'thumb-up' : 'thumb-down'}
        style={{color: 'white', fontSize: 32}}
      />
    </CustomButton>
  )
}

export function LikeButton(props: CustomButtonProps) {
  const colors = useColorPalette()
  return <VoteButton {...props} color={colors.green} direction="up" />
}

export function DislikeButton(props: CustomButtonProps) {
  const colors = useColorPalette()
  return <VoteButton {...props} color={colors.red} direction="down" />
}
