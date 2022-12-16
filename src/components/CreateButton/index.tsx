import { useState } from "react";
import { Button } from "./styles";
import { Feather } from '@expo/vector-icons'; 
import { useTheme } from "styled-components/native";

export function CreateButton({ ...props }){
	const [isCreateButtonFocused, setIsCreateButtonFocused] = useState(false)
	const { COLORS } = useTheme()

	return(
      <Button 
				isFocused={isCreateButtonFocused}
				onPressIn={() => setIsCreateButtonFocused(true)}
				onPressOut={() => setIsCreateButtonFocused(false)}
				{...props} 
			>
				<Feather 
        	name="plus-circle" 
        	size={24} 
        	color={COLORS.GRAY_100}
        />
			</Button>
	)
}