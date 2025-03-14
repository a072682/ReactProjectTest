import { useEffect, useRef, useState } from "react";
import { Modal } from "bootstrap";


function MaterialPageModal({setHandleMaterialPageModal,singleMaterialPageModal,setMaterialPageModalShow,materialPageModalShow}){


    //元件控制
        const materialPageModalRef = useRef(null);
        const [materialPageModal,setMaterialPageModal] = useState(null);
        useEffect(()=>{
            if (materialPageModalRef.current) {
                const instance = new Modal(materialPageModalRef.current,{
                    backdrop:false
                });
                setMaterialPageModal(instance);

                // ✅ 確保 Modal 初始化後，將 `show()` 和 `hide()` 提供給外部
                if (setHandleMaterialPageModal) {
                    setHandleMaterialPageModal(
                            {
                                show: () => instance.show(),
                                hide: () => instance.hide(),
                            }
                        );
                }
            }
        },[]);

        const btnByMaterialPageModalOpen = ()=>{
            materialPageModal?.show();
        }
        const btnByMaterialPageModalClose = ()=>{
            materialPageModal?.hide();
            setMaterialPageModalShow(false);
        }
    //元件控制

    //控制上一頁問題
        useEffect(() => {
            if (materialPageModalShow) {
                document.body.style.overflow = "hidden"; // 🔒 禁止滾動
                materialPageModal?.show(); // 開啟 Modal
            } else {
                document.body.style.overflow = "auto"; // ✅ 恢復滾動
                materialPageModal?.hide(); // 關閉 Modal
            }
            return () => {
                document.body.style.overflow = "auto"; // ✅ 確保組件卸載時恢復滾動
            };
        }, [materialPageModalShow]);
    //控制上一頁問題


    return(
        <>
            <div ref={materialPageModalRef} id="productModal" className="modal" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
                <div className="modal-dialog modal-dialog-centered modal-xl">
                    <div className="modal-content border-0 shadow">
                        <div className="modal-header MaterialPageModalHeaderBgSet">
                            <h5 className="modal-title fs-32 text-nautral-white">{singleMaterialPageModal.title}</h5>
                            <button onClick={btnByMaterialPageModalClose} type="button" className="materialPageModalBtnClose p-0 ms-auto border-0" aria-label="Close">
                                <img className="materialPageModalBtnCloseImgSet" src={`${import.meta.env.BASE_URL}assets/images/MateriaPage/btn-close.png`} alt="Close" width="48" height="48" />
                            </button>
                        </div>
                        <div className="materialPageModal-body-set p-10 p-lg-58">
                            <div className="row">
                                <div className="col-12 mb-16">
                                    <div className="d-flex flex-column gap-32 flex-lg-row align-items-center">
                                        <div className="d-block d-lg-none d-flex flex-column gap-12">
                                            <h3 className="fs-32 text-primary3 text-center">{`${singleMaterialPageModal.title}材料簡介`}</h3>
                                            <p className="fs-16 text-nautral-white text-center">{singleMaterialPageModal.MaterialIntroduction}</p>
                                        </div>
                                        <img className="materialPageModal-Img-set" src={singleMaterialPageModal.img} alt="" />
                                        <div className="d-none d-lg-block ms-32 d-flex flex-column gap-12">
                                            <h3 className="fs-32 text-primary3">{`${singleMaterialPageModal.title}材料簡介`}</h3>
                                            <p className="fs-16 text-nautral-white">{singleMaterialPageModal.MaterialIntroduction}</p>
                                        </div>
                                    </div>      
                                </div>
                                <div className="col-12 col-xl-6 d-flex flex-column gap-12 mb-16">
                                    <h4 className="fs-24 fs-lg-16 text-primary3">環保特性</h4>
                                    <p className="fs-16 fs-lg-12 text-nautral-white">{singleMaterialPageModal.content01}</p>
                                </div>
                                <div className="col-12 col-xl-6 d-flex flex-column gap-12 mb-16">
                                    <h4 className="fs-24  fs-lg-16 text-primary3">加工特性</h4>
                                    <p className="fs-16 fs-lg-12 text-nautral-white">{singleMaterialPageModal.content02}</p>
                                </div>
                                <div className="col-12 col-xl-6 d-flex flex-column gap-12 mb-16">
                                    <h4 className="fs-24 fs-lg-16 text-primary3">使用注意事項</h4>
                                    <p className="fs-16 fs-lg-12 text-nautral-white">{singleMaterialPageModal.content03}</p>
                                </div>
                                <div className="col-12 col-xl-6 d-flex flex-column gap-12 mb-16">
                                    <h4 className="fs-24 fs-lg-16 text-primary3">應用範圍廣泛</h4>
                                    <p className="fs-16 fs-lg-12 text-nautral-white">{singleMaterialPageModal.content04}</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default MaterialPageModal;