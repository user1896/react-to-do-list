import "../styles/InputField.css";
import { useState } from 'react';
import Button from "./Button";
import ToDoItem from "./ToDoItem";
import { FaPlus } from "react-icons/fa6";
import { v4 as uuidv4 } from 'uuid';

export default function InputField({setToDoList}){
	const [inputValue, setInputValue] = useState("")

	function handleChange(e){
		setInputValue(e.target.value)
	}

	function handleButtonClick(e){
		e.preventDefault()
		const newKey = uuidv4()

		const newToDo = <ToDoItem
				key={newKey} setToDoList={setToDoList} toDoKey={newKey}
			>
				{inputValue}
			</ToDoItem>
		setToDoList(prevtoDoList => [newToDo, ...prevtoDoList])
		setInputValue("")
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