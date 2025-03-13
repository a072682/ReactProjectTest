import { Link } from "react-router-dom"


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
                                            <button className="upLord-fileFormat-sm-box-set d-flex align-items-center me-4" data-bs-toggle="modal" data-bs-target="#oEstimate-main1-Modal">
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

                                <div className="modal fade" id="oEstimate-main1-Modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">{/*檔案說明彈出視窗*/}
                                    {/*className="modal fade"：modal 表示是 Modal 視窗，fade 表示彈出時會有淡入效果。
                                        id：exampleModal，這是 Modal 的唯一識別符號，用於在 JavaScript 中或透過觸發按鈕來控制此視窗。
                                        aria-hidden="true"：告訴螢幕讀取器此元素預設是隱藏的，當 Modal 開啟時會自動切換成 false。*/}
                                    <div className="modal-dialog oEstimate-main1-dialog">
                                    {/*modal-dialog 是彈出視窗的對話框容器。可使用 modal-dialog-centered 來將 Modal 置中顯示。*/}
                                        <div className="modal-content oEstimate-main1-content">
                                        {/*modal-content 是彈出視窗的內容容器，包含標題、內容和頁腳區域。*/}
                                            <div className="modal-header oEstimate-main1-header text-primary3 d-flex justify-content-between py-16 px-32">
                                                <h5 className="modal-title" id="exampleModalLabel">檔案格式說明</h5>
                                                <button type="button" className="oEstimate-main1-btn-close border-0 outline-0 p-0 bg-transparent" data-bs-dismiss="modal" aria-label="Close">
                                                    <div className="oEstimate-main1-btn-img-box">
                                                        <img className="img-set" src={oEstimateMain1ModalBtnClose} alt="oEstimate-main1-modal-btn-close" />
                                                    </div>
                                                </button>
                                            </div>
                                            {/*modal-header：標題部分，包含標題文本和關閉按鈕。
                                                btn-close：Bootstrap 提供的按鈕樣式，設定 data-bs-dismiss="modal" 可點擊關閉彈出視窗。*/}
                                            <div className="modal-body oEstimate-main1-body d-flex flex-column row-gap-40">
                                                    <div className="oEstimate-main1-modal-item-box d-flex flex-column row-gap-12">
                                                        <div className="fs-24 fw-700 lh-12 text-primary3 d-flex align-items-center">
                                                                <span className="material-symbols-outlined text-nautral-white me-12">
                                                                    error 
                                                                </span>
                                                                檔案格式
                                                        </div>
                                                        <div className="fs-16 fw-500 lh-15 text-nautral-white">
                                                        </div>
                                                        <div className="secondary-btn1-box">
                                                            <button className="secondary-btn1-set">
                                                                <a href="qaPage.html" className="fw-500 lh-15 text-primary4 d-flex align-items-center">
                                                                    詳閱常見問題
                                                                
                                                                    <span className="material-symbols-outlined sec-btn1-img-set">
                                                                        chevron_right
                                                                    </span>
                                                                </a>
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div className="oEstimate-main1-modal-item-box d-flex flex-column row-gap-12">
                                                        <div className="fs-24 fw-700 lh-12 text-primary3 d-flex align-items-center">
                                                                <span className="material-symbols-outlined text-nautral-white me-12">
                                                                    error 
                                                                </span>
                                                                檔案大小
                                                        </div>
                                                        <div className="fs-16 fw-500 lh-15 text-nautral-white">
                                                            30MB(如檔案過大請去背再上傳)
                                                        </div>
                                                        <div className="secondary-btn1-box">
                                                            <button className="secondary-btn1-set">
                                                                <a href="qaPage.html" className="fw-500 lh-15 text-primary4 d-flex align-items-center">
                                                                    詳閱常見問題
                                                                
                                                                    <span className="material-symbols-outlined sec-btn1-img-set">
                                                                        chevron_right
                                                                    </span>
                                                                </a>
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div className="oEstimate-main1-modal-item-box d-flex flex-column row-gap-12">
                                                        <div className="fs-24 fw-700 lh-12 text-primary3 d-flex align-items-center">
                                                                <span className="material-symbols-outlined text-nautral-white me-12">
                                                                    error 
                                                                </span>
                                                                列印須知
                                                        </div>
                                                        <div className="fs-16 fw-500 lh-15 text-nautral-white">
                                                            列印以材料原色為準,上色另計
                                                        </div>
                                                        <div className="secondary-btn1-box">
                                                            <button className="secondary-btn1-set">
                                                                <a href="qaPage.html" className="fw-500 lh-15 text-primary4 d-flex align-items-center">
                                                                    詳閱常見問題
                                                                
                                                                    <span className="material-symbols-outlined sec-btn1-img-set">
                                                                        chevron_right
                                                                    </span>
                                                                </a>
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div className="oEstimate-main1-modal-item-box d-flex flex-column row-gap-12">
                                                        <div className="fs-24 fw-700 lh-12 text-primary3 d-flex align-items-center">
                                                                <span className="material-symbols-outlined text-nautral-white me-12">
                                                                    error 
                                                                </span>
                                                                複數物件
                                                        </div>
                                                        <div className="fs-16 fw-500 lh-15 text-nautral-white">
                                                            如有多個物件需要列印,請務必分成不同檔案及分別點選數量
                                                        </div>
                                                        <div className="secondary-btn1-box">
                                                            <button className="secondary-btn1-set">
                                                                <a href="qaPage.html" className="fw-500 lh-15 text-primary4 d-flex align-items-center">
                                                                    詳閱常見問題
                                                                
                                                                    <span className="material-symbols-outlined sec-btn1-img-set">
                                                                        chevron_right
                                                                    </span>
                                                                </a>
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div className="oEstimate-main1-modal-item-box d-flex flex-column row-gap-12">
                                                        <div className="fs-24 fw-700 lh-12 text-primary3 d-flex align-items-center">
                                                                <span className="material-symbols-outlined text-nautral-white me-12">
                                                                    error 
                                                                </span>
                                                                檔案破面、無法列印
                                                        </div>
                                                        <div className="fs-16 fw-500 lh-15 text-nautral-white">
                                                            如有檔案破面等無法列印之情形,將由專人與您聯繫
                                                        </div>
                                                        <div className="secondary-btn1-box">
                                                            <button className="secondary-btn1-set">
                                                                <a href="qaPage.html" className="fw-500 lh-15 text-primary4 d-flex align-items-center">
                                                                    詳閱常見問題
                                                                
                                                                    <span className="material-symbols-outlined sec-btn1-img-set">
                                                                        chevron_right
                                                                    </span>
                                                                </a>
                                                            </button>
                                                        </div>
                                                    </div>
                                            </div>
                                            {/*modal-body：彈出視窗的主要內容區域，可以放入自訂的文字、圖片或表單等元素。*/}
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="col-12 col-xl-4">
                                <div className="oEstimate-main1-box2 py-16 py-xl-0 mb-24">
                                    <div className="oEstimate-main1-title2-sm-box mb-16 mb-xl-48">
                                        <h3 className="fs-32 fw-900 text-nautral-white">圖檔上傳預覽</h3>
                                    </div>

                                    <div className="oEstimate-main1-upLord-img-sm-box" id="thumbnailArea">{/*圖檔上傳預覽*/}
                                        <div className="oEstimate-main1-upLord-img-sm-box-set py-16 px-12 py-xl-64 px-xl-auto row-gap-16 row-gap-xl-48 d-flex flex-column justify-content-center align-items-center">
                                            <div className="oEstimate-main1-upLord-btn-img-sm-set">
                                                <img className="img-set" src={oEstimateMain1Image} alt="index-main1-Image" />
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
                                <div className="oEstimate-main2-tab">
                                    
                                        <div className="d-flex">
                                            <button className="oEstimate-main2-btn oEstimate-main2-btn-on d-block" data-tab="1">
                                                3D列印
                                            </button>
                                            <button className="oEstimate-main2-btn d-block" data-tab="2">
                                                光固化
                                            </button>
                                        </div>
                                    
                            
                                    {/* 頁籤的內容區塊 */}
                                    <div className="oEstimate-main2-tab-content oEstimate-main2-active-tab" id="content-1">
                                        <div className="oEstimate-main2-swiper w-100 py-20 d-flex justify-content-center align-items-center mb-32 mb-xl-72">
                                            <div className="oEstimate-main2-swiper-box w-100">{/*內層外框*/}
                
                                                <div className="swiper mySwiper oEstimate-main2-mySwiper oEstimate-main2-mySwiper-set"> {/*swiper為整個輪播插件的最外層 輪播整體的尺寸由此設定 mySwiper則是細項部份的設定*/}
                                                    <div className="swiper-wrapper"> {/*swiper-wrapper為包住輪播圖片的容器*/}

                                                        <div className="swiper-slide">{/*swiper-slide為輪播圖片容器*/}
                
                                                            
                                                                <div className="oEstimate-main2-card1-box oEstimate-main2-card-box-set mx-auto p-4 bg-nautral-black" data-card="1">
                                                                    <div className="oEstimate-main2-card1-img-box oEstimate-main2-card-img-box-set mb-16 mb-xl-0">
                                                                            <img className="img-set" src={oEstimateMain2TabImg1} alt="oEstimate-main2-tab-img1" />     
                                                                    </div>
                                                                    <div className="oEstimate-main2-card1-text&btn-box d-xl-flex justify-content-xl-between align-items-xl-center py-xl-32 px-xl-12 p-xxl-32">
                                                            
                                                                        <div className="oEstimate-main2-card1-text-box mb-24 mb-xl-0">
                                                                            <div className="oEstimate-main2-card1-text">
                                                                                <p className="fw-500 fs-24 fw-700 lh-12 text-nautral-white mb-8 mb-xl-12">PLA 白</p>
                                                                                <p className="fw-500 fs-16 fw-700 lh-12 text-nautral-white">PLA聚乳酸</p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="secondary-btn1-box d-none d-xl-block mb-16 mb-xl-0">
                                                                            <button className="secondary-btn1-set d-flex align-items-center me-4 oE-main2-bt" data-card="1">
                                                                                選擇我
                                                                            
                                                                                <span className="material-symbols-outlined sec-btn1-img-set">
                                                                                    chevron_right
                                                                                </span>
                                                                                
                                                                            </button>
                                                                        </div>
                                                                        <div className="secondary-btn2-box d-block d-xl-none mb-16 mb-xl-0">
                                                                            <button className="secondary-btn2-set d-flex align-items-center me-4 oE-main2-bt" data-card="1">
                                                                                選擇我
                                                            
                                                                                <span className="material-symbols-outlined sec-btn2-img-set">
                                                                                    chevron_right
                                                                                </span>
                                                                            </button>
                                                                        </div>
                
                                                                    </div>   
                                                                </div>  
                                                            
                
                                                        </div>
                                                        <div className="swiper-slide">{/*swiper-slide為輪播圖片容器*/}
                
                                                            
                                                            <div className="oEstimate-main2-card2-box oEstimate-main2-card-box-set mx-auto p-4 bg-nautral-black" data-card="2">
                                                                <div className="oEstimate-main2-card2-img-box oEstimate-main2-card-img-box-set mb-16 mb-xl-0">
                                                                        <img className="img-set" src={oEstimateMain2TabImg2} alt="oEstimate-main2-tab-img2" />     
                                                                </div>
                                                                <div className="oEstimate-main2-card1-text&btn-box d-xl-flex justify-content-xl-between align-items-xl-center py-xl-32 px-xl-12 p-xl-32">
                                                        
                                                                    <div className="oEstimate-main2-card1-text-box mb-24 mb-xl-0">
                                                                        <div className="oEstimate-main2-card1-text">
                                                                            <p className="fw-500 fs-24 fw-700 lh-12 text-nautral-white mb-8 mb-xl-12">PLA 透明</p>
                                                                            <p className="fw-500 fs-16 fw-700 lh-12 text-nautral-white">PLA聚乳酸</p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="secondary-btn1-box d-none d-xl-block mb-16 mb-xl-0">
                                                                        <button className="secondary-btn1-set d-flex align-items-center me-4 oE-main2-bt" data-card="2">
                                                                            選擇我
                                                                        
                                                                            <span className="material-symbols-outlined sec-btn1-img-set">
                                                                                chevron_right
                                                                            </span>
                                                                            
                                                                        </button>
                                                                    </div>
                                                                    <div className="secondary-btn2-box d-block d-xl-none mb-16 mb-xl-0">
                                                                        <button className="secondary-btn2-set d-flex align-items-center me-4 oE-main2-bt" data-card="2">
                                                                            選擇我
                                                        
                                                                            <span className="material-symbols-outlined sec-btn2-img-set">
                                                                                chevron_right
                                                                            </span>
                                                                        </button>
                                                                    </div>
            
                                                                </div>   
                                                            </div>  
                                                        
            
                                                        </div>
                                                        <div className="swiper-slide">{/*swiper-slide為輪播圖片容器*/}
                
                                                            
                                                                <div className="oEstimate-main2-card3-box oEstimate-main2-card-box-set mx-auto p-4 bg-nautral-black" data-card="3">
                                                                    <div className="oEstimate-main2-card3-img-box oEstimate-main2-card-img-box-set mb-16 mb-xl-0">
                                                                            <img className="img-set" src={oEstimateMain2TabImg3} alt="oEstimate-main2-tab-img3" />     
                                                                    </div>
                                                                    <div className="oEstimate-main2-card1-text&btn-box d-xl-flex justify-content-xl-between align-items-xl-center py-xl-32 px-xl-12 p-xl-32">
                                                            
                                                                        <div className="oEstimate-main2-card1-text-box mb-24 mb-xl-0">
                                                                            <div className="oEstimate-main2-card1-text">
                                                                                <p className="fw-500 fs-24 fw-700 lh-12 text-nautral-white mb-8 mb-xl-12">PLA 黑</p>
                                                                                <p className="fw-500 fs-16 fw-700 lh-12 text-nautral-white">PLA聚乳酸</p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="secondary-btn1-box d-none d-xl-block mb-16 mb-xl-0">
                                                                            <button className="secondary-btn1-set d-flex align-items-center me-4 oE-main2-bt" data-card="3">
                                                                                選擇我
                                                                            
                                                                                <span className="material-symbols-outlined sec-btn1-img-set">
                                                                                    chevron_right
                                                                                </span>
                                                                                
                                                                            </button>
                                                                        </div>
                                                                        <div className="secondary-btn2-box d-block d-xl-none mb-16 mb-xl-0">
                                                                            <button className="secondary-btn2-set d-flex align-items-center me-4 oE-main2-bt" data-card="3">
                                                                                選擇我
                                                            
                                                                                <span className="material-symbols-outlined sec-btn2-img-set">
                                                                                    chevron_right
                                                                                </span>
                                                                            </button>
                                                                        </div>
                
                                                                    </div>   
                                                                </div>  
                                                            
                
                                                        </div>
                                                        <div className="swiper-slide">{/*swiper-slide為輪播圖片容器*/}
                
                                                            
                                                            <div className="oEstimate-main2-card4-box oEstimate-main2-card-box-set mx-auto p-4 bg-nautral-black" data-card="4">
                                                                <div className="oEstimate-main2-card4-img-box oEstimate-main2-card-img-box-set mb-16 mb-xl-0">
                                                                        <img className="img-set" src={oEstimateMain2TabImg1} alt="oEstimate-main2-tab-img1" />     
                                                                </div>
                                                                <div className="oEstimate-main2-card1-text&btn-box d-xl-flex justify-content-xl-between align-items-xl-center py-xl-32 px-xl-12 p-xl-32">
                                                        
                                                                    <div className="oEstimate-main2-card1-text-box mb-24 mb-xl-0">
                                                                        <div className="oEstimate-main2-card1-text">
                                                                            <p className="fw-500 fs-24 fw-700 lh-12 text-nautral-white mb-8 mb-xl-12">PLA 白</p>
                                                                            <p className="fw-500 fs-16 fw-700 lh-12 text-nautral-white">PLA聚乳酸</p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="secondary-btn1-box d-none d-xl-block mb-16 mb-xl-0">
                                                                        <button className="secondary-btn1-set d-flex align-items-center me-4 oE-main2-bt" data-card="4">
                                                                            選擇我
                                                                        
                                                                            <span className="material-symbols-outlined sec-btn1-img-set">
                                                                                chevron_right
                                                                            </span>
                                                                            
                                                                        </button>
                                                                    </div>
                                                                    <div className="secondary-btn2-box d-block d-xl-none mb-16 mb-xl-0">
                                                                        <button className="secondary-btn2-set d-flex align-items-center me-4 oE-main2-bt" data-card="4">
                                                                            選擇我
                                                        
                                                                            <span className="material-symbols-outlined sec-btn2-img-set">
                                                                                chevron_right
                                                                            </span>
                                                                        </button>
                                                                    </div>
            
                                                                </div>   
                                                            </div>  
                                                        
            
                                                        </div>
                                                        <div className="swiper-slide">{/*swiper-slide為輪播圖片容器*/}
                
                                                            <div className="oEstimate-main2-card5-box oEstimate-main2-card-box-set mx-auto p-4 bg-nautral-black" data-card="5">
                                                                <div className="oEstimate-main2-card5-img-box oEstimate-main2-card-img-box-set mb-16 mb-xl-0">
                                                                        <img className="img-set" src={oEstimateMain2TabImg2} alt="oEstimate-main2-tab-img2" />     
                                                                </div>
                                                                <div className="oEstimate-main2-card1-text&btn-box d-xl-flex justify-content-xl-between align-items-xl-center py-xl-32 px-xl-12 p-xl-32">
                                                        
                                                                    <div className="oEstimate-main2-card1-text-box mb-24 mb-xl-0">
                                                                        <div className="oEstimate-main2-card1-text">
                                                                            <p className="fw-500 fs-24 fw-700 lh-12 text-nautral-white mb-8 mb-xl-12">PLA 透明</p>
                                                                            <p className="fw-500 fs-16 fw-700 lh-12 text-nautral-white">PLA聚乳酸</p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="secondary-btn1-box d-none d-xl-block mb-16 mb-xl-0">
                                                                        <button className="secondary-btn1-set d-flex align-items-center me-4 oE-main2-bt" data-card="5">
                                                                            選擇我
                                                                        
                                                                            <span className="material-symbols-outlined sec-btn1-img-set">
                                                                                chevron_right
                                                                            </span>
                                                                            
                                                                        </button>
                                                                    </div>
                                                                    <div className="secondary-btn2-box d-block d-xl-none mb-16 mb-xl-0">
                                                                        <button className="secondary-btn2-set d-flex align-items-center me-4 oE-main2-bt" data-card="5">
                                                                            選擇我
                                                        
                                                                            <span className="material-symbols-outlined sec-btn2-img-set">
                                                                                chevron_right
                                                                            </span>
                                                                        </button>
                                                                    </div>

                                                                </div>   
                                                            </div>  
                                                    

                                                        </div>
                                                        <div className="swiper-slide">{/*swiper-slide為輪播圖片容器*/}
                
                                                            
                                                            <div className="oEstimate-main2-card6-box oEstimate-main2-card-box-set mx-auto p-4 bg-nautral-black" data-card="6">
                                                                <div className="oEstimate-main2-card6-img-box oEstimate-main2-card-img-box-set mb-16 mb-xl-0">
                                                                        <img className="img-set" src={oEstimateMain2TabImg3} alt="oEstimate-main2-tab-img3" />     
                                                                </div>
                                                                <div className="oEstimate-main2-card1-text&btn-box d-xl-flex justify-content-xl-between align-items-xl-center py-xl-32 px-xl-12 p-xl-32">
                                                        
                                                                    <div className="oEstimate-main2-card1-text-box mb-24 mb-xl-0">
                                                                        <div className="oEstimate-main2-card1-text">
                                                                            <p className="fw-500 fs-24 fw-700 lh-12 text-nautral-white mb-8 mb-xl-12">PLA 黑</p>
                                                                            <p className="fw-500 fs-16 fw-700 lh-12 text-nautral-white">PLA聚乳酸</p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="secondary-btn1-box d-none d-xl-block mb-16 mb-xl-0">
                                                                        <button className="secondary-btn1-set d-flex align-items-center me-4 oE-main2-bt" data-card="6">
                                                                            選擇我
                                                                        
                                                                            <span className="material-symbols-outlined sec-btn1-img-set">
                                                                                chevron_right
                                                                            </span>
                                                                            
                                                                        </button>
                                                                    </div>
                                                                    <div className="secondary-btn2-box d-block d-xl-none mb-16 mb-xl-0">
                                                                        <button className="secondary-btn2-set d-flex align-items-center me-4 oE-main2-bt" data-card="6">
                                                                            選擇我
                                                        
                                                                            <span className="material-symbols-outlined sec-btn2-img-set">
                                                                                chevron_right
                                                                            </span>
                                                                        </button>
                                                                    </div>

                                                                </div>   
                                                            </div>  
                                                

                                                        </div>
                                            
                                                        
                                                        
                                                    </div>
                                                </div>
                                                <div className="oEstimate-main2-swiper-next-R-btn">
                                                    <button className="caroutsel-btn-R border-0 outline-0 bg-transparent">
                                                        <div className="img-box">
                                                            <picture>
                                                                <source srcSet={oEstimateMain2TabArrowR} media="(min-width:992px)" />
                                                                <img className="img-set" src={oEstimateMain2TabSmArrowR} alt="215x144" />
                                                            </picture> 
                                                        </div>
                                                    </button>
                                                </div>
                                                <div className="oEstimate-main2-swiper-next-L-btn">
                                                    <button className="caroutsel-btn-L border-0 outline-0 bg-transparent">
                                                        <div className="img-box">
                                                            <picture>
                                                                <source srcSet={oEstimateMain2TabArrowL} media="(min-width:992px)" />
                                                                <img className="img-set" src={oEstimateMain2TabSmArrowL} alt="215x144" />
                                                            </picture>
                                                        </div>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="oEstimate-main2-tab-content" id="content-2">{/* tab-分頁 */}
                                        <div className="oEstimate-main2-swiper w-100 py-20 d-flex justify-content-center align-items-center mb-32 mb-xl-72">
                                            <div className="oEstimate-main2-swiper-box w-100">{/*內層外框*/}
                
                                                <div className="swiper mySwiper oEstimate-main2-mySwiper2 oEstimate-main2-mySwiper-set"> {/*swiper為整個輪播插件的最外層 輪播整體的尺寸由此設定 mySwiper則是細項部份的設定*/}
                                                    <div className="swiper-wrapper"> {/*swiper-wrapper為包住輪播圖片的容器*/}

                                                        <div className="swiper-slide">{/*swiper-slide為輪播圖片容器*/}
                
                                                                <div className="oEstimate-main2-card1-box oEstimate-main2-card-box-set mx-auto p-8 bg-nautral-black" data-card="7">
                                                                    <div className="oEstimate-main2-card1-img-box oEstimate-main2-card-img-box-set mb-16 mb-xl-0">
                                                                            <img className="img-set" src={oEstimateMain2Tab2Img1} alt="oEstimate-main2-tab2-img1" />     
                                                                    </div>
                                                                    <div className="oEstimate-main2-card1-text&btn-box d-xxl-flex justify-content-xxl-between align-items-xxl-center py-xl-12 px-xl-12 p-xxl-32">
                                                            
                                                                        <div className="oEstimate-main2-card1-text-box mb-24 mb-xxl-0">
                                                                            <div className="oEstimate-main2-card1-text">
                                                                                <p className="fw-500 fs-24 fw-700 lh-12 text-nautral-white mb-8 mb-xl-12">光固化黑</p>
                                                                                <p className="fw-500 fs-16 fw-700 lh-12 text-nautral-white">光固化樹酯</p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="secondary-btn1-box d-none d-xl-block mb-16 mb-xl-0">
                                                                            <button className="secondary-btn1-set d-flex align-items-center me-4 oE-main2-bt" data-card="7">
                                                                                選擇我
                                                                            
                                                                                <span className="material-symbols-outlined sec-btn1-img-set">
                                                                                    chevron_right
                                                                                </span>
                                                                                
                                                                            </button>
                                                                        </div>
                                                                        <div className="secondary-btn2-box d-block d-xl-none mb-16 mb-xl-0">
                                                                            <button className="secondary-btn2-set d-flex align-items-center me-4 oE-main2-bt" data-card="7">
                                                                                選擇我
                                                            
                                                                                <span className="material-symbols-outlined sec-btn2-img-set">
                                                                                    chevron_right
                                                                                </span>
                                                                            </button>
                                                                        </div>
                
                                                                    </div>   
                                                                </div>  
                                                            
                
                                                        </div>
                                                        <div className="swiper-slide">{/*swiper-slide為輪播圖片容器*/}
                
                                                            
                                                            <div className="oEstimate-main2-card2-box oEstimate-main2-card-box-set mx-auto p-8 bg-nautral-black" data-card="8">
                                                                <div className="oEstimate-main2-card2-img-box oEstimate-main2-card-img-box-set mb-16 mb-xl-12">
                                                                        <img className="img-set" src={oEstimateMain2Tab2Img2} alt="oEstimate-main2-tab2-img2" />     
                                                                </div>
                                                                <div className="oEstimate-main2-card1-text&btn-box d-xxl-flex justify-content-xxl-between align-items-xxl-center py-xl-12 px-xl-12 p-xxl-32">
                                                        
                                                                    <div className="oEstimate-main2-card1-text-box mb-24 mb-xxl-0">
                                                                        <div className="oEstimate-main2-card1-text">
                                                                            <p className="fw-500 fs-24 fw-700 lh-12 text-nautral-white mb-8 mb-xl-0">光固化白</p>
                                                                            <p className="fw-500 fs-16 fw-700 lh-12 text-nautral-white">光固化樹酯</p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="secondary-btn1-box d-none d-xl-block mb-16 mb-xl-0">
                                                                        <button className="secondary-btn1-set d-flex align-items-center me-4 oE-main2-bt" data-card="8">
                                                                            選擇我
                                                                        
                                                                            <span className="material-symbols-outlined sec-btn1-img-set">
                                                                                chevron_right
                                                                            </span>
                                                                            
                                                                        </button>
                                                                    </div>
                                                                    <div className="secondary-btn2-box d-block d-xl-none mb-16 mb-xl-0">
                                                                        <button className="secondary-btn2-set d-flex align-items-center me-4 oE-main2-bt" data-card="8">
                                                                            選擇我
                                                        
                                                                            <span className="material-symbols-outlined sec-btn2-img-set">
                                                                                chevron_right
                                                                            </span>
                                                                        </button>
                                                                    </div>
            
                                                                </div>   
                                                            </div>  
                                                        
            
                                                        </div>
                                                        <div className="swiper-slide">{/*swiper-slide為輪播圖片容器*/}
                
                                                            
                                                                <div className="oEstimate-main2-card3-box oEstimate-main2-card-box-set mx-auto p-8 bg-nautral-black" data-card="9">
                                                                    <div className="oEstimate-main2-card3-img-box oEstimate-main2-card-img-box-set mb-16 mb-xl-0">
                                                                            <img className="img-set" src={oEstimateMain2Tab2Img3} alt="oEstimate-main2-tab2-img3" />     
                                                                    </div>
                                                                    <div className="oEstimate-main2-card1-text&btn-box d-xxl-flex justify-content-xxl-between align-items-xxl-center py-xl-12 px-xl-12 p-xxl-32">
                                                            
                                                                        <div className="oEstimate-main2-card1-text-box mb-24 mb-xxl-0">
                                                                            <div className="oEstimate-main2-card1-text">
                                                                                <p className="fw-500 fs-24 fw-700 lh-12 text-nautral-white mb-8 mb-xl-12">光固化透明</p>
                                                                                <p className="fw-500 fs-16 fw-700 lh-12 text-nautral-white">光固化樹酯</p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="secondary-btn1-box d-none d-xl-block mb-16 mb-xl-0">
                                                                            <button className="secondary-btn1-set d-flex align-items-center me-4 oE-main2-bt" data-card="9">
                                                                                選擇我
                                                                            
                                                                                <span className="material-symbols-outlined sec-btn1-img-set">
                                                                                    chevron_right
                                                                                </span>
                                                                                
                                                                            </button>
                                                                        </div>
                                                                        <div className="secondary-btn2-box d-block d-xl-none mb-16 mb-xl-0">
                                                                            <button className="secondary-btn2-set d-flex align-items-center me-4 oE-main2-bt" data-card="9">
                                                                                選擇我
                                                            
                                                                                <span className="material-symbols-outlined sec-btn2-img-set">
                                                                                    chevron_right
                                                                                </span>
                                                                            </button>
                                                                        </div>
                
                                                                    </div>   
                                                                </div>  
                                                            
                
                                                        </div>
                                                        <div className="swiper-slide">{/*swiper-slide為輪播圖片容器*/}
                
                                                            
                                                            <div className="oEstimate-main2-card4-box oEstimate-main2-card-box-set mx-auto p-8 bg-nautral-black" data-card="10">
                                                                <div className="oEstimate-main2-card4-img-box oEstimate-main2-card-img-box-set mb-16 mb-xl-0">
                                                                        <img className="img-set" src={oEstimateMain2Tab2Img1} alt="oEstimate-main2-tab2-img1" />     
                                                                </div>
                                                                <div className="oEstimate-main2-card1-text&btn-box d-xxl-flex justify-content-xxl-between align-items-xxl-center py-xl-12 px-xl-12 p-xxl-32">
                                                        
                                                                    <div className="oEstimate-main2-card1-text-box mb-24 mb-xxl-0">
                                                                        <div className="oEstimate-main2-card1-text">
                                                                            <p className="fw-500 fs-24 fw-700 lh-12 text-nautral-white mb-8 mb-xl-12">光固化黑</p>
                                                                            <p className="fw-500 fs-16 fw-700 lh-12 text-nautral-white">光固化樹酯</p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="secondary-btn1-box d-none d-xl-block mb-16 mb-xl-0">
                                                                        <button className="secondary-btn1-set d-flex align-items-center me-4 oE-main2-bt" data-card="10">
                                                                            選擇我
                                                                        
                                                                            <span className="material-symbols-outlined sec-btn1-img-set">
                                                                                chevron_right
                                                                            </span>
                                                                            
                                                                        </button>
                                                                    </div>
                                                                    <div className="secondary-btn2-box d-block d-xl-none mb-16 mb-xl-0">
                                                                        <button className="secondary-btn2-set d-flex align-items-center me-4 oE-main2-bt" data-card="10">
                                                                            選擇我
                                                        
                                                                            <span className="material-symbols-outlined sec-btn2-img-set">
                                                                                chevron_right
                                                                            </span>
                                                                        </button>
                                                                    </div>
            
                                                                </div>   
                                                            </div>  
                                                        
            
                                                        </div>
                                                        <div className="swiper-slide">{/*swiper-slide為輪播圖片容器*/}
                
                                                            
                                                            <div className="oEstimate-main2-card5-box oEstimate-main2-card-box-set mx-auto p-8 bg-nautral-black" data-card="11">
                                                                <div className="oEstimate-main2-card5-img-box oEstimate-main2-card-img-box-set mb-16 mb-xl-0">
                                                                        <img className="img-set" src={oEstimateMain2Tab2Img2} alt="oEstimate-main2-tab2-img2" />     
                                                                </div>
                                                                <div className="oEstimate-main2-card1-text&btn-box d-xxl-flex justify-content-xxl-between align-items-xxl-center py-xl-12 px-xl-12 p-xxl-32">
                                                        
                                                                    <div className="oEstimate-main2-card1-text-box mb-24 mb-xxl-0">
                                                                        <div className="oEstimate-main2-card1-text">
                                                                            <p className="fw-500 fs-24 fw-700 lh-12 text-nautral-white mb-8 mb-xl-12">光固化白</p>
                                                                            <p className="fw-500 fs-16 fw-700 lh-12 text-nautral-white">光固化樹酯</p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="secondary-btn1-box d-none d-xl-block mb-16 mb-xl-0">
                                                                        <button className="secondary-btn1-set d-flex align-items-center me-4 oE-main2-bt" data-card="11">
                                                                            選擇我
                                                                        
                                                                            <span className="material-symbols-outlined sec-btn1-img-set">
                                                                                chevron_right
                                                                            </span>
                                                                            
                                                                        </button>
                                                                    </div>
                                                                    <div className="secondary-btn2-box d-block d-xl-none mb-16 mb-xl-0">
                                                                        <button className="secondary-btn2-set d-flex align-items-center me-4 oE-main2-bt" data-card="11">
                                                                            選擇我
                                                        
                                                                            <span className="material-symbols-outlined sec-btn2-img-set">
                                                                                chevron_right
                                                                            </span>
                                                                        </button>
                                                                    </div>

                                                                </div>   
                                                            </div>  
                                                        

                                                        </div>
                                                        <div className="swiper-slide">{/*swiper-slide為輪播圖片容器*/}
                
                                                            
                                                            <div className="oEstimate-main2-card6-box oEstimate-main2-card-box-set mx-auto p-8 bg-nautral-black" data-card="12">
                                                                <div className="oEstimate-main2-card6-img-box oEstimate-main2-card-img-box-set mb-16 mb-xl-0">
                                                                        <img className="img-set" src={oEstimateMain2Tab2Img3} alt="oEstimate-main2-tab2-img3" />     
                                                                </div>
                                                                <div className="oEstimate-main2-card1-text&btn-box d-xxl-flex justify-content-xxl-between align-items-xxl-center py-xl-12 px-xl-12 p-xxl-32">
                                                        
                                                                    <div className="oEstimate-main2-card1-text-box mb-24 mb-xxl-0">
                                                                        <div className="oEstimate-main2-card1-text">
                                                                            <p className="fw-500 fs-24 fw-700 lh-12 text-nautral-white mb-8 mb-xl-12">光固化透明</p>
                                                                            <p className="fw-500 fs-16 fw-700 lh-12 text-nautral-white">光固化樹酯</p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="secondary-btn1-box d-none d-xl-block mb-16 mb-xl-0">
                                                                        <button className="secondary-btn1-set d-flex align-items-center me-4 oE-main2-bt" data-card="12">
                                                                            選擇我
                                                                        
                                                                            <span className="material-symbols-outlined sec-btn1-img-set">
                                                                                chevron_right
                                                                            </span>
                                                                            
                                                                        </button>
                                                                    </div>
                                                                    <div className="secondary-btn2-box d-block d-xl-none mb-16 mb-xl-0">
                                                                        <button className="secondary-btn2-set d-flex align-items-center me-4 oE-main2-bt" data-card="12">
                                                                            選擇我
                                                                            <span className="material-symbols-outlined sec-btn2-img-set">
                                                                                chevron_right
                                                                            </span>
                                                                        </button>
                                                                    </div>

                                                                </div>   
                                                            </div>  
                                                

                                                        </div>
                                            
                                                    </div>
                                                </div>
                                                <div className="oEstimate-main2-swiper-next-R-btn02">
                                                    <button className="caroutsel-btn-R border-0 outline-0 bg-transparent">
                                                        <div className="img-box">
                                                            <picture>
                                                                <source srcSet={oEstimateMain2TabArrowR} media="(min-width:992px)" />
                                                                <img className="img-set" src={oEstimateMain2TabSmArrowR} alt="215x144" />
                                                            </picture> 
                                                        </div>
                                                    </button>
                                                </div>
                                                <div className="oEstimate-main2-swiper-next-L-btn02">
                                                    <button className="caroutsel-btn-L border-0 outline-0 bg-transparent">
                                                        <div className="img-box">
                                                            <picture>
                                                                <source srcSet={oEstimateMain2TabArrowL} media="(min-width:992px)" />
                                                                <img className="img-set" src={oEstimateMain2TabSmArrowL} alt="215x144" />
                                                            </picture>
                                                        </div>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className="oEstimate-main2-footer-btn-box d-flex justify-content-center align-items-center">
                                    <button className="pagination-btn02">
                                        <a className="a-re" href="oEstimate.html#oEstimate-main3">
                                            <div className="pagination-img-box02">
                                                <img className="pagination-img02-set" src={oEstimateMain1Vector16} alt="Vector 16" />
                                            </div>
                                        </a>
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

                                    <div className="oEstimate-main3-container-box d-flex flex-column justify-content-center align-items-center  flex-xl-row justify-content-xl-between mb-32 mb-xl-72">
                                        <div className="oEstimate-main3-input-box oEstimate-main3-outsidematerial-box-set w-100 d-flex flex-column justify-content-center align-items-center mb-32 w-xl-auto mb-xl-0">
                                            <div className="oEstimate-main3-input-item01 d-flex flex-column from-set w-100 mb-36  flex-xl-row row-gap-xl-0 gap-xl-40 flex-xl-wrap">
                                                <div className="oEstimate-main3-text-set fs-24 fw-700 lh-12 text-nautral-white mb-12">
                                                    支撐材
                                                </div>
                                                <div className="oEstimate-main3-item1-box position-relative mb-12">
                                                    <input className="oEstimate-main3-item1 oEstimate-main3-item-set py-16 px-24 bg-nautral-black text-nautral-white fs-16 fw-500 lh-15  py-xl-28 px-xl-36 fs-xl-24 fw-xl-700 lh-xl-12" type="text" id="oEstimate-main3-inputNumber01" placeholder="mm" value="1mm" />
                                                    <button className="position-absolute main3-img-position1 border-0 outline-0 bg-transparent p-0" type="button" id="oEstimate-main3-increment01">
                                                        <picture>
                                                            <source srcSet={oEstimateMain3ArrowUP} media="(min-width:1200px)" />
                                                            <img className="img-set" src={oEstimateMain3SmArrowUP} alt="home-section2-1" />
                                                        </picture>
                                                    </button>
                                                    <button className="position-absolute main3-img-position2 border-0 outline-0 bg-transparent p-0" type="button" id="oEstimate-main3-decrement01">
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
                                                    <input className="oEstimate-main3-item1 oEstimate-main3-item-set py-16 px-24 bg-nautral-black text-nautral-white fs-16 fw-500 lh-15  py-xl-28 px-xl-36 fs-xl-24 fw-xl-700 lh-xl-12" type="text" id="oEstimate-main3-inputNumber02" placeholder="%" value="10%" />
                                                    <button className="position-absolute main3-img-position1 border-0 outline-0 bg-transparent p-0" type="button" id="oEstimate-main3-increment02">
                                                        <picture>
                                                            <source srcSet={oEstimateMain3ArrowUP} media="(min-width:1200px)" />
                                                            <img className="img-set" src={oEstimateMain3SmArrowUP} alt="home-section2-1" />
                                                        </picture>
                                                    </button>
                                                    <button className="position-absolute main3-img-position2 border-0 outline-0 bg-transparent p-0" type="button" id="oEstimate-main3-decrement02">
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
                                                    <input className="oEstimate-main3-item1 oEstimate-main3-item-set py-16 px-24 bg-nautral-black text-nautral-white fs-16 fw-500 lh-15  py-xl-28 px-xl-36 fs-xl-24 fw-xl-700 lh-xl-12" type="text" id="oEstimate-main3-inputNumber03" placeholder="mm" value="1mm" />
                                                    <button className="position-absolute main3-img-position1 border-0 outline-0 bg-transparent p-0" type="button" id="oEstimate-main3-increment03">
                                                        <picture>
                                                            <source srcSet={oEstimateMain3ArrowUP} media="(min-width:1200px)" />
                                                            <img className="img-set" src={oEstimateMain3SmArrowUP} alt="home-section2-1" />
                                                        </picture>
                                                    </button>
                                                    <button className="position-absolute main3-img-position2 border-0 outline-0 bg-transparent p-0" type="button" id="oEstimate-main3-decrement03">
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
                                            <button className="oEstimate-main3-btn02 mian-btn1-set-sm" type="submit" id="main3-default-btn">預設配置</button>
                                        </div>
                                    </div>

                                    <button className="oEstimate-main3-btn03 pagination-btn01 d-block mx-auto">
                                        <a className="a-re" href="oEstimate.html#oEstimate-main4">
                                            <div className="pagination-img01-box">
                                                <img className="pagination-img01-set" src={oEstimateMain1Vector15} alt="Vector 15" />
                                            </div>
                                        </a>
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

                                            <div className="oEstimate-main4-timework-box page-dropdown oEstimate-main4-item1 oEstimate-main4-item-set text-center me-xl-auto position-relative">
                                                <button className="timework w-100 bg-transparent border-0 outline-0 py-12 px-24 py-xl-30 px-xl-36 fs-16 fw-500 lh-15 fs-xl-24 fw-xl-700 lh-xl-12 text-nautral-white position-relative" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                                                    <span className="text-start fs-16 lh-15 fw-500 fs-xl-24 lh-xl-12 fw-xl-700 text-nautral-white d-block me-auto">選擇工期</span>

                                                    <div className="main4-img-box position-absolute main4-img-position1">
                                                        <picture>
                                                            <source srcSet={oEstimateMain4Keyboardarrowdown} media="(min-width:1200px)" />
                                                            <img src={oEstimateMain4SmKeyboardarrowdown} alt="home-section2-1" />
                                                        </picture>
                                                    </div>
                                                </button>
                                                <ul className="dropdown-menu oEstimate-main4-timework-list bg-nautral-black" aria-labelledby="dropdownMenuButton">
                                                    <li><span className="dropdown-item oEstimate-main4-timework-item fs-16 fw-500 lh-15 fs-xl-24 fw-xl-700 lh-xl-12 text-nautral-white py-24" onclick="selectOption('急單 3個工作天')">急單 3個工作天</span></li>
                                                    <li><span className="dropdown-item oEstimate-main4-timework-item fs-16 fw-500 lh-15 fs-xl-24 fw-xl-700 lh-xl-12 text-nautral-white py-24" onclick="selectOption('一般單 3-6個工作天')">一般單 3-6個工作天</span></li>
                                                    <li><span className="dropdown-item oEstimate-main4-timework-item fs-16 fw-500 lh-15 fs-xl-24 fw-xl-700 lh-xl-12 text-nautral-white py-24" onclick="selectOption('不急單 6-10個工作天')">不急單 6-10個工作天</span></li>
                                                    {/* <li><a className="dropdown-item">: 這是下拉選單中的每個項目，dropdown-item 是 Bootstrap 樣式，讓這些選項看起來是下拉選單的一部分。
                                    
                                                        onclick="selectOption('選項 1')": 當使用者點擊選單中的某個項目時，會執行 JavaScript 函數 selectOption，並傳入該選項的文字內容，如 '選項 1'。這個函數用來更新按鈕上的文字。 */}
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="oEstimate-main4-calendar d-flex flex-column from-set row-gap-12 w-100 flex-xxl-row justify-content-xxl-between row-gap-xxl-0">   
                                            <div className="oEstimate-main4-text-set fs-16 fw-500 lh-15  fs-xl-24 fw-xl-700 lh-xl-12 text-nautral-white ms-xl-auto me-xxl-40">日期選擇</div>
                                            <div className="oEstimate-main4-calendar-box">
                                                <div className="oEstimate-main4-item2 oEstimate-main4-item-set ms-xl-auto bg-transparent text-center">
                                                    <Link className="calendar position-relative" data-bs-toggle="collapse" to="/" role="button" aria-expanded="false" aria-controls="collapseExample" id="calendar">
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
                                                    </Link>
                                                </div>
                                                <div className="collapse" id="collapseExample">
                                                    
                                                        <div className="calendar-box ms-auto py-16 px-12">
                                                            {/* 日曆頭部 */}
                                                            <div className="calendar-head d-flex justify-content-between align-items-center mb-16">
                                                                <button id="prevMonthBtn" className="prevMonth-btn-img-box p-0 m-0 border-0 bg-transparent">
                                                                        <img className="img-set bg-transparent" src={oEstimateMain4CalendarArrowL} alt="" />
                                                                </button>
                                                                <div id="monthYear"></div>
                                                                <button id="nextMonthBtn" className="nextMonth-btn-img-box p-0 m-0 border-0 bg-transparent">
                                                                    <img className="img-set bg-transparent" src={oEstimateMain4CalendarArrowR} alt="" />
                                                                </button>
                                                            </div>
                                                            {/* 日曆星期部分 */}
                                                            <div id="weekbox" className="weekbox mb-20"></div>
                                                            {/* 日曆日期部分 */}
                                                            <div id="daybox" className="daybox row-gap-20"></div>  
                                                        </div>
                                                    
                                                </div>
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
                                        <button className="oEstimate-main5-btn02 mian-btn1-set-sm" type="submit" id="oEstimate-main5" data-bs-toggle="modal" data-bs-target="#oEstimate-main5-Modal">送出估價</button>
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