import "./App.css";
import AuthProvider from "./context/authprovider";
import { useState } from "react";
import { FirstPage } from "./pages/firstPage";
import logo from "../src/assests/img/icon.png"
import welcome from "../src/assests/img/welcome.png"

function App() {
  const [animationStarted, setAnimationStarted] = useState(false);
  const [buttonVisible, setButtonVisible] = useState(true);

  const handleButtonClick = () => {
    setAnimationStarted(true);
    setTimeout(() => {   
      setButtonVisible(false)
    }, 1000); 
  };

  return (
    <AuthProvider>
      <div className="App">
        <div className={`overlay ${animationStarted ? 'active' : ''}`}>
          <div className="container-superior">
            <img src={welcome} alt="" />
          </div>
          {buttonVisible && ( 
            <button className="selo" onClick={handleButtonClick}>
              <img src={logo} alt="" />
            </button>
          )}
          <div className="container-inferior">
         
          </div>
        </div>
        <FirstPage />
      </div>
    </AuthProvider>

  );
}

export default App;