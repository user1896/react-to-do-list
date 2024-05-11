import { StyledButton } from "./Button.styles";

const gg = "red"

export default function Button({children, onclick, inputLenght, hoverBackground}){
	return(
		<StyledButton
			$hoverBackground={hoverBackground}
			onClick={onclick}
			disabled={
				inputLenght === 0
			}
		>
			{children}
		</StyledButton>
	)
}