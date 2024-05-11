import { useState } from "react";
import MainWrapper from "./components/MainWrapper";
import Button from "./components/button/Button";
import { StyledAppDiv, StyledButtonDiv } from "./App.styles";
import { ThemeProvider } from "styled-components";
import { themeContext } from "./context/themeContext";

function App() {
  const [lighting, setLighting] = useState(false)
  const myTheme = {
    lighting,
    color1: "rgb(255 255 255)",
    color2: "rgb(0 0 0)",
    color3: "rgb(2 132 199)"
  }
  function handleButtonClick(){
    setLighting( !lighting )
  }
  console.log(lighting)

  return (
    <ThemeProvider theme={myTheme} >

      <StyledButtonDiv>
        <Button
          onclick={handleButtonClick}
          hoverBackground={ lighting ? myTheme.color3 : myTheme.color1 }// this is wrong(hvbg)
          bgLight={myTheme.color3}
          bgDark={myTheme.color1}
        >
          Lighting
        </Button>
      </StyledButtonDiv>

      <themeContext.Provider value={myTheme} >
        <StyledAppDiv>
          <MainWrapper />
        </StyledAppDiv>
      </themeContext.Provider>

    </ThemeProvider>
  );
}

export default App;
