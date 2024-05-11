import { styled } from "styled-components";

export const StyledToDo = styled.div`
	background-color: rgb(255 255 255);
	display: flex;
	flex-direction: row;
	align-items: center;
	margin-top: 0.75rem/* 12px */;
	border-radius: 0.5rem/* 8px */;
	padding: 0.625rem/* 10px */;
`

export const StyledParagraph = styled.p`
	flex-basis: 80%;
  margin-right: auto;
	overflow: hidden;
	text-decoration-line: ${ props => props.$isChecked ? "line-through" : "none" };
`

export const MarginRightDiv = styled.div`
	margin-right: 0.25rem/* 4px */;
`