import { Feather } from "@expo/vector-icons";
import { useState } from "react";
import { GestureResponderEvent } from "react-native";
import { useTheme } from "styled-components/native";
import { Button } from "./styles";

type Props = {
  onPress: ((event: GestureResponderEvent) => void) | undefined
}

export function DeleteButton({onPress}: Props){
  const { COLORS } = useTheme()
  const [isDeleteButtonFocused, setIsDeleteButtonFocused] = useState(false)

  return (
    <Button 
      isDeleteButtonFocused={isDeleteButtonFocused}
      onPress={onPress} 
      onPressOut={() => setIsDeleteButtonFocused(false)} 
      onPressIn={() => setIsDeleteButtonFocused(true)}
    >
      <Feather 
        name="trash-2" 
        size={17} 
        color={isDeleteButtonFocused ? COLORS.DANGER :  COLORS.GRAY_300}
      />
    </Button> 
  )
}