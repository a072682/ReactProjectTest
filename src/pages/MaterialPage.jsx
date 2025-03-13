import { Container, Nav, Tab } from "react-bootstrap";
import { Autoplay, Navigation, Pagination, } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/css";// 核心 CSS
import "swiper/css/navigation";// 左右箭頭
import MaterialPageModal from "../components/common/MaterialPageModal";
import { useState } from "react";



const materiaPageMain1Card = [
    {
        img:"/assets/images/MateriaPage/MaterialPageMain1SwiperImg01.png",
        imgSm:"/assets/images/MateriaPage/MaterialPageMain1SwiperSmImg01.png",
    },
    {
        img:"/assets/images/MateriaPage/MaterialPageMain1SwiperImg02.png",
        imgSm:"/assets/images/MateriaPage/MaterialPageMain1SwiperSmImg02.png",
    },
    {
        img:"/assets/images/MateriaPage/MaterialPageMain1SwiperImg03.png",
        imgSm:"/assets/images/MateriaPage/MaterialPageMain1SwiperSmImg03.png",
    },
    {
        img:"/assets/images/MateriaPage/MaterialPageMain1SwiperImg01.png",
        imgSm:"/assets/images/MateriaPage/MaterialPageMain1SwiperSmImg01.png",
    },
    {
        img:"/assets/images/MateriaPage/MaterialPageMain1SwiperImg02.png",
        imgSm:"/assets/images/MateriaPage/MaterialPageMain1SwiperSmImg02.png",
    },
    {
        img:"/assets/images/MateriaPage/MaterialPageMain1SwiperImg03.png",
        imgSm:"/assets/images/MateriaPage/MaterialPageMain1SwiperSmImg03.png",
    },
];

const materiaPageMain2Card = [
    {
        img:"/assets/images/MateriaPage/MaterialPageMain2SwiperImg01.png",
        imgSm:"/assets/images/MateriaPage/MaterialPageMain2SwiperSmImg01.png",
    },
    {
        img:"/assets/images/MateriaPage/MaterialPageMain2SwiperImg02.png",
        imgSm:"/assets/images/MateriaPage/MaterialPageMain2SwiperSmImg02.png",
    },
    {
        img:"/assets/images/MateriaPage/MaterialPageMain2SwiperImg03.png",
        imgSm:"/assets/images/MateriaPage/MaterialPageMain2SwiperSmImg03.png",
    },
    {
        img:"/assets/images/MateriaPage/MaterialPageMain2SwiperImg01.png",
        imgSm:"/assets/images/MateriaPage/MaterialPageMain2SwiperSmImg01.png",
    },
    {
        img:"/assets/images/MateriaPage/MaterialPageMain2SwiperImg02.png",
        imgSm:"/assets/images/MateriaPage/MaterialPageMain2SwiperSmImg02.png",
    },
    {
        img:"/assets/images/MateriaPage/MaterialPageMain2SwiperImg03.png",
        imgSm:"/assets/images/MateriaPage/MaterialPageMain2SwiperSmImg03.png",
    },
];

const materiaPageMain3Card = [
    {
        img:"/assets/images/MateriaPage/MaterialPageMain3SwiperImg01.png",
        imgSm:"/assets/images/MateriaPage/MaterialPageMain3SwiperSmImg01.png",
    },
    {
        img:"/assets/images/MateriaPage/MaterialPageMain3SwiperImg02.png",
        imgSm:"/assets/images/MateriaPage/MaterialPageMain3SwiperSmImg02.png",
    },
    {
        img:"/assets/images/MateriaPage/MaterialPageMain3SwiperImg03.png",
        imgSm:"/assets/images/MateriaPage/MaterialPageMain3SwiperSmImg03.png",
    },
    {
        img:"/assets/images/MateriaPage/MaterialPageMain3SwiperImg01.png",
        imgSm:"/assets/images/MateriaPage/MaterialPageMain3SwiperSmImg01.png",
    },
    {
        img:"/assets/images/MateriaPage/MaterialPageMain3SwiperImg02.png",
        imgSm:"/assets/images/MateriaPage/MaterialPageMain3SwiperSmImg02.png",
    },
    {
        img:"/assets/images/MateriaPage/MaterialPageMain3SwiperImg03.png",
        imgSm:"/assets/images/MateriaPage/MaterialPageMain3SwiperSmImg03.png",
    },
];

function MateriaPage(){


    //視窗狀態
    const [handleMaterialPageModal,setHandleMaterialPageModal]=useState(null);

    //單一資料狀態
    const [singleMaterialPageModal,setSingleMaterialPageModal]=useState({});



    return(
        <>
            <div className="MateriaPage-main1 w-100 oEstimate-main2-bg-set" id="MateriaPage-main1">
                <Container className="py-100">
                    <div className="row">
                        <div className="col-12 "> 
                            <h3 className="fs-32 fw-900 lh-15 text-center text-nautral-white fs-xl-64 text-xl-start">FDM</h3>
                            {/* 按鈕區塊 */}
                            <div className="d-flex gap-72 justify-content-end align-items-center MateriaPage-main1-swiper-btn-set">
                                <button className="materiaPageSwiperMain1NextBtnL">
                                    <div className="img-box">
                                        <img className="img-set" src="/assets/images/MateriaPage/MateriaPage-main1-arrowL.png" alt="MateriaPage-main1-arrowL" />
                                    </div>
                                </button>
                                <button className="materiaPageSwiperMain1NextBtnR">
                                    <div className="img-box">
                                        <img className="img-set" src="/assets/images/MateriaPage/MateriaPage-main1-arrowR.png" alt="MateriaPage-main1-arrowR" />
                                    </div>
                                </button>
                            </div>
                            {/* 按鈕區塊 */}
                            {/* 頁籤的內容區塊 */}

                            <Swiper
                                modules={[Navigation, Pagination, Autoplay]}
                                spaceBetween={10}
                                slidesPerView={1}
                                centeredSlides={true}
                                breakpoints={{
                                    1200: { slidesPerView: 3 }, // 電腦顯示 3 張
                                  }}
                                navigation={{ prevEl: ".materiaPageSwiperMain1NextBtnL", nextEl: ".materiaPageSwiperMain1NextBtnR" }}
                                loop={true}
                                className="mySwiper"
                                >
                                {materiaPageMain1Card?.map((item, index) => {
                                    return(
                                        <SwiperSlide className="pt-48">
                                            <div key={index} className="materiaPageCardSet p-8 mx-auto" id="content-1">                       
                                                <div className="cardContentSet">
                                            
                                                    <picture>
                                                        <source srcSet={item.img} media="(min-width:1400px)" />
                                                        <img className="img-set" src={item.imgSm} alt="home-section2-1" />
                                                    </picture>   
                                                
                                                    <div className="textConentSet">
                                            
                                                        <div className="mt-16 mt-xl-32">
                                                            <button onClick={()=>{handleMaterialPageModal?.show();setSingleMaterialPageModal(item)}} className="secondary-btn1-set d-flex align-items-center ms-auto me-auto ms-xl-auto me-xl-32">
                                                                選擇我
                                                            
                                                                <span className="material-symbols-outlined sec-btn1-img-set">
                                                                    chevron_right
                                                                </span>
                                                                
                                                            </button>
                                                        </div>
            
                                                    </div>   
                                                </div>          
                                            </div> 
                                        </SwiperSlide>
                                    )
                                })}
                            </Swiper>
                            
                                
                        </div>
                    </div>
                </Container>
            </div>

            <div className="MateriaPage-main2 w-100 oEstimate-main2-bg-set" id="MateriaPage-main2">
                <Container className="py-100">
                    <div className="row">
                        <div className="col-12 "> 
                            <h3 className="fs-32 fw-900 lh-15 text-center text-nautral-white fs-xl-64 text-xl-start">光固化</h3>
                            {/* 按鈕區塊 */}
                            <div className="d-flex gap-72 justify-content-end align-items-center MateriaPage-main1-swiper-btn-set">
                                <button className="materiaPageSwiperMain2NextBtnL">
                                    <div className="img-box">
                                        <img className="img-set" src="/assets/images/MateriaPage/MateriaPage-main1-arrowL.png" alt="MateriaPage-main1-arrowL" />
                                    </div>
                                </button>
                                <button className="materiaPageSwiperMain2NextBtnR">
                                    <div className="img-box">
                                        <img className="img-set" src="/assets/images/MateriaPage/MateriaPage-main1-arrowR.png" alt="MateriaPage-main1-arrowR" />
                                    </div>
                                </button>
                            </div>
                            {/* 按鈕區塊 */}
                            {/* 頁籤的內容區塊 */}

                            <Swiper
                                modules={[Navigation, Pagination, Autoplay]}
                                spaceBetween={10}
                                slidesPerView={1}
                                centeredSlides={true}
                                breakpoints={{
                                    1200: { slidesPerView: 3,} // 電腦顯示 3 張
                                  }}
                                navigation={{ prevEl: ".materiaPageSwiperMain2NextBtnL", nextEl: ".materiaPageSwiperMain2NextBtnR" }}
                                loop={true}
                                >
                                {materiaPageMain2Card?.map((item, index) => {
                                    return(
                                        <SwiperSlide className="pt-48">
                                            <div key={index} className="materiaPageCardSet p-8 mx-auto" id="content-1">                       
                                                <div className="cardContentSet">
                                            
                                                    <picture>
                                                        <source srcSet={item.img} media="(min-width:1400px)" />
                                                        <img className="img-set" src={item.imgSm} alt="home-section2-1" />
                                                    </picture>   
                                                
                                                    <div className="textConentSet">
                                            
                                                        <div className="mt-16 mt-xl-32">
                                                            <button onClick={()=>{handleMaterialPageModal?.show();setSingleMaterialPageModal(item)}} className="secondary-btn1-set d-flex align-items-center ms-auto me-auto ms-xl-auto me-xl-32">
                                                                選擇我
                                                            
                                                                <span className="material-symbols-outlined sec-btn1-img-set">
                                                                    chevron_right
                                                                </span>
                                                                
                                                            </button>
                                                        </div>
            
                                                    </div>   
                                                </div>          
                                            </div> 
                                        </SwiperSlide>
                                    )
                                })}
                            </Swiper>
                            
                                
                        </div>
                    </div>
                </Container>
            </div>

            <div className="MateriaPage-main3 w-100 oEstimate-main2-bg-set" id="MateriaPage-main3">
                <Container className="py-100">
                    <div className="row">
                        <div className="col-12 "> 
                            <h3 className="fs-32 fw-900 lh-15 text-center text-nautral-white fs-xl-64 text-xl-start">SLM(金屬)</h3>
                            {/* 按鈕區塊 */}
                            <div className="d-flex gap-72 justify-content-end align-items-center MateriaPage-main1-swiper-btn-set">
                                <button className="materiaPageSwiperMain3NextBtnL">
                                    <div className="img-box">
                                        <img className="img-set" src="/assets/images/MateriaPage/MateriaPage-main1-arrowL.png" alt="MateriaPage-main1-arrowL" />
                                    </div>
                                </button>
                                <button className="materiaPageSwiperMain3NextBtnR">
                                    <div className="img-box">
                                        <img className="img-set" src="/assets/images/MateriaPage/MateriaPage-main1-arrowR.png" alt="MateriaPage-main1-arrowR" />
                                    </div>
                                </button>
                            </div>
                            {/* 按鈕區塊 */}
                            {/* 頁籤的內容區塊 */}

                            <Swiper
                                modules={[Navigation, Pagination, Autoplay]}
                                spaceBetween={10}
                                slidesPerView={1}
                                centeredSlides={true}
                                breakpoints={{
                                    1200: { slidesPerView: 3,}// 電腦顯示 3 張
                                  }}
                                navigation={{ prevEl: ".materiaPageSwiperMain3NextBtnL", nextEl: ".materiaPageSwiperMain3NextBtnR" }}
                                loop={true}
                                >
                                {materiaPageMain3Card?.map((item, index) => {
                                    return(
                                        <SwiperSlide className="pt-48">
                                            <div key={index} className="materiaPageCardSet p-8 mx-auto" id="content-1">                       
                                                <div className="cardContentSet">
                                            
                                                    <picture>
                                                        <source srcSet={item.img} media="(min-width:1400px)" />
                                                        <img className="img-set" src={item.imgSm} alt="home-section2-1" />
                                                    </picture>   
                                                
                                                    <div className="textConentSet">
                                            
                                                        <div className="mt-16 mt-xl-32">
                                                            <button onClick={()=>{handleMaterialPageModal?.show();setSingleMaterialPageModal(item)}} className="secondary-btn1-set d-flex align-items-center ms-auto me-auto ms-xl-auto me-xl-32">
                                                                選擇我
                                                            
                                                                <span className="material-symbols-outlined sec-btn1-img-set">
                                                                    chevron_right
                                                                </span>
                                                                
                                                            </button>
                                                        </div>
            
                                                    </div>   
                                                </div>          
                                            </div> 
                                        </SwiperSlide>
                                    )
                                })}
                            </Swiper>
                            
                                
                        </div>
                    </div>
                </Container>
            </div>

            <MaterialPageModal setHandleMaterialPageModal={setHandleMaterialPageModal} singleMaterialPageModal={singleMaterialPageModal}/>
        </>
    )
}

export default MateriaPage;