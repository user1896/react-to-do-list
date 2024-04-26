import '../styles/Main.css';
import InputField from "./InputField";
import { toDoListContext } from "../context/dispatchContext";
import { useContext } from "react";

export default function MainChild(){
	const toDoList = useContext(toDoListContext)
	return (
		<div className="Main">
			<InputField />
			<div>
				{toDoList}
			</div>
		</div>
	)
}