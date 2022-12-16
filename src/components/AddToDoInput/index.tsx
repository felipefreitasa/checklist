import { useState } from "react";
import { Input } from "./styles";

export function AddToDoInput({...props}){
	const [isInputFocused, setIsInputFocused] = useState(false)

	return (
	  <Input
			isInputFocused={isInputFocused}
	    onFocus={() => setIsInputFocused(true)}
	    onBlur={() => setIsInputFocused(false)}
			{...props}
		/>
	)
}