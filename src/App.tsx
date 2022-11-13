
import './App.css';
import Footermain from './components/footer';
import Header from './components/header/header';
import Main from './components/main/main';
import AuthProvider from './context/authprovider';


function App() {
  return (
    <AuthProvider>
       <div className="App">
      <Header/>    
      <Main/>  
      <Footermain/>        
     </div>
    </AuthProvider>
   
  );
}

export default App;
