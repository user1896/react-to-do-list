import '../styles/Main.css'
import ToDoItem from "./ToDoItem";
import InputField from "./InputField";

export default function Main(){
	return(
		<div className="Main">
			<InputField />

			<ToDoItem>
				first todo qsdlqlks qsqds
			</ToDoItem>
			<ToDoItem>
				second todo vkxizev ekcnze
			</ToDoItem>
			<ToDoItem>
				third todo csdnvsdhce fckjze third todo csdnvsdhce fckjze third todo csdnvsdhce fckjze third
				 todo csdnvsdhce fckjze
			</ToDoItem>
		</div>
	)
}