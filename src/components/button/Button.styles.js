import { styled } from "styled-components";

export const StyledButton = styled.button`
	background-color: ${ props => props.theme.lighting ? props.$bgLight : props.$bgDark };
	color: ${ props => props.theme.lighting ? props.theme.color1 : props.theme.color2 };
	border-radius: 0.5rem/* 8px */;
	border-style: solid;
	border-color: rgb(0 0 0);
	border-width: 2px;
	padding: 0.25rem/* 4px */;
	&:hover{
		background-color: ${ props => props.$bgHover };
	}
`