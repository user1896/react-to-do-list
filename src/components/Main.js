import '../styles/Main.css'
import { useReducer } from 'react';
import InputField from "./InputField";

export default function Main(){
	const [toDoList, dispatch] = useReducer(toDoListReducer, [])

	return(
		<div className="Main">
			<InputField dispatch={dispatch} />

			<div>
				{toDoList}
			</div>
		</div>
	)
}

function toDoListReducer(currentToDoList, action){
	switch(action.type){
		case 'add': {
			return [action.newToDo, ...currentToDoList]
		}
		case 'delete': {
		  //We want to delete this ToDoItem, so we keep all other ToDOItems, which they have different keys then him.
			return currentToDoList.filter(toDo => toDo.key !== action.toDoKey)
		}
	}
}