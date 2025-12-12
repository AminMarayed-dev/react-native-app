import { View } from 'react-native'
import React, { ReactNode } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { COLORS } from '../constants/colors';


type SafeAreaProps = {
  children: ReactNode
}

const SafeArea: React.FC<SafeAreaProps> = ({children}) => {
  const insets = useSafeAreaInsets();
  return (
    <View style={{paddingTop:insets.top, flex:1, backgroundColor:COLORS.background}}>
      {children}
    </View>
  )
}

export default SafeArea