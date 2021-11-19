import {StatusBar} from 'expo-status-bar'
import React from 'react'
import {SafeAreaProvider} from 'react-native-safe-area-context'
import {QueryClient, QueryClientProvider} from 'react-query'
import {ThemeProvider} from 'styled-components/native'
import Toast from 'react-native-toast-message'

import {useColorScheme, useCachedResources, useColorPalette} from './hooks'
import Navigation from './navigation/navigation'

export default function App() {
  const isLoadingComplete = useCachedResources()
  const colorScheme = useColorScheme()

  if (!isLoadingComplete) return null

  return (
    <Providers>
      <Navigation colorScheme={colorScheme} />
      <StatusBar />
      <Toast />
    </Providers>
  )
}

const queryClient = new QueryClient()

function Providers(props: {children: any}) {
  const theme = useColorPalette()

  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          {props.children}
        </QueryClientProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  )
}
