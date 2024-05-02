import '../styles/Main.css';
import InputField from "./InputField";
import { useToDoListContext } from "../context/dispatchContext";

export default function MainChild(){
	const toDoList = useToDoListContext()
	return (
		<div className="Main">
			<InputField />
			<div>
				{toDoList}
			</div>
		</div>
	)
}