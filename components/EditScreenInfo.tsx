import * as WebBrowser from 'expo-web-browser'
import React from 'react'
import {TouchableOpacity, Text, View} from 'react-native'
import styled from 'styled-components/native'

export default function EditScreenInfo({path}: {path: string}) {
  return (
    <View>
      <GetStartedContainer>
        <GetStartedText>Open up the code for this screen:</GetStartedText>

        <HomeScreenFilename>
          <Text>{path}</Text>
        </HomeScreenFilename>

        <GetStartedText>
          Change any of the text, save the file, and your app will automatically
          update.
        </GetStartedText>
      </GetStartedContainer>

      <HelpContainer>
        <HelpLink onPress={handleHelpPress}>
          <HelpLinkText>
            Tap here if your app doesn't automatically update after making
            changes
          </HelpLinkText>
        </HelpLink>
      </HelpContainer>
    </View>
  )
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/get-started/create-a-new-app/#opening-the-app-on-your-phonetablet',
  )
}

const GetStartedContainer = styled.View`
  display: flex;
  align-items: center;
  margin: 0 50px;
`

const HomeScreenFilename = styled.View`
  margin: 0 7px;
  border-radius: 3px;
  padding: 0 4px;
`

const GetStartedText = styled.Text`
  font-size: 17px;
  line-height: 24px;
  text-align: center;
`

const HelpContainer = styled.View`
  margin: 0 20px;
  margin-top: 15px;
  align-items: center;
`

const HelpLink = styled(TouchableOpacity)`
  padding: 15px 0;
`

const HelpLinkText = styled.Text`
  text-align: center;
`
