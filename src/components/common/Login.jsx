import { Modal } from "bootstrap"
import { useEffect, useRef, useState } from "react"

function Login ({setHandleLoginPageModal}){


    //元件控制
    const loginPageModalRef = useRef(null);
    const [loginPageModal,setLoginPageModal] = useState(null);
    useEffect(()=>{
        if (loginPageModalRef.current) {
            const instance = new Modal(loginPageModalRef.current,{
                backdrop:false
            });
            setLoginPageModal(instance);

            // ✅ 確保 Modal 初始化後，將 `show()` 和 `hide()` 提供給外部
            if (setHandleLoginPageModal) {
                setHandleLoginPageModal(
                        {
                            show: () => instance.show(),
                            hide: () => instance.hide(),
                        }
                    );
            }
        }
    },[]);

    const btnByLoginPageModalOpen = ()=>{
        loginPageModal?.show();
    }
    const btnByLoginPageModalClose = ()=>{
        loginPageModal?.hide();
    }
    //元件控制


    return(
        <>
            <div ref={loginPageModalRef} id="productModal" className="modal" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
                <div className="modal-dialog modal-dialog-centered modal-xl">
                    <div className="modal-content border-0 shadow">
                        <div className="modal-header border-bottom">
                            <button onClick={()=>{btnByLoginPageModalClose()}} type="button" className="btn-close" aria-label="Close"></button>
                        </div>
                        <div className="d-flex flex-column justify-content-center align-items-center vh-100">
                            <h1 className="mb-5">請先登入</h1>
                            <form  className="d-flex flex-column gap-3">
                                <div className="form-floating mb-3">
                                <input name="username" type="email" className="form-control" id="username" placeholder="name@example.com" />
                                <label htmlFor="username">Email address</label>
                                </div>
                                <div className="form-floating">
                                <input name="password" type="password" className="form-control" id="password" placeholder="Password" />
                                <label htmlFor="password">Password</label>
                                </div>
                                <button type="onSubmit" className="btn btn-primary">登入</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Login