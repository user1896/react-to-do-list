import { useState } from "react";
import MainWrapper from "./components/MainWrapper";
import Button from "./components/button/Button";
import { StyledAppDiv, StyledButtonDiv } from "./App.styles";
import { ThemeProvider } from "styled-components";
import { themeContext } from "./context/themeContext";
import { MdDarkMode } from "react-icons/md";
import { IoMdSunny } from "react-icons/io";

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

  return (
    <ThemeProvider theme={myTheme} >

      <StyledButtonDiv>
        <Button
          onclick={handleButtonClick}
          bgLight={myTheme.color3}
          bgDark={myTheme.color1}
        >
          {lighting ? (<MdDarkMode fontSize="1.5rem" />) : (<IoMdSunny fontSize="1.5rem" />)}
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
