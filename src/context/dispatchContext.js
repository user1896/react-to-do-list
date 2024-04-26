import { createContext } from 'react';
import { useImmerReducer } from 'use-immer';

export const toDoListContext = createContext(null);
export const dispatchContext = createContext(null);

export function ReducerProvider({children}){
	const [toDoList, dispatch] = useImmerReducer(toDoListReducer, [])

	return (
		<toDoListContext.Provider value={toDoList}>
			<dispatchContext.Provider value={dispatch}>
				{children}
			</dispatchContext.Provider>
		</toDoListContext.Provider>
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
