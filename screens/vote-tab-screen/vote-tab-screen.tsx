import React from 'react'
import styled from 'styled-components/native'
import Toast from 'react-native-toast-message'

import {CustomButton, View, Text} from '../../components'
import {Listing, RootTabScreenProps} from '../../types'
import {useMatchAlgorithm} from '../../hooks'
import {ImageStack} from './image-stack'
import {LikeButton, DislikeButton} from './vote-button'

type TabOneProps = RootTabScreenProps<'Vote'>

export function VoteTabScreen(props: TabOneProps) {
  const {navigation} = props

  function onMatch(listing: Listing) {
    console.info('Matched with!', listing)
    Toast.show({
      type: 'success',
      text1: 'Oooo yea, you got a new match! 🔥',
      text2: 'You can go check it out on the matches page whenever',
    })
  }

  const {isLoading, imageUrls, like, dislike} = useMatchAlgorithm({
    city: 'Denver',
    state: 'CO',
    onMatch,
  })

  const noResults = !isLoading && imageUrls?.length === 0

  return (
    <Container>
      <ContentArea>
        {noResults && <Text>No houses found for your search criteria</Text>}
        {!noResults && (
          <ImageStack isLoading={isLoading} imageUrls={imageUrls} />
        )}
      </ContentArea>

      <ButtonContainer>
        <DislikeButton title="dislike" onPress={dislike}>
          Pass
        </DislikeButton>
        <LikeButton title="like" onPress={like}>
          Hot
        </LikeButton>
      </ButtonContainer>
    </Container>
  )
}

const Container = styled(View)`
  align-items: center;
  justify-content: flex-start;
  flex: 1;
`

const ContentArea = styled(View)`
  width: 100%;
  height: 80%;
  justify-content: center;
  align-items: center;
`

const ButtonContainer = styled(View)`
  flex-direction: row;
  justify-content: space-around;
  margin-top: 30px;
  width: 100%;
`
