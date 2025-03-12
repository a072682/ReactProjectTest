import { useEffect, useRef, useState } from "react";
import { Modal } from "bootstrap";


function MaterialPageModal({setHandleMaterialPageModal}){


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
                        <div className="modal-header border-bottom">
                            <h5 className="modal-title fs-4">PLE</h5>
                            <button onClick={btnByMaterialPageModalClose} type="button" className="btn-close" aria-label="Close"></button>
                        </div>
                        <div className="modal-body p-4">
                            <div className="row">
                                <div className="col">
                                    <div>
                                        <img src="" alt="" />
                                        <div>
                                            <h3>123</h3>
                                            <p>123</p>
                                        </div>
                                    </div>      
                                </div>
                                <div className="col-12 col-xxl-6">
                                    <h4>456</h4>
                                    <p>456</p>
                                </div>
                                <div className="col-12 col-xxl-6">
                                    <h4>456</h4>
                                    <p>456</p>
                                </div>
                                <div className="col-12 col-xxl-6">
                                    <h4>456</h4>
                                    <p>456</p>
                                </div>
                                <div className="col-12 col-xxl-6">
                                    <h4>456</h4>
                                    <p>456</p>
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