import "../styles/InputField.css";
import { useState } from 'react';
import Button from "./Button";
import { FaPlus } from "react-icons/fa6";

export default function InputField({index, setIndex}){
	const [inputValue, setInputValue] = useState("")

	function handleChange(e){
		setInputValue(e.target.value)
	}

	function handleButtonClick(){
		setIndex(index+1)
	}

	return(
		<div className="InputField">
			<input
				value={inputValue}
				onChange={handleChange}
			/>
			<Button
				inputLenght={inputValue.length}
				onclick={handleButtonClick}
			>
				<FaPlus fontSize="1.6rem"/>
			</Button>
		</div>
	)
}