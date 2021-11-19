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
      <ButtonContainer>
        <DislikeButton title="dislike">Pass</DislikeButton>
        <LikeButton title="like">Hot</LikeButton>
      </ButtonContainer>
    </Container>
  )
}

const Container = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
`

const MainImage = styled.Image`
  width: 80%;
  height: 40%;
`

const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  margin-top: 100px;
  width: 100%;
`

const VoteButton = styled(CustomButton)`
  border-radius: 50%;
  width: 100px;
  height: 100px;
  color: white;
  font-weight: bold;
  font-size: 16px;
`

const LikeButton = styled(VoteButton)`
  background-color: ${colors.green};
`

const DislikeButton = styled(VoteButton)`
  background-color: ${colors.red};
`
