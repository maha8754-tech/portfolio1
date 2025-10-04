import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './Home.jsx'
import Corse from "./Corse.jsx";


createRoot(document.getElementById('root')).render(
  //  <StrictMode>
  <Router>
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/corses" element={<Corse/>} />
          {/* <Route path="/about"  /> */}
       </Routes>
  </Router>
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
