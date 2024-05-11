import { styled } from "styled-components";

export const StyledAppDiv = styled.div`
	background-color: ${ props => props.theme.lighting ? props.theme.color1 : props.theme.color3 };
	display: flex;
	justify-content: center;
	align-items: center;
	min-height: 100vh;
`

export const StyledButtonDiv = styled.div`
	position: absolute;
	top: 0.3rem;
	left: 0.5rem;
	transition: transform 200ms;
	&:hover{
		transform: scale(1.1);
	}
`