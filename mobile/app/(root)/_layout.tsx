import { Redirect, Stack } from 'expo-router'
import { useAuth } from '@clerk/clerk-expo'

export default function Layout() {
  const { isLoaded, isSignedIn } = useAuth()

  // Wait for Clerk to finish loading before deciding where to go
  if (!isLoaded) return null

  // If the user is signed out, push them to the auth stack instead of looping on "/"
  if (!isSignedIn) {
    return <Redirect href="/(auth)/sign-in" />
  }

  return <Stack screenOptions={{headerShown:false}}/>
}
