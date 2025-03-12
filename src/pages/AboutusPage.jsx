import aboutUsMain1Img01 from "../assets/images/AboutusPage/aboutUs-main1-img01.png";
import aboutUsMain1SmImg01 from "../assets/images/AboutusPage/aboutUs-main1-sm-img01.png";

import aboutUsMain2Img01 from "../assets/images/AboutusPage/aboutUs-main2-img01.png";
import aboutUsMain2Img02 from "../assets/images/AboutusPage/aboutUs-main2-img02.png";
import aboutUsMain2Img03 from "../assets/images/AboutusPage/aboutUs-main2-img03.png";
import aboutUsMain2Img04 from "../assets/images/AboutusPage/aboutUs-main2-img04.png";
import aboutUsMain2Img05 from "../assets/images/AboutusPage/aboutUs-main2-img05.png";
import aboutUsMain2Img06 from "../assets/images/AboutusPage/aboutUs-main2-img06.png";

import aboutUsMain2SmImg01 from "../assets/images/AboutusPage/aboutUs-main2-sm-img01.png";
import aboutUsMain2SmImg02 from "../assets/images/AboutusPage/aboutUs-main2-sm-img02.png";
import aboutUsMain2SmImg03 from "../assets/images/AboutusPage/aboutUs-main2-sm-img03.png";
import aboutUsMain2SmImg04 from "../assets/images/AboutusPage/aboutUs-main2-sm-img04.png";
import aboutUsMain2SmImg05 from "../assets/images/AboutusPage/aboutUs-main2-sm-img05.png";
import aboutUsMain2SmImg06 from "../assets/images/AboutusPage/aboutUs-main2-sm-img06.png";

import aboutUsMain3Img01 from "../assets/images/AboutusPage/aboutUs-main3-img01.png";
import aboutUsMain3SmImg01 from "../assets/images/AboutusPage/aboutUs-main3-sm-img01.png";

import abusMain4ModalBtnClose from "../assets/images/AboutusPage/abus-main4-modal-btn-close.png";

function AboutusPage(){
    return(
        <>
            <div className="abus-main1 w-100 abus-main1-bg-set" id="abus-main1">
                <div className="container py-64 py-xxl-144">
                    <div className="row">
                    <div className="col-12 col-xxl-6 mb-24 mb-xxl-0">
                        <div className="abus-main1-content h-100">
                        <div className="abus-main1-article h-100 pe-xxl-80 d-flex flex-column justify-content-center align-items-center  align-items-xxl-center">
                            <div className="abus-main1-title-box w-100 mb-16 mb-xxl-72">
                            <h3 className="text-center text-xxl-start fs-xxl-64 text-primary3">關於我們</h3>
                            </div>
                            <div className="abus-main1-text-box">
                            <p className="text-center text-xxl-start mb-16 fs-xxl-24 text-nautral-white">歡迎來到Come & Buy！</p>
                            <p className="text-center text-xxl-start mb-16 fs-xxl-24 text-nautral-white">自2018年成立以來，我們專注於3D列印技術，致力於為全球客戶提供高品質、精確且客制化的列印解決方案。</p>
                            <p className="text-center text-xxl-start fs-xxl-24 text-nautral-white">我們的專業團隊擁有豐富的技術經驗，秉持著創新與卓越的精神，不斷突破技術極限，為每一位客戶實現創意與想像。</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-12 col-xxl-6">
                        <div className="abus-main1-content d-flex justify-content-center align-items-center">
                        <div className="abus-main1-img-box abus-main-img-box-set">
                            <picture>
                            <source srcSet={aboutUsMain1Img01} media="(min-width:1200px)" />
                            <img className="img-set" src={aboutUsMain1SmImg01} alt="images/aboutUs-main1-img01" />
                            </picture>  
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>

            <div className="abus-main2 w-100 abus-main2-bg-set" id="abus-main2">
                <div className="container aboutUs-main2-p-set">
                    <div className="row flex-xxl-row-reverse">
                    <div className="col-12 col-xxl-7 mb-24 mb-xxl-0">
                        <div className="abus-main2-content h-100">
                        <div className="abus-main2-article h-100 ps-xxl-26 d-flex flex-column justify-content-center align-items-center  align-items-xxl-center">
                            <div className="abus-main2-title-box w-100 mb-16 mb-xxl-72">
                            <h3 className="text-center text-xxl-start fs-xxl-64 text-primary3">公司介紹</h3>
                            </div>
                            <div className="abus-main2-text-box">
                            <p className="text-center text-xxl-start fs-xxl-24 text-nautral-white d-block d-xxl-none">3D列印服務：</p>
                            <p className="text-center text-xxl-start mb-16 fs-xxl-24 text-nautral-white d-block d-xxl-none">各類材料的3D列印,包括PLA ABS 樹脂等。適用於原型製作、小批量生產及個性化定制。</p>
                            <p className="text-center text-xxl-start mb-16 fs-xxl-24 text-nautral-white d-none d-xxl-block">3D列印服務：各類材料的3D列印,包括PLA ABS 樹脂等。適用於原型製作、小批量生產及個性化定制。</p>
                            
                            <p className="text-center text-xxl-start fs-xxl-24 text-nautral-white d-block d-xxl-none">設計服務：</p>
                            <p className="text-center text-xxl-start mb-16 fs-xxl-24 text-nautral-white d-block d-xxl-none">我們的專業設計團隊可根據客戶需求，提供3D建模和設計服務，幫助客戶實現創意構思。</p>
                            <p className="text-center text-xxl-start fs-xxl-24 text-nautral-white d-none d-xxl-block">設計服務：我們的專業設計團隊可根據客戶需求，提供3D建模和設計服務，幫助客戶實現創意構思。</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-12 col-xxl-5"> 
                        <div className="row">
                        <div className="col-4">

                            <div className="abus-main2-content d-flex flex-column row-gap-32">
                                <div className="abus-main2-img-box pt-32 pt-xxl-50">
                                <picture>
                                    <source srcSet={aboutUsMain2Img01} media="(min-width:1200px)" />
                                    <img className="img-set" src={aboutUsMain2SmImg01} alt="aboutUs-main2-img01" />
                                </picture>  
                                </div>
                                <div className="abus-main2-img-box">
                                <picture>
                                    <source srcSet={aboutUsMain2Img02} media="(min-width:1200px)" />
                                    <img className="img-set" src={aboutUsMain2SmImg02} alt="aboutUs-main2-sm-img02" />
                                </picture>  
                                </div>
                            </div>

                        </div>
                        <div className="col-4">

                            <div className="abus-main2-content d-flex flex-column row-gap-32">
                            <div className="abus-main2-img-box">
                                <picture>
                                <source srcSet={aboutUsMain2Img03} media="(min-width:1200px)" />
                                <img className="img-set" src={aboutUsMain2SmImg03} alt="aboutUs-main2-sm-img03" />
                                </picture>  
                            </div>
                            <div className="abus-main2-img-box">
                                <picture>
                                <source srcSet={aboutUsMain2Img04} media="(min-width:1200px)" />
                                <img className="img-set" src={aboutUsMain2SmImg04} alt="aboutUs-main2-sm-img04" />
                                </picture>  
                            </div>
                            </div>
                        </div>
                        <div className="col-4">

                            <div className="abus-main2-content d-flex flex-column row-gap-32">
                            <div className="abus-main2-img-box pt-32 pt-xxl-50">
                                <picture>
                                <source srcSet={aboutUsMain2Img05} media="(min-width:1200px)" />
                                <img className="img-set" src={aboutUsMain2SmImg05} />
                                </picture>  
                            </div>
                            <div className="abus-main2-img-box">
                                <picture>
                                <source srcSet={aboutUsMain2Img06} media="(min-width:1200px)" />
                                <img className="img-set" src={aboutUsMain2SmImg06} />
                                </picture>  
                            </div>
                            </div>

                        </div>
                        </div>
                        

                    </div>
                    </div>
                </div>
            </div>

            <div className="abus-main3 w-100 abus-main3-bg-set" id="abus-main3">
                <div className="container py-64 py-xxl-144">
                    <div className="row">
                    <div  className="col-12 col-xxl-8 mb-xxl-0">

                        <div className="abus-main3-content h-100">
                            <div className="abus-main3-article h-100 d-flex flex-column justify-content-center align-items-center  align-items-xxl-center">
                            <div className="abus-main3-title-box w-100 mb-48 mb-xxl-72">
                                <h3 className="text-center text-xxl-start fs-xxl-64 text-primary3">售後服務</h3>
                            </div>
                            <div className="abus-main3-text-box1 w-100 mb-48"> 
                                <p className="text-center text-xxl-start mb-32 fs-xxl-24 text-nautral-white">為保障您的權益，在收貨時請注意以下幾點 :簽收前請當面與貨運人員前進行開箱清點，產品名稱、產品數量、發貨清單。</p>
                                <p className="text-center text-xxl-start mb-32 fs-xxl-24 text-nautral-white">如存在列印問題、產品錯誤、產品短缺、產品品質等問題請立刻聯繫我們。</p>
                                <p className="text-center text-xxl-start fs-xxl-24 text-nautral-white">為了維護權益，請勿請他人簽收產品，如簽收後有疑義，後果請自行承擔。</p>
                            </div>
                            <div className="abus-main3-text-box2 w-100 mb-48"> 
                                <p className="text-center text-xxl-start mb-12 fs-xxl-24 text-primary3">如產品有問題請在1日內反應。</p>
                                <p className="text-center text-xxl-start mb-12 fs-xxl-24 text-nautral-white">LINE客服：@come&buy3d</p>
                                <p className="text-center text-xxl-start fs-xxl-24 text-nautral-white">(星期一至星期五8:30~17:30)</p>
                            </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-12 col-xxl-4">
                        <div className="abus-main3-content w-100 h-100 d-flex justify-content-center align-items-center justify-content-xxl-end">
                        <div className="abus-main3-img-box">
                            <picture>
                            <source srcSet={aboutUsMain3Img01} media="(min-width:1200px)" />
                            <img className="img-set" src={aboutUsMain3SmImg01} alt="aboutUs-main3-sm-img01" />
                            </picture>  
                        </div>
                        </div> 
                    </div>
                    </div>
                </div>
            </div>

            <div className="abus-main4 w-100 abus-main4-bg-set" id="abus-main4">
                <div className="container py-64 py-lg-100 "> 
                    <div className="row justify-content-lg-center">
                    <div  className="col-12 col-lg-8 mb-24 mb-lg-0">
            
                        <div className="abus-main4-content h-100">
                            <div className="abus-main4-article h-100 d-flex flex-column justify-content-center align-items-center  align-items-lg-center">
                            <div className="abus-main4-title-box w-100 mb-24 mb-lg-72">
                                <h3 className="text-center text-lg-start fs-lg-64 text-nautral-white">聯絡我們 </h3>
                            </div>
                            <form className="d-flex flex-column from-set w-100">
                                <label className="aboutUs-label-set fs-24 fw-900 fw-lg-700 mb-12 text-nautral-white  mb-lg-24" htmlFor="aboutUs-name">姓氏</label>
                                <input className="aboutUs-input-set mb-24 mb-lg-48 fs-16 fw-500 py-12 px-16 fs-lg-24 py-lg-20 px-lg-36" type="text" id="aboutUs-name" placeholder="請留下您的大名" />
                        
                                <label className="aboutUs-label-set fs-24 fw-900 fw-lg-700 mb-12 text-nautral-white  mb-lg-24" htmlFor="aboutUs-email">信箱</label>
                                <input className="aboutUs-input-set mb-24 mb-lg-48 fs-16 fw-500 py-12 px-16 fs-lg-24 py-lg-20 px-lg-36" autocomplete="email" type="email" id="aboutUs-email" placeholder="請留下您的信箱" />

                                <div className="aboutUs-textarea-box d-flex flex-column justify-content-start align-items-start mb-24 mb-lg-48">
                                <label className="aboutUs-label-set fs-24 fw-900 fw-lg-700 mb-12 text-nautral-white mb-lg-24" htmlFor="aboutUs-textarea">留言</label>
                                <textarea className="aboutUs-textarea-set w-100 fw-500 fs-16 fw-500 py-12 px-16 fs-lg-24 py-lg-20 px-lg-36" id="aboutUs-textarea" rows="4" maxlength="500" placeholder="請留下您想告知的內容"></textarea>
                                <p className="aboutUs-textarea-result fs-16 fs-lg-24" id="result">0/500</p>
                                </div>
                                <button className="mian-btn1-set-sm fs-24 fw-900 fw-lg-700 w-100" type="button" id="submitBtn" data-bs-toggle="modal" data-bs-target="#abus-main4-Modal">送出留言 </button>
                            </form> {/*data-bs-toggle="modal" data-bs-target="#exampleModal" */}
                            </div>
                        </div>
                        {/* Modal 結構 */}
                        <div className="modal fade" id="abus-main4-Modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            {/*className="modal fade"：modal 表示是 Modal 視窗，fade 表示彈出時會有淡入效果。
                                id：exampleModal，這是 Modal 的唯一識別符號，用於在 JavaScript 中或透過觸發按鈕來控制此視窗。
                                aria-hidden="true"：告訴螢幕讀取器此元素預設是隱藏的，當 Modal 開啟時會自動切換成 false。*/}
                            <div className="modal-dialog modal-dialog-centered abus-main4-Modal-dialog">
                            {/*modal-dialog 是彈出視窗的對話框容器。可使用 modal-dialog-centered 來將 Modal 置中顯示。*/}
                                <div className="modal-content abus-main4-Modal-content bg-primary1">
                                {/*modal-content 是彈出視窗的內容容器，包含標題、內容和頁腳區域。*/}
                                    <div className="modal-body abus-main4-Modal-body d-flex">
                                        <div className="oEstimate-main3-btn01-box w-100 p-16 fs-16 fw-500 lh-15 text-nautral-white bg-primary1 outline-0">
                                        留言已送出，如有更新消息會再與您聯繫。
                                        </div>
                                        <button type="button" className="oEstimate-main1-btn-close border-0 outline-0 p-0 bg-transparent" data-bs-dismiss="modal" aria-label="Close">
                                            <div className="oEstimate-main1-btn-img-box">
                                                <img className="img-set" src="../assets/images/abus-main4-modal-btn-close.png" alt="abus-main4-modal-btn-close" />
                                            </div>
                                        </button>
                                    </div>
                                    {/*modal-body：彈出視窗的主要內容區域，可以放入自訂的文字、圖片或表單等元素。*/}
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
export default AboutusPage;