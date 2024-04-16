import '../styles/Button.css'

export default function Button({children, onclick, inputLenght}){
	return(
		<button
			className="button"
			onClick={onclick}
			disabled={
				inputLenght === 0
			}
		>
			{children}
		</button>
	)
}