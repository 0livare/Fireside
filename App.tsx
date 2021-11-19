import {StatusBar} from 'expo-status-bar'
import React from 'react'
import {SafeAreaProvider} from 'react-native-safe-area-context'
import {QueryClient, QueryClientProvider} from 'react-query'

import useCachedResources from './hooks/useCachedResources'
import useColorScheme from './hooks/useColorScheme'
import Navigation from './navigation'

export default function App() {
  const isLoadingComplete = useCachedResources()
  const colorScheme = useColorScheme()

  if (!isLoadingComplete) return null

  return (
    <Providers>
      <Navigation colorScheme={colorScheme} />
      <StatusBar />
    </Providers>
  )
}

const queryClient = new QueryClient()

function Providers(props: {children: any}) {
  return (
    <SafeAreaProvider>
      <QueryClientProvider client={queryClient}>
        {props.children}
      </QueryClientProvider>
    </SafeAreaProvider>
  )
}
