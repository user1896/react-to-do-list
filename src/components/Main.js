import '../styles/Main.css'
import { useImmerReducer } from 'use-immer';
import InputField from "./InputField";

export default function Main(){
	const [toDoList, dispatch] = useImmerReducer(toDoListReducer, [])

	return(
		<div className="Main">
			<InputField dispatch={dispatch} />

			<div>
				{toDoList}
			</div>
		</div>
	)
}

function toDoListReducer(draft, action){
	switch(action.type){
		case 'add': {
			draft.push(action.newToDo)
			break
		}
		case 'delete': {
		  //We want to delete this ToDoItem, so we keep all other ToDOItems, which they have different keys then him.
			return draft.filter(toDo => toDo.key !== action.toDoKey)
		}
		default: {
			throw Error('Unknown action: ' + action.type)
		}
	}
}