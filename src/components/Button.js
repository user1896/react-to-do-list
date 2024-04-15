import '../styles/Button.css'

export default function Button({children, onclick, inputLenght}){
	return(
		<button
			onClick={onclick}
			disabled={
				inputLenght === 0
			}
		>
			{children}
		</button>
	)
}