import { useState } from 'react';
import Button from "./Button";
import ToDoItem from "./ToDoItem";
import { FaPlus } from "react-icons/fa6";
import { v4 as uuidv4 } from 'uuid';
import {useDispatchContext} from "../context/dispatchContext";

export default function InputField(){
	const [inputValue, setInputValue] = useState("")
	const dispatch = useDispatchContext()

	function handleChange(e){
		setInputValue(e.target.value)
	}

	function handleButtonClick(e){
		e.preventDefault()
		const newKey = uuidv4()

		const newToDo = <ToDoItem
				key={newKey} toDoKey={newKey}
			>
				{inputValue}
			</ToDoItem>
		dispatch({
			type: 'add',
			newToDo: newToDo
		})
		setInputValue("")
	}

	return(
		<>
			<form onSubmit={handleButtonClick} className="bg-white p-2.5 rounded-lg flex justify-between items-center">

				<input
					className="basis-10/12 p-1 border-solid border-black border-2"
					value={inputValue}
					onChange={handleChange}
				/>
				
				<Button
					inputLenght={inputValue.length} hoverBackground="hover:bg-yellow-200"
				>
					<FaPlus fontSize="1.6rem"/>
				</Button>

			</form>
		</>
	)
}