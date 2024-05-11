import { ReducerProvider } from "../context/dispatchContext";
import Main from "./main/Main";

export default function MainWrapper(){
	return(
		<ReducerProvider>
			<Main/>
		</ReducerProvider>
	)
}
