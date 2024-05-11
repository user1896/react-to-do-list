import { useState } from 'react';
import Button from "../button/Button";
import ToDoItem from "../toDoItem/ToDoItem";
import { FaPlus } from "react-icons/fa6";
import { v4 as uuidv4 } from 'uuid';
import {useDispatchContext} from "../../context/dispatchContext";
import { StyledForm, StyledInput } from "./InputField.styles";

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
			<StyledForm onSubmit={handleButtonClick} >

				<StyledInput
					value={inputValue}
					onChange={handleChange}
				/>
				
				<Button
					inputLenght={inputValue.length} hoverBackground="rgb(254 240 138)"
				>
					<FaPlus fontSize="1.6rem"/>
				</Button>

			</StyledForm>
		</>
	)
}