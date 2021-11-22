import * as React from 'react'
import styled from 'styled-components/native'

import {Text, View} from '../components'

export function MatchesTabScreen() {
  return (
    <Container>
      <Title>(Please pretend there are a list of your matches here)</Title>
    </Container>
  )
}

const Container = styled(View)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
`

const Title = styled(Text)`
  font-size: 20px;
  font-weight: 700;
  padding: 32px;
`

const Separator = styled(View)`
  margin: 30px 0;
  height: 1px;
  width: 80%;
  background-color: #eee;
`
