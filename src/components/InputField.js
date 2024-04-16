import "../styles/InputField.css";
import { useState } from 'react';
import Button from "./Button";
import ToDoItem from "./ToDoItem";
import { FaPlus } from "react-icons/fa6";
import { v4 as uuidv4 } from 'uuid';

export default function InputField({toDoList, setToDoList}){
	const [inputValue, setInputValue] = useState("")

	function handleChange(e){
		setInputValue(e.target.value)
	}

	function handleButtonClick(e){
		e.preventDefault()

		const newToDo = <ToDoItem key={uuidv4()}>{inputValue}</ToDoItem>
		setInputValue("")
		setToDoList([newToDo, ...toDoList])
	}

	return(
		<>
			<form onSubmit={handleButtonClick} className="InputField">

				<input
					className="input"
					value={inputValue}
					onChange={handleChange}
				/>
				<Button
					inputLenght={inputValue.length}
				>
					<FaPlus fontSize="1.6rem"/>
				</Button>

			</form>
		</>
	)
}