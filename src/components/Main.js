import '../styles/Main.css'
import { useState } from 'react';
import InputField from "./InputField";

export default function Main(){
	const [toDoList, setToDoList] = useState([])

	return(
		<div className="Main">
			<InputField setToDoList={setToDoList} />

			<div>
				{toDoList}
			</div>
		</div>
	)
}