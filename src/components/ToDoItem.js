import '../styles/ToDoItem.css'
import { useState } from 'react';
import Button from "./Button";
import { FaCheck } from "react-icons/fa6";
import { FaRegTrashCan } from "react-icons/fa6";

export default function ToDoItem({children, toDoKey, dispatch}){
	const [isChecked, setIsChecked] = useState(false)

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
		<div className="ToDo">
			
			<p className={isChecked && "checkedParagraph"}>{children}</p>

			<div style={{marginRight: "0.2rem"}}>
				<Button onclick={handleCheckClick}>
					<FaCheck fontSize="1.4rem" color="green"/>
				</Button>
			</div>

			<Button onclick={handleDeleteClick}>
				<FaRegTrashCan fontSize="1.4rem" color="red"/>
			</Button>

		</div>
	)
}