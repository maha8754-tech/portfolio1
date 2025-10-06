import {HashRouter, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './Home.jsx'
import Corse from "./Corse.jsx";


createRoot(document.getElementById('root')).render(
  //  <StrictMode>
  <HashRouter>
    <Home/>
      {/* <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/corses" element={<Corse/>} />
          {/* <Route path="/about"  />
       </Routes> */}
  </HashRouter>
    // <App />
    // <Home />
   //</StrictMode>
)

// function main(){
//   return(
//   <Router>
//       <Routes>
//           <Route path="/" element={<Home/>} />
//           <Route path="/corses" element={<Corse/>} />
//           {/* <Route path="/about"  /> */}
//        </Routes>
//   </Router>
//   )
// }



// export default main
