import '../styles/ToDoItem.css'
import { useState } from 'react';
import Button from "./Button";
import { FaCheck } from "react-icons/fa6";
import { FaRegTrashCan } from "react-icons/fa6";

export default function ToDoItem({children}){
	const [checkParagraph, setClassName] = useState({
		isChecked: false,
		className: ""
	})
	function handleCheckClick(){
		if(!checkParagraph.isChecked){
			setClassName({
				isChecked: true,
				className: "checkedParagraph"
			})
		}
		else{
			setClassName({
				isChecked: false,
				className: ""
			})
		}
	}
	return(
		<div className="ToDo">

			<p className={checkParagraph.className}>{children}</p>

			<div style={{
				marginRight: "0.2rem"
			}}>
				<Button onclick={handleCheckClick}>
					<FaCheck fontSize="1.4rem" color="green"/>
				</Button>
			</div>

			<Button>
				<FaRegTrashCan fontSize="1.4rem" color="red"/>
			</Button>

		</div>
	)
}