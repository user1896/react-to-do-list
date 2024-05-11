import InputField from "../inputField/InputField";
import { useToDoListContext } from "../../context/dispatchContext";
import { StyledMainDiv } from "./Main.styles";

export default function MainChild(){
	const toDoList = useToDoListContext()
	return (
		<StyledMainDiv>
			<InputField />
			<div>
				{toDoList}
			</div>
		</StyledMainDiv>
	)
}