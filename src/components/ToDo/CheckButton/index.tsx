import { AntDesign, Feather } from "@expo/vector-icons";
import { useState } from "react";
import { GestureResponderEvent, TouchableOpacity } from "react-native";
import { useTheme } from "styled-components/native";

type Props = {
  isConcluded: boolean,
  onPress: ((event: GestureResponderEvent) => void) | undefined
}

export function CheckButton({isConcluded, onPress}: Props){
  const { COLORS } = useTheme()
  const [isCheckButtonFocused, setIsCheckButtonFocused] = useState(false)

  return (
    <TouchableOpacity 
      onPressIn={() => setIsCheckButtonFocused(true)} 
      onPressOut={() => setIsCheckButtonFocused(false)}
      onPress={onPress}
    >
      {isConcluded ?
        <AntDesign 
          name="checkcircle" 
          size={17} 
          color={isCheckButtonFocused ? COLORS.PURPLE :  COLORS.PURPLE_DARK}
        />
          :  
        <Feather 
          name="circle" 
          size={17} 
          color={isCheckButtonFocused ? COLORS.BLUE :  COLORS.BLUE_DARK}
        /> 
      }
    </TouchableOpacity>
  )
}