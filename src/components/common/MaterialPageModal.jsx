import { useEffect, useRef, useState } from "react";
import { Modal } from "bootstrap";


function MaterialPageModal({setHandleMaterialPageModal,singleMaterialPageModal}){


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
        }
    //元件控制


    return(
        <>
            <div ref={materialPageModalRef} id="productModal" className="modal" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
                <div className="modal-dialog modal-dialog-centered modal-xl">
                    <div className="modal-content border-0 shadow">
                        <div className="modal-header MaterialPageModalHeaderBgSet">
                            <h5 className="modal-title fs-32 text-nautral-white">PLE</h5>
                            <button onClick={btnByMaterialPageModalClose} type="button" className="materialPageModalBtnClose p-0 ms-auto border-0" aria-label="Close">
                                <img className="materialPageModalBtnCloseImgSet" src="/assets/images/MateriaPage/btn-close.png" alt="Close" width="48" height="48" />
                            </button>
                        </div>
                        <div className="materialPageModal-body-set p-10 p-lg-58">
                            <div className="row">
                                <div className="col-12 mb-16">
                                    <div className="d-flex flex-column gap-32 flex-lg-row align-items-center">
                                        <div className="d-block d-lg-none d-flex flex-column gap-12">
                                            <h3 className="fs-32 text-primary3 text-center">PLA 材料簡介</h3>
                                            <p className="fs-16 text-nautral-white text-center">PLA（聚乳酸）是一種可生物降解的熱塑性材料，源自玉米澱粉等可再生資源，環保又安全。</p>
                                        </div>
                                        <img className="materialPageModal-Img-set" src={singleMaterialPageModal.img} alt="" />
                                        <div className="d-none d-lg-block ms-32 d-flex flex-column gap-12">
                                            <h3 className="fs-32 text-primary3">PLA 材料簡介</h3>
                                            <p className="fs-16 text-nautral-white">PLA（聚乳酸）是一種可生物降解的熱塑性材料，源自玉米澱粉等可再生資源，環保又安全。</p>
                                        </div>
                                    </div>      
                                </div>
                                <div className="col-12 col-xl-6 d-flex flex-column gap-12 mb-16">
                                    <h4 className="fs-24 fs-lg-16 text-primary3">環保特性</h4>
                                    <p className="fs-16 fs-lg-12 text-nautral-white">PLA 是一種可降解的材料，在適當條件下可分解為水和二氧化碳，減少環境負擔。</p>
                                </div>
                                <div className="col-12 col-xl-6 d-flex flex-column gap-12 mb-16">
                                    <h4 className="fs-24  fs-lg-16 text-primary3">加工特性</h4>
                                    <p className="fs-16 fs-lg-12 text-nautral-white">熔點低，易於3D列印成型，適合製作模型、裝飾品和低負載結構物品。</p>
                                </div>
                                <div className="col-12 col-xl-6 d-flex flex-column gap-12 mb-16">
                                    <h4 className="fs-24 fs-lg-16 text-primary3">使用注意事項</h4>
                                    <p className="fs-16 fs-lg-12 text-nautral-white">PLA 不耐高溫，適用於室內或常溫環境，不建議用於戶外或高溫場合。</p>
                                </div>
                                <div className="col-12 col-xl-6 d-flex flex-column gap-12 mb-16">
                                    <h4 className="fs-24 fs-lg-16 text-primary3">應用範圍廣泛</h4>
                                    <p className="fs-16 fs-lg-12 text-nautral-white">PLA 常用於教學模型、手工藝品和原型設計，深受3D列印愛好者喜愛。</p>
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