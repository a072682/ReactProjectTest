import { Link } from "react-router-dom";
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/css";// 核心 CSS
import "swiper/css/navigation";// 左右箭頭
import "swiper/css/pagination"; // 分頁點


//圖片引入
import mainFrameSm from "../assets/images/IndexPage/main-frame-sm.png";
import mainSmCorner from "../assets/images/IndexPage/main-sm-corner.png";

import indexMian2Img01 from "../assets/images/IndexPage/index-mian2-img01.png";
import indexMian2Img02 from "../assets/images/IndexPage/index-mian2-img02.png";
import indexMian2Img03 from "../assets/images/IndexPage/index-mian2-img03.png";

import indexMian3SmImg01 from "../assets/images/IndexPage/index-mian3-sm-img01.png";
import indexMian3SmImg02 from "../assets/images/IndexPage/index-mian3-sm-img02.png";
import indexMian3SmImg03 from "../assets/images/IndexPage/index-mian3-sm-img03.png";

import indexMian3Img01 from "../assets/images/IndexPage/index-mian3-img01.png";
import indexMian3Img02 from "../assets/images/IndexPage/index-mian3-img02.png";
import indexMian3Img03 from "../assets/images/IndexPage/index-mian3-img03.png";

import indexMain5ArrowR from "../assets/images/IndexPage/index-main5-arrowR.png";
import indexMain5ArrowL from "../assets/images/IndexPage/index-main5-arrowL.png";

import indexMian5Img01 from "../assets/images/IndexPage/index-mian5-img01.png";
import indexMian5Img02 from "../assets/images/IndexPage/index-mian5-img02.png";
import indexMian5Img03 from "../assets/images/IndexPage/index-mian5-img03.png";

import indexMian5SmImg01 from "../assets/images/IndexPage/index-mian5-sm-img01.png";
import indexMian5SmImg02 from "../assets/images/IndexPage/index-mian5-sm-img02.png";
import indexMian5SmImg03 from "../assets/images/IndexPage/index-mian5-sm-img03.png";


const IndexPageSwiperCard=[
    {
        title:"2024材料與應用展即將來臨",
        content:"第十三屆材料與應用大展將於2024年10月20日盛大登場，聚焦前沿科技與創新應用，精彩不容錯過。",
        html:"https://www.imttaiwan.com/",
        img: indexMian5Img01,
        imgSm: indexMian5SmImg01
    },
    {
        title:"Come&Buy榮獲藍點設計獎",
        content:"好消息！恭喜Come&Buy榮獲藍點設計獎，這一殊榮肯定了我們在3D列印與創新設計領域的卓越表現。",
        html:"https://www.imttaiwan.com/",
        img:indexMian5Img02,
        imgSm: indexMian5SmImg02,
    },
    {
        title:"新材料現世！！！",
        content:"德國杜瓦實驗室發表最新型奈米級技術,將在材料科學與應用領域帶來突破性進展。",
        html:"https://www.imttaiwan.com/",
        img:indexMian5Img03,
        imgSm: indexMian5SmImg03,
    },
    {
        title:"2024材料與應用展即將來臨",
        content:"第十三屆材料與應用大展將於2024年10月20日盛大登場，聚焦前沿科技與創新應用，精彩不容錯過。",
        html:"https://www.imttaiwan.com/",
        img: indexMian5Img01,
        imgSm: indexMian5SmImg01
    },
    {
        title:"Come&Buy榮獲藍點設計獎",
        content:"好消息！恭喜Come&Buy榮獲藍點設計獎，這一殊榮肯定了我們在3D列印與創新設計領域的卓越表現。",
        html:"https://www.imttaiwan.com/",
        img:indexMian5Img02,
        imgSm: indexMian5SmImg02,
    },
    {
        title:"新材料現世！！！",
        content:"德國杜瓦實驗室發表最新型奈米級技術,將在材料科學與應用領域帶來突破性進展。",
        html:"https://www.imttaiwan.com/",
        img:indexMian5Img03,
        imgSm: indexMian5SmImg03,
    },
]

function IndexPage(){
    return(
        <>
            <div className="main1 pb-28 pb-xl-0">
                <div className="main1-bg d-block d-xl-none">
                    <div className="container">{/*外框 要增加y軸pd在這邊加 sm用*/}
                        <div className="row">                         {/*外框 不動*/} 
                            <div className="col-12 main1-bg-color pt-48"> {/*外框 控制欄數*/}
                                <div className="main1-content d-flex flex-column justify-content-center align-items-center row-gap-48 pb-20">           {/*內層外框*/}
                                    <div className="main1-title mb-8">
                                        <h1 className="fs-32 fw-900 text-center main1-title-text-set">從想像到實物</h1>
                                        <h1 className="fs-32 fw-900 text-center main1-title-text-set">只需Come & Buy</h1>
                                    </div>
                                    <Link className="mian-btn1-set-sm" to="/OestimatePage">
                                        開始製作
                                    </Link>
                                    <div className="main1-img-box">
                                        <img className="main1-img" src={mainFrameSm} alt="main-frame-sm" />
                                        <img className="main-corner-img" src={mainSmCorner} alt="main-sm-corner" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="main1-bg d-none d-xl-block">
                    <div className="container">        {/*外框 要增加y軸pd在這邊加 lg用*/}
                        <div className="row">                         {/*外框 不動*/} 
                            <div className="col-6 "> {/*外框 控制欄數*/}
                                <div className="main1-content-L h-100 d-xl-flex flex-xl-column justify-content-xl-center align-items-xl-start">           {/*內層外框*/}
                                    <div className="main1-title mb-56">
                                        <h1 className="fs-64 fw-900 main1-title-text-set mb-20">從想像到實物</h1>
                                        <h1 className="fs-64 fw-900 main1-title-text-set">只需Come & Buy</h1>
                                    </div>
                                    <Link className="mian-btn1-set-sm text-center" to="/OestimatePage">
                                        開始製作
                                    </Link> 
                                </div>
                            </div>
                            <div className="col-6"> {/*外框 控制欄數*/}
                                <div className="main1-content-R py-124">           {/*內層外框*/}
                                    <div className="main1-img-box ms-auto">
                                        <img className="main1-img" src={mainFrameSm} alt="main-frame-sm" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>

            <div className="main2 container-out py-64 py-lg-160">
                <div className="container mb-64 mb-lg-96">
                    <div className="row">
                            <div className="col-12 mb-64 col-lg-4 mb-lg-0">
                                <div className="main2-card1 main2-card-set">
                                    <div className="main2-card1-img-box main2-card-img-box-set">
                                        <img src={indexMian2Img01} alt="index-mian2-img01" />
                                    </div>
                                    <div className="main2-box d-flex justify-content-center align-items-center">
                                        <p className="main2-box-text d-flex justify-content-center align-items-center">設計流程標準化</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 mb-64 col-lg-4 mb-lg-0">
                                <div className="main2-card2 main2-card-set">
                                    <div className="main2-card2-img-box main2-card-img-box-set">
                                        <img src={indexMian2Img02} alt="index-mian2-img02" />
                                    </div>
                                    <div className="main2-box d-flex justify-content-center">
                                        <p className="main2-box-text d-flex justify-content-center align-items-center">降低前期製造成本</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-lg-4 mb-lg-0">
                                <div className="main2-card3 main2-card-set">
                                    <div className="main2-card3-img-box main2-card-img-box-set">
                                        <img src={indexMian2Img03} alt="index-mian2-img03" />
                                    </div>
                                    <div className="main2-box d-flex justify-content-center">
                                        <p className="main2-box-text d-flex justify-content-center align-items-center">細節精準調教</p>
                                    </div>
                                </div>
                            </div>
                    
                    </div>
                </div>
                <div className="d-flex justify-content-center d-lg-none">
                    
                    <Link className="mian-btn1-set-sm text-center" to="/OestimatePage">
                        開始製作
                    </Link>
                    
                </div>
                <div className="d-none d-lg-flex justify-content-lg-center">
                    <Link className="mian-btn1-set-sm text-center" to="/OestimatePage">
                        開始製作
                    </Link>
                </div>
            </div>

            <div className="main3">
                <div className="container pt-64 pb-100 pt-lg-144 pb-lg-144">        {/*外框 要增加y軸pd在這邊加*/}
                    <div className="row">                         {/*外框 不動*/}

                        <div className="col-12 d-lg-none"> {/*外框 控制欄數 sm用*/}
                            <div className="main3-content">           {/*內層外框*/}

                                <div className="main3-title pb-48">
                                    <h1 className="fs-32 text-center main3-title-text-set">線上估價</h1>
                                </div>
                                <div className="main3-card">

                                    <div className="main3-card-item1 border-bottom-set mb-64">
                                        <div className="main3-img-box pb-24 mx-auto">
                                            <img className="d-block mx-auto main3-img-set" src={indexMian3SmImg01} alt="index-mian3-sm-img01" />
                                        </div>
                                        <div className="main-text-box pb-24">
                                        <p className="fs-24 fw-bold main3-text-set">上傳你的創意，我們將它變成現實,體驗定制化3D列印的無限可能。</p>
                                        </div>
                                    </div>

                                    <div className="main3-card-item2 mb-64">
                                        <div className="main3-img-box pb-24 mx-auto">
                                            <img className="d-block mx-auto main3-img-set" src={indexMian3SmImg02} alt="index-mian3-sm-img02" />
                                        </div>
                                        <div className="main3-text-box border-bottom-set pb-20 mb-64">
                                        <p className="fs-24 fw-bold main3-text-set text-md-center text-lg-start">24小時內快速報價，讓你的3D列印計劃立即起步。</p>
                                        </div>
                                        <div className="main3-btn-box">
                                        <Link className="mian-btn1-set-sm d-block text-center" to="/OestimatePage">
                                            開始製作
                                        </Link>
                                        </div>
                                    </div>

                                    <div className="main3-card-item3 border-bottom-set">
                                        <div className="main3-img-box pb-24 mx-auto">
                                            <img className="d-block mx-auto main3-img-set" src={indexMian3SmImg03} alt="index-mian3-sm-img03" />
                                        </div>
                                        <div className="main-text-box pb-24">
                                        <p className="fs-24 fw-bold main3-text-set text-md-center text-lg-start">打樣快速交付,讓你的創意即刻成真。</p>
                                        </div>
                                    </div>
                                
                                </div>
                            </div>
                        </div>

                        <div className="col-12 d-none d-lg-block"> {/*外框 控制欄數 lg用*/}
                            <div className="main3-content">           {/*內層外框*/}

                                <div className="main3-title pb-64">
                                    <h1 className="fs-64 text-center main3-title-text-set">線上估價</h1>
                                </div>
                                <div className="main3-card">

                                    <div className="main3-card-item1 d-flex justify-content-lg-center align-items-lg-center mb-112 gap-148">
                                        <div className="main3-img-box">
                                            <img className="d-block mx-auto main3-img-set" src={indexMian3Img01} alt="index-mian3-img01" />
                                        </div>
                                        <div className="main-text-box border-bottom-set pt-32 pb-28">
                                            <p className="fs-32 fw-bold main3-text-set">上傳你的創意，我們將它變成現實,體驗定制化3D列印的無限可能。</p>
                                        </div>
                                    </div>

                                    <div className="main3-card-item2 d-flex flex-row-reverse justify-content-lg-between align-items-lg-center mb-112 gap-148">
                                        <div className="main3-img-box">
                                            <img className="d-block mx-auto main3-img-set" src={indexMian3Img02} alt="index-mian3-img02" />
                                        </div>
                                        <div className="item2-content">
                                            <div className="main-text-box border-bottom-set pt-32 pb-28 mb-48">
                                                <p className="fs-32 fw-bold main3-text-set">24小時內快速報價，讓你的3D列印計劃立即起步。</p>
                                            </div>
                                            <div className="main3-btn-box">
                                            <Link className="mian-btn1-set-sm d-block text-center" to="/OestimatePage">
                                                開始製作
                                            </Link>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="main3-card-item3 d-flex justify-content-lg-between align-items-lg-center gap-148">
                                        <div className="main3-img-box">
                                            <img className="d-block main3-img-set" src={indexMian3Img03} alt="index-mian3-img03" />
                                        </div>
                                        <div className="main-text-box border-bottom-set pt-32 pb-28">
                                            <p className="fs-32 fw-bold main3-text-set">打樣快速交付，讓你的創意即刻成真。</p>
                                        </div>
                                    </div>
                                
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="main4" id="index-main4">
                <div className="container  pt-64 pb-100 pt-lg-144 pb-lg-144">        {/*外框 要增加y軸pd在這邊加*/}
                    <div className="row gx-xxl-48">                                            {/*外框 不動*/}
                        <div className="main4-title mb-48 d-lg-none">
                            <h1 className="fs-32 text-center main4-title-text-set">服務項目</h1>
                        </div>
                        <div className="col-6 pe-6 ps-12 mb-48 d-lg-none"> {/*外框 控制欄數 sm用*/}
                            <div className="main4-content">                     {/*內層外框*/}
                                <div className="main4-card">
                                    <div className="card-item1 mb-24 d-flex justify-content-end justify-content-md-center">
                                        <p className="fs-16 fw-bolder text-center box-sm">FDM技術</p>
                                    </div>
                                    <div className="card-item2 mb-24 d-flex justify-content-end justify-content-md-center">
                                        <p className="fs-16 fw-bolder text-center box-sm">SLM技術</p>
                                    </div>
                                    <div className="card-item3 d-flex justify-content-end justify-content-md-center">
                                        <p className="fs-16 fw-bolder text-center box-sm">SLS選擇性雷射燒結</p>
                                    </div>               
                                </div>
                            </div>
                        </div>
                        <div className="col-6 ps-6 pe-12 mb-48 d-lg-none"> {/*外框 控制欄數 sm用*/}
                        <div className="main4-content">                               {/*內層外框*/}
                            <div className="main4-card">
                                <div className="card-item4 mb-24 d-flex justify-content-start justify-content-md-center">
                                    <p className="fs-16 fw-bolder text-center box-sm">連續碳纖維尼龍</p>
                                </div>
                                <div className="card-item4 mb-24 d-flex justify-content-start justify-content-md-center">
                                    <p className="fs-16 fw-bolder text-center box-sm">SLA雷射光固化</p>
                                </div>
                                <div className="card-item4 d-flex justify-content-start justify-content-md-center">
                                    <p className="fs-16 fw-bolder text-center box-sm">層疊製造成型</p>
                                </div>               
                            </div>
                        </div>
                        </div>
                        <div className="main4-btn-box d-lg-none">
                            <Link className="mian-btn1-set-sm d-block text-center" to="/OestimatePage">
                                開始製作
                            </Link>
                        </div>

                        <div className="col-4 d-none d-lg-block"> {/*外框 控制欄數 lg用*/}
                            <div className="main4-content h-100 d-flex flex-column justify-content-lg-center">           {/*內層外框*/}
                                <div className="main4-title mb-48">
                                    <h1 className="fs-64 main4-title-text-set">服務項目</h1>
                                </div>
                                <div className="main3-btn-box">
                                <Link className="mian-btn1-set-sm d-block text-center" to="/OestimatePage">
                                    開始製作
                                </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-4 d-none d-lg-block"> {/*外框 控制欄數 lg用*/}
                            <div className="main4-content">           {/*內層外框*/}   
                                <div className="main4-card">
                                    <div className="card-item1 mb-60">
                                        <p className="fs-24 fw-bolder text-center box">FDM技術</p>
                                    </div>
                                    <div className="card-item2 mb-60">
                                        <p className="fs-24 fw-bolder text-center box">SLM技術</p>
                                    </div>
                                    <div className="card-item3">
                                        <p className="fs-24 fw-bolder text-center box">SLS選擇性雷射燒結</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-4 d-none d-lg-block"> {/*外框 控制欄數 lg用*/}
                            <div className="main4-content">           {/*內層外框*/}
                                <div className="main4-card">
                                    <div className="card-item4 mb-60">
                                        <p className="fs-24 fw-bolder text-center box">連續碳纖維尼龍</p>
                                    </div>
                                    <div className="card-item5 mb-60">
                                        <p className="fs-24 fw-bolder text-center box">SLA雷射光固化</p>
                                    </div>
                                    <div className="card-item6">
                                        <p className="fs-24 fw-bolder text-center box">層疊製造成型</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="main5" id="index-main5">
                <div className="main5-title-box">
                    <h3 className="main5-title-box-set text-nautral-white text-center fs-32 fw-900 fs-xxl-64 pt-64 pb-48 pt-xxl-144 px-xxl-88 ">最新消息</h3>
                </div>
                <div className="container pb-64 pb-lg-144">        {/*外框 要增加y軸pd在這邊加*/}
                    <div className="row justify-content-center gx-0">      {/*外框 不動*/}
                        <div className="col-xl-12"> {/*外框 控制欄數*/}
                            <div className="main5-content">     {/*內層外框*/}

                                <Swiper
                                    modules={[Navigation, Pagination, Autoplay]}
                                    spaceBetween={10}
                                    slidesPerView={1}
                                    breakpoints={{
                                        1200: { slidesPerView: 3 }, // 電腦顯示 3 張
                                      }}
                                    navigation={{ prevEl: ".swiper-next-L-btn", nextEl: ".swiper-next-R-btn" }}
                                    loop={true}
                                    className="mySwiper"
                                  >
                                    {
                                        IndexPageSwiperCard?.map((itme,index)=>{
                                            return(
                                                <SwiperSlide>
                                                    <div key={index} className="main5-card1-box main5-card-box-set mx-auto">
                                                        <div className="main5-card1-img-box main5-card-img-box-set mx-auto">
                                                            <picture>
                                                                <source srcSet={itme.img} media="(min-width:1400px)" />
                                                                <img className="img-set" src={itme.imgSm} alt="index-mian5-sm-img01" />
                                                            </picture>
                                                        </div>
                                                        <div className="main5-card1-text main5-card-text-set pt-24 pb-32 px-32 mx-auto d-flex flex-column justify-content-between">
                                                            <div className="main5-card1-title main5-card-title-set d-flex flex-column mb-xxl-24">
                                                                <h5 className="fw-700 text-nautral-white">{itme.title}</h5>
                                                                <time className="fw-500 text-primary3" dateTime="2024/04/01">2024/04/01</time>
                                                            </div>
                                                            <div className="main5-card1-text main5-card-con-set d-flex flex-column mb-auto mb-xxl-24">
                                                                <p className="fw-500 text-nautral-white">
                                                                {itme.content}
                                                                </p>
                                                            </div>
                                                            <button className="secondary-btn1-set d-flex d-lg-none mx-auto text-purple">
                                                                <a className="a-re d-lg-none d-flex align-items-center" href={itme.html} target="_blank">
                                                                More
                                                                <span className="material-symbols-outlined sec-btn1-img-set">
                                                                    chevron_right
                                                                </span>
                                                                </a>
                                                            </button>
                                                            <button className="secondary-btn1-set d-none d-lg-flex align-items-center ms-lg-auto">
                                                                <a className="a-re d-none d-lg-flex align-items-center" href={itme.html} target="_blank">
                                                                閱讀更多
                                                                <span className="material-symbols-outlined sec-btn1-img-set">
                                                                    chevron_right
                                                                </span>
                                                                </a>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                            )
                                        })
                                    }
                                </Swiper>
                                <div className="main5-btn-box d-flex justify-content-center align-items-center mt-48">
                                    <Link className="mian-btn1-set-sm text-center" to="/OestimatePage">
                                        開始製作
                                    </Link>
                                </div>
                                {/* <div className="swiper-next-R-btn"> */}
                                <button className="swiper-next-R-btn carousel-btn-R">
                                    <div className="img-box">
                                        <img className="img-set" src={indexMain5ArrowR} alt="index-main5-arrowR" />
                                    </div>
                                </button>
                                {/* </div> */}
                                <div className="swiper-next-L-btn">
                                <button className="carousel-btn-L">
                                    <div className="img-box">
                                        <img className="img-set" src={indexMain5ArrowL} alt="index-main5-arrowL" />
                                    </div>
                                </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default IndexPage;