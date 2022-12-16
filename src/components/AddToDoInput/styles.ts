import styled, { DefaultTheme } from "styled-components/native"

type Props = {
	isInputFocused: boolean,
	theme: DefaultTheme
}

export const Input = styled.TextInput.attrs(() => ({
	placeholder: 'Adicione uma nova tarefa',
	placeholderTextColor:'#808080',
}))`
	background-color: ${({theme}) => theme.COLORS.GRAY_500};
	height: 54px;
	flex: 1;
	border-radius: 6px;
	border-width: 1px;
	border-color: ${(props: Props) => props.isInputFocused ? props.theme.COLORS.PURPLE_DARK : 'transparent'};
	padding: 16px;
	color: ${({theme}) => theme.COLORS.GRAY_100};
	font-family: ${({theme}) => theme.FONTS.regular};
`