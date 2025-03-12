
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

                        <div className="qP-aside-btn-sm-box d-flex">
                            <div><a className="aside-navbar-btn-set-sm h-100" href="#qP-main0-sm">客製化流程</a></div>
                            <div><a className="aside-navbar-btn-set-sm px-4 h-100" href="#qP-main1-sm">設計需求介紹</a></div>
                            <div><a className="aside-navbar-btn-set-sm h-100" href="#qP-main2-sm">運費說明</a></div>
                            <div><a className="aside-navbar-btn-set-sm h-100" href="#qP-main3-sm">常見問題</a></div>
                        </div>

                        <div className="qP-main0" id="qP-main0-sm">
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

                        <div className="qP-main1" id="qP-main1-sm">
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

                        <div className="qP-main2" id="qP-main2-sm">
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

                        <div className="qP-main3 w-100 bg-nautral-black py-64" id="qP-main3-sm">
                            <div className="content w-100 bg-nautral-black py-64">
                                <div className="qP-main2-title-sm-box mb-32">
                                    <h3 className="fs-32 fw-900 text-primary3">常見問題</h3>
                                </div>
                                
                                <div className="qP-main3-sm-content d-flex flex-column row-gap-16">
                                    <div className="qP-main2-sm-item1">
                                    <div className="qP-main3-accordion-btn">
                                        <div className="accordion accordion-flush" id="accordionExample1">{/*最外層*/}
                                            {/*accordionExample為外層獨立id 與內層 data-bs-parent="#accordionExample" 為對應關係*/}
                                            {/*accordion-flush為樣式 將外框的邊線給移除*/}
                                            <div className="accordion-item bg-transparent">{/*主體1*/}
                                                <h5 className="accordion-header" id="headingOne">{/*標題列*/}
                                                    <button className="accordion-button01 accordion-btn-sm-set fs-24 fw-700 lh-12 py-16 px-16 d-flex justify-content-between align-items-center" 
                                                            type="button" 
                                                            data-bs-toggle="collapse" 
                                                            data-bs-target="#collapseOne1" 
                                                            aria-expanded="true" 
                                                            aria-controls="collapseOne1">
                                                            如何上傳我的3D模型圖檔?
                                                            {/*className="accordion-button01 外觀設定設定在此處*/}
                                                            {/*data-bs-toggle="collapse" 為功能種類 在這邊的功能為收合觸發*/}
                                                            {/*data-bs-target="#collapseOne" 定義目標 目標為內層 id="collapseOne" */}
                                                    </button>
                                                </h5>
                                                <div  id="collapseOne1" 
                                                    className="accordion-collapse collapse show"   
                                                    aria-labelledby="headingOne" 
                                                    data-bs-parent="#accordionExample1">
                                                    {/*accordion-collapse為收合樣式*/}
                                                    {/*collapse show為展開樣式*/}
                                                    {/*id="collapseOne"為內層獨立id且唯一的*/}
                                                    {/*data-bs-parent="#accordionExample" 與外層 accordionExample 為對應關係*/}
                                                    <div className="accordion-body-set fs-16 fw-500 px-16 pb-16 text-nautral-white">
                                                        將圖片拖曳至圖片上傳區
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="qP-main2-sm-item2">
                                    <div className="qP-main3-accordion-btn">
                                        <div className="accordion accordion-flush" id="accordionExample2">{/*最外層*/}
                                            {/*accordionExample為外層獨立id 與內層 data-bs-parent="#accordionExample" 為對應關係*/}
                                            {/*accordion-flush為樣式 將外框的邊線給移除*/}
                                            <div className="accordion-item bg-transparent">{/*主體1*/}
                                                <h5 className="accordion-header" id="headingOne">{/*標題列*/}
                                                    <button className="accordion-button01 accordion-btn-sm-set fs-24 fw-700 lh-12 py-16 px-16 d-flex justify-content-between align-items-center collapsed" 
                                                            type="button" 
                                                            data-bs-toggle="collapse" 
                                                            data-bs-target="#collapseOne2" 
                                                            aria-expanded="true" 
                                                            aria-controls="collapseOne2">
                                                            支持哪些3D文件格式?
                                                            {/*className="accordion-button01 外觀設定設定在此處*/}
                                                            {/*data-bs-toggle="collapse" 為功能種類 在這邊的功能為收合觸發*/}
                                                            {/*data-bs-target="#collapseOne" 定義目標 目標為內層 id="collapseOne" */}
                                                    </button>
                                                </h5>
                                                <div  id="collapseOne2" 
                                                    className="accordion-collapse collapse"   
                                                    aria-labelledby="headingOne" 
                                                    data-bs-parent="#accordionExample2">
                                                    {/*accordion-collapse為收合樣式*/}
                                                    {/*collapse show為展開樣式*/}
                                                    {/*id="collapseOne"為內層獨立id且唯一的*/}
                                                    {/*data-bs-parent="#accordionExample" 與外層 accordionExample 為對應關係*/}
                                                    <div className="accordion-body-set fs-16 fw-500 px-16 pb-16 text-nautral-white">
                                                        支持STL、OBJ、STEP等常見3D模型文件格式
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="qP-main2-sm-item3">
                                    <div className="qP-main3-accordion-btn">
                                        <div className="accordion accordion-flush" id="accordionExample3">{/*最外層*/}
                                            {/*accordionExample為外層獨立id 與內層 data-bs-parent="#accordionExample" 為對應關係*/}
                                            {/*accordion-flush為樣式 將外框的邊線給移除*/}
                                            <div className="accordion-item bg-transparent">{/*主體1*/}
                                                <h5 className="accordion-header" id="headingOne">{/*標題列*/}
                                                    <button className="accordion-button01 accordion-btn-sm-set fs-24 fw-700 lh-12 py-16 px-16 d-flex justify-content-between align-items-center collapsed" 
                                                            type="button" 
                                                            data-bs-toggle="collapse" 
                                                            data-bs-target="#collapseOne3" 
                                                            aria-expanded="true" 
                                                            aria-controls="collapseOne3">
                                                            如何計算3D列印的費用?
                                                            {/*className="accordion-button01 外觀設定設定在此處*/}
                                                            {/*data-bs-toggle="collapse" 為功能種類 在這邊的功能為收合觸發*/}
                                                            {/*data-bs-target="#collapseOne" 定義目標 目標為內層 id="collapseOne" */}
                                                    </button>
                                                </h5>
                                                <div  id="collapseOne3" 
                                                    className="accordion-collapse collapse"   
                                                    aria-labelledby="headingOne" 
                                                    data-bs-parent="#accordionExample3">
                                                    {/*accordion-collapse為收合樣式*/}
                                                    {/*collapse show為展開樣式*/}
                                                    {/*id="collapseOne"為內層獨立id且唯一的*/}
                                                    {/*data-bs-parent="#accordionExample" 與外層 accordionExample 為對應關係*/}
                                                    <div className="accordion-body-set fs-16 fw-500 px-16 pb-16 text-nautral-white">
                                                        費用根據材料、模型尺寸和複雜度由專人計算
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="qP-main2-sm-item4">
                                    <div className="qP-main3-accordion-btn">
                                        <div className="accordion accordion-flush" id="accordionExample4">{/*最外層*/}
                                            {/*accordionExample為外層獨立id 與內層 data-bs-parent="#accordionExample" 為對應關係*/}
                                            {/*accordion-flush為樣式 將外框的邊線給移除*/}
                                            <div className="accordion-item bg-transparent">{/*主體1*/}
                                                <h5 className="accordion-header" id="headingOne">{/*標題列*/}
                                                    <button className="accordion-button01 accordion-btn-sm-set fs-24 fw-700 lh-12 py-16 px-16 d-flex justify-content-between align-items-center collapsed" 
                                                            type="button" 
                                                            data-bs-toggle="collapse" 
                                                            data-bs-target="#collapseOne4" 
                                                            aria-expanded="true" 
                                                            aria-controls="collapseOne4">
                                                            列印需要多長時間?
                                                            {/*className="accordion-button01 外觀設定設定在此處*/}
                                                            {/*data-bs-toggle="collapse" 為功能種類 在這邊的功能為收合觸發*/}
                                                            {/*data-bs-target="#collapseOne" 定義目標 目標為內層 id="collapseOne" */}
                                                    </button>
                                                </h5>
                                                <div  id="collapseOne4" 
                                                    className="accordion-collapse collapse"   
                                                    aria-labelledby="headingOne" 
                                                    data-bs-parent="#accordionExample4">
                                                    {/*accordion-collapse為收合樣式*/}
                                                    {/*collapse show為展開樣式*/}
                                                    {/*id="collapseOne"為內層獨立id且唯一的*/}
                                                    {/*data-bs-parent="#accordionExample" 與外層 accordionExample 為對應關係*/}
                                                    <div className="accordion-body-set fs-16 fw-500 px-16 pb-16 text-nautral-white">
                                                        一般列印時間為3-7個工作天，視複雜度而定
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="qP-main2-sm-item5">
                                    <div className="qP-main3-accordion-btn">
                                        <div className="accordion accordion-flush" id="accordionExample5">{/*最外層*/}
                                            {/*accordionExample為外層獨立id 與內層 data-bs-parent="#accordionExample" 為對應關係*/}
                                            {/*accordion-flush為樣式 將外框的邊線給移除*/}
                                            <div className="accordion-item bg-transparent">{/*主體1*/}
                                                <h5 className="accordion-header" id="headingOne">{/*標題列*/}
                                                    <button className="accordion-button01 accordion-btn-sm-set fs-24 fw-700 lh-12 py-16 px-16 d-flex justify-content-between align-items-center collapsed" 
                                                            type="button" 
                                                            data-bs-toggle="collapse" 
                                                            data-bs-target="#collapseOne5" 
                                                            aria-expanded="true" 
                                                            aria-controls="collapseOne5">
                                                                有哪些可用的材料選擇?
                                                            {/*className="accordion-button01 外觀設定設定在此處*/}
                                                            {/*data-bs-toggle="collapse" 為功能種類 在這邊的功能為收合觸發*/}
                                                            {/*data-bs-target="#collapseOne" 定義目標 目標為內層 id="collapseOne" */}
                                                    </button>
                                                </h5>
                                                <div  id="collapseOne5" 
                                                    className="accordion-collapse collapse"   
                                                    aria-labelledby="headingOne" 
                                                    data-bs-parent="#accordionExample5">
                                                    {/*accordion-collapse為收合樣式*/}
                                                    {/*collapse show為展開樣式*/}
                                                    {/*id="collapseOne"為內層獨立id且唯一的*/}
                                                    {/*data-bs-parent="#accordionExample" 與外層 accordionExample 為對應關係*/}
                                                    <div className="accordion-body-set fs-16 fw-500 px-16 pb-16 text-nautral-white">
                                                        我們提供PLA聚乳酸、光固化樹脂等市場主力的3D列印材料
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="qP-main2-sm-item6">
                                    <div className="qP-main3-accordion-btn">
                                        <div className="accordion accordion-flush" id="accordionExample6">{/*最外層*/}
                                            {/*accordionExample為外層獨立id 與內層 data-bs-parent="#accordionExample" 為對應關係*/}
                                            {/*accordion-flush為樣式 將外框的邊線給移除*/}
                                            <div className="accordion-item bg-transparent">{/*主體1*/}
                                                <h5 className="accordion-header" id="headingOne">{/*標題列*/}
                                                    <button className="accordion-button01 accordion-btn-sm-set fs-24 fw-700 lh-12 py-16 px-16 d-flex justify-content-between align-items-center collapsed" 
                                                            type="button" 
                                                            data-bs-toggle="collapse" 
                                                            data-bs-target="#collapseOne6" 
                                                            aria-expanded="true" 
                                                            aria-controls="collapseOne6">
                                                                如何查看列印進度?
                                                            {/*className="accordion-button01 外觀設定設定在此處*/}
                                                            {/*data-bs-toggle="collapse" 為功能種類 在這邊的功能為收合觸發*/}
                                                            {/*data-bs-target="#collapseOne" 定義目標 目標為內層 id="collapseOne" */}
                                                    </button>
                                                </h5>
                                                <div  id="collapseOne6" 
                                                    className="accordion-collapse collapse"   
                                                    aria-labelledby="headingOne" 
                                                    data-bs-parent="#accordionExample6">
                                                    {/*accordion-collapse為收合樣式*/}
                                                    {/*collapse show為展開樣式*/}
                                                    {/*id="collapseOne"為內層獨立id且唯一的*/}
                                                    {/*data-bs-parent="#accordionExample" 與外層 accordionExample 為對應關係*/}
                                                    <div className="accordion-body-set fs-16 fw-500 px-16 pb-16 text-nautral-white">
                                                        登錄會員帳戶後，可以在訂單詳情中查看列印進度
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="qP-main2-sm-item7">
                                    <div className="qP-main3-accordion-btn">
                                        <div className="accordion accordion-flush" id="accordionExample7">{/*最外層*/}
                                            {/*accordionExample為外層獨立id 與內層 data-bs-parent="#accordionExample" 為對應關係*/}
                                            {/*accordion-flush為樣式 將外框的邊線給移除*/}
                                            <div className="accordion-item bg-transparent">{/*主體1*/}
                                                <h5 className="accordion-header" id="headingOne">{/*標題列*/}
                                                    <button className="accordion-button01 accordion-btn-sm-set fs-24 fw-700 lh-12 py-16 px-16 d-flex justify-content-between align-items-center collapsed" 
                                                            type="button" 
                                                            data-bs-toggle="collapse" 
                                                            data-bs-target="#collapseOne7" 
                                                            aria-expanded="true" 
                                                            aria-controls="collapseOne7">
                                                                是否提供設計優化建議?
                                                            {/*className="accordion-button01 外觀設定設定在此處*/}
                                                            {/*data-bs-toggle="collapse" 為功能種類 在這邊的功能為收合觸發*/}
                                                            {/*data-bs-target="#collapseOne" 定義目標 目標為內層 id="collapseOne" */}
                                                    </button>
                                                </h5>
                                                <div  id="collapseOne7" 
                                                    className="accordion-collapse collapse"   
                                                    aria-labelledby="headingOne" 
                                                    data-bs-parent="#accordionExample7">
                                                    {/*accordion-collapse為收合樣式*/}
                                                    {/*collapse show為展開樣式*/}
                                                    {/*id="collapseOne"為內層獨立id且唯一的*/}
                                                    {/*data-bs-parent="#accordionExample" 與外層 accordionExample 為對應關係*/}
                                                    <div className="accordion-body-set fs-16 fw-500 px-16 pb-16 text-nautral-white">
                                                        是的,我們提供專業的設計優化服務，以確保最佳列印效果
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="qP-main2-sm-item8">
                                    <div className="qP-main3-accordion-btn">
                                        <div className="accordion accordion-flush" id="accordionExample8">{/*最外層*/}
                                            {/*accordionExample為外層獨立id 與內層 data-bs-parent="#accordionExample" 為對應關係*/}
                                            {/*accordion-flush為樣式 將外框的邊線給移除*/}
                                            <div className="accordion-item bg-transparent">{/*主體1*/}
                                                <h5 className="accordion-header" id="headingOne">{/*標題列*/}
                                                    <button className="accordion-button01 accordion-btn-sm-set fs-24 fw-700 lh-12 py-16 px-16 d-flex justify-content-between align-items-center collapsed" 
                                                            type="button" 
                                                            data-bs-toggle="collapse" 
                                                            data-bs-target="#collapseOne8" 
                                                            aria-expanded="true" 
                                                            aria-controls="collapseOne8">
                                                                可以取消或修改訂單嗎?
                                                            {/*className="accordion-button01 外觀設定設定在此處*/}
                                                            {/*data-bs-toggle="collapse" 為功能種類 在這邊的功能為收合觸發*/}
                                                            {/*data-bs-target="#collapseOne" 定義目標 目標為內層 id="collapseOne" */}
                                                    </button>
                                                </h5>
                                                <div  id="collapseOne8" 
                                                    className="accordion-collapse collapse"   
                                                    aria-labelledby="headingOne" 
                                                    data-bs-parent="#accordionExample8">
                                                    {/*accordion-collapse為收合樣式*/}
                                                    {/*collapse show為展開樣式*/}
                                                    {/*id="collapseOne"為內層獨立id且唯一的*/}
                                                    {/*data-bs-parent="#accordionExample" 與外層 accordionExample 為對應關係*/}
                                                    <div className="accordion-body-set fs-16 fw-500 px-16 pb-16 text-nautral-white">
                                                        需要視各別情況而定，如想知道詳細資訊歡迎與我們聯繫。
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
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
                                    
                                    <a className="aside-navbar-btn-set" href="#qP-main0">
                                        客製化流程
                                    </a>
                                    
                                    
                                    <a className="aside-navbar-btn-set" href="#qP-main1">
                                        設計需求介紹
                                    </a>
                                    
                                    
                                    <a className="aside-navbar-btn-set" href="#qP-main2">
                                        運費說明
                                    </a>
                                    
                                    
                                    <a className="aside-navbar-btn-set" href="#qP-main3">
                                        常見問題 
                                    </a>
                                    
                            </div>
                            <div className="qP-main w-100">
                                
                                
                                <div className="qP-main0" id="qP-main0">
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

                                <div className="qP-main1" id="qP-main1">
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

                                <div className="qP-main2" id="qP-main2">
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
                                
                                <div className="qP-main3 d-none d-xl-block" id="qP-main3">
                                    <div className="content content-set qP-main3-bg py-144 px-116 ms-auto">
                                        <div className="title-box mb-48 ">
                                        <h3 className="text-center fs-32 fw-900 text-primary3">常見問題</h3>
                                        </div>
                                        <div className="qP-main3-content d-flex flex-column row-gap-40">
                                        <div className="qP-main3-item1">
                                            <div className="qP-main3-accordion-btn">
                                            <div className="accordion accordion-flush" id="accordionExample1">{/*最外層*/}
                                                {/*accordionExample為外層獨立id 與內層 data-bs-parent="#accordionExample" 為對應關係*/}
                                                {/*accordion-flush為樣式 將外框的邊線給移除*/}
                                                <div className="accordion-item bg-transparent">{/*主體1*/}
                                                    <h5 className="accordion-header" id="headingOne">{/*標題列*/}
                                                        <button className="accordion-button01 accordion-btn-set fs-32 fw-700 lh-15 py-36 px-48 d-flex justify-content-between align-items-center" 
                                                                type="button" 
                                                                data-bs-toggle="collapse" 
                                                                data-bs-target="#collapseOne1" 
                                                                aria-expanded="true" 
                                                                aria-controls="collapseOne1">
                                                                    如何上傳我的3D模型圖檔?
                                                                {/*className="accordion-button01 外觀設定設定在此處*/}
                                                                {/*data-bs-toggle="collapse" 為功能種類 在這邊的功能為收合觸發*/}
                                                                {/*data-bs-target="#collapseOne" 定義目標 目標為內層 id="collapseOne" */}
                                                        </button>
                                                    </h5>
                                                    <div  id="collapseOne1" 
                                                            className="accordion-collapse collapse show"   
                                                            aria-labelledby="headingOne" 
                                                            data-bs-parent="#accordionExample1">
                                                            {/*accordion-collapse為收合樣式*/}
                                                            {/*collapse show為展開樣式*/}
                                                            {/*id="collapseOne"為內層獨立id且唯一的*/}
                                                            {/*data-bs-parent="#accordionExample" 與外層 accordionExample 為對應關係*/}
                                                            <div className="accordion-body-set fs-24 fw-700 px-48 pb-36 text-nautral-white">
                                                            將圖片拖曳至圖片上傳區
                                                            </div>
                                                    </div>
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                        <div className="qP-main3-item2">
                                            <div className="qP-main3-accordion-btn">
                                            <div className="accordion accordion-flush" id="accordionExample2">{/*最外層*/}
                                                {/*accordionExample為外層獨立id 與內層 data-bs-parent="#accordionExample" 為對應關係*/}
                                                {/*accordion-flush為樣式 將外框的邊線給移除*/}
                                                <div className="accordion-item bg-transparent">{/*主體1*/}
                                                    <h5 className="accordion-header" id="headingOne">{/*標題列*/}
                                                        <button className="accordion-button01 accordion-btn-set fs-24 fw-700 lh-15 py-36 px-48 d-flex justify-content-between align-items-center collapsed" 
                                                                type="button" 
                                                                data-bs-toggle="collapse" 
                                                                data-bs-target="#collapseOne2" 
                                                                aria-expanded="true" 
                                                                aria-controls="collapseOne2">
                                                                    支持哪些3D文件格式?
                                                                {/*className="accordion-button01 外觀設定設定在此處*/}
                                                                {/*data-bs-toggle="collapse" 為功能種類 在這邊的功能為收合觸發*/}
                                                                {/*data-bs-target="#collapseOne" 定義目標 目標為內層 id="collapseOne" */}
                                                        </button>
                                                    </h5>
                                                    <div  id="collapseOne2" 
                                                            className="accordion-collapse collapse"   
                                                            aria-labelledby="headingOne" 
                                                            data-bs-parent="#accordionExample2">
                                                            {/*accordion-collapse為收合樣式*/}
                                                            {/*collapse show為展開樣式*/}
                                                            {/*id="collapseOne"為內層獨立id且唯一的*/}
                                                            {/*data-bs-parent="#accordionExample" 與外層 accordionExample 為對應關係*/}
                                                            <div className="accordion-body-set fs-24 fw-700 px-48 pb-36 text-nautral-white">
                                                                支持STL、OBJ、STEP等常見3D模型文件格式
                                                            </div>
                                                    </div>
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                        <div className="qP-main3-item3">
                                            <div className="qP-main3-accordion-btn">
                                            <div className="accordion accordion-flush" id="accordionExample3">{/*最外層*/}
                                                {/*accordionExample為外層獨立id 與內層 data-bs-parent="#accordionExample" 為對應關係*/}
                                                {/*accordion-flush為樣式 將外框的邊線給移除*/}
                                                <div className="accordion-item bg-transparent">{/*主體1*/}
                                                    <h5 className="accordion-header" id="headingOne">{/*標題列*/}
                                                        <button className="accordion-button01 accordion-btn-set fs-24 fw-700 lh-15 py-36 px-48 d-flex justify-content-between align-items-center collapsed" 
                                                                type="button" 
                                                                data-bs-toggle="collapse" 
                                                                data-bs-target="#collapseOne3" 
                                                                aria-expanded="true" 
                                                                aria-controls="collapseOne3">
                                                                    如何計算3D列印的費用?
                                                                {/*className="accordion-button01 外觀設定設定在此處*/}
                                                                {/*data-bs-toggle="collapse" 為功能種類 在這邊的功能為收合觸發*/}
                                                                {/*data-bs-target="#collapseOne" 定義目標 目標為內層 id="collapseOne" */}
                                                        </button>
                                                    </h5>
                                                    <div  id="collapseOne3" 
                                                            className="accordion-collapse collapse"   
                                                            aria-labelledby="headingOne" 
                                                            data-bs-parent="#accordionExample3">
                                                            {/*accordion-collapse為收合樣式*/}
                                                            {/*collapse show為展開樣式*/}
                                                            {/*id="collapseOne"為內層獨立id且唯一的*/}
                                                            {/*data-bs-parent="#accordionExample" 與外層 accordionExample 為對應關係*/}
                                                            <div className="accordion-body-set fs-24 fw-700 px-48 pb-36 text-nautral-white">
                                                                費用根據材料、模型尺寸和複雜度由專人計算
                                                            </div>
                                                    </div>
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                        <div className="qP-main3-item4">
                                            <div className="qP-main3-accordion-btn">
                                            <div className="accordion accordion-flush" id="accordionExample4">{/*最外層*/}
                                                {/*accordionExample為外層獨立id 與內層 data-bs-parent="#accordionExample" 為對應關係*/}
                                                {/*accordion-flush為樣式 將外框的邊線給移除*/}
                                                <div className="accordion-item bg-transparent">{/*主體1*/}
                                                    <h5 className="accordion-header" id="headingOne">{/*標題列*/}
                                                        <button className="accordion-button01 accordion-btn-set fs-24 fw-700 lh-15 py-36 px-48 d-flex justify-content-between align-items-center collapsed" 
                                                                type="button" 
                                                                data-bs-toggle="collapse" 
                                                                data-bs-target="#collapseOne4" 
                                                                aria-expanded="true" 
                                                                aria-controls="collapseOne4">
                                                                    列印需要多長時間?
                                                                {/*className="accordion-button01 外觀設定設定在此處*/}
                                                                {/*data-bs-toggle="collapse" 為功能種類 在這邊的功能為收合觸發*/}
                                                                {/*data-bs-target="#collapseOne" 定義目標 目標為內層 id="collapseOne" */}
                                                        </button>
                                                    </h5>
                                                    <div  id="collapseOne4" 
                                                            className="accordion-collapse collapse"   
                                                            aria-labelledby="headingOne" 
                                                            data-bs-parent="#accordionExample4">
                                                            {/*accordion-collapse為收合樣式*/}
                                                            {/*collapse show為展開樣式*/}
                                                            {/*id="collapseOne"為內層獨立id且唯一的*/}
                                                            {/*data-bs-parent="#accordionExample" 與外層 accordionExample 為對應關係*/}
                                                            <div className="accordion-body-set fs-24 fw-700 px-48 pb-36 text-nautral-white">
                                                                一般列印時間為3-7個工作天，視複雜度而定
                                                            </div>
                                                    </div>
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                        <div className="qP-main3-item5">
                                            <div className="qP-main3-accordion-btn">
                                            <div className="accordion accordion-flush" id="accordionExample5">{/*最外層*/}
                                                {/*accordionExample為外層獨立id 與內層 data-bs-parent="#accordionExample" 為對應關係*/}
                                                {/*accordion-flush為樣式 將外框的邊線給移除*/}
                                                <div className="accordion-item bg-transparent">{/*主體1*/}
                                                    <h5 className="accordion-header" id="headingOne">{/*標題列*/}
                                                        <button className="accordion-button01 accordion-btn-set fs-24 fw-700 lh-15 py-36 px-48 d-flex justify-content-between align-items-center collapsed" 
                                                                type="button" 
                                                                data-bs-toggle="collapse" 
                                                                data-bs-target="#collapseOne5" 
                                                                aria-expanded="true" 
                                                                aria-controls="collapseOne5">
                                                                    有哪些可用的材料選擇?
                                                                {/*className="accordion-button01 外觀設定設定在此處*/}
                                                                {/*data-bs-toggle="collapse" 為功能種類 在這邊的功能為收合觸發*/}
                                                                {/*data-bs-target="#collapseOne" 定義目標 目標為內層 id="collapseOne" */}
                                                        </button>
                                                    </h5>
                                                    <div  id="collapseOne5" 
                                                            className="accordion-collapse collapse"   
                                                            aria-labelledby="headingOne" 
                                                            data-bs-parent="#accordionExample5">
                                                            {/*accordion-collapse為收合樣式*/}
                                                            {/*collapse show為展開樣式*/}
                                                            {/*id="collapseOne"為內層獨立id且唯一的*/}
                                                            {/*data-bs-parent="#accordionExample" 與外層 accordionExample 為對應關係*/}
                                                            <div className="accordion-body-set fs-24 fw-700 px-48 pb-36 text-nautral-white">
                                                                我們提供PLA聚乳酸、光固化樹脂等市場主力的3D列印材料
                                                            </div>
                                                    </div>
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                        <div className="qP-main3-item6">
                                            <div className="qP-main3-accordion-btn">
                                            <div className="accordion accordion-flush" id="accordionExample6">{/*最外層*/}
                                                {/*accordionExample為外層獨立id 與內層 data-bs-parent="#accordionExample" 為對應關係*/}
                                                {/*accordion-flush為樣式 將外框的邊線給移除*/}
                                                <div className="accordion-item bg-transparent">{/*主體1*/}
                                                    <h5 className="accordion-header" id="headingOne">{/*標題列*/}
                                                        <button className="accordion-button01 accordion-btn-set fs-24 fw-700 lh-15 py-36 px-48 d-flex justify-content-between align-items-center collapsed" 
                                                                type="button" 
                                                                data-bs-toggle="collapse" 
                                                                data-bs-target="#collapseOne6" 
                                                                aria-expanded="true" 
                                                                aria-controls="collapseOne6">
                                                                    如何查看列印進度?
                                                                {/*className="accordion-button01 外觀設定設定在此處*/}
                                                                {/*data-bs-toggle="collapse" 為功能種類 在這邊的功能為收合觸發*/}
                                                                {/*data-bs-target="#collapseOne" 定義目標 目標為內層 id="collapseOne" */}
                                                        </button>
                                                    </h5>
                                                    <div  id="collapseOne6" 
                                                            className="accordion-collapse collapse"   
                                                            aria-labelledby="headingOne" 
                                                            data-bs-parent="#accordionExample6">
                                                            {/*accordion-collapse為收合樣式*/}
                                                            {/*collapse show為展開樣式*/}
                                                            {/*id="collapseOne"為內層獨立id且唯一的*/}
                                                            {/*data-bs-parent="#accordionExample" 與外層 accordionExample 為對應關係*/}
                                                            <div className="accordion-body-set fs-24 fw-700 px-48 pb-36 text-nautral-white">
                                                                登錄會員帳戶後，可以在訂單詳情中查看列印進度
                                                            </div>
                                                    </div>
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                        <div className="qP-main3-item7">
                                            <div className="qP-main3-accordion-btn">
                                            <div className="accordion accordion-flush" id="accordionExample7">{/*最外層*/}
                                                {/*accordionExample為外層獨立id 與內層 data-bs-parent="#accordionExample" 為對應關係*/}
                                                {/*accordion-flush為樣式 將外框的邊線給移除*/}
                                                <div className="accordion-item bg-transparent">{/*主體1*/}
                                                    <h5 className="accordion-header" id="headingOne">{/*標題列*/}
                                                        <button className="accordion-button01 accordion-btn-set fs-24 fw-700 lh-15 py-36 px-48 d-flex justify-content-between align-items-center collapsed" 
                                                                type="button" 
                                                                data-bs-toggle="collapse" 
                                                                data-bs-target="#collapseOne7" 
                                                                aria-expanded="true" 
                                                                aria-controls="collapseOne7">
                                                                    是否提供設計優化建議?
                                                                {/*className="accordion-button01 外觀設定設定在此處*/}
                                                                {/*data-bs-toggle="collapse" 為功能種類 在這邊的功能為收合觸發*/}
                                                                {/*data-bs-target="#collapseOne" 定義目標 目標為內層 id="collapseOne" */}
                                                        </button>
                                                    </h5>
                                                    <div  id="collapseOne7" 
                                                            className="accordion-collapse collapse"   
                                                            aria-labelledby="headingOne" 
                                                            data-bs-parent="#accordionExample7">
                                                            {/*accordion-collapse為收合樣式*/}
                                                            {/*collapse show為展開樣式*/}
                                                            {/*id="collapseOne"為內層獨立id且唯一的*/}
                                                            {/*data-bs-parent="#accordionExample" 與外層 accordionExample 為對應關係*/}
                                                            <div className="accordion-body-set fs-24 fw-700 px-48 pb-36 text-nautral-white">
                                                                是的,我們提供專業的設計優化服務，以確保最佳列印效果
                                                            </div>
                                                    </div>
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                        <div className="qP-main3-item8">
                                            <div className="qP-main3-accordion-btn">
                                            <div className="accordion accordion-flush" id="accordionExample8">{/*最外層*/}
                                                {/*accordionExample為外層獨立id 與內層 data-bs-parent="#accordionExample" 為對應關係*/}
                                                {/*accordion-flush為樣式 將外框的邊線給移除*/}
                                                <div className="accordion-item bg-transparent">{/*主體1*/}
                                                    <h5 className="accordion-header" id="headingOne">{/*標題列*/}
                                                        <button className="accordion-button01 accordion-btn-set fs-24 fw-700 lh-15 py-36 px-48 d-flex justify-content-between align-items-center collapsed" 
                                                                type="button" 
                                                                data-bs-toggle="collapse" 
                                                                data-bs-target="#collapseOne8" 
                                                                aria-expanded="true" 
                                                                aria-controls="collapseOne8">
                                                                    可以取消或修改訂單嗎?
                                                                {/*className="accordion-button01 外觀設定設定在此處*/}
                                                                {/*data-bs-toggle="collapse" 為功能種類 在這邊的功能為收合觸發*/}
                                                                {/*data-bs-target="#collapseOne" 定義目標 目標為內層 id="collapseOne" */}
                                                        </button>
                                                    </h5>
                                                    <div  id="collapseOne8" 
                                                            className="accordion-collapse collapse"   
                                                            aria-labelledby="headingOne" 
                                                            data-bs-parent="#accordionExample8">
                                                            {/*accordion-collapse為收合樣式*/}
                                                            {/*collapse show為展開樣式*/}
                                                            {/*id="collapseOne"為內層獨立id且唯一的*/}
                                                            {/*data-bs-parent="#accordionExample" 與外層 accordionExample 為對應關係*/}
                                                            <div className="accordion-body-set fs-24 fw-700 px-48 pb-36 text-nautral-white">
                                                                需要視各別情況而定，如想知道詳細資訊歡迎與我們聯繫。
                                                            </div>
                                                    </div>
                                                </div>
                                            </div>
                                            </div>
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
export default QaPage;