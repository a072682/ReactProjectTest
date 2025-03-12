import { Container, Nav, Tab } from "react-bootstrap";
import { Autoplay, Navigation, Pagination, } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/css";// 核心 CSS
import "swiper/css/navigation";// 左右箭頭
import MaterialPageModal from "../components/common/MaterialPageModal";
import { useState } from "react";



const materiaPageCard = [
    {
        img:"/assets/images/MateriaPage/MaterialPageMain1SwiperImg01.png",
        imgSm:"/assets/images/MateriaPage/MaterialPageMain1SwiperSmImg01.png",
    },
    {
        img:"/assets/images/MateriaPage/MaterialPageMain1SwiperImg01.png",
        imgSm:"/assets/images/MateriaPage/MaterialPageMain1SwiperSmImg01.png",
    },
    {
        img:"/assets/images/MateriaPage/MaterialPageMain1SwiperImg01.png",
        imgSm:"/assets/images/MateriaPage/MaterialPageMain1SwiperSmImg01.png",
    },
    {
        img:"/assets/images/MateriaPage/MaterialPageMain1SwiperImg01.png",
        imgSm:"/assets/images/MateriaPage/MaterialPageMain1SwiperSmImg01.png",
    },
    {
        img:"/assets/images/MateriaPage/MaterialPageMain1SwiperImg01.png",
        imgSm:"/assets/images/MateriaPage/MaterialPageMain1SwiperSmImg01.png",
    },
    {
        img:"/assets/images/MateriaPage/MaterialPageMain1SwiperImg01.png",
        imgSm:"/assets/images/MateriaPage/MaterialPageMain1SwiperSmImg01.png",
    },
];

function MateriaPage(){


    //視窗狀態
    const [handleMaterialPageModal,setHandleMaterialPageModal]=useState(null);



    return(
        <>
            <div className="MateriaPage-main1 w-100 oEstimate-main2-bg-set" id="MateriaPage-main1">
                <Container className="py-100">
                    <div className="row">
                        <div className="col-12 "> 
                            <h3 className="fs-32 fw-900 lh-15 text-center text-nautral-white fs-xl-64 text-xl-start">FDM</h3>
                            {/* 按鈕區塊 */}
                            <div className="d-flex gap-72 justify-content-end align-items-center MateriaPage-main1-swiper-btn-set">
                                <button className="materiaPageSwiperNextBtnL">
                                    <div className="img-box">
                                        <img className="img-set" src="/assets/images/MateriaPage/MateriaPage-main1-arrowL.png" alt="MateriaPage-main1-arrowL" />
                                    </div>
                                </button>
                                <button className="materiaPageSwiperNextBtnR">
                                    <div className="img-box">
                                        <img className="img-set" src="/assets/images/MateriaPage/MateriaPage-main1-arrowR.png" alt="MateriaPage-main1-arrowR" />
                                    </div>
                                </button>
                            </div>
                            {/* 按鈕區塊 */}
                            {/* 頁籤的內容區塊 */}

                            <Swiper
                                modules={[Navigation, Pagination, Autoplay]}
                                spaceBetween={0}
                                slidesPerView={1}
                                centeredSlides={true}
                                breakpoints={{
                                    1200: { slidesPerView: 3,
                                            spaceBetween: 16,
                                    },
                                    1400: { spaceBetween: 24 }, // 電腦顯示 3 張
                                  }}
                                navigation={{ prevEl: ".materiaPageSwiperNextBtnL", nextEl: ".materiaPageSwiperNextBtnR" }}
                                loop={true}
                                >
                                {materiaPageCard?.map((item, index) => {
                                    return(
                                        <SwiperSlide className="pt-48">
                                            <div key={index} className="materiaPageCardSet p-8" id="content-1">                       
                                                <div className="cardContentSet">
                                            
                                                    <picture>
                                                        <source srcSet={item.img} media="(min-width:1400px)" />
                                                        <img className="img-set" src={item.imgSm} alt="home-section2-1" />
                                                    </picture>   
                                                
                                                    <div className="textConentSet">
                                            
                                                        <div className="mt-16 mt-xl-32">
                                                            <button onClick={()=>{handleMaterialPageModal?.show()}} className="secondary-btn1-set d-flex align-items-center ms-auto me-auto ms-xl-auto me-xl-32">
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
                            <h3 className="fs-32 fw-900 lh-15 text-center text-nautral-white fs-xl-64 text-xl-start">FDM</h3>
                            {/* 按鈕區塊 */}
                            <div className="d-flex gap-72 justify-content-end align-items-center MateriaPage-main1-swiper-btn-set">
                                <button className="materiaPageSwiperNextBtnL">
                                    <div className="img-box">
                                        <img className="img-set" src="/assets/images/MateriaPage/MateriaPage-main1-arrowL.png" alt="MateriaPage-main1-arrowL" />
                                    </div>
                                </button>
                                <button className="materiaPageSwiperNextBtnR">
                                    <div className="img-box">
                                        <img className="img-set" src="/assets/images/MateriaPage/MateriaPage-main1-arrowR.png" alt="MateriaPage-main1-arrowR" />
                                    </div>
                                </button>
                            </div>
                            {/* 按鈕區塊 */}
                            {/* 頁籤的內容區塊 */}

                            <Swiper
                                modules={[Navigation, Pagination, Autoplay]}
                                spaceBetween={0}
                                slidesPerView={1}
                                centeredSlides={true}
                                breakpoints={{
                                    1200: { slidesPerView: 3,
                                            spaceBetween: 16,
                                    },
                                    1400: { spaceBetween: 24 }, // 電腦顯示 3 張
                                  }}
                                navigation={{ prevEl: ".materiaPageSwiperNextBtnL", nextEl: ".materiaPageSwiperNextBtnR" }}
                                loop={true}
                                >
                                {materiaPageCard?.map((item, index) => {
                                    return(
                                        <SwiperSlide className="pt-48">
                                            <div key={index} className="materiaPageCardSet p-8" id="content-1">                       
                                                <div className="cardContentSet">
                                            
                                                    <picture>
                                                        <source srcSet={item.img} media="(min-width:1400px)" />
                                                        <img className="img-set" src={item.imgSm} alt="home-section2-1" />
                                                    </picture>   
                                                
                                                    <div className="textConentSet">
                                            
                                                        <div className="mt-16 mt-xl-32">
                                                            <button onClick={()=>{handleMaterialPageModal?.show()}} className="secondary-btn1-set d-flex align-items-center ms-auto me-auto ms-xl-auto me-xl-32">
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
                            <h3 className="fs-32 fw-900 lh-15 text-center text-nautral-white fs-xl-64 text-xl-start">FDM</h3>
                            {/* 按鈕區塊 */}
                            <div className="d-flex gap-72 justify-content-end align-items-center MateriaPage-main1-swiper-btn-set">
                                <button className="materiaPageSwiperNextBtnL">
                                    <div className="img-box">
                                        <img className="img-set" src="/assets/images/MateriaPage/MateriaPage-main1-arrowL.png" alt="MateriaPage-main1-arrowL" />
                                    </div>
                                </button>
                                <button className="materiaPageSwiperNextBtnR">
                                    <div className="img-box">
                                        <img className="img-set" src="/assets/images/MateriaPage/MateriaPage-main1-arrowR.png" alt="MateriaPage-main1-arrowR" />
                                    </div>
                                </button>
                            </div>
                            {/* 按鈕區塊 */}
                            {/* 頁籤的內容區塊 */}

                            <Swiper
                                modules={[Navigation, Pagination, Autoplay]}
                                spaceBetween={0}
                                slidesPerView={1}
                                centeredSlides={true}
                                breakpoints={{
                                    1200: { slidesPerView: 3,
                                            spaceBetween: 16,
                                    },
                                    1400: { spaceBetween: 24 }, // 電腦顯示 3 張
                                  }}
                                navigation={{ prevEl: ".materiaPageSwiperNextBtnL", nextEl: ".materiaPageSwiperNextBtnR" }}
                                loop={true}
                                >
                                {materiaPageCard?.map((item, index) => {
                                    return(
                                        <SwiperSlide className="pt-48">
                                            <div key={index} className="materiaPageCardSet p-8" id="content-1">                       
                                                <div className="cardContentSet">
                                            
                                                    <picture>
                                                        <source srcSet={item.img} media="(min-width:1400px)" />
                                                        <img className="img-set" src={item.imgSm} alt="home-section2-1" />
                                                    </picture>   
                                                
                                                    <div className="textConentSet">
                                            
                                                        <div className="mt-16 mt-xl-32">
                                                            <button onClick={()=>{handleMaterialPageModal?.show()}} className="secondary-btn1-set d-flex align-items-center ms-auto me-auto ms-xl-auto me-xl-32">
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

            <MaterialPageModal setHandleMaterialPageModal={setHandleMaterialPageModal}/>
        </>
    )
}

export default MateriaPage;