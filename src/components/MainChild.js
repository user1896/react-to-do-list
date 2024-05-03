import InputField from "./InputField";
import { useToDoListContext } from "../context/dispatchContext";

export default function MainChild(){
	const toDoList = useToDoListContext()
	return (
		<div className="mt-4 mb-4 w-1/3 min-w-80 max-w-7xl">
			<InputField />
			<div>
				{toDoList}
			</div>
		</div>
	)
}