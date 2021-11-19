import * as React from 'react'
import styled from 'styled-components/native'

import EditScreenInfo from '../components/EditScreenInfo'
import {Text, View} from '../components'

export function TabTwoScreen() {
  return (
    <Container>
      <Title>Tay is cool</Title>
      <Separator />
      <EditScreenInfo path="/screens/TabTwoScreen.tsx" />
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
`

const Separator = styled(View)`
  margin: 30px 0;
  height: 1px;
  width: 80%;
  background-color: #eee;
`
