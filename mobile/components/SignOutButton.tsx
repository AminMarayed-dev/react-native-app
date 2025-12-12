import { styles } from '@/assets/styles/home.styles'
import { useClerk } from '@clerk/clerk-expo'
import {  Alert, TouchableOpacity } from 'react-native'


import { Ionicons } from "@expo/vector-icons";
import { COLORS } from '@/constants/colors';

export const SignOutButton = () => {
  // Use `useClerk()` to access the `signOut()` function
  const { signOut } = useClerk()
  const handleSignOut = async () => {
    // try {
    //   await signOut()
    // } catch (err) {
    //   // See https://clerk.com/docs/custom-flows/error-handling
    //   // for more info on error handling
    //   console.error(JSON.stringify(err, null, 2))
    // }

    Alert.alert("logout", "Are you sure you want to logout?", [
      {text:"Cancel", style:"cancel"},
      {text:"Logout", style:"destructive", onPress:signOut}
    ])
  }
  return (
    <TouchableOpacity onPress={handleSignOut} style={styles.logoutButton}>
      <Ionicons name="log-out-outline" size={22} color={COLORS.text} />
    </TouchableOpacity>
  )
}