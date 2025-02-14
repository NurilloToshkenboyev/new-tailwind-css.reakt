import PlayMarket from './img/googleplay.png'
import App from './img/appstore.png'
import Payme from './img/Payment.png'
import GroupImg from './img/Group.png'
import GroupImg2 from './img/Group2.png'
export const Footer = () => {
    return <div className="footer__block w-[100%] h-[400px]  bg-blue-200 flex-col items-center justify-between">
        <div className="footer__top w-[100%] h-[200px]  mt-[100px] flex justify-around ">
            <div className="footer__carta flex flex-col mt-8 ">
                <strong className="footer__text_stil  ">Платформа хақида</strong>
                <a className="footer__link_stil mt-1 " href="">Liber ўзи нима?</a>
                <a className="footer__link_stil mt-1 " href="">Фойдаланиш шартлари</a>
                <a className="footer__link_stil mt-1  " href="">Ёрдам</a>

            </div>
            <div className="footer__card flex flex-col mt-8">
                <strong className="footer__text  ">Обуна хақида</strong>
                <a className="footer__link_stil mt-1 " href="">Обуна бўлиш</a>
                <a className="footer__link_stil mt-1 " href="">Қандай тўлаш</a>

            </div>
            <div className="footer__card flex flex-col mt-8">
                <strong className="footer__text ">Китоблар</strong>
                <a className="footer__link_stil mt-1 " href="">Аудио китоблар</a>
                <a className="footer__link_stil mt-1 " href="">Электрон китоблар</a>
                <a className="footer__link_stil mt-1 " href="">Китоблар</a>

            </div>
            <div className="footer__card flex flex-col mt-8">
                <strong className="footer__text  ">Мобил илова</strong>
                <img className='footer__img_stile mt-2 w-[130px]' src={PlayMarket} alt="" />
                <img className='footer__img_stile mt-2 w-[130px]' src={App} alt="" />

            </div>
        </div>
        <div className="footer__bottom w-[100%] h-[80px] bg-blue-950 mt-[120px] flex">
            <div className='fotter__card ml-10 mt-4'>
                <strong className='footer__text text-white'>Ижтимоий тармоқлар</strong>
                <div className='icon flex gap-3 mt-3'>
                    <svg width="24" height="24" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_5328_1157)">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 0C18.6274 0 24 5.37258 24 12C24 17.9895 19.6118 22.954 13.875 23.8542V15.4688H16.6711L17.2031 12H13.875V9.75C13.875 8.80102 14.34 7.875 15.8306 7.875H17.3438V4.92188C17.3438 4.92188 17.1846 4.89472 16.9229 4.8589C16.5118 4.80263 15.8477 4.72498 15.1498 4.69757C14.9867 4.69116 14.8216 4.6875 14.6576 4.6875C11.9166 4.6875 10.125 6.34875 10.125 9.35625V12H7.07812V15.4688H10.125V23.8542C4.3882 22.954 0 17.9895 0 12C0 5.37258 5.37258 0 12 0Z" fill="white" />
                        </g>
                        <defs>
                            <clipPath id="clip0_5328_1157">
                                <rect width="24" height="24" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_5328_1166)">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M22.7465 4.83407C23.1189 5.20883 23.3863 5.67482 23.522 6.18541C24.0238 8.06996 24.0238 12 24.0238 12C24.0238 12 24.0238 15.93 23.522 17.8145C23.3863 18.3251 23.1189 18.7911 22.7465 19.1658C22.3741 19.5406 21.9099 19.811 21.4002 19.95C19.5238 20.4545 12.0238 20.4545 12.0238 20.4545C12.0238 20.4545 4.5238 20.4545 2.64744 19.95C2.13773 19.811 1.67346 19.5406 1.30109 19.1658C0.92872 18.7911 0.661309 18.3251 0.525622 17.8145C0.0238037 15.93 0.0238037 12 0.0238037 12C0.0238037 12 0.0238037 8.06996 0.525622 6.18541C0.661309 5.67482 0.92872 5.20883 1.30109 4.83407C1.67346 4.4593 2.13773 4.18891 2.64744 4.04996C4.5238 3.54541 12.0238 3.54541 12.0238 3.54541C12.0238 3.54541 19.5238 3.54541 21.4002 4.04996C21.9099 4.18891 22.3741 4.4593 22.7465 4.83407ZM9.56927 8.43134V15.5686L15.842 12L9.56927 8.43134Z" fill="white" />
                        </g>
                        <defs>
                            <clipPath id="clip0_5328_1166">
                                <rect width="24" height="24" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.0265 7.70332C17.5702 8.81041 19.4607 9.46185 21.5025 9.46185V6.35778C20.3628 6.11414 19.3538 5.5164 18.5951 4.68499C17.2966 3.87179 16.361 2.5302 16.0867 0.959961H13.2241V16.7106C13.2176 18.5468 11.7327 20.0336 9.90162 20.0336C8.82257 20.0336 7.86394 19.5174 7.25682 18.7178C6.17269 18.1687 5.42923 17.0413 5.42923 15.7394C5.42923 13.8981 6.91655 12.4052 8.75161 12.4052C9.1032 12.4052 9.44208 12.4602 9.75995 12.5614V9.42338C5.81921 9.50509 2.6499 12.7365 2.6499 16.7107C2.6499 18.6946 3.43913 20.4931 4.72006 21.8071C5.87565 22.5858 7.26675 23.04 8.76342 23.04C12.7747 23.04 16.0265 19.7765 16.0265 15.7509V7.70332H16.0265Z" fill="#F5F5F5" />
                        <path d="M21.5025 6.3578V5.51848C20.4748 5.52005 19.4672 5.23119 18.5952 4.68493C19.3671 5.53306 20.3835 6.11787 21.5025 6.3578ZM16.0867 0.959983C16.0605 0.809911 16.0404 0.658851 16.0265 0.507214V0H12.074V15.7508C12.0677 17.5868 10.5829 19.0736 8.75164 19.0736C8.214 19.0736 7.70638 18.9455 7.25685 18.7179C7.86397 19.5174 8.82259 20.0336 9.90164 20.0336C11.7326 20.0336 13.2177 18.5469 13.2241 16.7107V0.959983H16.0867ZM9.76014 9.42341V8.52989C9.42988 8.48459 9.09691 8.46186 8.76353 8.46202C4.75192 8.46194 1.5 11.7254 1.5 15.7508C1.5 18.2745 2.77806 20.4987 4.72017 21.807C3.43924 20.493 2.65001 18.6944 2.65001 16.7106C2.65001 12.7365 5.81924 9.50511 9.76014 9.42341Z" fill="white" />
                    </svg>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM12.43 8.85893C11.2628 9.3444 8.93014 10.3492 5.43189 11.8733C4.86383 12.0992 4.56626 12.3202 4.53917 12.5363C4.49339 12.9015 4.95071 13.0453 5.57347 13.2411C5.65818 13.2678 5.74595 13.2954 5.83594 13.3246C6.44864 13.5238 7.27283 13.7568 7.70129 13.766C8.08994 13.7744 8.52373 13.6142 9.00264 13.2853C12.2712 11.079 13.9584 9.96381 14.0643 9.93977C14.139 9.92281 14.2426 9.90148 14.3128 9.96385C14.3829 10.0262 14.376 10.1443 14.3686 10.176C14.3233 10.3691 12.5281 12.0381 11.5991 12.9018C11.3095 13.171 11.1041 13.362 11.0621 13.4056C10.968 13.5033 10.8721 13.5958 10.78 13.6846C10.2108 14.2333 9.78391 14.6448 10.8036 15.3168C11.2936 15.6397 11.6858 15.9067 12.077 16.1731C12.5042 16.4641 12.9303 16.7543 13.4816 17.1157C13.6221 17.2077 13.7562 17.3034 13.8869 17.3965C14.3841 17.751 14.8307 18.0694 15.3826 18.0186C15.7032 17.9891 16.0345 17.6876 16.2027 16.7884C16.6002 14.6631 17.3816 10.0585 17.5622 8.16097C17.578 7.99473 17.5581 7.78197 17.5422 7.68857C17.5262 7.59518 17.4928 7.46211 17.3714 7.3636C17.2276 7.24694 17.0056 7.22234 16.9064 7.22408C16.455 7.23203 15.7626 7.47282 12.43 8.85893Z" fill="white" />
                    </svg>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_5328_1174)">
                            <path d="M12 2.16094C15.2063 2.16094 15.5859 2.175 16.8469 2.23125C18.0188 2.28281 18.6516 2.47969 19.0734 2.64375C19.6313 2.85938 20.0344 3.12188 20.4516 3.53906C20.8734 3.96094 21.1313 4.35938 21.3469 4.91719C21.5109 5.33906 21.7078 5.97656 21.7594 7.14375C21.8156 8.40937 21.8297 8.78906 21.8297 11.9906C21.8297 15.1969 21.8156 15.5766 21.7594 16.8375C21.7078 18.0094 21.5109 18.6422 21.3469 19.0641C21.1313 19.6219 20.8687 20.025 20.4516 20.4422C20.0297 20.8641 19.6313 21.1219 19.0734 21.3375C18.6516 21.5016 18.0141 21.6984 16.8469 21.75C15.5813 21.8062 15.2016 21.8203 12 21.8203C8.79375 21.8203 8.41406 21.8062 7.15313 21.75C5.98125 21.6984 5.34844 21.5016 4.92656 21.3375C4.36875 21.1219 3.96563 20.8594 3.54844 20.4422C3.12656 20.0203 2.86875 19.6219 2.65313 19.0641C2.48906 18.6422 2.29219 18.0047 2.24063 16.8375C2.18438 15.5719 2.17031 15.1922 2.17031 11.9906C2.17031 8.78438 2.18438 8.40469 2.24063 7.14375C2.29219 5.97187 2.48906 5.33906 2.65313 4.91719C2.86875 4.35938 3.13125 3.95625 3.54844 3.53906C3.97031 3.11719 4.36875 2.85938 4.92656 2.64375C5.34844 2.47969 5.98594 2.28281 7.15313 2.23125C8.41406 2.175 8.79375 2.16094 12 2.16094ZM12 0C8.74219 0 8.33438 0.0140625 7.05469 0.0703125C5.77969 0.126563 4.90313 0.332812 4.14375 0.628125C3.35156 0.9375 2.68125 1.34531 2.01563 2.01562C1.34531 2.68125 0.9375 3.35156 0.628125 4.13906C0.332812 4.90313 0.126563 5.775 0.0703125 7.05C0.0140625 8.33437 0 8.74219 0 12C0 15.2578 0.0140625 15.6656 0.0703125 16.9453C0.126563 18.2203 0.332812 19.0969 0.628125 19.8563C0.9375 20.6484 1.34531 21.3188 2.01563 21.9844C2.68125 22.65 3.35156 23.0625 4.13906 23.3672C4.90313 23.6625 5.775 23.8687 7.05 23.925C8.32969 23.9812 8.7375 23.9953 11.9953 23.9953C15.2531 23.9953 15.6609 23.9812 16.9406 23.925C18.2156 23.8687 19.0922 23.6625 19.8516 23.3672C20.6391 23.0625 21.3094 22.65 21.975 21.9844C22.6406 21.3188 23.0531 20.6484 23.3578 19.8609C23.6531 19.0969 23.8594 18.225 23.9156 16.95C23.9719 15.6703 23.9859 15.2625 23.9859 12.0047C23.9859 8.74688 23.9719 8.33906 23.9156 7.05938C23.8594 5.78438 23.6531 4.90781 23.3578 4.14844C23.0625 3.35156 22.6547 2.68125 21.9844 2.01562C21.3188 1.35 20.6484 0.9375 19.8609 0.632812C19.0969 0.3375 18.225 0.13125 16.95 0.075C15.6656 0.0140625 15.2578 0 12 0Z" fill="white" />
                            <path d="M12 5.83594C8.59688 5.83594 5.83594 8.59688 5.83594 12C5.83594 15.4031 8.59688 18.1641 12 18.1641C15.4031 18.1641 18.1641 15.4031 18.1641 12C18.1641 8.59688 15.4031 5.83594 12 5.83594ZM12 15.9984C9.79219 15.9984 8.00156 14.2078 8.00156 12C8.00156 9.79219 9.79219 8.00156 12 8.00156C14.2078 8.00156 15.9984 9.79219 15.9984 12C15.9984 14.2078 14.2078 15.9984 12 15.9984Z" fill="white" />
                            <path d="M19.8469 5.59226C19.8469 6.38914 19.2 7.03133 18.4078 7.03133C17.6109 7.03133 16.9688 6.38445 16.9688 5.59226C16.9688 4.79539 17.6156 4.1532 18.4078 4.1532C19.2 4.1532 19.8469 4.80007 19.8469 5.59226Z" fill="white" />
                        </g>
                        <defs>
                            <clipPath id="clip0_5328_1174">
                                <rect width="24" height="24" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>


                </div>
            </div>
            <div className='footer__card ml-48 mt-4 '>
                <strong className='footer__text text-white'>Боғланиш</strong>
                <div className='footer_div flex gap-5 text-white mt-1   '>
                <a href="">+998 90 253 77 53</a>
                <a href="">support@liber.uz</a>
                </div>

            </div>
            <div className='footer__card  ml-[250px] mt-1'>
                <strong className='footer__text text-white ml-2 '>Биз қабул қиламиз</strong>
                <div className='footer__bottom-img flex mt-1'>
                    <img src={Payme} alt="img" />
                    <img src={GroupImg} alt="img" />
                    <div className='footer__img w-[60px] h-[30px] bg-white rounded-[5px] flex items-center justify-center mt-[5px]'>
                    <img src={GroupImg2} alt="img" />
                    </div>
                </div>
            </div>
        </div>
    </div>
}