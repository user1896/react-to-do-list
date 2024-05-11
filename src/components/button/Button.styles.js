import { styled } from "styled-components";

export const StyledButton = styled.button`
	background-color: transparent;
	border-radius: 0.5rem/* 8px */;
	border-style: solid;
	border-color: rgb(0 0 0);
	border-width: 2px;
	padding: 0.25rem/* 4px */;
	&:hover{
		background-color: ${ props => props.$hoverBackground };
	}
`