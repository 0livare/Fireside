import React from 'react'
import styled from 'styled-components/native'
import {ActivityIndicator, StyleSheet} from 'react-native'

import {View, Paper} from '../../components'

export type ImageStackProps = {
  imageUrls: string[]
  isLoading?: boolean
}

export function ImageStack(props: ImageStackProps) {
  const {imageUrls, isLoading} = props

  console.log(`imageUrls`, imageUrls)

  return (
    <Root>
      {isLoading && <ActivityIndicator size="large" />}
      {imageUrls?.slice(0, 2).map((imageUrl, index) => (
        <MainImage
          key={index}
          source={{uri: imageUrl}}
          resizeMode="cover"
          style={{position: 'absolute'}}
          offset={index}
        />
      ))}
    </Root>
  )
}

const styles = StyleSheet.create({
  image: {
    position: 'absolute',
  },
})

const Root = styled(View)`
  width: 80%;
  height: 40%;
`

const MainImage = styled.Image<{offset: number}>`
  width: 100%;
  height: 100%;
  position: 'absolute';
  /* top: ${p => p.offset * 10}px;
  left: ${p => p.offset * 10}px; */
  /* border: 3px solid black; */
  background: white;
  border-radius: 16px;
`
