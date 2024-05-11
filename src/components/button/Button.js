import { StyledButton } from "./Button.styles";

const gg = "red"

export default function Button({children, onclick, inputLenght, bgHover, bgLight, bgDark}){
	return(
		<StyledButton
			$bgHover={bgHover}
			$bgLight={bgLight}
			$bgDark={bgDark}
			onClick={onclick}
			disabled={
				inputLenght === 0
			}
		>
			{children}
		</StyledButton>
	)
}