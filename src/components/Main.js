import '../styles/Main.css'
import { useImmerReducer } from 'use-immer';
import InputField from "./InputField";
import dispatchContext from "../context/dispatchContext"

export default function Main(){
	const [toDoList, dispatch] = useImmerReducer(toDoListReducer, [])

	return(
		<dispatchContext.Provider value={dispatch}>
			<div className="Main">
				<InputField />
				<div>
					{toDoList}
				</div>
			</div>
		</dispatchContext.Provider>
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