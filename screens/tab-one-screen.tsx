import React, {useState} from 'react'
import styled from 'styled-components/native'
import {ActivityIndicator} from 'react-native'

import {CustomButton, View} from '../components'
import {RootTabScreenProps} from '../types'
import {useGetPropertyInfo} from '../hooks/queries/use-get-property-info'

type TabOneProps = RootTabScreenProps<'TabOne'>

export function TabOneScreen(props: TabOneProps) {
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

const Container = styled(View)`
  align-items: center;
  justify-content: center;
  flex: 1;
`

const MainImage = styled.Image`
  width: 80%;
  height: 40%;
`

const ButtonContainer = styled(View)`
  flex-direction: row;
  justify-content: space-around;
  margin-top: 100px;
  width: 100%;
`

function UnstyledVoteButton(props) {
  return (
    <CustomButton
      {...props}
      styles={{text: {color: 'white', fontWeight: 'bold', fontSize: 16}}}
    />
  )
}

const VoteButton = styled(UnstyledVoteButton)`
  width: 100px;
  height: 100px;
  border-radius: 50px;
`

const LikeButton = styled(VoteButton)`
  background-color: ${p => p.theme.green};
`

const DislikeButton = styled(VoteButton)`
  background-color: ${p => p.theme.red};
`
