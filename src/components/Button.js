export default function Button({children, onclick, inputLenght, hoverBackground=""}){
	let buttonClass = "bg-transparent rounded-lg border-solid border-black border-2 p-1 "
	buttonClass += hoverBackground

	return(
		<button
			className={buttonClass}
			onClick={onclick}
			disabled={
				inputLenght === 0
			}
		>
			{children}
		</button>
	)
}