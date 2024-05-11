import { ReducerProvider } from "../context/dispatchContext";
import Main from "./main/Main";

export default function MainContainer(){
	return(
		<ReducerProvider>
			<Main/>
		</ReducerProvider>
	)
}
