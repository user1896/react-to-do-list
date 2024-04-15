import '../styles/Main.css'
import { useState } from 'react';
import ToDoItem from "./ToDoItem";
import InputField from "./InputField";

export default function Main(){
	const [index, setIndex] = useState(0)

	return(
		<div className="Main">
			<InputField index={index} setIndex={setIndex}/>

			<ToDoItem>
				{index}
			</ToDoItem>
			<ToDoItem>
				second todo vkxizev ekcnze
			</ToDoItem>
			<ToDoItem>
				third todo csdnvsdhce fckjze third todo csdnvsdhce fckjze third todo csdnvsdhce fckjze third
				 todo csdnvsdhce fckjze
			</ToDoItem>
		</div>
	)
}