import { useState } from 'react';
import Button from "./Button";
import { FaCheck } from "react-icons/fa6";
import { FaRegTrashCan } from "react-icons/fa6";
import {useDispatchContext} from "../context/dispatchContext";

export default function ToDoItem({children, toDoKey}){
	const [isChecked, setIsChecked] = useState(false)
	const dispatch = useDispatchContext()

	let pClass="basis-4/5 mr-auto overflow-hidden "
	if(isChecked){
		pClass += "line-through"
	}

	function handleCheckClick(){
		setIsChecked(!isChecked)
	}

	function handleDeleteClick(e){
		dispatch({
			type: 'delete',
			toDoKey: toDoKey
		})
	}

	return(
		<div className="bg-white flex flex-row items-center mt-3 rounded-lg p-2.5">
			
			<p className={pClass}>{children}</p>

			<div className='mr-1'>
				<Button onclick={handleCheckClick} hoverBackground="hover:bg-lime-200">
					<FaCheck fontSize="1.4rem" color="green"/>
				</Button>
			</div>

			<Button onclick={handleDeleteClick} hoverBackground="hover:bg-rose-200">
				<FaRegTrashCan fontSize="1.4rem" color="red"/>
			</Button>

		</div>
	)
}