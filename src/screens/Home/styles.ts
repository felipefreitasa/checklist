import styled from "styled-components/native"

export const Container = styled.View`
	background-color: ${({theme}) => theme.COLORS.GRAY_600};
	flex: 1;
	align-items: center;
	justify-content: flex-start;
`

export const Content = styled.View`
	padding: 20px;
	width: 100%;
	top: -50px;
`

export const Form = styled.View`
	flex-direction: row;
	align-items: center;
	margin-bottom: 32px;
`

export const Counters = styled.View`
	flex-direction: row;
	justify-content: space-between;
	padding-bottom: 20px;
	border-bottom-width: 1px;
	border-color: ${({theme}) => theme.COLORS.GRAY_400};
	margin-bottom: 20px;
`