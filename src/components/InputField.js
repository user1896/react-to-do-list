import "../styles/InputField.css";
import Button from "./Button";
import { FaPlus } from "react-icons/fa6";

export default function InputField(){
	return(
		<div className="InputField">
			<input
				placeholder="Enter Text..."
			/>
			<Button>
				<FaPlus fontSize="1.6rem"/>
			</Button>
		</div>
	)
}