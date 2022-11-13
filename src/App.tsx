
import './App.css';

import Footermain from './components/footer';
import Header from './components/header/header';
import Main from './components/main/main';
import AuthProvider from './context/authprovider';
import Projects from './components/projects/projects';
import Contact from './components/contacts/contact';


function App() {
  return (
    <AuthProvider>
       <div className="App">
      <Header/>    
      <Main/>  
      <Projects/>
      <Contact/>
      <Footermain/>        
     </div>
    </AuthProvider>
   
  );
}

export default App;
