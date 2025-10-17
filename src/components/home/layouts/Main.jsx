// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Swiper , SwiperSlide } from 'swiper/react';
import {EffectFade, EffectCube, EffectCoverflow, EffectFlip, Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import "swiper/css/effect-fade";
import "swiper/css/effect-cube";
import "swiper/css/effect-coverflow";
import "swiper/css/effect-flip";
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './Main.css'
import CardCourse from './CardCourse'
import CardArticle from './CardArticle';
// import welcome from '../../../images/welcome.png'
// import arrow from '../../../images/Arrow.png'
// import corseAI from '../../../images/courseAI.png'
// import pLaravel from '../../../images/project-laravel.jpg'
// import docker from '../../../images/docker.jpg'
// import pachim from '../../../images/pachim.jpg'
// import eloquent from '../../../images/eloquent-laravel.jpg'
// import cLaravel from '../../../images/course-laravel.jpg'
// import css from '../../../images/css.jpg'
// import webDesign from '../../../images/web-design.jpg'
// import web from '../../../images/web.jpg'
// import js from '../../../images/js.png'
// import laravelLogo from '../../../images/laravel-logo.png'
// import php from '../../../images/php.png'
// import reactLogo from '../../../images/react-logo.png'

// import Corse from "../../../Corse";
// import CardRoute from './CardRoute'


export default function Main(){

    return(
    // <Router>
    //   <Routes>
    //       <Route path="/" element={<Home />} />
    //       <Route path="/corses" element={<Corse />} />
    //       <Route path="/contact" />
    //   </Routes>
      
        <div id='main' dir='rtl'>
            <div id='welcome'>
              <div className='story-paragraf'>
              <h2 id='StoryText'>داستان برنامه نویس شدنت از اینجا شروع میشه!</h2>
              <p className='paragraf'>یادگیری برنامه‌نویسی آرزو نیست، فقط نیاز هست، تلاش و تمرین داشته باشید، بقیه‌اش با راکت </p>
              <a href="#">
              <button className='start-dev'>شروع یادگیری برنامه‌نویسی
                <i class='icon-start-dev fas fa-reply'></i>
              </button>
              </a>
              <div className='info-item'>
                <div className='item1'>
                  <span>
                    <i className='fas fa-graduation-cap'></i>
                    بیش از 80 دوره آموزشی
                  </span>
                  <span>
                    <i className='far fa-credit-card'></i>
                    ضمانت بازگشت وجه
                  </span>
                </div>
                <div className='item2'>
                  <span>
                    <i className='far fa-edit'></i>
                    یادگیری با تمرین و آزمون
                  </span>
                  <span>
                    <i className='fas fa-phone'></i>
                    پشتیبانی 24 ساعته
                  </span>
                </div>
              </div>
              </div>
              <div className='icon-gif'>
              <img className='img-welcome' src={welcome} alt="" />
              </div>
            </div>
            <div className='arrow-next'>
              <img src="" alt="" />
            </div>
            <div className='last-course-see'>
              <h3 className='text-last-course'>
                <i className='fas fa-circle Gray'></i>
                <i className='fas fa-circle gray'></i>
                <i className='fas fa-circle black'></i>
                آخرین دوره ها
              </h3>
              <a href="">
              <span className='see-course'>
                مشاهده همه دوره ها
                <i className='fas fa-reply'></i>
              </span>
              </a>
            </div>
            <div className='courses-card-collection'>
              <CardCourse
              image=""
              sort="تکمیل ضبط"
              title="آموزش هوش مصنوعی برای برنامه نویسی"
              description="دوره آموزش هوش مصنوعی رایگان برای برنامه‌نویسان: تسلط بر ChatGPT، Copilot و Cursor IDE برای افزایش سرعت کدنویسی و توسعه پروژه‌های."
              time="03:37:35"
              price="رایگان!"
              />

              <CardCourse
              image={pLaravel}
              sort="در حال برگزاری "
              title="آموزش پروژه‌های لاراولی"
              description="در این دوره پروژه محور لاراول، با ساخت ۱۰ پروژه واقعی مهارت‌های خود را در Laravel تقویت کنید! از احراز هویت چندگانه و مدیریت نقش‌ها تا چت زنده، سیستم..."
              time="09:30:21"
              price="4,900,000 تومان"
              />

              <CardCourse
              image={docker}
              sort="تکمیل ضبط"
              title="آموزش Docker"
              description="در دوره آموزش رایگان داکر، با مفاهیم اساسی Docker، ایجاد و مدیریت کانتینرها، Dockerfile، ایمیج‌ها و استقرار اپلیکیشن‌ها به صورت عملی و گام به گام آشنا..."
              time="04:24:03"
              price="رایگان!"
              />

              <CardCourse
              image={pachim}
              sort="تکمیل ضبط"
              title="آموزش راه‌اندازی و مدیریت سرور و سایت‌ها"
              description="راه اندازی و مدیریت سرور ها و سایت با استفاده از پَچیم، سایت ها رو با یک کلیک بر روی سرورها مجازی و اختصاصی خود راه اندازی کنید و آن‌ها را به سادگی ..."
              time="10:50:52"
              price="رایگان!"
              />

              <CardCourse
              image={eloquent}
              sort="تکمیل ضبط"
              title="آموزش جامع Eloquent در لاراول"
              description="در دوره آموزش جامع Eloquent در لاراول از ابتدایی ترین مفاهیم تا مفاهیم پیشرفته تر و پیچیده مرتبط با Eloquent به شکل کاربردی و در قالب مثال ها و سناریو..."
              time="09:46:38"
              price="1,390,000 تومان"
              />

              <CardCourse
              image={cLaravel}
              sort="تکمیل ضبط"
              title="آموزش لاراول"
              description="فریمورک لاراول یکی از محبوب‌ترین و بهترین فریمورک‌های حال حاضر برای زبان PHP است، آموزش لاراول راکت می‌تواند به شکل رایگان به شما لاراول را آموزش دهد."
              time="10:52:44"
              price="رایگان!"
              />

              <CardCourse
              image={css}
              sort="تکمیل ضبط"
              title="آموزش CSS"
              description="آموزش کامل CSS به صورت کامل و البته رایگان هدفی‌ست که ما در این دوره آموزشی دنبال می‌کنیم. شما با مشاهده کامل این دوره یاد خواهید گرفت که در صفحات وبس..."
              time="12:56:15"
              price="رایگان!"
              />

              <CardCourse
              image={webDesign}
              sort="در حال برگزاری"
              title="آموزش پروژه محور طراحی سایت"
              description="آموزش پروژه محور طراحی سایت به شما کمک می‌کند که به سادگی بتوانید پروژه‌های طراحی سایت خود را پیاده‌سازی کنید."
              time="07:30:59"
              price="1,890,000 تومان"
              />
            </div>
            <div className='masir-edu-see'>
                <h3 className='text-masir-edu'>
                  <i className='fas fa-circle Gray'></i>
                  <i className='fas fa-circle gray'></i>
                  <i className='fas fa-circle black'></i>
                  مسیرهای یادگیری
                </h3>
                <a href="">
                <span className='see-masir'>
                  مشاهده همه مسیرهای یادگیری
                  <i className='fas fa-reply'></i>
                </span>
                </a>
            </div>

           
            <div className='route-card-collection'>
              <Swiper
                modules={[ Navigation, Pagination, Autoplay]}

                // effect="coverflow"
                // grabCursor={true}
                // centeredSlides={true}
                // slidesPerView={"auto"}
                // coverflowEffect={{
                //   rotate: 50,
                //   stretch: 0,
                //   depth: 100,
                //   modifier: 1,
                //   slideShadows: true,
                // }}
                // effect="fade"
                spaceBetween={360}
                slidesPerView={4}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                loop={true}
                // onSlideChange={() => console.log('slide change')}
                // onSwiper={(swiper) => console.log(swiper)}
              >
                <SwiperSlide>
                  <div className="Route">
                    <div className='image-include'>
                      <img className="img-route" src={web}/>
                      <span className='include-course'>
                      <i className="fas fa-graduation-cap icon-include-course"></i>
                      شامل 9 دوره
                    </span>
                    </div>
                    <div className='titr-des'>
                      <h2 className="titr-route">طراحی سایت</h2>
                      <p className="description-route">با آموزش رایگان طراحی سایت مسیر یادگیری فرانت‌اند را از صفر شروع کن. HTML، CSS، جاوااسکریپت و ابزارهای طراحی وب را قدم‌ب...</p>
                      <div className="hr-card"></div>
                    </div>
                    
                    <div className="infoMore-see-route">
                      <a href="">
                      <span className="more">مشاهده اطلاعات مسیر یادگیری 
                        <i className='fas fa-reply blue'></i>
                      </span>
                      </a>
                    </div>

                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="Route">
                    <div className='image-include'>
                      <img className="img-route" src=""/>
                      <span className='include-course'>
                      <i className="fas fa-graduation-cap icon-include-course"></i>
                      شامل 9 دوره
                    </span>
                    </div>
                    <div className='titr-des'>
                      <h2 className="titr-route">آموزش جاوا اسکریپت</h2>
                      <p className="description-route">آموزش جاوا اسکریپت | دوره جامع جاوا اسکریپت | بهترین دوره جاوا اسکریپت | بازار کار جاوا اسکریپت | دوره جاوا اسکریپت مقدم...</p>
                      <div className="hr-card"></div>
                    </div>
                    
                    <div className="infoMore-see-route">
                      <a href="">
                      <span className="more">مشاهده اطلاعات مسیر یادگیری 
                        <i className='fas fa-reply blue'></i>
                      </span>
                      </a>
                    </div>

                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="Route">
                    <div className='image-include'>
                      <img className="img-route" src=""/>
                      <span className='include-course'>
                      <i className="fas fa-graduation-cap icon-include-course"></i>
                      شامل 9 دوره
                    </span>
                    </div>
                    <div className='titr-des'>
                      <h2 className="titr-route">آموزش لاراول</h2>
                      <p className="description-route">لاراول پر استفاده‌ترین فریمورک زبان برنامه نویسی PHP بوده و در سال‌های اخیر توسط شرکت‌ها و استارتاپ‌های بسیار زیادی مورد...</p>
                      <div className="hr-card"></div>
                    </div>
                    
                    <div className="infoMore-see-route">
                      <a href="">
                      <span className="more">مشاهده اطلاعات مسیر یادگیری 
                        <i className='fas fa-reply blue'></i>
                      </span>
                      </a>
                    </div>

                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="Route">
                    <div className='image-include'>
                      <img className="img-route" src=""/>
                      <span className='include-course'>
                      <i className="fas fa-graduation-cap icon-include-course"></i>
                      شامل 9 دوره
                    </span>
                    </div>
                    <div className='titr-des'>
                      <h2 className="titr-route">آموزش PHP</h2>
                      <p className="description-route">PHP محبوب‌ترین زبان برنامه نویسی حوزه وب است. بیش از ۵۰ درصد وبسایت‌های دنیا با استفاده از این زبان و تکنولوژی های مربوط...</p>
                      <div className="hr-card"></div>
                    </div>
                    
                    <div className="infoMore-see-route">
                      <a href="">
                      <span className="more">مشاهده اطلاعات مسیر یادگیری 
                        <i className='fas fa-reply blue'></i>
                      </span>
                      </a>
                    </div>

                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="Route">
                    <div className='image-include'>
                      <img className="img-route" src=""/>
                      <span className='include-course'>
                      <i className="fas fa-graduation-cap icon-include-course"></i>
                      شامل 9 دوره
                    </span>
                    </div>
                    <div className='titr-des'>
                      <h2 className="titr-route">آموزش React</h2>
                      <p className="description-route">React محبوب‌ترین فریمورک توسعه رابط کاربری و اپلیکیشن‌های SPA است که توسط شرکت فیسبوک ایجاد شده است. React از زبان جاوا...</p>
                      <div className="hr-card"></div>
                    </div>
                    
                    <div className="infoMore-see-route">
                      <a href="">
                      <span className="more">مشاهده اطلاعات مسیر یادگیری 
                        <i className='fas fa-reply blue'></i>
                      </span>
                      </a>
                    </div>

                  </div>
                </SwiperSlide>
              </Swiper>
           </div>

           
            <div className='comment-roocket'>
              <div className="about">
                <h3 className='text-about-roocket'>
                  <i className='fas fa-circle Gray'></i>
                  <i className='fas fa-circle gray'></i>
                  <i className='fas fa-circle black'></i>
                  در مورد راکت چه میشنویم؟
                </h3>
                <p className='p-comment'>این‌ها، بخش خیلی کوچکی از نظراتی هستند که افراد مختلف در مورد راکت دارند.</p>
              </div>
              <div className='comment-slider'>
                  <Swiper
                modules={[EffectCube, Navigation, Pagination , Autoplay]}
                effect="cube"
                grabCursor={true}
                cubeEffect={{
                  shadow: true,
                  slideShadows: true,
                  shadowOffset: 20,
                  shadowScale: 0.94,
                }}
                spaceBetween={1}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                // speed={1000}
                autoplay={{ delay: 2900, disableOnInteraction: false }}
                loop={true}
                // onSlideChange={() => console.log('slide change')}
                // onSwiper={(swiper) => console.log(swiper)}
               >
                <SwiperSlide>
                  <div className="slider-c">
                    <p className='text-c'>راکت شاید تنها ترین مجموعه در ایران باشد، که آموزش های کاربردی، بروز و پروژه محور متناسب با نیاز بازار داخلی و جهانی ارائه میده! دمتون گرم</p>
                    <div className='info-c'>
                      <img className='img-c' src="./src/images/arrow.png" alt="" />
                      <div className='specs'>
                        <span className='Full-Name'>مهدی علیپور</span>
                        <span className='skill'>کارآفرین ،طراح رفتار و مربی بین المللی</span>
                      </div>
                    </div>

                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slider-c">
                    <p className='text-c'>به واسطه فیلد کاری متفاوت، من تجربه استفاده از دوره ها راکت رو نداشتم ولی هر کدوم از بچه های تیم‌ فنی‌مون که یک دوره از مجموعه راکت تهیه کرده،‌ هم رضایت بالایی داشتند هم دوره ها براشون خیلی کاربردی بوده. تبریک میگم به حسام موسوی عزیز برای دوره های ارزشمندی که خلق کرده</p>
                    <div className='info-c'>
                      <img className='img-c' src="./src/images/arrow.png" alt="" />
                      <div className='specs'>
                        <span className='Full-Name'>وحید بهرامیان</span>
                        <span className='skill'>مدیر محصول ژاکت</span>
                      </div>
                    </div>

                  </div>
                </SwiperSlide>
                </Swiper>
                  
              </div>
            </div>
            <div className='article'>
              <div >
                  <h3 className='text-dev-art'>
                    <i className='fas fa-circle Gray'></i>
                    <i className='fas fa-circle gray'></i>
                    <i className='fas fa-circle black'></i>
                    از گوشه و اطراف دنیای برنامه‌نویسی
                  </h3>
                  <p className='p-art'>نوشتن کار جالبیه که از هزاران سال همراه ما بوده و کمک کرده تا همیشه به روز باشیم، ما در راکت فضای رو به شکلی آماده کردیم تا شما بتونید ایده‌ها و مطالب جالب حوزه برنامه‌نویسی رو در اختیار هزاران برنامه‌نویس عضو راکت قرار بدید.</p>
                  <button className='see-articles'>
                    مشاهده همه مطالب
                    <i className='fas fa-reply white'></i>
                  </button>
              </div>
              <div className='box-art-one'>
                <CardArticle
                images="./src/images/AI-art.png"
                title="مقایسه خروجی AI با کدنویسی دستی"
                imgAuthor="./src/images/author1.png"
                author="ارسطو عباسی"
                category="هوش مصنوعی"
                studyTime="11 دقیقه"
                />
                <CardArticle
                // className="f-2"
                images="./src/images/component-file.png"
                title="بهترین ساختار پوشه React"
                imgAuthor="./src/images/author1.png"
                author="ارسطو عباسی"
                category="ری اکت جی اس"
                studyTime="11 دقیقه"
                />
              </div>
              <div className='box-art-two'>
                <CardArticle
                images="./src/images/lazy-loading.png"
                title="آموزش کامل lazy loading در React برای بهبود سرعت سایت"
                imgAuthor="./src/images/author1.png"
                author="ارسطو عباسی"
                category="ری اکت جی اس"
                studyTime="11 دقیقه"
                />
                <CardArticle
                images="./src/images/wh-ai.png"
                title="هوش مصنوعی چیست؟"
                imgAuthor="./src/images/author1.png"
                author="ارسطو عباسی"
                category="هوش مصنوعی"
                studyTime="11 دقیقه"
                />
              </div>
              <div className='interesting-topics'>
                <span className='topics-week'>موضوعات جذاب این هفته:</span>
                <a href="" className='t-ai'>#هوش مصنوعی</a>
                <a href="" className='t-react'>#ری اکت جی اس</a>
              </div>
            </div>
            <div className='social-virtual'>
              <img className='img-social' src="./src/images/index-phone.png" alt="" />
              <span className='text-social'> ما هر روز کلی مطالب آموزشی جالب در ایتامون منتشر می‌کنیم!</span>
              <button className='see-eitta'>مشاهده کانال ایتا</button>
            </div>
            

      </div>
    // </Router>
    )
}