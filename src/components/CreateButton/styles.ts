import styled, { DefaultTheme } from "styled-components/native";

type Props = {
	isFocused: boolean,
	theme: DefaultTheme
}

export const Button = styled.TouchableOpacity.attrs(() => ({
	activeOpacity: 1
}))`
	width: 52px;
	height: 52px;
	border-radius: 6px;
	align-items: center;
	justify-content: center;
	margin-left: 8px;
	background-color: ${(props: Props) => props.isFocused ? props.theme.COLORS.BLUE : props.theme.COLORS.BLUE_DARK}
`