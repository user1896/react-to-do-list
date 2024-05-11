import { useState } from 'react';
import Button from "../button/Button";
import { FaCheck } from "react-icons/fa6";
import { FaRegTrashCan } from "react-icons/fa6";
import {useDispatchContext} from "../../context/dispatchContext";
import { StyledToDo, StyledParagraph, MarginRightDiv } from "./ToDoItem.styles";

export default function ToDoItem({children, toDoKey}){
	const [isChecked, setIsChecked] = useState(false)
	const dispatch = useDispatchContext()

	function handleCheckClick(){
		setIsChecked(!isChecked)
	}

	function handleDeleteClick(e){
		dispatch({
			type: 'delete',
			toDoKey: toDoKey
		})
	}

	return(
		<StyledToDo >
			
			<StyledParagraph $isChecked={isChecked} >{children}</StyledParagraph>

			<MarginRightDiv >
				<Button onclick={handleCheckClick} hoverBackground="rgb(217 249 157)">
					<FaCheck fontSize="1.4rem" color="green"/>
				</Button>
			</MarginRightDiv>

			<Button onclick={handleDeleteClick} hoverBackground="rgb(254 205 211)">
				<FaRegTrashCan fontSize="1.4rem" color="red"/>
			</Button>

		</StyledToDo>
	)
}