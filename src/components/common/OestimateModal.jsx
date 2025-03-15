import { Modal } from "bootstrap";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";



function OestimateModal({setHandleOestimateModal,setOestimateModalShow,oestimateModalShow}){

    //元件控制
        const oestimateModalRef = useRef(null);
        const [oestimateModal,setOestimateModal] = useState(null);
        useEffect(()=>{
            if (oestimateModalRef.current) {
                const instance = new Modal(oestimateModalRef.current,{
                    backdrop:false
                });
                setOestimateModal(instance);

                // ✅ 確保 Modal 初始化後，將 `show()` 和 `hide()` 提供給外部
                if (setHandleOestimateModal) {
                    setHandleOestimateModal(
                            {
                                show: () => instance.show(),
                                hide: () => instance.hide(),
                            }
                        );
                }
            }
        },[]);

        const btnByOestimateModalOpen = ()=>{
            oestimateModal?.show();
        }
        const btnByOestimateModalClose = ()=>{
            oestimateModal?.hide();
            setOestimateModalShow(false);
        }
    //元件控制

    //控制上一頁問題
        useEffect(() => {
            if (oestimateModalShow) {
                document.body.style.overflow = "hidden"; // 🔒 禁止滾動
                
            } else {
                document.body.style.overflow = "auto"; // ✅ 恢復滾動
                oestimateModal?.hide();
            }
            return () => {
                document.body.style.overflow = "auto"; // ✅ 確保組件卸載時恢復滾動
                oestimateModal?.hide();
            };
        }, [oestimateModalShow]);
    //控制上一頁問題

    const oestimateModalData = [
        {
            title:"檔案格式",
            answer:"",
        },
        {
            title:"檔案大小",
            answer:"30MB(如檔案過大請去背再上傳)",
        },
        {
            title:"列印須知",
            answer:"30MB(如檔案過大請去背再上傳)",
        },
        {
            title:"複數物件",
            answer:"如有多個物件需要列印,請務必分成不同檔案及分別點選數量",
        },
        {
            title:"檔案破面、無法列印",
            answer:"如有檔案破面等無法列印之情形,將由專人與您聯繫",
        },
    ]

    return(
        <>  
            <div ref={oestimateModalRef} id="productModal" className="modal" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
                <div className="modal-dialog modal-dialog-centered modal-xl">
                    <div className="modal-content border-0 shadow">
                        <div className="modal-header MaterialPageModalHeaderBgSet">
                            <h5 className="modal-title fs-32 text-nautral-white">檔案格式說明</h5>
                            <button onClick={btnByOestimateModalClose} type="button" className="materialPageModalBtnClose p-0 ms-auto border-0" aria-label="Close">
                                <img className="materialPageModalBtnCloseImgSet" src={`${import.meta.env.BASE_URL}assets/images/MateriaPage/btn-close.png`} alt="Close" width="48" height="48" />
                            </button>
                        </div>
                        <div className="materialPageModal-body-set p-10 p-lg-58">
                            <div className="row">
                                <div className="col-12 d-flex flex-column gap-24">
                                        {
                                            oestimateModalData?.map((item,index)=>{
                                                return(
                                                    <>
                                                        <div key={index} className="oEstimate-main1-modal-item-box d-flex flex-column row-gap-2">
                                                            <div className="fs-24 fw-700 lh-12 text-primary3 d-flex align-items-center">
                                                                    <span className="material-symbols-outlined text-nautral-white me-12">
                                                                        error 
                                                                    </span>
                                                                    {item.title}
                                                            </div>
                                                            <div className="fs-16 fw-500 lh-15 text-nautral-white">
                                                                {item.answer}
                                                            </div>
                                                            <div className="secondary-btn1-box">
                                                                <button className="secondary-btn1-set">
                                                                    <Link to="/QaPage" className="fw-500 lh-15 text-primary4 d-flex align-items-center">
                                                                        詳閱常見問題
                                                                    
                                                                        <span className="material-symbols-outlined sec-btn1-img-set">
                                                                            chevron_right
                                                                        </span>
                                                                    </Link>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </>
                                                )
                                            })
                                        }
                                        
                                        
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
export default OestimateModal;