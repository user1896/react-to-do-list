import '../styles/ToDoItem.css'
import Button from "./Button";
import { FaCheck } from "react-icons/fa6";
import { FaRegTrashCan } from "react-icons/fa6";

export default function ToDoItem({children}){
	return(
		<div className="ToDo">
			<p>{children}</p>
			<div style={{
				marginRight: "0.2rem"
			}}>
				<Button>
					<FaCheck fontSize="1.4rem" color="green"/>
				</Button>
			</div>
			<Button>
				<FaRegTrashCan fontSize="1.4rem" color="red"/>
			</Button>
		</div>
	)
}