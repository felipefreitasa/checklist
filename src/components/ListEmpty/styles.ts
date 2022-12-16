import styled from "styled-components/native"

export const Container = styled.View`
    align-items: center;
    justify-content: center;
    margin-top: 48px;
`

export const Title = styled.Text`
    font-size: 14px;
    color: ${({theme}) => theme.COLORS.GRAY_300};
    font-family: ${({theme}) => theme.FONTS.bold};
    margin-top: 16px;
`

export const Subtitle = styled.Text`
    font-size: 14px;
    color: ${({theme}) => theme.COLORS.GRAY_300};
    font-family: ${({theme}) => theme.FONTS.regular};
`

