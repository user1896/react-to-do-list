import '../styles/ToDoItem.css'
import { useState } from 'react';
import Button from "./Button";
import { FaCheck } from "react-icons/fa6";
import { FaRegTrashCan } from "react-icons/fa6";

export default function ToDoItem({children, setToDoList, toDoKey}){
	const [checkParagraph, setcheckParagraph] = useState({
		isChecked: false,
		className: ""
	})

	function handleCheckClick(){
		if(!checkParagraph.isChecked){
			setcheckParagraph({
				isChecked: true,
				className: "checkedParagraph"
			})
		}
		else{
			setcheckParagraph({
				isChecked: false,
				className: ""
			})
		}
	}

	function handleDeleteClick(e){
		// We want to delete this ToDoItem, so we keep all the other ToDOItems, which they have different keys then him
		setToDoList(list => list.filter(toDo => toDo.key !== toDoKey))
	}

	return(
		<div className="ToDo">

			<p className={checkParagraph.className}>{children}</p>

			<div style={{marginRight: "0.2rem"}}>
				<Button onclick={handleCheckClick}>
					<FaCheck fontSize="1.4rem" color="green"/>
				</Button>
			</div>

			<Button onclick={handleDeleteClick}>
				{/* <FaRegTrashCan fontSize="1.4rem" color="red" width="4rem" height="100%"/> */}
				dd
			</Button>

		</div>
	)
}