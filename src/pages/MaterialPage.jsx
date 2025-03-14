import { Container, Nav, Tab } from "react-bootstrap";
import { Autoplay, Navigation, Pagination, } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/css";// 核心 CSS
import "swiper/css/navigation";// 左右箭頭
import MaterialPageModal from "../components/common/MaterialPageModal";
import { useState } from "react";



const materiaPageMain1Card = [
    {
        img:`${import.meta.env.BASE_URL}assets/images/MateriaPage/MaterialPageMain1SwiperImg01.png`,
        imgSm:`${import.meta.env.BASE_URL}assets/images/MateriaPage/MaterialPageMain1SwiperSmImg01.png`,
        title: "FDM",
        MaterialIntroduction: "使用熱塑性 塑膠，如PLA、ABS、PETG等，透過擠出機加熱並層層堆積成型。",
        content01:"PLA為生物可分解材料，ABS可回收再利用，但燃燒時會產生有害氣體。",
        content02:"材料選擇影響強度與耐熱性，ABS需加熱平台，列印時可能產生氣味。",
        content03:"適合製作堅固耐用的零件，支撐結構易拆卸，精度適中，適合低成本製造。",
        content04:"適用於原型設計、教育模型、機械零件、家用製品及個人DIY製作。",

    },
    {
        img:`${import.meta.env.BASE_URL}assets/images/MateriaPage/MaterialPageMain1SwiperImg02.png`,
        imgSm:`${import.meta.env.BASE_URL}assets/images/MateriaPage/MaterialPageMain1SwiperSmImg02.png`,
        title: "SLA/DLP",
        MaterialIntroduction: "使用液態樹脂，透過UV光照射局部固化，逐層累積成型，表面光滑。",
        content01:"部分光敏樹脂可生物降解，但多數含化學成分，處理需符合環保規範。",
        content02:"樹脂具有刺激性，需佩戴防護裝備，列印後殘留物應妥善處理。",
        content03:"精度高，適合製作細緻模型，後處理需清洗與二次固化，易碎且脆。",
        content04:"廣泛用於牙科、珠寶設計、動畫模型、醫療器械及高精度零件製造。",
    },
    {
        img:`${import.meta.env.BASE_URL}assets/images/MateriaPage/MaterialPageMain1SwiperImg03.png`,
        imgSm:`${import.meta.env.BASE_URL}assets/images/MateriaPage/MaterialPageMain1SwiperSmImg03.png`,
        title: "SLM",
        MaterialIntroduction: "使用金屬粉末，如鋁、鈦、不鏽鋼等，透過高能雷射熔融並逐層成型。",
        content01:"可回收未使用金屬粉末，但粉塵與能耗較高，需良好防護與處理設備。",
        content02:"操作環境需控溫控濕，金屬粉塵易燃，需防爆與良好通風設備。",
        content03:"可製作高強度、耐高溫零件，無需支撐結構，適合精密與功能性部件。",
        content04:"廣泛應用於航空航太、醫療植入物、汽車工業及高端機械製造。",
    },
    {
        img:`${import.meta.env.BASE_URL}assets/images/MateriaPage/MaterialPageMain1SwiperImg01.png`,
        imgSm:`${import.meta.env.BASE_URL}assets/images/MateriaPage/MaterialPageMain1SwiperSmImg01.png`,
        title: "FDM",
        MaterialIntroduction: "使用熱塑性 塑膠，如PLA、ABS、PETG等，透過擠出機加熱並層層堆積成型。",
        content01:"PLA為生物可分解材料，ABS可回收再利用，但燃燒時會產生有害氣體。",
        content02:"材料選擇影響強度與耐熱性，ABS需加熱平台，列印時可能產生氣味。",
        content03:"適合製作堅固耐用的零件，支撐結構易拆卸，精度適中，適合低成本製造。",
        content04:"適用於原型設計、教育模型、機械零件、家用製品及個人DIY製作。",

    },
    {
        img:`${import.meta.env.BASE_URL}assets/images/MateriaPage/MaterialPageMain1SwiperImg02.png`,
        imgSm:`${import.meta.env.BASE_URL}assets/images/MateriaPage/MaterialPageMain1SwiperSmImg02.png`,
        title: "SLA/DLP",
        MaterialIntroduction: "使用液態樹脂，透過UV光照射局部固化，逐層累積成型，表面光滑。",
        content01:"部分光敏樹脂可生物降解，但多數含化學成分，處理需符合環保規範。",
        content02:"樹脂具有刺激性，需佩戴防護裝備，列印後殘留物應妥善處理。",
        content03:"精度高，適合製作細緻模型，後處理需清洗與二次固化，易碎且脆。",
        content04:"廣泛用於牙科、珠寶設計、動畫模型、醫療器械及高精度零件製造。",
    },
    {
        img:`${import.meta.env.BASE_URL}assets/images/MateriaPage/MaterialPageMain1SwiperImg03.png`,
        imgSm:`${import.meta.env.BASE_URL}assets/images/MateriaPage/MaterialPageMain1SwiperSmImg03.png`,
        title: "SLM",
        MaterialIntroduction: "使用金屬粉末，如鋁、鈦、不鏽鋼等，透過高能雷射熔融並逐層成型。",
        content01:"可回收未使用金屬粉末，但粉塵與能耗較高，需良好防護與處理設備。",
        content02:"操作環境需控溫控濕，金屬粉塵易燃，需防爆與良好通風設備。",
        content03:"可製作高強度、耐高溫零件，無需支撐結構，適合精密與功能性部件。",
        content04:"廣泛應用於航空航太、醫療植入物、汽車工業及高端機械製造。",
    },
];

const materiaPageMain2Card = [
    {
        img:`${import.meta.env.BASE_URL}assets/images/MateriaPage/MaterialPageMain2SwiperImg01.png`,
        imgSm:`${import.meta.env.BASE_URL}assets/images/MateriaPage/MaterialPageMain2SwiperSmImg01.png`,
        title: "FDM",
        MaterialIntroduction: "使用熱塑性 塑膠，如PLA、ABS、PETG等，透過擠出機加熱並層層堆積成型。",
        content01:"PLA為生物可分解材料，ABS可回收再利用，但燃燒時會產生有害氣體。",
        content02:"材料選擇影響強度與耐熱性，ABS需加熱平台，列印時可能產生氣味。",
        content03:"適合製作堅固耐用的零件，支撐結構易拆卸，精度適中，適合低成本製造。",
        content04:"適用於原型設計、教育模型、機械零件、家用製品及個人DIY製作。",
    },
    {
        img:`${import.meta.env.BASE_URL}assets/images/MateriaPage/MaterialPageMain2SwiperImg02.png`,
        imgSm:`${import.meta.env.BASE_URL}assets/images/MateriaPage/MaterialPageMain2SwiperSmImg02.png`,
        title: "SLA/DLP",
        MaterialIntroduction: "使用液態樹脂，透過UV光照射局部固化，逐層累積成型，表面光滑。",
        content01:"部分光敏樹脂可生物降解，但多數含化學成分，處理需符合環保規範。",
        content02:"樹脂具有刺激性，需佩戴防護裝備，列印後殘留物應妥善處理。",
        content03:"精度高，適合製作細緻模型，後處理需清洗與二次固化，易碎且脆。",
        content04:"廣泛用於牙科、珠寶設計、動畫模型、醫療器械及高精度零件製造。",
    },
    {
        img:`${import.meta.env.BASE_URL}assets/images/MateriaPage/MaterialPageMain2SwiperImg03.png`,
        imgSm:`${import.meta.env.BASE_URL}assets/images/MateriaPage/MaterialPageMain2SwiperSmImg03.png`,
        title: "SLM",
        MaterialIntroduction: "使用金屬粉末，如鋁、鈦、不鏽鋼等，透過高能雷射熔融並逐層成型。",
        content01:"可回收未使用金屬粉末，但粉塵與能耗較高，需良好防護與處理設備。",
        content02:"操作環境需控溫控濕，金屬粉塵易燃，需防爆與良好通風設備。",
        content03:"可製作高強度、耐高溫零件，無需支撐結構，適合精密與功能性部件。",
        content04:"廣泛應用於航空航太、醫療植入物、汽車工業及高端機械製造。",
    },
    {
        img:`${import.meta.env.BASE_URL}assets/images/MateriaPage/MaterialPageMain2SwiperImg01.png`,
        imgSm:`${import.meta.env.BASE_URL}assets/images/MateriaPage/MaterialPageMain2SwiperSmImg01.png`,
        title: "FDM",
        MaterialIntroduction: "使用熱塑性 塑膠，如PLA、ABS、PETG等，透過擠出機加熱並層層堆積成型。",
        content01:"PLA為生物可分解材料，ABS可回收再利用，但燃燒時會產生有害氣體。",
        content02:"材料選擇影響強度與耐熱性，ABS需加熱平台，列印時可能產生氣味。",
        content03:"適合製作堅固耐用的零件，支撐結構易拆卸，精度適中，適合低成本製造。",
        content04:"適用於原型設計、教育模型、機械零件、家用製品及個人DIY製作。",
    },
    {
        img:`${import.meta.env.BASE_URL}assets/images/MateriaPage/MaterialPageMain2SwiperImg02.png`,
        imgSm:`${import.meta.env.BASE_URL}assets/images/MateriaPage/MaterialPageMain2SwiperSmImg02.png`,
        title: "SLA/DLP",
        MaterialIntroduction: "使用液態樹脂，透過UV光照射局部固化，逐層累積成型，表面光滑。",
        content01:"部分光敏樹脂可生物降解，但多數含化學成分，處理需符合環保規範。",
        content02:"樹脂具有刺激性，需佩戴防護裝備，列印後殘留物應妥善處理。",
        content03:"精度高，適合製作細緻模型，後處理需清洗與二次固化，易碎且脆。",
        content04:"廣泛用於牙科、珠寶設計、動畫模型、醫療器械及高精度零件製造。",
    },
    {
        img:`${import.meta.env.BASE_URL}assets/images/MateriaPage/MaterialPageMain2SwiperImg03.png`,
        imgSm:`${import.meta.env.BASE_URL}assets/images/MateriaPage/MaterialPageMain2SwiperSmImg03.png`,
        title: "SLM",
        MaterialIntroduction: "使用金屬粉末，如鋁、鈦、不鏽鋼等，透過高能雷射熔融並逐層成型。",
        content01:"可回收未使用金屬粉末，但粉塵與能耗較高，需良好防護與處理設備。",
        content02:"操作環境需控溫控濕，金屬粉塵易燃，需防爆與良好通風設備。",
        content03:"可製作高強度、耐高溫零件，無需支撐結構，適合精密與功能性部件。",
        content04:"廣泛應用於航空航太、醫療植入物、汽車工業及高端機械製造。",
    },
];

const materiaPageMain3Card = [
    {
        img:`${import.meta.env.BASE_URL}assets/images/MateriaPage/MaterialPageMain3SwiperImg01.png`,
        imgSm:`${import.meta.env.BASE_URL}assets/images/MateriaPage/MaterialPageMain3SwiperSmImg01.png`,
        title: "FDM",
        MaterialIntroduction: "使用熱塑性 塑膠，如PLA、ABS、PETG等，透過擠出機加熱並層層堆積成型。",
        content01:"PLA為生物可分解材料，ABS可回收再利用，但燃燒時會產生有害氣體。",
        content02:"材料選擇影響強度與耐熱性，ABS需加熱平台，列印時可能產生氣味。",
        content03:"適合製作堅固耐用的零件，支撐結構易拆卸，精度適中，適合低成本製造。",
        content04:"適用於原型設計、教育模型、機械零件、家用製品及個人DIY製作。",
    },
    {
        img:`${import.meta.env.BASE_URL}assets/images/MateriaPage/MaterialPageMain3SwiperImg02.png`,
        imgSm:`${import.meta.env.BASE_URL}assets/images/MateriaPage/MaterialPageMain3SwiperSmImg02.png`,
        title: "SLA/DLP",
        MaterialIntroduction: "使用液態樹脂，透過UV光照射局部固化，逐層累積成型，表面光滑。",
        content01:"部分光敏樹脂可生物降解，但多數含化學成分，處理需符合環保規範。",
        content02:"樹脂具有刺激性，需佩戴防護裝備，列印後殘留物應妥善處理。",
        content03:"精度高，適合製作細緻模型，後處理需清洗與二次固化，易碎且脆。",
        content04:"廣泛用於牙科、珠寶設計、動畫模型、醫療器械及高精度零件製造。",
    },
    {
        img:`${import.meta.env.BASE_URL}assets/images/MateriaPage/MaterialPageMain3SwiperImg03.png`,
        imgSm:`${import.meta.env.BASE_URL}assets/images/MateriaPage/MaterialPageMain3SwiperSmImg03.png`,
        title: "SLM",
        MaterialIntroduction: "使用金屬粉末，如鋁、鈦、不鏽鋼等，透過高能雷射熔融並逐層成型。",
        content01:"可回收未使用金屬粉末，但粉塵與能耗較高，需良好防護與處理設備。",
        content02:"操作環境需控溫控濕，金屬粉塵易燃，需防爆與良好通風設備。",
        content03:"可製作高強度、耐高溫零件，無需支撐結構，適合精密與功能性部件。",
        content04:"廣泛應用於航空航太、醫療植入物、汽車工業及高端機械製造。",
    },
    {
        img:`${import.meta.env.BASE_URL}assets/images/MateriaPage/MaterialPageMain3SwiperImg01.png`,
        imgSm:`${import.meta.env.BASE_URL}assets/images/MateriaPage/MaterialPageMain3SwiperSmImg01.png`,
        title: "FDM",
        MaterialIntroduction: "使用熱塑性 塑膠，如PLA、ABS、PETG等，透過擠出機加熱並層層堆積成型。",
        content01:"PLA為生物可分解材料，ABS可回收再利用，但燃燒時會產生有害氣體。",
        content02:"材料選擇影響強度與耐熱性，ABS需加熱平台，列印時可能產生氣味。",
        content03:"適合製作堅固耐用的零件，支撐結構易拆卸，精度適中，適合低成本製造。",
        content04:"適用於原型設計、教育模型、機械零件、家用製品及個人DIY製作。",
    },
    {
        img:`${import.meta.env.BASE_URL}assets/images/MateriaPage/MaterialPageMain3SwiperImg02.png`,
        imgSm:`${import.meta.env.BASE_URL}assets/images/MateriaPage/MaterialPageMain3SwiperSmImg02.png`,
        title: "SLA/DLP",
        MaterialIntroduction: "使用液態樹脂，透過UV光照射局部固化，逐層累積成型，表面光滑。",
        content01:"部分光敏樹脂可生物降解，但多數含化學成分，處理需符合環保規範。",
        content02:"樹脂具有刺激性，需佩戴防護裝備，列印後殘留物應妥善處理。",
        content03:"精度高，適合製作細緻模型，後處理需清洗與二次固化，易碎且脆。",
        content04:"廣泛用於牙科、珠寶設計、動畫模型、醫療器械及高精度零件製造。",
    },
    {
        img:`${import.meta.env.BASE_URL}assets/images/MateriaPage/MaterialPageMain3SwiperImg03.png`,
        imgSm:`${import.meta.env.BASE_URL}assets/images/MateriaPage/MaterialPageMain3SwiperSmImg03.png`,
        title: "SLM",
        MaterialIntroduction: "使用金屬粉末，如鋁、鈦、不鏽鋼等，透過高能雷射熔融並逐層成型。",
        content01:"可回收未使用金屬粉末，但粉塵與能耗較高，需良好防護與處理設備。",
        content02:"操作環境需控溫控濕，金屬粉塵易燃，需防爆與良好通風設備。",
        content03:"可製作高強度、耐高溫零件，無需支撐結構，適合精密與功能性部件。",
        content04:"廣泛應用於航空航太、醫療植入物、汽車工業及高端機械製造。",
    },
];

function MateriaPage(){


    //視窗狀態
    const [handleMaterialPageModal,setHandleMaterialPageModal]=useState(null);

    //單一資料狀態
    const [singleMaterialPageModal,setSingleMaterialPageModal]=useState({});

    //監控Modal開啟狀態
    const [materialPageModalShow, setMaterialPageModalShow] = useState(false);




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
                                        <img className="img-set" src={`${import.meta.env.BASE_URL}assets/images/MateriaPage/MateriaPage-main1-arrowL.png`} alt="MateriaPage-main1-arrowL" />
                                    </div>
                                </button>
                                <button className="materiaPageSwiperMain1NextBtnR">
                                    <div className="img-box">
                                        <img className="img-set" src={`${import.meta.env.BASE_URL}assets/images/MateriaPage/MateriaPage-main1-arrowR.png`} alt="MateriaPage-main1-arrowR" />
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
                                                            <button onClick={()=>{handleMaterialPageModal?.show();setSingleMaterialPageModal(item);setMaterialPageModalShow(true)}} className="secondary-btn1-set d-flex align-items-center ms-auto me-auto ms-xl-auto me-xl-32">
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
                                        <img className="img-set" src={`${import.meta.env.BASE_URL}assets/images/MateriaPage/MateriaPage-main1-arrowL.png`} alt="MateriaPage-main1-arrowL" />
                                    </div>
                                </button>
                                <button className="materiaPageSwiperMain2NextBtnR">
                                    <div className="img-box">
                                        <img className="img-set" src={`${import.meta.env.BASE_URL}assets/images/MateriaPage/MateriaPage-main1-arrowR.png`} alt="MateriaPage-main1-arrowR" />
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
                                                            <button onClick={()=>{handleMaterialPageModal?.show();setSingleMaterialPageModal(item);setMaterialPageModalShow(true)}} className="secondary-btn1-set d-flex align-items-center ms-auto me-auto ms-xl-auto me-xl-32">
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
                                        <img className="img-set" src={`${import.meta.env.BASE_URL}assets/images/MateriaPage/MateriaPage-main1-arrowL.png`} alt="MateriaPage-main1-arrowL" />
                                    </div>
                                </button>
                                <button className="materiaPageSwiperMain3NextBtnR">
                                    <div className="img-box">
                                        <img className="img-set" src={`${import.meta.env.BASE_URL}assets/images/MateriaPage/MateriaPage-main1-arrowR.png`} alt="MateriaPage-main1-arrowR" />
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
                                                            <button onClick={()=>{handleMaterialPageModal?.show();setSingleMaterialPageModal(item);setMaterialPageModalShow(true)}} className="secondary-btn1-set d-flex align-items-center ms-auto me-auto ms-xl-auto me-xl-32">
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

            <MaterialPageModal setHandleMaterialPageModal={setHandleMaterialPageModal} singleMaterialPageModal={singleMaterialPageModal} setMaterialPageModalShow={setMaterialPageModalShow}
            materialPageModalShow={materialPageModalShow}/>
        </>
    )
}

export default MateriaPage;