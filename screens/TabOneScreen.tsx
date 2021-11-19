import React, {useState} from 'react'
import styled from 'styled-components/native'
import {Image, ActivityIndicator, Pressable} from 'react-native'

import {CustomButton} from '../components'
import {colors} from '../constants'
import {RootTabScreenProps} from '../types'
import {getPropertyInfo} from '../api'
import {useGetPropertyInfo} from '../hooks/queries/use-get-property-info'

type TabOneProps = RootTabScreenProps<'TabOne'>

export default function TabOneScreen(props: TabOneProps) {
  const {navigation} = props

  const [imageIndex, setImageIndex] = useState(0)
  const {data: propertyInfo, isLoading} = useGetPropertyInfo({
    city: 'Denver',
    state: 'CO',
  })

  console.log(`propertyInfo`, propertyInfo)
  const uri = propertyInfo?.[imageIndex].photos[0].photoUrl

  return (
    <Container>
      {isLoading && <ActivityIndicator size="large" />}
      {!isLoading && <MainImage source={{uri}} resizeMode="contain" />}
    </Container>
  )
}

const Container = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
`

const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
`

const Separator = styled.View`
  margin: 30px 0;
  height: 1px;
  width: 80%;
`
