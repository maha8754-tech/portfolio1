import Footer from "./components/home/layouts/Footer";
import Header from "./components/home/layouts/Header";
import Main from "./components/home/layouts/Main";
import './Home.css'


export default function Home(){
    let name = "mahdi"
    let last = "ruzsh"
    return(

        <div>
            {/* <h1>Hello Mahdi rush</h1> */}

            <Header />

            <Main />

            <Footer />

            {/* <div id="name">your name: {name} {last}</div>

             <div id="last">your last: {last}</div>

            <ul>
                <li>contact</li>
                <li>about</li>
            </ul>

            <img src={'./src/images/19.jpg'} alt="imsty" className="imgn"/> */}

            
            
        </div>
    )
}