import { Link } from "react-router-dom"
import { Dropdown, Nav, Tab } from "react-bootstrap"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/css";// 核心 CSS
import "swiper/css/navigation";// 左右箭頭
import OestimateModal from "../components/common/OestimateModal"
import DatePicker from "react-datepicker"





import oEstimateMain1Vector15 from "../assets/images/OestimatePage/oEstimate-main1-Vector 15.png"
import oEstimateMain1Vector16 from "../assets/images/OestimatePage/oEstimate-main1-Vector 16.png"
import oEstimateMain1Delete from "../assets/images/OestimatePage/oEstimate-main1-delete.png"
import oEstimateMain1Image from "../assets/images/OestimatePage/oEstimate-main1-Image.png"
import oEstimateMain1UpLordBtnSm from "../assets/images/OestimatePage/oEstimate-main1-upLord-btn-sm.png"
import oEstimateMain1UpLordBtn from "../assets/images/OestimatePage/oEstimate-main1-upLord-btn.png"
import oEstimateMain1InputDelete from "../assets/images/OestimatePage/oEstimate-main1-input-delete.png";
import oEstimateMain1InputMinusPlus from "../assets/images/OestimatePage/oEstimate-main1-input-minus-plus.png";
import oEstimateMain1InputMinus from "../assets/images/OestimatePage/oEstimate-main1-input-minus.png";
import oEstimateMain1ModalBtnClose from "../assets/images/OestimatePage/oEstimate-main1-modal-btn-close.png";

import oEstimateMain2TabArrowL from "../assets/images/OestimatePage/oEstimate-main2-tab-arrowL.png";
import oEstimateMain2TabArrowR from "../assets/images/OestimatePage/oEstimate-main2-tab-arrowR.png";

import oEstimateMain2TabImg1 from "../assets/images/OestimatePage/oEstimate-main2-tab-img1.png";
import oEstimateMain2TabImg2 from "../assets/images/OestimatePage/oEstimate-main2-tab-img2.png";
import oEstimateMain2TabImg3 from "../assets/images/OestimatePage/oEstimate-main2-tab-img3.png";

import oEstimateMain2TabSmArrowL from "../assets/images/OestimatePage/oEstimate-main2-tab-sm-arrowL.png";
import oEstimateMain2TabSmArrowR from "../assets/images/OestimatePage/oEstimate-main2-tab-sm-arrowR.png";

import oEstimateMain2Tab2Img1 from "../assets/images/OestimatePage/oEstimate-main2-tab2-img1.png"
import oEstimateMain2Tab2Img2 from "../assets/images/OestimatePage/oEstimate-main2-tab2-img2.png"
import oEstimateMain2Tab2Img3 from "../assets/images/OestimatePage/oEstimate-main2-tab2-img3.png"

import oEstimateMain3ArrowDOWN from "../assets/images/OestimatePage/oEstimate-main3-arrowDOWN.png"
import oEstimateMain3ArrowUP from "../assets/images/OestimatePage/oEstimate-main3-arrowUP.png"

import oEstimateMain3SmArrowDOWN from "../assets/images/OestimatePage/oEstimate-main3-sm-arrowDOWN.png"
import oEstimateMain3SmArrowUP from "../assets/images/OestimatePage/oEstimate-main3-sm-arrowUP.png"

import oEstimateMain4CalendarArrowL from "../assets/images/OestimatePage/oEstimate-main4-Calendar-arrowL.png"
import oEstimateMain4CalendarArrowR from "../assets/images/OestimatePage/oEstimate-main4-Calendar-arrowR.png"

import oEstimateMain4Calendar from "../assets/images/OestimatePage/oEstimate-main4-Calendar.png"

import oEstimateMain4Keyboardarrowdown from "../assets/images/OestimatePage/oEstimate-main4-Keyboardarrowdown.png"

import oEstimateMain4Sm數量調整按鈕 from "../assets/images/OestimatePage/oEstimate-main4-sm-數量調整按鈕.png"

import oEstimateMain4SmCalendar from "../assets/images/OestimatePage/oEstimate-main4-sm-Calendar.png"

import oEstimateMain4SmKeyboardarrowdown from "../assets/images/OestimatePage/oEstimate-main4-sm-Keyboardarrowdown.png"

import oEstimateMain5ModalBtnClose from "../assets/images/OestimatePage/oEstimate-main5-modal-btn-close.png"







function OestimatePage(){

    const[handleOestimateModal,setHandleOestimateModal]=useState(null);
    const[oestimateModalShow,setOestimateModalShow]=useState(false);





    const PLAData = [
        {
            img: oEstimateMain2TabImg1,
            title: "PLA白",
            MaterialIntroduction: "PLA聚乳酸",
        },
        {
            img: oEstimateMain2TabImg2,
            title: "PLA透明",
            MaterialIntroduction: "PLA聚乳酸",
        },
        {
            img: oEstimateMain2TabImg3,
            title: "PLA黑",
            MaterialIntroduction: "PLA聚乳酸",
        },
        {
            img: oEstimateMain2TabImg1,
            title: "PLA白",
            MaterialIntroduction: "PLA聚乳酸",
        },
        {
            img: oEstimateMain2TabImg2,
            title: "PLA透明",
            MaterialIntroduction: "PLA聚乳酸",
        },
        {
            img: oEstimateMain2TabImg3,
            title: "PLA黑",
            MaterialIntroduction: "PLA聚乳酸",
        },
    ];

    const SLAData = [
        {
            img: oEstimateMain2Tab2Img1,
            title: "光固化黑",
            MaterialIntroduction: "光固化樹酯",
        },
        {
            img: oEstimateMain2Tab2Img2,
            title: "光固化白",
            MaterialIntroduction: "光固化樹酯",
        },
        {
            img: oEstimateMain2Tab2Img3,
            title: "光固化透明",
            MaterialIntroduction: "光固化樹酯",
        },
        {
            img: oEstimateMain2Tab2Img1,
            title: "光固化黑",
            MaterialIntroduction: "光固化樹酯",
        },
        {
            img: oEstimateMain2Tab2Img2,
            title: "光固化白",
            MaterialIntroduction: "光固化樹酯",
        },
        {
            img: oEstimateMain2Tab2Img3,
            title: "光固化透明",
            MaterialIntroduction: "光固化樹酯",
        },
    ];
    

    const[oestimateMain4Btn,setOestimateMain4Btn]=useState(false);
    const[oestimateMain4text,setOestimateMain4text]=useState("選擇工期");

    const[oestimateMain4Calendar,setOestimateMain4Calendar]=useState(false);

    const [supportMaterialValue,setSupportMaterialValue] = useState(1);
    const supportMaterialIncrement = () => {
        let newsupportMaterialValue = Math.min(Number(supportMaterialValue) + 1, 10); // 最大值 10
        setSupportMaterialValue(newsupportMaterialValue);
    };

    const supportMaterialDecrement = () => {
        let newsupportMaterialValue = Math.max(Number(supportMaterialValue) - 1, 1); // 最小值 1
        setSupportMaterialValue(newsupportMaterialValue);
    };

    const [wallThicknessValue,setWallThicknessValue] = useState(10);
    const wallThicknessIncrement = () => {
        let newWallThicknessValue = Math.min(Number(wallThicknessValue) + 10, 50); // 最大值 50
        setWallThicknessValue(newWallThicknessValue);
    };

    const wallThicknessDecrement = () => {
        let newWallThicknessValue = Math.max(Number(wallThicknessValue) - 10, 10); // 最小值 1
        setWallThicknessValue(newWallThicknessValue);
    };

    const [supportMaterialDensityValue,setSupportMaterialDensityValue] = useState(1);
    const supportMaterialDensityIncrement = () => {
        let newSupportMaterialDensityValue = Math.min(Number(supportMaterialDensityValue) + 1, 10); // 最大值 10
        setSupportMaterialDensityValue(newSupportMaterialDensityValue);
    };

    const supportMaterialDensityDecrement = () => {
        let newSupportMaterialDensityValue = Math.max(Number(supportMaterialDensityValue) - 1, 1); // 最小值 1
        setSupportMaterialDensityValue(newSupportMaterialDensityValue);
    };

    const materialDefault=()=>{
        setSupportMaterialValue(5);
        setWallThicknessValue(30);
        setSupportMaterialDensityValue(8);
    }

    

    return(
        <>
            <div className="all">
                <div className="oEstimate-main1 w-100 oEstimate-main1-bg-set" id="oEstimate-main1">
                    <div className="container py-48"> {/*sm~xl 標籤內容切換用*/}
                        <div className="row">
                            <div className="col-12">

                                <div className="oEstimate-main1-title-sm-box mb-24 mb-xl-64">
                                    <h3 className="fs-32 fw-900 text-center text-nautral-white fs-xl-64 text-xl-start">線上估價</h3>
                                </div>

                                <div className="oEstimate-main1-upLord-content-sm-box py-16 py-xl-0 mb-24 mb-xl-64">

                                    <div className="upLord-sm-body p-16 d-xl-flex justify-content-xl-between align-items-xl-center py-xl-40 px-xl-56">

                                        <div className="upLord-title-text-sm-box">
                                            <div className="upLord-title-sm-box mb-24">
                                                <h5 className="fs-24 fw-700 text-primary1 fs-xl-32 fw-xl-900">圖檔上傳</h5>
                                            </div>

                                            <div className="upLord-text-sm-box d-flex flex-column row-gap-8 mb-24 mb-xl-0">
                                                <p className="fs-12 fw-500 fs-xl-16 fw-xl-500">請上傳檔案或將檔案拖曳至此</p>
                                                <p className="fs-12 fw-500 fs-xl-16 fw-xl-500">最多上傳10個檔案</p>
                                                <p className="fs-12 fw-500 fs-xl-16 fw-xl-500">格式：.stl | 大小: &lt; 30MB</p> {/*格式：.stl | 大小： < 30MB*/}
                                            </div>
                                        </div>

                                        <div className="upLord-btn-sm-box d-none d-xl-block"> {/*xl用按鈕*/}
                                            <button className="upLord-btn-sm-box-set py-10 px-auto bg-primary2 d-flex justify-content-center align-items-center  py-xl-22 px-xl-22" id="oEstimate-main1-uploadBtn">
                                                <div className="upLord-btn-img-sm-set">
                                                    <img className="img-set" src={oEstimateMain1UpLordBtn} alt="upLord-btn" />
                                                </div>
                                            </button>
                                            <input type="file" id="fileInput" accept="image/*" className="d-none" />
                                        </div>

                                        <div className="upLord-fileFormat-sm-box mb-24 mb-xl-0">
                                            <button onClick={()=>{handleOestimateModal?.show();oestimateModalShow(true);}} className="upLord-fileFormat-sm-box-set d-flex align-items-center me-4" data-bs-toggle="modal" data-bs-target="#oEstimate-main1-Modal">
                                                <span className="material-symbols-outlined">
                                                    error 
                                                </span>
                                                檔案格式說明
                                            </button>
                                        </div>

                                        <div className="upLord-btn-sm-box d-block d-xl-none">{/*sm用按鈕*/}
                                            <button className="upLord-btn-sm-box-set py-10 px-auto bg-primary2 d-flex justify-content-center align-items-center" id="oEstimate-main1-uploadBtn2">
                                                <div className="upLord-btn-img-sm-set">
                                                    <img className="img-set" src={oEstimateMain1UpLordBtnSm} alt="upLord-btn" />
                                                </div>
                                            </button>
                                        </div>
                
                                    </div>    
                                </div>

                                {/* //123 */}
                                <OestimateModal setHandleOestimateModal={setHandleOestimateModal} setOestimateModalShow={setOestimateModalShow}
                                                oestimateModalShow={oestimateModalShow}
                                />
                                

                            </div>
                            <div className="col-12 col-xl-4">
                                <div className="oEstimate-main1-box2 py-16 py-xl-0 mb-24">
                                    <div className="oEstimate-main1-title2-sm-box mb-16 mb-xl-48">
                                        <h3 className="fs-32 fw-900 text-nautral-white">圖檔上傳預覽</h3>
                                    </div>

                                    <div className="oEstimate-main1-upLord-img-sm-box" id="thumbnailArea">{/*圖檔上傳預覽*/}
                                        <div className="oEstimate-main1-upLord-img-sm-box-set py-16 px-12 py-xl-64 px-xl-auto row-gap-16 row-gap-xl-48 d-flex flex-column justify-content-center align-items-center">
                                            <div className="oEstimate-main1-upLord-btn-img-sm-set">
                                                <img className="img-set d-block mx-auto
                                                " src={oEstimateMain1Image} alt="index-main1-Image" />
                                            </div>
                                            <div className="oEstimate-main1-upLord-text-box d-flex flex-column justify-content-center align-items-center row-gap-xl-12">
                                                <p className="fs-16 fw-500 lh-15 text-nautral-white d-block d-xl-none">目前無檔案，請上傳圖檔進行估價確認</p>
                                                <p className="fs-24 fw-500 lh-12 text-nautral-white text-center d-none d-xl-block">目前無檔案</p>
                                                <p className="fs-24 fw-500 lh-12 text-nautral-white text-center d-none d-xl-block">請上傳圖檔進行估價確認</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-xl-8 mb-24"> {/* 待辦事項生成區塊 */}
                                <div className="oEstimate-main1-box3 mb-xl-64">
                                    <div className="oEstimate-main1-title3-sm-box d-none d-xl-block mb-xl-48">
                                        <h3 className="fs-32 fw-900 text-nautral-white">圖檔資料</h3>
                                    </div>
                                    <div className="oEstimate-main1-numTable">
                                        <div className="title-row d-flex align-items-center">
                                            <div className="title-row-set-1 w-100 lh-15 fs-24 p-12 fw-500 text-nautral-white">檔案</div>
                                            <div className="title-row-set-1 w-100 lh-15 fs-24 p-12 fw-500 text-nautral-white">數量</div>
                                            <div className="title-row-set-2 w-100 lh-15 fs-24 p-12 fw-500 text-nautral-white">估價</div>
                                            <div className="title-row-set-2 w-100 lh-15 fs-24 p-12 fw-500 text-nautral-white">材質</div>
                                            <div className="row1-sm-img-set d-flex justify-content-center align-items-center">
                                                <img className="img-set" src={oEstimateMain1Delete} alt="oEstimate-main1-delete-icon" />
                                            </div>
                                        </div>
                                        {/* 待辦事項 */}
                                        <div className="oEstimate-main1-todoList" id="oEstimate-main1-todoList">
                                        {/* 由javascript生成內容 */}
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="oEstimate-main1-footer-btn d-block d-flex justify-content-center align-items-center">
                                    <button className="pagination-btn01">
                                        <a className="a-re" href="oEstimate.html#oEstimate-main2">
                                            <div className="pagination-img-box01">
                                                <img className="pagination-img01-set" src={oEstimateMain1Vector15} alt="oEstimate-main1-Vector 15" />
                                            </div>
                                        </a>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 

                <div className="oEstimate-main2 w-100 oEstimate-main2-bg-set" id="oEstimate-main2">
                    <div className="container py-100">
                        <div className="row">
                            <div className="col-12 ">
                                <div className="oEstimate-main2-title-sm-box mb-24 mb-xl-64">
                                    <h3 className="fs-32 fw-900 lh-15 text-center text-nautral-white fs-xl-64 text-xl-start">材料選擇</h3>
                                </div>
                                        
                                <Tab.Container className="oEstimate-main2-tab" defaultActiveKey="home" >
                                    {/* 這是 TABS 的最外層，負責管理不同分頁的內容 */}
                                    <Nav >
                                    {/* variant="tabs" 👉 設定為 tabs 樣式（上方的標籤選單） */}
                                    <Nav.Item>
                                        <Nav.Link className="oEstimate-main2-btn border-0 d-block " eventKey="home">3D列印</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link className="oEstimate-main2-btn border-0 d-block" eventKey="calendar">光固化</Nav.Link>
                                    </Nav.Item>
                                    </Nav>
                                    
                                    {/* 頁籤的內容區塊 */}

                                    {/* 🔹 內容區塊（一次只顯示一個頁面） */}
                                    <Tab.Content className="oEstimate-main2-swiper ">
                                        <Tab.Pane className="oEstimate-main2-tab-content" eventKey="home">
                                            <Swiper
                                                modules={[Navigation, Pagination, Autoplay]}
                                                spaceBetween={10}
                                                slidesPerView={1}
                                                breakpoints={{
                                                    1200: { slidesPerView: 3 }, // 電腦顯示 3 張
                                                    }}
                                                navigation={{   prevEl: ".oEstimate-main2-swiper-next-L-btn", 
                                                                nextEl: ".oEstimate-main2-swiper-next-R-btn" }}
                                                loop={true}
                                                centeredSlides={true}
                                                className="mySwiper"
                                                observer={true} // ✅ 監聽 DOM 變更
                                                observeParents={true}
                                                >
                                                {
                                                    PLAData?.map((item,index)=>{
                                                        return(
                                                            <>
                                                            <SwiperSlide key={index}>
                                                                <div class="oEstimate-main2-card5-box oEstimate-main2-card-box-set mx-auto p-8 bg-nautral-black" data-card="11">
                                                                    <div class="oEstimate-main2-card5-img-box oEstimate-main2-card-img-box-set mb-16 mb-xl-0">
                                                                            <img class="img-set" src={item.img} alt="oEstimate-main2-tab2-img2" />     
                                                                    </div>
                                                                    <div class="oEstimate-main2-card1-text&btn-box d-xxl-flex justify-content-xxl-between align-items-xxl-center py-xl-12 px-xl-12 p-xxl-32">
                                                            
                                                                        <div class="oEstimate-main2-card1-text-box mb-24 mb-xxl-0">
                                                                            <div class="oEstimate-main2-card1-text">
                                                                                <p class="fw-500 fs-24 fw-700 lh-12 text-nautral-white mb-8 mb-xl-12">{item.title}</p>
                                                                                <p class="fw-500 fs-16 fw-700 lh-12 text-nautral-white">{item.MaterialIntroduction}</p>
                                                                            </div>
                                                                        </div>
                                                                        <div class="secondary-btn1-box d-none d-xl-block mb-16 mb-xl-0">
                                                                            <button class="secondary-btn1-set d-flex align-items-center me-4 oE-main2-bt" data-card="11">
                                                                                選擇我
                                                                            
                                                                                <span class="material-symbols-outlined sec-btn1-img-set">
                                                                                    chevron_right
                                                                                </span>
                                                                                
                                                                            </button>
                                                                        </div>
                                                                        <div class="secondary-btn2-box d-block d-xl-none mb-16 mb-xl-0">
                                                                            <button class="secondary-btn2-set d-flex align-items-center me-4 oE-main2-bt" data-card="11">
                                                                                選擇我
                                                            
                                                                                <span class="material-symbols-outlined sec-btn2-img-set">
                                                                                    chevron_right
                                                                                </span>
                                                                            </button>
                                                                        </div>

                                                                    </div>   
                                                                </div>
                                                            </SwiperSlide>
                                                            </>
                                                        )
                                                    })
                                                }
                                            </Swiper>
                                            {/* swiper左右按鈕 */}
                                            <button className="oEstimate-main2-swiper-next-R-btn">
                                                    <picture>
                                                        <source srcSet={oEstimateMain2TabArrowR} media="(min-width:992px)" />
                                                        <img class="img-set" src={oEstimateMain2TabSmArrowR} alt="215x144" />
                                                    </picture>
                                            </button>
                                            <button className="oEstimate-main2-swiper-next-L-btn">
                                                    <picture>
                                                        <source srcSet={oEstimateMain2TabArrowL} media="(min-width:992px)" />
                                                        <img class="img-set" src={oEstimateMain2TabSmArrowL} alt="215x144" />
                                                    </picture>
                                            </button>
                                        </Tab.Pane>
                                        <Tab.Pane className="oEstimate-main2-tab-content" eventKey="calendar">
                                            <Swiper
                                                modules={[Navigation, Pagination, Autoplay]}
                                                spaceBetween={10}
                                                slidesPerView={1}
                                                breakpoints={{
                                                    1200: { slidesPerView: 3 }, // 電腦顯示 3 張
                                                    }}
                                                navigation={{   prevEl: ".oEstimate-main2-swiper-next-L-btn02", 
                                                                nextEl: ".oEstimate-main2-swiper-next-R-btn02" }}
                                                loop={true}
                                                centeredSlides={true}
                                                className="mySwiper"
                                                observer={true} // ✅ 監聽 DOM 變更
                                                observeParents={true}
                                                >
                                                {
                                                    SLAData?.map((item,index)=>{
                                                        return(
                                                            <SwiperSlide key={index}>
                                                                <div class="oEstimate-main2-card5-box oEstimate-main2-card-box-set mx-auto p-8 bg-nautral-black" data-card="11">
                                                                    <div class="oEstimate-main2-card5-img-box oEstimate-main2-card-img-box-set mb-16 mb-xl-0">
                                                                            <img class="img-set" src={item.img} alt="oEstimate-main2-tab2-img2" />     
                                                                    </div>
                                                                    <div class="oEstimate-main2-card1-text&btn-box d-xxl-flex justify-content-xxl-between align-items-xxl-center py-xl-12 px-xl-12 p-xxl-32">
                                                            
                                                                        <div class="oEstimate-main2-card1-text-box mb-24 mb-xxl-0">
                                                                            <div class="oEstimate-main2-card1-text">
                                                                                <p class="fw-500 fs-24 fw-700 lh-12 text-nautral-white mb-8 mb-xl-12">{item.title}</p>
                                                                                <p class="fw-500 fs-16 fw-700 lh-12 text-nautral-white">{item.MaterialIntroduction}</p>
                                                                            </div>
                                                                        </div>
                                                                        <div class="secondary-btn1-box d-none d-xl-block mb-16 mb-xl-0">
                                                                            <button class="secondary-btn1-set d-flex align-items-center me-4 oE-main2-bt" data-card="11">
                                                                                選擇我
                                                                            
                                                                                <span class="material-symbols-outlined sec-btn1-img-set">
                                                                                    chevron_right
                                                                                </span>
                                                                                
                                                                            </button>
                                                                        </div>
                                                                        <div class="secondary-btn2-box d-block d-xl-none mb-16 mb-xl-0">
                                                                            <button class="secondary-btn2-set d-flex align-items-center me-4 oE-main2-bt" data-card="11">
                                                                                選擇我
                                                            
                                                                                <span class="material-symbols-outlined sec-btn2-img-set">
                                                                                    chevron_right
                                                                                </span>
                                                                            </button>
                                                                        </div>

                                                                    </div>   
                                                                </div>
                                                            </SwiperSlide>
                                                        )
                                                    })
                                                }
                                            </Swiper>
                                            {/* swiper左右按鈕 */}
                                            <button className="oEstimate-main2-swiper-next-R-btn02">
                                                    <picture>
                                                        <source srcSet={oEstimateMain2TabArrowR} media="(min-width:992px)" />
                                                        <img class="img-set" src={oEstimateMain2TabSmArrowR} alt="215x144" />
                                                    </picture>
                                            </button>
                                            <button className="oEstimate-main2-swiper-next-L-btn02">
                                                    <picture>
                                                        <source srcSet={oEstimateMain2TabArrowL} media="(min-width:992px)" />
                                                        <img class="img-set" src={oEstimateMain2TabSmArrowL} alt="215x144" />
                                                    </picture>
                                            </button>
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Tab.Container>
                                <div className="oEstimate-main2-footer-btn-box d-flex justify-content-center align-items-center">
                                    <button className="pagination-btn02 mt-24">
                                        
                                            <div className="pagination-img-box02">
                                                <img className="pagination-img02-set" src={oEstimateMain1Vector16} alt="Vector 16" />
                                            </div>
                                        
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="oEstimate-main3 w-100 oEstimate-main3-bg-set" id="oEstimate-main3">
                    <div className="container py-64 py-xxl-144">
                        <div className="row">
                            <div  className="col-12">
                                    
                                
                                    <div className="oEstimate-main3-title-sm-box mb-24 mb-xl-64">
                                        <h3 className="fs-32 fw-900 text-center text-nautral-white fs-xl-64 text-xl-start">規格設置</h3>
                                    </div>

                                    <div className="oEstimate-main3-btn01-box w-100 mb-32 mb-xl-72">
                                        <div className="oEstimate-main3-btn01-set d-flex justify-content-center align-items-center gap-16 py-16 px-16 fs-16 fw-500 lh-15 bg-primary1 outline-0 text-nautral-white py-xl-12 px-xl-24">
                                            <span className="material-symbols-outlined sec-btn1-img-set">
                                                error
                                            </span>
                                            <div className="oEstimate-main3-btn01-p-box">
                                                <p className="d-none d-lg-block">若無法確定規格，可點擊預設配置，系統會自動帶出適合的規格設置。</p>
                                                <p className="d-block d-xl-none">若無法確定規格，可點擊預設配置，</p>
                                                <p className="d-block d-xl-none">系統會自動帶出適合的規格設置。</p>
                                            </div>
                                        </div>
                                    </div>
                                    <form>
                                        <div className="oEstimate-main3-container-box d-flex flex-column justify-content-center align-items-center  flex-xl-row justify-content-xl-between mb-32 mb-xl-72">
                                            <div className="oEstimate-main3-input-box oEstimate-main3-outsidematerial-box-set w-100 d-flex flex-column justify-content-center align-items-center mb-32 w-xl-auto mb-xl-0">
                                                <div className="oEstimate-main3-input-item01 d-flex flex-column from-set w-100 mb-36  flex-xl-row row-gap-xl-0 gap-xl-40 flex-xl-wrap">
                                                    <div className="oEstimate-main3-text-set fs-24 fw-700 lh-12 text-nautral-white mb-12">
                                                        支撐材
                                                    </div>
                                                    <div className="oEstimate-main3-item1-box position-relative mb-12">
                                                        <input
                                                            className="oEstimate-main3-item1 oEstimate-main3-item-set py-16 px-24 bg-nautral-black text-nautral-white fs-16 fw-500 lh-15  py-xl-28 px-xl-36 fs-xl-24 fw-xl-700 lh-xl-12"
                                                            type="text" id="oEstimate-main3-inputNumber01" placeholder="1mm" 
                                                            value={`${supportMaterialValue}mm`}
                                                            onChange={(e) => {
                                                            const value = parseInt(e.target.value.replace(/\D/g, ""), 10) || 1; // 移除非數字部分
                                                            setSupportMaterialValue(Math.min(Math.max(value, 1), 10)); // 限制範圍
                                                          }}
                                                        />

                                                        <button onClick={()=>{supportMaterialIncrement()}} className="position-absolute main3-img-position1 border-0 outline-0 bg-transparent p-0" type="button" id="oEstimate-main3-increment01">
                                                            <picture>
                                                                <source srcSet={oEstimateMain3ArrowUP} media="(min-width:1200px)" />
                                                                <img className="img-set" src={oEstimateMain3SmArrowUP} alt="home-section2-1" />
                                                            </picture>
                                                        </button>
                                                        <button onClick={()=>{supportMaterialDecrement()}} className="position-absolute main3-img-position2 border-0 outline-0 bg-transparent p-0" type="button" id="oEstimate-main3-decrement01">
                                                            <picture>
                                                                <source srcSet={oEstimateMain3ArrowDOWN} media="(min-width:1200px)" />
                                                                <img className="img-set" src={oEstimateMain3SmArrowDOWN} alt="home-section2-1" />
                                                            </picture>
                                                        </button>
                                                    </div>
                                                    <div id="oEstimate-main3-errorMessage" className="w-100 fs-16 fw-500 lh-15  fs-xl-24 fw-xl-700 lh-xl-12 text-nautral-white px-24 px-xl-36 ms-xl-124"></div>
                                                </div>
                                                
                                                <div className="oEstimate-main3-input-item02 d-flex flex-column from-set w-100 mb-36  flex-xl-row row-gap-xl-0 gap-xl-40 flex-xl-wrap">  
                                                    <div className="oEstimate-main3-text-set fs-24 fw-700 lh-12 text-nautral-white mb-12">
                                                        壁厚
                                                    </div>
                                                    <div className="oEstimate-main3-item1-box position-relative mb-12">
                                                        <input 
                                                            className="oEstimate-main3-item1 oEstimate-main3-item-set py-16 px-24 bg-nautral-black text-nautral-white fs-16 fw-500 lh-15  py-xl-28 px-xl-36 fs-xl-24 fw-xl-700 lh-xl-12" type="text" id="oEstimate-main3-inputNumber02" placeholder="%" 
                                                            value={`${wallThicknessValue}%`} 
                                                            onChange={(e) => {
                                                                const value = parseInt(e.target.value.replace(/\D/g, ""), 10) || 1; // 移除非數字部分
                                                                setWallThicknessValue(Math.min(Math.max(value, 10), 50)); // 限制範圍
                                                            }}
                                                            />
                                                        <button onClick={()=>{wallThicknessIncrement()}}  className="position-absolute main3-img-position1 border-0 outline-0 bg-transparent p-0" type="button" id="oEstimate-main3-increment02">
                                                            <picture>
                                                                <source srcSet={oEstimateMain3ArrowUP} media="(min-width:1200px)" />
                                                                <img className="img-set" src={oEstimateMain3SmArrowUP} alt="home-section2-1" />
                                                            </picture>
                                                        </button>
                                                        <button onClick={()=>{wallThicknessDecrement()}}  className="position-absolute main3-img-position2 border-0 outline-0 bg-transparent p-0" type="button" id="oEstimate-main3-decrement02">
                                                            <picture>
                                                                <source srcSet={oEstimateMain3ArrowDOWN} media="(min-width:1200px)" />
                                                                <img className="img-set" src={oEstimateMain3SmArrowDOWN} alt="home-section2-1" />
                                                            </picture>
                                                        </button>
                                                    </div>
                                                    <div id="oEstimate-main3-errorMessage02" className="w-100 fs-16 fw-500 lh-15  fs-xl-24 fw-xl-700 lh-xl-12 text-nautral-white px-24 px-xl-36 ms-xl-124"></div>
                                                </div>
                                                <div className="oEstimate-main3-input-item03 d-flex flex-column from-set w-100  flex-xl-row row-gap-xl-0 gap-xl-40 flex-xl-wrap">
                                                    <div className="oEstimate-main3-text-set fs-24 fw-700 lh-12 text-nautral-white mb-12">
                                                        支撐材密度
                                                    </div>
                                                    <div className="oEstimate-main3-item1-box position-relative mb-12">
                                                        <input 
                                                        className="oEstimate-main3-item1 oEstimate-main3-item-set py-16 px-24 bg-nautral-black text-nautral-white fs-16 fw-500 lh-15  py-xl-28 px-xl-36 fs-xl-24 fw-xl-700 lh-xl-12" type="text" id="oEstimate-main3-inputNumber03" placeholder="mm" 
                                                        value={`${supportMaterialDensityValue}mm`} 
                                                        />
                                                        <button onClick={()=>{supportMaterialDensityIncrement()}} className="position-absolute main3-img-position1 border-0 outline-0 bg-transparent p-0" type="button" id="oEstimate-main3-increment03">
                                                            <picture>
                                                                <source srcSet={oEstimateMain3ArrowUP} media="(min-width:1200px)" />
                                                                <img className="img-set" src={oEstimateMain3SmArrowUP} alt="home-section2-1" />
                                                            </picture>
                                                        </button>
                                                        <button onClick={()=>{supportMaterialDensityDecrement()}} className="position-absolute main3-img-position2 border-0 outline-0 bg-transparent p-0" type="button" id="oEstimate-main3-decrement03">
                                                            <picture>
                                                                <source srcSet={oEstimateMain3ArrowDOWN} media="(min-width:1200px)" />
                                                                <img className="img-set" src={oEstimateMain3SmArrowDOWN} alt="home-section2-1" />
                                                            </picture>
                                                        </button>
                                                    </div>
                                                    <div id="oEstimate-main3-errorMessage03" className="w-100 fs-16 fw-500 lh-15  fs-xl-24 fw-xl-700 lh-xl-12 text-nautral-white px-24 px-xl-36 ms-xl-124"></div>
                                                </div>
                                            </div>
                                            <div className="oEstimate-main3-btn02-box">
                                                <button onClick={()=>{materialDefault()}} className="oEstimate-main3-btn02 mian-btn1-set" type="button" id="main3-default-btn">預設配置</button>
                                            </div>
                                        </div>
                                    </form>
                                <button className="oEstimate-main3-btn03 pagination-btn01 d-block mx-auto">
                                        <div className="pagination-img01-box">
                                            <img className="pagination-img01-set" src={oEstimateMain1Vector15} alt="Vector 15" />
                                        </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="oEstimate-main4 w-100 oEstimate-main4-bg-set" id="oEstimate-main4">
                    <div className="container py-64 py-lg-100 "> 
                        <div className="row">
                            <div  className="col-12">
                            
                                    <div className="oEstimate-main4-title-box mb-32 mb-xl-72">
                                        <h3 className="fs-32 fw-900 text-center text-nautral-white fs-xl-64 text-xl-start">時程選擇</h3>
                                    </div>

                                    <div className="oEstimate-main4-btn01-box w-100 mb-32 mb-xl-72">
                                        <div className="oEstimate-main4-btn01-set d-flex justify-content-center align-items-center gap-16 py-16 px-16 fs-16 fw-500 lh-15 bg-primary1 outline-0 text-nautral-white py-xl-12 px-xl-24">
                                            <span className="material-symbols-outlined oEstimate-erroricon-set">
                                                error
                                            </span>
                                            <div className="oEstimate-main4-btn01-p-box">
                                                <p className="d-none d-lg-block">若無法確定規格，可點擊預設配置，系統會自動帶出適合的規格設置。</p>
                                                <p className="d-block d-xl-none">若無法確定規格，可點擊預設配置，</p>
                                                <p className="d-block d-xl-none">系統會自動帶出適合的規格設置。</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="oEstimate-main4-container-box oEstimate-main4-outsidematerial-box-set w-100 d-flex flex-column justify-content-center align-items-center  flex-xl-row justify-content-xl-between align-items-xl-start mb-32 mb-xl-72">

                                        <div className="oEstimate-main4-timework d-flex flex-column from-set justify-content-center row-gap-12 w-100 mb-48 mb-xl-0 flex-xxl-row row-gap-xxl-0 gap-xxl-40">
                                            <div className="oEstimate-main4-text-set fs-16 fw-500 lh-15  fs-xl-24 fw-xl-700 lh-xl-12 text-nautral-white">工期選擇</div>
                                            
                                            <Dropdown className="oEstimate-main4-timework-box page-dropdown oEstimate-main4-item1 oEstimate-main4-item-set text-center me-xl-auto position-relative">
                                                <button onClick={()=>{setOestimateMain4Btn(!oestimateMain4Btn)}} className="timework w-100 bg-transparent border-0 outline-0 py-12 px-24 py-xl-30 px-xl-36 fs-16 fw-500 lh-15 fs-xl-24 fw-xl-700 lh-xl-12 text-nautral-white position-relative" id="dropdownMenuButton">
                                                    {/* timework w-100 bg-transparent border-0 outline-0 py-12 px-24 py-xl-30 px-xl-36 fs-16 fw-500 lh-15 fs-xl-24 fw-xl-700 lh-xl-12 text-nautral-white position-relative */}
                                                    <span className="text-start fs-16 lh-15 fw-500 fs-xl-24 lh-xl-12 fw-xl-700 text-nautral-white d-block me-auto">{oestimateMain4text}</span>
                                                    <div className="main4-img-box position-absolute main4-img-position1">
                                                        <picture>
                                                            <source srcSet={oEstimateMain4Keyboardarrowdown} media="(min-width:1200px)" />
                                                            <img src={oEstimateMain4SmKeyboardarrowdown} alt="home-section2-1" />
                                                        </picture>
                                                    </div>
                                                </button>
                                                {
                                                    oestimateMain4Btn?(
                                                        <>
                                                            <div className="oEstimate-main4-timework-item fs-16 fw-500 lh-15 fs-xl-24 fw-xl-700 lh-xl-12 text-nautral-white py-24" onClick={() => 
                                                            {setOestimateMain4text("急單 3個工作天");setOestimateMain4Btn(false);}}>
                                                                急單 3個工作天
                                                            </div>
                                                            <div className="oEstimate-main4-timework-item fs-16 fw-500 lh-15 fs-xl-24 fw-xl-700 lh-xl-12 text-nautral-white py-24" onClick={() => 
                                                            {setOestimateMain4text("一般單 3-6個工作天");setOestimateMain4Btn(false);}}>
                                                                一般單 3-6個工作天
                                                            </div>
                                                            <div className="oEstimate-main4-timework-item fs-16 fw-500 lh-15 fs-xl-24 fw-xl-700 lh-xl-12 text-nautral-white py-24" onClick={() => 
                                                            {setOestimateMain4text("不急單 6-10個工作天");setOestimateMain4Btn(false);}}>
                                                                不急單 6-10個工作天
                                                            </div>
                                                        </>
                                                    )
                                                    :
                                                    (
                                                        <></>
                                                    )
                                                }
                                            </Dropdown>
                                        </div>

                                        <div className="oEstimate-main4-calendar d-flex flex-column from-set row-gap-12 w-100 flex-xxl-row justify-content-xxl-between row-gap-xxl-0">   
                                            <div className="oEstimate-main4-text-set fs-16 fw-500 lh-15  fs-xl-24 fw-xl-700 lh-xl-12 text-nautral-white ms-xl-auto me-xxl-40">日期選擇</div>
                                            <div className="oEstimate-main4-calendar-box">
                                                <button onClick={()=>{setOestimateMain4Calendar(!oestimateMain4Calendar)}} className="oEstimate-main4-item2 oEstimate-main4-item-set d-xl-block ms-xl-auto bg-transparent text-center">
                                                    <div className="calendar position-relative" id="calendar">
                                                        <div className="main4-img-box position-absolute main4-img-position2">
                                                            <picture>
                                                                <source srcSet={oEstimateMain4Calendar} media="(min-width:1200px)" />
                                                                <img src={oEstimateMain4SmCalendar} alt="home-section2-1" />
                                                            </picture>
                                                        </div>
                                                        <span id="selectedDateDisplay" className="fs-16 fw-500 lh-15 fs-xl-24 fw-xl-700 lh-xl-12"> 年 / 月 / 日 </span> {/* 唯一 ID，顯示選擇的日期 */}
                                                        <div className="main4-img-box position-absolute main4-img-position3">
                                                            <picture>
                                                                <source srcSet={oEstimateMain4Keyboardarrowdown} media="(min-width:1200px)" />
                                                                <img src={oEstimateMain4Sm數量調整按鈕} alt="home-section2-1" />
                                                            </picture>
                                                        </div>
                                                    </div>
                                                </button>
                                                {
                                                    oestimateMain4Calendar?(
                                                        <>  
                                                            <div>
                                                                <DatePicker
                                                                    // selected={selectedDate}
                                                                    // onChange={(date) => {
                                                                    // setSelectedDate(date);
                                                                    // setIsOpen(false); // 選擇完日期後自動關閉
                                                                    // }}
                                                                    className="fs-5"
                                                                    dateFormat="yyyy/MM/dd"
                                                                    showPopperArrow={false}
                                                                    inline // 讓日曆固定顯示
                                                                />
                                                            </div>
                                                        </>
                                                    )
                                                    :
                                                    (
                                                        <></>
                                                    )
                                                }
                                                
                                            </div>
                                        </div>
                                    </div>

                                    <button className="oEstimate-main4-btn02 pagination-btn02 d-block mx-auto">
                                        <a className="a-re" href="oEstimate.html#oEstimate-main5">
                                            <div className="oEstimate-main4-img-box02">
                                                <img className="oEstimate-main4-btn02-img-set" src={oEstimateMain1Vector16} alt="Vector 16" />
                                            </div>
                                        </a>
                                    </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="oEstimate-main5 w-100 oEstimate-main5-bg-set" id="oEstimate-main5">
                    <div className="container py-64 py-lg-144 "> 
                        <div className="row">
                            <div  className="col-12">

                                <div className="oEstimate-main5-content h-100">

                                    <div className="oEstimate-main5-article mb-48 d-flex flex-column justify-content-center align-items-center  align-items-xxl-center">
                                        <div className="oEstimate-main5-title-box w-100 mb-32 mb-xxl-72">
                                            <h3 className="fs-32 fw-900 lh-12 fs-xxl-64 text-primary3 d-block d-xxl-none">注意事項！！！</h3>
                                            <h3 className="fs-32 fw-900 lh-12 fs-xxl-64 text-primary3 d-block d-xxl-none">產品交期說明</h3>
                                            <h3 className="fs-32 fw-900 lh-12 fs-xxl-64 text-primary3 d-none d-xxl-block">注意事項！！！ 產品交期說明</h3>
                                        </div>
                                        <div className="abus-main5-text-box w-100"> 
                                            <p className="fs-16 fw-500 lh-15 mb-12 fs-xxl-24 text-nautral-white">急單：3個工作天出貨，且有失敗風險，請與業務聯繫。</p>
                                            <p className="fs-16 fw-500 lh-15 mb-12 fs-xxl-24 text-nautral-white">一般單：3~6個工作天出貨。</p>
                                            <p className="fs-16 fw-500 lh-15 fs-xxl-24 text-nautral-white">不急單：6~10個工作天出貨、依排程而定。</p>
                                        </div>
                                    </div>

                                    <div className="oEstimate-main5-btn01-box w-100 mb-48">
                                        <div className="oEstimate-main5-btn01-set d-flex justify-content-center align-items-center gap-16 p-16 fs-16 fw-500 lh-15 bg-primary1 outline-0 text-nautral-white">
                                            <span className="material-symbols-outlined sec-btn1-img-set">
                                                error
                                            </span>
                                            <div className="oEstimate-main5-btn01-p-box d-flex flex-column justify-content-center align-items-start row-gap-8">
                                                <p className="">此時間為出貨時間，非到貨時間</p>
                                                <p className="">產品實際交期依物件大小及數量而定如有特殊狀況將由客服人員與您聯繫</p>
                                            </div>
                                        </div> 
                                    </div>  

                                    <div className="oEstimate-main5-btn02-box d-flex justify-content-center align-items-center  justify-content-xl-start">
                                        <button className="oEstimate-main5-btn02 mian-btn1-set" type="submit" id="oEstimate-main5" data-bs-toggle="modal" data-bs-target="#oEstimate-main5-Modal">送出估價</button>
                                    </div>

                                </div>

                                <div className="modal fade" id="oEstimate-main5-Modal" tabindex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
                                    <div className="modal-dialog modal-dialog-centered oEstimate-main5-Modal-dialog">
                                        <div className="modal-content oEstimate-main5-Modal-content bg-primary1">
                                            <div className="modal-body oEstimate-main5-Modal-body d-flex">
                                                <div className="oEstimate-main3-btn01-box w-100 p-16 fs-16 fw-500 lh-15 text-nautral-white bg-primary1 outline-0">
                                                        訊息已送出，如有更新消息會再與您聯繫。
                                                </div>
                                                <button type="button" className="oEstimate-main1-btn-close border-0 outline-0 p-0 bg-transparent" data-bs-dismiss="modal" aria-label="Close">
                                                    <div className="oEstimate-main1-btn-img-box">
                                                        <img className="img-set" src={oEstimateMain5ModalBtnClose} alt="oEstimate-main5-modal-btn-close" />
                                                    </div>
                                                </button>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default OestimatePage;