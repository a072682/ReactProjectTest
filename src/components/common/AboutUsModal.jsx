import { useEffect, useRef, useState } from "react";
import { Modal } from "bootstrap";

function AboutUsModal({setHandleAboutUsModal,setAboutUsPageModalShow,aboutUsPageModalShow}){

    //元件控制
        const aboutUsModalRef = useRef(null);
        const [aboutUsModal,setAboutUsModal] = useState(null);
        useEffect(()=>{
            if (aboutUsModalRef.current) {
                const instance = new Modal(aboutUsModalRef.current,{
                    backdrop:false
                });
                setAboutUsModal(instance);

                // ✅ 確保 Modal 初始化後，將 `show()` 和 `hide()` 提供給外部
                if (setHandleAboutUsModal) {
                    setHandleAboutUsModal(
                            {
                                show: () => instance.show(),
                                hide: () => instance.hide(),
                            }
                        );
                }
            }
        },[]);

        const btnByAboutUsModalOpen = ()=>{
            aboutUsModal?.show();
        }
        const btnByAboutUsModalClose = ()=>{
            aboutUsModal?.hide();
            setAboutUsPageModalShow(false);
        }
    //元件控制

    //控制上一頁問題
        useEffect(() => {
            if (aboutUsPageModalShow) {
                document.body.style.overflow = "hidden"; // 🔒 禁止滾動
                
            } else {
                document.body.style.overflow = "auto"; // ✅ 恢復滾動
            }
            return () => {
                document.body.style.overflow = "auto"; // ✅ 確保組件卸載時恢復滾動
            };
        }, [aboutUsPageModalShow]);
    //控制上一頁問題


    return(
        <>
            <div ref={aboutUsModalRef} id="productModal" className="modal" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content border-0 shadow">
                        <div className="aboutUsModalSet">
                            <div className="row">
                                <div className="col-12">
                                    <div className="oEstimate-main3-btn01-box w-100 py-48 px-32 fs-32 fw-500 lh-15 text-nautral-white bg-primary1 outline-0
                                                    d-flex rounded-3">
                                        留言已送出，如有更新消息會再與您聯繫。
                                        <button onClick={btnByAboutUsModalClose} type="button" className="ms-auto btn-close" aria-label="Close"></button>
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

export default AboutUsModal;