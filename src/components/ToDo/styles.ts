import styled, { DefaultTheme } from "styled-components/native"

type Props = {
    isConcluded?: boolean,
    isDeleteButtonFocused?: boolean,
    theme: DefaultTheme
}

export const Container = styled.View`
    background-color: ${({ theme }) => theme.COLORS.GRAY_500};
    height: 64px;
    border-radius: 8px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 12px;
    margin-bottom: 8px;
`

export const Content = styled.View`
    flex-direction: row;
    align-items: center;
    width: 90%;
`

export const Title = styled.Text`
    font-size: 14px;
    margin-left: 8px;
    color: ${(props: Props) => props.isConcluded ? props.theme.COLORS.GRAY_300 : props.theme.COLORS.GRAY_100};
    text-decoration-line: ${(props: Props) => props.isConcluded ? 'line-through' : 'none'};
    font-family: ${({theme}) => theme.FONTS.regular};
`
