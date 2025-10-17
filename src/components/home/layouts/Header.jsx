// import { BrowserRouter as Router, Routes, Route, Link, Links } from "react-router-dom";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {useState} from "react"
import './Header.css'
// import Corse from "../../../Corse";
// import Home from "../../../Home";
import logoHeader from '../../../images/roocket.jpg'
import dl from '../../../images/dark_mode.jpg'

export default function Header(){

    const [showPopup , setShowPopup] = useState(false)

    const togglePopup = () => {
    setShowPopup(prev => !prev); // هر بار کلیک وضعیت نمایش رو معکوس کن
  };

    return(
    
        
        <header dir='rtl'> 
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"></link>
                {/* <div className="wrapper">
                     <div className='responsive-box'>
                        ghuj
                    </div>
                </div> */}
                <div id="container">
                    {/* <h3 id='react'>react js</h3> */}
                    <img className='logo' src={logoHeader} alt="logoRoocket" />
                    <input type="search" name="java" id="search-box" placeholder='دنبال چی میگردی؟'/>
                    <i className="search-icon fas fa-search"></i>
                    <button className='pageMode' title='بر اساس سیستم شما'>
                        <img className='darkOlight' src={dl} alt="darkmode" />
                    </button>
                    <div className='login'>
                        <a href="">
                            <span class="mr-1">
                            <svg color='rgb(100, 183, 255)' width="80" height="30" viewBox="15 -4 17 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.4" d="M6.67065 6.4847C6.67065 4.27199 8.53019 2.47095 10.8157 2.47095H15.3587C17.6387 2.47095 19.4935 4.26748 19.4935 6.47567V16.5109C19.4935 18.7246 17.6349 20.5265 15.3494 20.5265H10.8064C8.52646 20.5265 6.67065 18.7291 6.67065 16.52V15.6714V6.4847Z" fill="currentColor"></path>
                            <path d="M14.5621 11.0056L11.8827 8.37941C11.6058 8.10858 11.1602 8.10858 10.8841 8.38122C10.6091 8.65386 10.61 9.09351 10.886 9.36434L12.3531 10.8025H3.04688C2.65717 10.8025 2.34082 11.1139 2.34082 11.4985C2.34082 11.8822 2.65717 12.1927 3.04688 12.1927H12.3531L10.886 13.6318C10.61 13.9026 10.6091 14.3423 10.8841 14.6149C11.0226 14.7512 11.2033 14.8198 11.3848 14.8198C11.5645 14.8198 11.7452 14.7512 11.8827 14.6167L14.5621 11.9905C14.695 11.8596 14.7702 11.6827 14.7702 11.4985C14.7702 11.3134 14.695 11.1365 14.5621 11.0056Z" fill="currentColor"></path>
                            </svg>
                            </span>
                            <span className='entry'>ورود</span>
                        </a>
                    </div>
                    <div className="signin">
                    <a href="">
                            {/* <i className=' fas fa-user-plus'></i> */}
                            <span class="mr-1"> 
                            <svg color='rgb(28, 32, 34)' width="80" height="30" viewBox="25 -4 17 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.4" d="M6.67065 6.4847C6.67065 4.27199 8.53019 2.47095 10.8157 2.47095H15.3587C17.6387 2.47095 19.4935 4.26748 19.4935 6.47567V16.5109C19.4935 18.7246 17.6349 20.5265 15.3494 20.5265H10.8064C8.52646 20.5265 6.67065 18.7291 6.67065 16.52V15.6714V6.4847Z" fill="currentColor"></path>
                            <path d="M14.5621 11.0056L11.8827 8.37941C11.6058 8.10858 11.1602 8.10858 10.8841 8.38122C10.6091 8.65386 10.61 9.09351 10.886 9.36434L12.3531 10.8025H3.04688C2.65717 10.8025 2.34082 11.1139 2.34082 11.4985C2.34082 11.8822 2.65717 12.1927 3.04688 12.1927H12.3531L10.886 13.6318C10.61 13.9026 10.6091 14.3423 10.8841 14.6149C11.0226 14.7512 11.2033 14.8198 11.3848 14.8198C11.5645 14.8198 11.7452 14.7512 11.8827 14.6167L14.5621 11.9905C14.695 11.8596 14.7702 11.6827 14.7702 11.4985C14.7702 11.3134 14.695 11.1365 14.5621 11.0056Z" fill="currentColor"></path>
                            </svg> 
                            </span>
                            <span className='sign'>عضویت</span>
                        </a>
                    </div>
                    {/* <svg class=" text-biscay-700 dark:text-gray-900 dark:group-hover:text-dark-920 group-hover:text-biscay-300" height="23" viewBox="0 0 24 24"> */}
                    {/* <path fill="currentColor" d="M12 2A10 10 0 0 0 2 12A10 10 0 0 0 12 22A10 10 0 0 0 22 12A10 10 0 0 0 12 2M12 4A8 8 0 0 1 20 12A8 8 0 0 1 12 20V4Z"></path> */}
                     {/* </svg> */}
                </div>
                <div id="nav">
                    <ul id='meno'
                    // onMouseEnter={() => setShowPopup(true)} 
                    // onMouseLeave={() => setShowPopup(false)}
                    >
                        
                        <li className="item">
                            <a href="/">راکت</a>
                        </li>

                        {/* <Link to="/corses"> */}
                    
                            <div id="parent" onMouseEnter={() => setShowPopup(true)} 
                                // onMouseLeave={() => setShowPopup(false)}
                                >
                                {/* style={{ display: "inline-block", position: "relative" }}     */}
                                <li className="item course " 
                                onClick={togglePopup}
                                ><a href="/corses">دوره های آموزشی</a>
                                <i className="icon-list-course fas fa-angle-down"></i>
                                
                                </li>
                                {showPopup && (
                                    <div id='course'>
                                        {/* <a href=""> */}
                                        <div className="courses pointer-hand">
                                            <i className="icon-course fas fa-graduation-cap"></i>
                                            <span className="edu-course">دوره های آموزشی</span>
                                            <span className="list-course">لیست دوره های آموزشی ویدیویی راکت</span>
                                        </div>
                                        {/* </a> */}
                                        {/* <a href=""> */}
                                        <div className="masir pointer-hand">
                                            <i className="icon-masir fas fa-map"></i>
                                            <span className="edu-masir">مسیر های یادگیری</span>
                                            <span className="dev-masir">مسیر های یادگیری قدم به قدم برنامه نویسی</span>
                                        </div>
                                        {/* </a> */}
                                        {/* <a href=""> */}
                                        <div className="myProgress pointer-hand">
                                            <i className="icon-myProgress fa fa-bar-chart"></i>
                                            <span className="My-myProgress">پیشرفت من</span>
                                            <span className="list-myProgress">مسیر پیشرفت آموزشی شما در راکت</span>
                                        </div>
                                        {/* </a> */}
                                        {/* <a href=""> */}
                                        <div className="coursesFree pointer-hand">
                                            <i className="icon-coursesFree fas fa-graduation-cap"></i>
                                            <span className="edu-coursesFree">دوره های رایگان</span>
                                            <span className="list-coursesFree">برای شروع بدون هزینه آموزش ببینید</span>
                                        </div>
                                        {/* </a> */}
                                        {/* <a href=""> */}
                                        <div className="certificate pointer-hand">
                                            <i class='icon-certificate fas fa-user-graduate'></i>
                                            <span className="edu-certificate">گواهی پایان دوره</span>
                                            <span className="list-certificate">گواهی تاییدیه کسب مهارت فنی دوره ها</span>
                                        </div>
                                        {/* </a> */}
                                        <div id="hr"></div>
                                        <div className="popular">
                                            <span className="text-popular">محبوب ترین آموزش ها</span>
                                            <div className="edu-popular">
                                            <span className="edu-js pointer-hand dark-gray">آموزش جاوا اسکریپت</span>
                                            <span className="edu-laravel pointer-hand dark-gray">آموزش لاراول</span>
                                            <span className="edu-wp pointer-hand dark-gray">آموزش وردپرس</span>
                                            <span className="edu-react pointer-hand dark-gray">آموزش ری اکت</span>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>

                        <li className="item"><a href="">پرسش و پاسخ ها</a></li>
                    
                        <li className="item"><a href="">مقالات</a></li>
                        
                        <li className="item"><a href="">راکت کست</a></li>
                    
                        <li className="item"><a href="">لینک های مفید</a></li>
                    </ul>
                </div>
                

                {/* <h2 id='H'>Header Section</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Facere unde harum eos, quibusdam accusantium maxime esse optio 
                quia obcaecati natus assumenda neque doloribus, laboriosam tempora
                explicabo sit, consequatur autem dolores?</p> */}



        </header>
   

    
    )
}