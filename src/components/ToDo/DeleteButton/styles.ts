import styled, { DefaultTheme } from "styled-components/native"

type Props = {
  isDeleteButtonFocused?: boolean,
  theme: DefaultTheme
}

export const Button = styled.TouchableOpacity`
  height: 32px;
  width: 32px;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  background-color: ${(props: Props) => props.isDeleteButtonFocused ? props.theme.COLORS.GRAY_400 : 'transparent'};
`
