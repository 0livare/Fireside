import React from 'react'
import styled from 'styled-components/native'
import {ActivityIndicator, StyleSheet} from 'react-native'

import {View} from '../../components'

export type ImageStackProps = {
  imageUrls: Array<string | undefined> | undefined
  isLoading?: boolean
}

export function ImageStack(props: ImageStackProps) {
  const {imageUrls, isLoading} = props

  return (
    <Root>
      <ActivityIndicator size="large" />
      {!isLoading &&
        imageUrls?.map((imageUrl, index) => (
          <MainImage
            key={imageUrl}
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
  width: 100%;
  height: 100%;
`

const MainImage = styled.Image<{offset: number}>`
  width: 100%;
  height: 100%;
  background: white;
  /* border-radius: 16px; */
  background: transparent;
`
