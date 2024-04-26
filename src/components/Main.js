import { ReducerProvider } from "../context/dispatchContext";
import MainChild from "./MainChild";

export default function Main(){
	return(
		<ReducerProvider>
			<MainChild/>
		</ReducerProvider>
	)
}
