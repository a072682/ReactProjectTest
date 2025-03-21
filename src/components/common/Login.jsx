import { Modal } from "bootstrap"
import { useEffect, useRef, useState } from "react"
import axios from "axios";
import { checkLogin, loginUser, tokenUpData } from "../../slice/loginSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const API_PATH = import.meta.env.VITE_API_PATH;


function Login ({setHandleLoginPageModal,loginModalShow,setLoginModalShow}){


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
            setAccount({
                username:"",
                password:""
            });
            setLoginModalShow(false);
            loginPageModal?.hide();
        }
    //元件控制

    //登入

    

    //帳號資料初始狀態
        const [account,setAccount]=useState({
            username:"",
            password:""
        });
    //帳號資料初始狀態

    //帳號資料輸入處理
        const handleInputChange = (event)=>{
            const{ value, name }= event.target;
            setAccount({
                ...account,
                [name]:value
            })
        }
    //帳號資料輸入處理

    const dispatch = useDispatch();
    const navigate = useNavigate();


    const handleLogin = async(event)=>{
        event.preventDefault();
        console.log(account);
        try{
            const result = await dispatch(loginUser(account)).unwrap();
            if(result.token){
                console.log("登入成功(result)", result.token);
                btnByLoginPageModalClose();
                setAccount(
                    {
                        username:"",
                        password:""
                    }
                )
                // setTest("off");
                navigate("/");
            }
            else if(!result.success){
                console.log("登入失敗(result)");
            }
        }catch(error){
            console.log("登入失敗(error)");
        }
    }

    const handleLoginCheck = async()=>{
        try{
            const result = await dispatch(checkLogin()).unwrap();
            if(result.success){
                console.log("登入驗證成功(result)", result.success);
                btnByLoginPageModalClose();
            }else if(!result.success){
                console.log("登入驗證失敗(result)");
            }  
        }catch(error){
            console.log("登入驗證失敗:",error);
        }
    }

    useEffect(()=>{
        const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*\=\s*([^;]*).*$)|^.*$/,"$1",);
        if (token) {  // ✅ 只有當 token 存在時才執行
            axios.defaults.headers.common['Authorization'] = token;
            dispatch(tokenUpData({ token }));
            handleLoginCheck();
        } else {
            console.log("未找到 Token，請先登入");
        }
    },[]);

    //控制上一頁問題
        useEffect(() => {
            if (loginModalShow) {
                document.body.style.overflow = "hidden"; // 🔒 禁止滾動
                console.log("滾動鎖住");
            } else {
                document.body.style.overflow = "auto"; // ✅ 恢復滾動
                console.log("滾動解除");
            }
            return () => {
                console.log("組件解散");
                document.body.style.overflow = "auto"; // ✅ 確保組件卸載時恢復滾動
            };
        }, [loginModalShow]);
    //控制上一頁問題

    
    //登入


    return(
        <>
            <div ref={loginPageModalRef} id="productModal" className="modal" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
                <div className="modal-dialog modal-dialog-centered modal">
                    <div className="modal-content border-0 LoginModalHeaderBgSet">
                        <div className="modal-header border-0">
                            <button onClick={btnByLoginPageModalClose} type="button" className="LoginModalBtnClose d-block ms-auto" aria-label="Close">
                                <img className="materialPageModalBtnCloseImgSet" src={`${import.meta.env.BASE_URL}assets/images/btn-close.png`} alt="Close" width="48" height="48" />
                            </button>
                        </div>
                        <div className="d-flex flex-column justify-content-center align-items-center
                                        text-nautral-white LoginModal-body-set p-32">
                                            {/* nautral-black primary4 nautral-white*/}
                            <h1 className="mb-5 fs-32">會員登入</h1>
                            <form onSubmit={handleLogin} className="d-flex flex-column gap-3">
                                
                                <label htmlFor="username">Email address</label>
                                <input value={account.username} onChange={handleInputChange} name="username" type="email" 
                                className="form-control bg-transparent text-nautral-white" id="username" placeholder="name@example.com" />
                                
                                <label htmlFor="password">Password</label>
                                <input value={account.password} onChange={handleInputChange} name="password" type="password" 
                                className="form-control bg-transparent text-nautral-white" id="password" placeholder="Password" />
                                
                                <button type="onSubmit" className="mian-btn1-set mt-32">登入</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Login