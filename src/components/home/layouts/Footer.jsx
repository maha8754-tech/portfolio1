import './Footer.css'

export default function Footer(){

    return(
        <div id='footer' dir='rtl'>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <div className='logo-social'> 
                <img className='logo-footer' src="./src/images/roocket-foot.png" alt="logoRoocket" />
                <div className='hr-footer'></div>
                <div id='social-eng'>
                    <a href="#" class="fa fa-facebook"></a>
                    <a href="#" class="fa fa-twitter"></a>
                    <a href="#" class="fa fa-google"></a>
                    <a href="#" class="fa fa-linkedin"></a>
                    <a href="#" class="fa fa-youtube"></a>
                </div>
            </div>
            <div className='quick-access'>
                <div className="about-roocket">
                    <h3 className="text-about">درباره راکت</h3>
                    <div className='info-roocket'>
                        <p className="p-roocket">راکت یکی از پرتلاش‌ترین و بروزترین وبسایت های آموزشی در سطح ایران است که همیشه تلاش کرده تا بتواند جدیدترین و بروزترین مقالات و دوره‌های آموزشی را در اختیار علاقه‌مندان ایرانی قرار دهد. تبدیل کردن برنامه نویسان ایرانی به بهترین برنامه نویسان جهان هدف ماست.</p>

                        <a href="" className='see-info-course'>
                            مشاهده اطلاعات مسیر یادگیری
                            <i className='fa fa-reply blue-mini'></i>
                        </a>
                    </div>
                </div>
                <div className="sections-site">
                    <h3 className="text-section">بخش های سایت</h3>
                    <ul id='sections'>
                        <a href="">
                            <li className='li-footer'>قوانین و مقررات</li>
                        </a>
                        <a href="">
                            <li className='li-footer'>مدرسان راکت</li>
                        </a>
                        <a href="">
                            <li className='li-footer'>درباره راکت</li>
                        </a>
                        <a href="">
                            <li className='li-footer'>ارتباط با ما</li>
                            {/* <li>fgufu</li> */}
                        </a>
                    </ul>
                </div>
                <div className="populer-courses">
                    <h3 className="text-populer">محبوب ترین آموزش ها</h3>
                    <ul id='populer'>
                        <a href="">
                            <li className='li-footer'>آموزش جاوا اسکریپت</li>
                        </a>
                        <a href="">
                            <li className='li-footer'>آموزش لاراول</li>
                        </a>
                        <a href="">
                            <li className='li-footer'>آموزش وردپرس</li>
                        </a>
                        <a href="">
                            <li className='li-footer'>آموزش react</li>
                        </a>
                    </ul>
                </div>
                <div className="supports-enamad">
                    <h3 className="text-support">ارتباط با ما</h3>
                    <ul id='support'>
                        <li className='E-mail'>
                            <span >
                                <i></i>
                                ایمیل:
                            </span>
                            <a href="https://t.me/roocketir">info@roocket.ir</a>
                        </li>
                        <li className='username-eitta'>
                            <span>
                                <i></i>
                                آی دی ایتا:
                            </span>
                            <a href="https://t.me/roocketir">roocket_support@</a>
                        </li>
                    </ul>
                    <img src="./src/images/E-namad.png" alt="" />
                    {/* <img src="" alt="" /> */}
                </div>
            </div>
            <div className='copy-hr'>
                <p className='copy-right'>کليه حقوق محصولات و محتوای اين سایت متعلق به راکت می باشد و هر گونه کپی برداری از محتوا و محصولات سایت غیر مجاز و بدون رضایت ماست.</p>
                <div id='hr-footer'></div>
            </div>
        </div>
    )
}