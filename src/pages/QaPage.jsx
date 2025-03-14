import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/css";// 核心 CSS
import { useRef } from 'react';
import { Accordion, Button, Card } from 'react-bootstrap';

import qpMain1Img1 from "../assets/images/QaPage/qP-main1-img1.png";
import qpMain1Img2 from "../assets/images/QaPage/qP-main1-img2.png";
import qpMain1SmImg1 from "../assets/images/QaPage/qP-main1-sm-img1.png";
import qpMain1SmImg2 from "../assets/images/QaPage/qP-main1-sm-img2.png";

import qpMain2Img1 from "../assets/images/QaPage/qP-main2-img1.png";
import qpMain2Img2 from "../assets/images/QaPage/qP-main2-img2.png";
import qpMain2Img3 from "../assets/images/QaPage/qP-main2-img3.png";
import qpMain2Img4 from "../assets/images/QaPage/qP-main2-img4.png";

import qpMain2SmImg1 from "../assets/images/QaPage/qP-main2-sm-img1.png";
import qpMain2SmImg2 from "../assets/images/QaPage/qP-main2-sm-img2.png";
import qpMain2SmImg3 from "../assets/images/QaPage/qP-main2-sm-img3.png";
import qpMain2SmImg4 from "../assets/images/QaPage/qP-main2-sm-img4.png";



function QaPage(){

    const main00SmRef = useRef(null);
    const main01SmRef = useRef(null);
    const main02SmRef = useRef(null);
    const main03SmRef = useRef(null);
    const main00Ref = useRef(null);
    const main01Ref = useRef(null);
    const main02Ref = useRef(null);
    const main03Ref = useRef(null);

    const scrollToSection = (ref) => {
        if (ref.current) {
            console.log("ref:",ref.current);
            ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      };

    const navSmItems = [
        {
            content:"客製化流程",
            ref: main00SmRef,
        },
        {
            content:"設計需求介紹",
            ref: main01SmRef,
        },
        {
            content:"運費說明",
            ref: main02SmRef,
        },
        {
            content:"常見問題",
            ref: main03SmRef,
        },
        {
            content:"客製化流程",
            ref: main00SmRef,
        },
        {
            content:"設計需求介紹",
            ref: main01SmRef,
        },
        {
            content:"運費說明",
            ref: main02SmRef,
        },
        {
            content:"常見問題",
            ref: main03SmRef,
        },
    ];




    return(
        <>
            <div className="qaPage-title qaPage-title-bg">
                <div className="container">
                    <div className="row"> 
                        <div className="col-12">
                            <div className="qaPage-title-box">
                                <h3 className="fs-32 fs-xxl-64 fw-900 qaPage-title-set text-nautral-white text-center py-16 py-xxl-40">新手指南/QA</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="qP-aside bg-nautral-black">
                
                <div className="container d-xl-none" id="qP-main-sm">{/*sm用*/}
                    <div className="row ">
                        <div className="col-12">

                        
                            <Swiper
                                modules={[Navigation, Pagination, Autoplay]}// 註冊 Swiper 模組
                                spaceBetween={0}
                                slidesPerView={4}
                                // navigation //啟用左右箭頭
                                // pagination={{ clickable: true }}// 啟用分頁點（可點擊）
                                loop={true} // 循環播放
                                className="mySwiper"
                            >
                                {
                                    navSmItems?.map((item, index) => (
                                        <SwiperSlide>
                                            <div key={index} onClick={()=>{scrollToSection(item.ref)}} className="aside-navbar-btn-set-sm h-100">{item.content}</div>
                                        </SwiperSlide>
                                    ))
                                }
                                
                            </Swiper>
                        

                        <div ref={main00SmRef} className="qP-main0" id="qP-main0-sm">
                            <div className="content qP-main1-bg w-100 bg-nautral-black py-48">
                            <div className="qP-main1-title-sm-box mb-32">
                                <h3 className="fs-32 fw-900 lh-15 text-primary3">客製化流程</h3>
                            </div>
                            <div className="title-box mb-40 ">
                                <h3 className="text-center text-xxl-start text-nautral-white">3D列印步驟</h3>
                            </div>
                            <div className="text-center-start text-xxl-start mb-16 fs-xxl-24 text-nautral-white">
                                <ol>
                                <li>繪圖建模</li>
                                <p className="text-center-start text-xxl-start mb-16 fs-xxl-24 text-nautral-white">使用3D繪圖軟體(如SketchUp、Blender)設計模型,確定形狀、尺寸和細節。完成後,將文件儲存為STL格式,以便後續處理。注意確認模型尺寸是否在列印機範圍內,以避免列印失敗。</p>
                                <li>切片處理</li>
                                <p className="text-center-start text-xxl-start mb-16 fs-xxl-24 text-nautral-white">使用切片軟體(如Cura、Slic3r)將3D模型分解成一層層的2D圖像,並設置列印參數,如速度、溫度和填充密度。生成的G-Code檔案將用於控制列印機的每一步操作。</p>
                                <li>列印準備</li>
                                <p className="text-center-start text-xxl-start mb-16 fs-xxl-24 text-nautral-white">在開始列印前,校正3D列印機,包括調整X、Y、Z軸和平台水平度。選擇適合的材料,如塑料、樹脂,並決定是否需要添加支撐結構,以確保列印穩定性。</p>
                                <li>正式列印</li>
                                <p className="text-center-start text-xxl-start mb-16 fs-xxl-24 text-nautral-white">啟動列印機進行3D列印,並定期檢查進度。確保材料供應充足,並在過程中處理可能出現的問題,如材料斷裂或列印錯誤。列印時間取決於模型的複雜度和大小。</p>
                                <li>後製加工</li>
                                <p className="text-center-start text-xxl-start mb-16 fs-xxl-24 text-nautral-white">完成列印後,移除支撐結構,使用工具打磨和拋光表面,以提高產品的外觀和品質。若有需求,可進行上色或塗層處理。最後,將多個部件組裝成完整的成品。</p>
                                </ol>
                            </div>
                            </div>
                        </div>

                        <div ref={main01SmRef} className="qP-main1" id="qP-main1-sm">
                            <div className="content qP-main1-bg w-100 bg-nautral-black py-48">
                            <div className="qP-main1-title-sm-box mb-32">
                                <h3 className="fs-32 fw-900 lh-15 text-primary3">設計需求介紹</h3>
                            </div>
                            <table className="table qP-main1-table-set-sm w-100 border-0 fs-16 align-middle mb-32">
                                <tbody>
                                <tr>
                                    <td className="qP-main1-table-td-set-sm">示意圖</td>
                                    <td className="qP-main1-table-td-set2-sm">
                                        <img className="border border-primary3" src={qpMain1SmImg1} alt="qP-main1-sm-img1" />
                                    </td>
                                </tr>
                                <tr>
                                    <td className="qP-main1-table-td-set-sm">3D列印設計需求</td>
                                    <td className="qP-main1-table-td-set2-sm">支撐設計</td>
                                </tr>
                                <tr>
                                    <td className="qP-main1-table-td-set-sm">作品大小</td>
                                    <td className="qP-main1-table-td-set2-sm">
                                        <span className="me-12">
                                            80以下
                                        </span>
                                        <span>
                                            80以下
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="qP-main1-table-td-set-sm">整體厚度(mm)</td>
                                    <td className="qP-main1-table-td-set2-sm">
                                        <span className="me-12">
                                            1.2
                                        </span>
                                        <span>
                                            1.2
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="qP-main1-table-td-set-sm">材質</td>
                                    <td className="qP-main1-table-td-set2-sm">
                                        <span className="me-12">
                                            PLA白
                                        </span>
                                        <span>
                                            PLA透明
                                        </span>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                            <table className="table qP-main1-table-set-sm fs-16 align-middle">
                                <tbody>
                                <tr>
                                    <td className="qP-main1-table-td-set-sm">示意圖</td>
                                    <td className="qP-main1-table-td-set2-sm">
                                        <img className="border border-primary3" src={qpMain1SmImg2} alt="qP-main1-sm-img2" />
                                    </td>
                                </tr>
                                <tr>
                                    <td className="qP-main1-table-td-set-sm">3D列印設計需求</td>
                                    <td className="qP-main1-table-td-set2-sm">支撐設計</td>
                                </tr>
                                <tr>
                                    <td className="qP-main1-table-td-set-sm">作品大小</td>
                                    <td className="qP-main1-table-td-set2-sm">
                                        <span className="me-12">
                                            80以下
                                        </span>
                                        <span>
                                            80以下
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="qP-main1-table-td-set-sm">整體厚度(mm)</td>
                                    <td className="qP-main1-table-td-set2-sm">
                                        <span className="me-12">
                                            1.2
                                        </span>
                                        <span>
                                            1.2
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="qP-main1-table-td-set-sm">材質</td>
                                    <td className="qP-main1-table-td-set2-sm">
                                        <span className="me-12">
                                            PLA白
                                        </span>
                                        <span>
                                            PLA透明
                                        </span>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                            </div>
                        </div>

                        <div ref={main02SmRef} className="qP-main2" id="qP-main2-sm">
                            <div className="content qP-main2-bg w-100 bg-nautral-black py-48">
                                
                            <div className="qP-main2-title-sm-box mb-32">
                                <h3 className="fs-32 fw-900 text-primary3">運費說明</h3>
                            </div>
                            
                            <div className="qP-main2-sm-content d-flex flex-column row-gap-16">
                                <div className="qP-main2-sm-item1">
                                <div className="qP-main2-sm-item1-set qP-main2-box d-flex align-items-center">
                                    <div className="qP-main2-sm-item1-img-box py-18 px-16">
                                        <img src={qpMain2SmImg1} alt="qP-main2-sm-img1" />
                                    </div>
                                    <div className="qP-main2-sm-item1-content-box d-flex flex-column row-gap-4 py-8">
                                        <div className="qP-main2-sm-item-title-box">
                                        <h5 className="fs-24 fw-900 lh-15 text-primary3">店到店</h5>
                                        </div>
                                        <div className="qP-main2-sm-item-text-box">
                                        <p className="fs-12 fw-500 lh-20 text-nautral-white">固定運費$60，約2-3個工作天到達。</p>
                                        </div>
                                    </div>
                                </div>
                                </div>
                                <div className="qP-main2-sm-item2">
                                <div className="qP-main2-sm-item2-set qP-main2-box d-flex align-items-center">
                                    <div className="qP-main2-sm-item2-img-box py-18 px-16">
                                        <img src={qpMain2SmImg2}alt="qP-main2-sm-img2" />
                                    </div>
                                    <div className="qP-main2-sm-item1-content-box d-flex flex-column row-gap-4 py-8">
                                        <div className="qP-main2-sm-item-title-box">
                                        <h5 className="fs-24 fw-900 lh-15 text-primary3">郵局</h5>
                                        </div>
                                        <div className="qP-main2-sm-item-text-box">
                                        <p className="fs-12 fw-500 lh-20 text-nautral-white">運費$80，偏遠地區可能需延遲1-2天。</p>
                                        </div>
                                    </div>
                                </div>
                                </div>
                                <div className="qP-main2-sm-item3">
                                <div className="qP-main2-sm-item3-set qP-main2-box d-flex align-items-center">
                                    <div className="qP-main2-sm-item3-img-box py-18 px-16">
                                        <img src={qpMain2SmImg3} alt="qP-main2-sm-img3" />
                                    </div>
                                    <div className="qP-main2-sm-item3-content-box d-flex flex-column row-gap-4 py-8">
                                        <div className="qP-main2-sm-item-title-box">
                                        <h5 className="fs-24 fw-900 lh-15 text-primary3">宅配</h5>
                                        </div>
                                        <div className="qP-main2-sm-item-text-box">
                                        <p className="fs-12 fw-500 lh-20 text-nautral-white">運費$120，當天寄送，隔天到貨。</p>
                                        </div>
                                    </div>
                                </div>
                                </div>
                                <div className="qP-main2-sm-item4">
                                <div className="qP-main2-sm-item4-set qP-main2-box d-flex align-items-center">
                                    <div className="qP-main2-sm-item4-img-box py-18 px-16">
                                        <img src={qpMain2SmImg4} alt="qP-main2-sm-img4" />
                                    </div>
                                    <div className="qP-main2-sm-item4-content-box d-flex flex-column row-gap-4 py-8">
                                        <div className="qP-main2-sm-item-title-box">
                                        <h5 className="fs-24 fw-900 lh-15 text-primary3">自取</h5>
                                        </div>
                                        <div className="qP-main2-sm-item-text-box">
                                        <p className="fs-12 fw-500 lh-20 text-nautral-white">免運費，請按照預約時間至門市領取。</p>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>

                            </div>
                        </div>

                        <div ref={main03SmRef} className="qP-main3 w-100 bg-nautral-black py-64" id="qP-main3-sm">
                            <div className="content w-100 bg-nautral-black py-64">
                                <div className="qP-main2-title-sm-box mb-32">
                                    <h3 className="fs-32 fw-900 text-primary3">常見問題</h3>
                                </div>
                                
                                <div className="qP-main3-sm-content d-flex flex-column row-gap-16">
                                    <Accordion alwaysOpen defaultActiveKey="0" className="w-100 d-flex flex-column gap-16">
                                        {/* 第一個手風琴項目 */}
                                        <Accordion.Item className="accordionItemSet" eventKey="0" >
                                            <Accordion.Header >如何上傳我的3D模型圖檔?</Accordion.Header>
                                            <Accordion.Body className='accordion-body-set'>
                                                將圖片拖曳至圖片上傳區
                                            </Accordion.Body>
                                        </Accordion.Item>

                                        {/* 第二個手風琴項目 */}
                                        <Accordion.Item className="accordionItemSet" eventKey="1">
                                            <Accordion.Header>支持哪些3D文件格式?</Accordion.Header>
                                            <Accordion.Body className='accordion-body-set'>
                                                支持STL、OBJ、STEP等常見3D模型文件格式
                                            </Accordion.Body>
                                        </Accordion.Item>

                                        {/* 第三個手風琴項目 */}
                                        <Accordion.Item className="accordionItemSet" eventKey="2">
                                            <Accordion.Header>如何計算3D列印的費用?</Accordion.Header>
                                            <Accordion.Body className='accordion-body-set'>
                                                費用根據材料、模型尺寸和複雜度由專人計算
                                            </Accordion.Body>
                                        </Accordion.Item>

                                        <Accordion.Item className="accordionItemSet" eventKey="3">
                                            <Accordion.Header>列印需要多長時間?</Accordion.Header>
                                            <Accordion.Body className='accordion-body-set'>
                                                一般列印時間為3-7個工作天，視複雜度而定
                                            </Accordion.Body>
                                        </Accordion.Item>

                                        <Accordion.Item className="accordionItemSet" eventKey="4">
                                            <Accordion.Header>有哪些可用的材料選擇?</Accordion.Header>
                                            <Accordion.Body className='accordion-body-set'>
                                                我們提供PLA聚乳酸、光固化樹脂等市場主力的3D列印材料
                                            </Accordion.Body>
                                        </Accordion.Item>

                                        <Accordion.Item className="accordionItemSet" eventKey="5">
                                            <Accordion.Header>如何查看列印進度?</Accordion.Header>
                                            <Accordion.Body className='accordion-body-set'>
                                                登錄會員帳戶後，可以在訂單詳情中查看列印進度
                                            </Accordion.Body>
                                        </Accordion.Item>

                                        <Accordion.Item className="accordionItemSet" eventKey="6">
                                            <Accordion.Header>是否提供設計優化建議?</Accordion.Header>
                                            <Accordion.Body className='accordion-body-set'>
                                                是的,我們提供專業的設計優化服務，以確保最佳列印效果
                                            </Accordion.Body>
                                        </Accordion.Item>

                                        <Accordion.Item className="accordionItemSet" eventKey="7">
                                            <Accordion.Header>可以取消或修改訂單嗎?</Accordion.Header>
                                            <Accordion.Body className='accordion-body-set'>
                                                需要視各別情況而定，如想知道詳細資訊歡迎與我們聯繫。
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                </div>
                            </div>
                        </div>
                                
                        </div>
                    </div>
                </div>

                <div className="container d-none d-xl-block" id="qP-main">{/*lg用*/}
                    <div className="row">
                        <div className="col-12 d-flex">
                            <div className="aside-box d-xl-flex flex-xl-column justify-content-xl-start align-items-xl-start position-sticky sticky-top">
                                    
                                    <button className="aside-navbar-btn-set" onClick={()=>{scrollToSection(main00Ref)}}>
                                        客製化流程
                                    </button>
                                    
                                    
                                    <button className="aside-navbar-btn-set" onClick={()=>{scrollToSection(main01Ref)}}>
                                        設計需求介紹
                                    </button>
                                    
                                    
                                    <button className="aside-navbar-btn-set" onClick={()=>{scrollToSection(main02Ref)}}>
                                        運費說明
                                    </button>
                                    
                                    
                                    <button className="aside-navbar-btn-set" onClick={()=>{scrollToSection(main03Ref)}}>
                                        常見問題 
                                    </button>
                                    
                            </div>
                            <div className="qP-main w-100">
                                
                                
                                <div ref={main00Ref} className="qP-main0" id="qP-main0">
                                    <div className="content content-set qP-main1-bg py-100 px-116">
                                        <div className="title-box mb-48 ">
                                        <h3 className="text-center text-primary3">客製化流程</h3>
                                        </div>
                                        <div className="title-box mb-40 ">
                                        <h3 className="text-center text-xxl-start text-nautral-white">3D列印步驟</h3>
                                        </div>
                                        <div className="text-center-start text-xxl-start mb-16 fs-xxl-24 text-nautral-white">
                                        <ol>
                                            <li>繪圖建模</li>
                                            <p className="text-center-start text-xxl-start mb-16 fs-xxl-24 text-nautral-white">使用3D繪圖軟體(如SketchUp、Blender)設計模型,確定形狀、尺寸和細節。完成後,將文件儲存為STL格式,以便後續處理。注意確認模型尺寸是否在列印機範圍內,以避免列印失敗。</p>
                                            <li>切片處理</li>
                                            <p className="text-center-start text-xxl-start mb-16 fs-xxl-24 text-nautral-white">使用切片軟體(如Cura、Slic3r)將3D模型分解成一層層的2D圖像,並設置列印參數,如速度、溫度和填充密度。生成的G-Code檔案將用於控制列印機的每一步操作。</p>
                                            <li>列印準備</li>
                                            <p className="text-center-start text-xxl-start mb-16 fs-xxl-24 text-nautral-white">在開始列印前,校正3D列印機,包括調整X、Y、Z軸和平台水平度。選擇適合的材料,如塑料、樹脂,並決定是否需要添加支撐結構,以確保列印穩定性。</p>
                                            <li>正式列印</li>
                                            <p className="text-center-start text-xxl-start mb-16 fs-xxl-24 text-nautral-white">啟動列印機進行3D列印,並定期檢查進度。確保材料供應充足,並在過程中處理可能出現的問題,如材料斷裂或列印錯誤。列印時間取決於模型的複雜度和大小。</p>
                                            <li>後製加工</li>
                                            <p className="text-center-start text-xxl-start mb-16 fs-xxl-24 text-nautral-white">完成列印後,移除支撐結構,使用工具打磨和拋光表面,以提高產品的外觀和品質。若有需求,可進行上色或塗層處理。最後,將多個部件組裝成完整的成品。</p>
                                        </ol>
                                        </div>                   
                                    </div>
                                </div>

                                <div ref={main01Ref} className="qP-main1" id="qP-main1">
                                <div className="content content-set qP-main1-bg py-100 px-40 px-xxl-116">
                                    <div className="title-box mb-48 ">
                                    <h3 className="text-center text-primary3">設計需求介紹</h3>
                                    </div>
                                    <div className="table-box">
                                    <div className="table-row1-box d-flex">
                                        <div >示意圖</div>
                                        <div >3D列印設計需求</div>
                                        <div >作品大小</div>
                                        <div >整體厚度(mm)</div>
                                        <div >材質</div>
                                    </div>
                                    <div className="table-row2-box table-row-bg d-flex">
                                        <div className="py-24">
                                        <img className="border border-primary3" src={qpMain1Img1} alt="qP-main1-img1" />
                                        </div>
                                        <div>壁厚大小</div>
                                        <div className="d-flex flex-column row-gap-12">
                                        <div className="px-0 py-0">80以下</div>
                                        <div className="px-0 py-0">80以上</div>
                                        </div>
                                        <div className="d-flex flex-column px-0 row-gap-12">
                                        <div className="px-0 py-0">0.8以下</div>
                                        <div className="px-0 py-0">1.2以上</div>
                                        </div>
                                        <div></div>
                                    </div>
                                    <div className="table-row2-box table-row-bg d-flex">
                                        <div className="py-24">
                                        <img className="border border-primary3" src={qpMain1Img2} alt="qP-main1-img2" />
                                        </div>
                                        <div>支撐設計</div>
                                        <div></div>
                                        <div className="d-flex flex-column row-gap-12">
                                        <div className="px-0 py-0">1.2</div>
                                        <div className="px-0 py-0">1.5</div>
                                        </div>
                                        <div className="d-flex flex-column row-gap-12">
                                        <div className="px-0 py-0">PLA白</div>
                                        <div className="px-0 py-0">PLA白</div>
                                        </div>
                                    </div>
                                    
                                    </div>
                                </div>
                                </div>

                                <div ref={main02Ref} className="qP-main2" id="qP-main2">
                                    <div className="content content-set py-100 px-116 ms-auto">
                                        <div className="qP-main2-title-box mb-48 ">
                                        <h3 className="text-center fs-32 fw-900 text-primary3">運費說明</h3>
                                        </div>
                                        <div className="qP-main2-content d-flex flex-column row-gap-56">
                                            <div className="qP-main2-item1">
                                            <div className="qP-main2-item1-set qP-main2-box d-flex align-items-center">
                                                <div className="qP-main2-item1-img-box py-12 px-24">
                                                    <img src={qpMain2Img1} alt="qP-main2-img1" />
                                                </div>
                                                <div className="qP-main2-item1-content-box d-flex flex-column row-gap-8 py-22 ps-12">
                                                    <div className="qP-main2-item-title-box">
                                                    <h5 className="fs-32 fw-700 text-primary3">店到店</h5>
                                                    </div>
                                                    <div className="qP-main2-item-text-box">
                                                    <p className="fs-16 fw-500 text-nautral-white">固定運費$60，約2-3個工作天到達。</p>
                                                    </div>
                                                </div>
                                            </div>
                                            </div>
                                            <div className="qP-main2-item2">
                                            <div className="qP-main2-item2-set qP-main2-box d-flex align-items-center">
                                                <div className="qP-main2-item2-img-box py-12 px-24">
                                                    <img src={qpMain2Img2} alt="qP-main2-img2" />
                                                </div>
                                                <div className="qP-main2-item1-content-box d-flex flex-column row-gap-8 py-22 ps-12">
                                                    <div className="qP-main2-item-title-box">
                                                    <h5 className="fs-32 fw-700 text-primary3">郵局</h5>
                                                    </div>
                                                    <div className="qP-main2-item-text-box">
                                                    <p className="fs-16 fw-500 text-nautral-white">運費$80，偏遠地區可能需延遲1-2天。</p>
                                                    </div>
                                                </div>
                                            </div>
                                            </div>
                                            <div className="qP-main2-item3">
                                            <div className="qP-main2-item3-set qP-main2-box d-flex align-items-center">
                                                <div className="qP-main2-item3-img-box py-12 px-24">
                                                    <img src={qpMain2Img3} alt="qP-main2-img3" />
                                                </div>
                                                <div className="qP-main2-item3-content-box d-flex flex-column row-gap-8 py-22 ps-12">
                                                    <div className="qP-main2-item-title-box">
                                                    <h5 className="fs-32 fw-700 text-primary3">宅配</h5>
                                                    </div>
                                                    <div className="qP-main2-item-text-box">
                                                    <p className="fs-16 fw-500 text-nautral-white">運費$120，當天寄送，隔天到貨。</p>
                                                    </div>
                                                </div>
                                            </div>
                                            </div>
                                            <div className="qP-main2-item4">
                                            <div className="qP-main2-item4-set qP-main2-box d-flex align-items-center">
                                                <div className="qP-main2-item4-img-box py-12 px-24">
                                                    <img src={qpMain2Img4} alt="qP-main2-img4" />
                                                </div>
                                                <div className="qP-main2-item4-content-box d-flex flex-column row-gap-8 py-22 ps-12">
                                                    <div className="qP-main2-item-title-box">
                                                    <h5 className="fs-32 fw-700 text-primary3">自取</h5>
                                                    </div>
                                                    <div className="qP-main2-item-text-box">
                                                    <p className="fs-16 fw-500 text-nautral-white">免運費，請按照預約時間至門市領取。</p>
                                                    </div>
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> 
                                
                                <div ref={main03Ref} className="qP-main3 d-none d-xl-block" id="qP-main3">
                                    <div className="content content-set qP-main3-bg py-144 px-116 ms-auto">
                                        <div className="title-box mb-48 ">
                                        <h3 className="text-center fs-32 fw-900 text-primary3">常見問題</h3>
                                        </div>
                                        <div className="qP-main3-content d-flex flex-column row-gap-40">
                                            <Accordion alwaysOpen defaultActiveKey="0" className="w-100 d-flex flex-column gap-40" >
                                                {/* 第一個手風琴項目 */}
                                                <Accordion.Item className="accordionItemSet" eventKey="0" >
                                                    <Accordion.Header >如何上傳我的3D模型圖檔?</Accordion.Header>
                                                    <Accordion.Body className='accordion-body-set'>
                                                        將圖片拖曳至圖片上傳區
                                                    </Accordion.Body>
                                                </Accordion.Item>

                                                {/* 第二個手風琴項目 */}
                                                <Accordion.Item className="accordionItemSet" eventKey="1">
                                                    <Accordion.Header>支持哪些3D文件格式?</Accordion.Header>
                                                    <Accordion.Body className='accordion-body-set'>
                                                        支持STL、OBJ、STEP等常見3D模型文件格式
                                                    </Accordion.Body>
                                                </Accordion.Item>

                                                {/* 第三個手風琴項目 */}
                                                <Accordion.Item className="accordionItemSet" eventKey="2">
                                                    <Accordion.Header>如何計算3D列印的費用?</Accordion.Header>
                                                    <Accordion.Body className='accordion-body-set'>
                                                        費用根據材料、模型尺寸和複雜度由專人計算
                                                    </Accordion.Body>
                                                </Accordion.Item>

                                                <Accordion.Item className="accordionItemSet" eventKey="3">
                                                    <Accordion.Header>列印需要多長時間?</Accordion.Header>
                                                    <Accordion.Body className='accordion-body-set'>
                                                        一般列印時間為3-7個工作天，視複雜度而定
                                                    </Accordion.Body>
                                                </Accordion.Item>

                                                <Accordion.Item className="accordionItemSet" eventKey="4">
                                                    <Accordion.Header>有哪些可用的材料選擇?</Accordion.Header>
                                                    <Accordion.Body className='accordion-body-set'>
                                                        我們提供PLA聚乳酸、光固化樹脂等市場主力的3D列印材料
                                                    </Accordion.Body>
                                                </Accordion.Item>

                                                <Accordion.Item className="accordionItemSet" eventKey="5">
                                                    <Accordion.Header>如何查看列印進度?</Accordion.Header>
                                                    <Accordion.Body className='accordion-body-set'>
                                                        登錄會員帳戶後，可以在訂單詳情中查看列印進度
                                                    </Accordion.Body>
                                                </Accordion.Item>

                                                <Accordion.Item className="accordionItemSet" eventKey="6">
                                                    <Accordion.Header>是否提供設計優化建議?</Accordion.Header>
                                                    <Accordion.Body className='accordion-body-set'>
                                                        是的,我們提供專業的設計優化服務，以確保最佳列印效果
                                                    </Accordion.Body>
                                                </Accordion.Item>

                                                <Accordion.Item className="accordionItemSet" eventKey="7">
                                                    <Accordion.Header>可以取消或修改訂單嗎?</Accordion.Header>
                                                    <Accordion.Body className='accordion-body-set'>
                                                        需要視各別情況而定，如想知道詳細資訊歡迎與我們聯繫。
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                            </Accordion>
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
export default QaPage;