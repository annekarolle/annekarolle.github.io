import "./App.css";
import AuthProvider from "./context/authprovider";
import { useEffect, useState } from "react";
import { FirstPage } from "./pages/firstPage";
import logo from "../src/assests/img/icon.png"
import welcome from "../src/assests/img/welcome.png"
import AnimationChar from "./components/animationsChar/animationChar";


function App () {
  const [animationStarted, setAnimationStarted] = useState(false);
  const [buttonVisible, setButtonVisible] = useState(true);
  const [overlayVisible, setOverlayVisible] = useState(true);

  const handleButtonClick = () => {
    setAnimationStarted(true);
    setTimeout(() => {
      setButtonVisible(false);
    }, 1000);
  };

  useEffect(() => {
    if (animationStarted) {
      setTimeout(() => {
        setOverlayVisible(false);
      }, 2000);
    }
  }, [animationStarted]);
 

  return (
    <AuthProvider>
      <div className="App">
        {overlayVisible && (
          <div className={`overlay ${animationStarted ? 'active' : ''}`}>
            <div className="container-superior">             
            {/* <AnimationChar/> */}
             
            </div>
            {buttonVisible && (
              <button className="selo" onClick={handleButtonClick}>
                <img src={logo} alt="" />                
              </button>
            )}
            <div className="container-inferior">
           
            </div>          
          </div>
        )}
        <FirstPage />
      </div>
     
    </AuthProvider>
  );
}

export default App;