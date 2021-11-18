import * as React from 'react'
import styled from 'styled-components/native'

import EditScreenInfo from '../components/EditScreenInfo'
import {RootTabScreenProps} from '../types'
import {getPropertyInfo} from '../api'

type TabOneProps = RootTabScreenProps<'TabOne'>

export default function TabOneScreen(props: TabOneProps) {
  const {navigation} = props

  React.useEffect(() => {
    async function fetchData() {
      let res = await getPropertyInfo()
      console.log(`res`, res)
    }

    fetchData()
  }, [])

  return (
    <Container>
      <Title>Zach is cool</Title>
      <Separator />
      <EditScreenInfo path="/screens/TabOneScreen.tsx" />
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
