import styled, { DefaultTheme } from "styled-components/native"

type Props = {
    label: string,
    theme: DefaultTheme
}

export const Container = styled.View`
    flex-direction: row;
`

export const Label = styled.Text`
    font-size: 14px;
    color: ${(props: Props) => props.label === 'Criadas' ? props.theme.COLORS.BLUE : props.theme.COLORS.PURPLE};
    margin-right: 8px;
    font-family: ${({theme}) => theme.FONTS.bold};
`

export const Value = styled.Text`
    font-size: 12px;
    background-color: ${({theme}) => theme.COLORS.GRAY_400};
    padding-left: 8px;
    padding-right: 8px;
    padding-top: 2px;
    padding-bottom: 2px;
    border-radius: 200px;
    color: ${({theme}) => theme.COLORS.GRAY_200};
    font-family: ${({theme}) => theme.FONTS.bold};
`
