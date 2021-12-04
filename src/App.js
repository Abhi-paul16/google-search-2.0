import React ,{useState} from "react";
import Navbar from './componets/Navbar'
import Footer from './componets/Footer'
import Routes from './componets/Routes'

function App() {

  const [darkTheme  , setDarkTheme] = useState(false);
  return (
    <div className={darkTheme ? 'dark' : ''}>
       <div className = "bg-gray-400 drak:bg-gray-900 dark:text-gray-200  dark:bg-black min-h-screen"> 
         
         <Navbar darkTheme = {darkTheme} setDarkTheme = {setDarkTheme} />
         <Routes/>
         <Footer/>
 
        </div>
    </div>
  );
}

export default App;
