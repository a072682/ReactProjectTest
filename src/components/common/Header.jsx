import { Link, NavLink } from "react-router-dom";
const routes = [
    { path: "/IndexPage", name: "IndexPage" },
    { path: "/OestimatePage", name: "OestimatePage" },
    { path: "/QaPage", name: "QaPage" },
    { path: "/AboutusPage", name: "AboutusPage" },
  ];


function Header(){
    return(
        <>
            <nav className="navbar fixed-top nav-bg-set nav-border-set w-100 pt-24 pb-20 px-16 navbar-expand-xxl py-xxl-16"> {/*最外層 pd放這邊 navbar-expand-lg*/}
                <div className="container-fluid px-0 justify-content-xxl-center gap-xxl-32"> {/*中間容器 不動*/}
                    <Link className="navbar-brand py-0 px-0 mx-0" to="/"> {/*標格 or Logo標誌*/}
                        <picture>
                            <source srcSet="../assets/images/logo-sm.png" media="(max-width:992px)" />
                            <img src="../assets/images/logo.png" alt="home-section2-1" />
                        </picture>
                    </Link>

                    <button className="navbar-toggler border-0 py-0 px-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">  
                        <div className="navbar-menu-img-box">
                            <img src="../assets/images/Menu.png" alt="Menu.png" />
                        </div>  
                    </button>   {/* 漢堡標誌 lg不顯示 */}

                    <div className="offcanvas offcanvas-end nav-aside-page-set" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        {/*{/*漢堡內部內容*/}
                        <div className="offcanvas-header pt-32 px-26 pb-8">{/*漢堡內部內容 標題區 lg不顯示*/}
                            <button type="button" className="navbar-close-img-box close-btn py-0 ms-auto" data-bs-dismiss="offcanvas" aria-label="Close">
                                <div className="navbar-close-img-box">
                                    <img className="navbar-close-img-box" src="../assets/images/Close.png" alt="Close.png" />
                                </div>
                            </button>
                        </div>
                        <div className="offcanvas-body py-0  align-items-xxl-center gap-xxl-32 px-xxl-0 py-xxl-0">{/*漢堡內部內容 內容區*/}
                            <ul className="navbar-nav justify-content-center align-items-xxl-center gap-xxl-32">
                                <li className="nav-item mb-12 mb-lg-0 ms-xxl-20 mx-auto navbar-dropdown pe-auto border-low position-relative"> {/*漢堡內部內容 最新消息子項目*/}
                                    <button type="button" className="select-btn-set navbar-btn-bg-set01 text-center ps-xxl-28" id="select-btn01-active" aria-current="page" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">
                                        最新消息
                                        <span className="material-symbols-outlined ms-xxl-4">{/*最新消息子項目右邊icon*/}
                                            arrow_drop_down
                                        </span>
                                    </button>
                                    <ul className="dropdown-menu dropdown-menu01-set m-0 p-0 mt-xxl-22" aria-labelledby="select-btn01-active">{/*最新消息子項目下拉選項*/}
                                        <li><a className="dropdown-item dropdown-item-set" href="index.html#index-main5">最新消息</a></li>
                                        <li><a className="dropdown-item dropdown-item-set" href="#">優惠活動</a></li>
                                        <li><a className="dropdown-item dropdown-item-set" href="#">合作廠商</a></li>
                                        <li><a className="dropdown-item dropdown-item-set" href="aboutUs.html#abus-main4">聯絡我們</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item mb-12 mb-xxl-0 mx-auto border-low"> {/*漢堡內部內容 線上估價子項目*/}
                                    <NavLink className="navbar-link select-btn-set text-center" id="select-btn02-active" aria-current="page" to="/OestimatePage">
                                    線上估價
                                    </NavLink>
                                </li>
                                <li className="nav-item mb-12 mb-xxl-0 mx-auto border-low"> {/*漢堡內部內容 材料選擇子項目*/}
                                    <NavLink  className="navbar-link select-btn-set text-center" id="select-btn03-active" aria-current="page" to="/">
                                        材料選擇
                                    </NavLink>
                                </li>
                                <li className="nav-item mb-12 mb-xxl-0 mx-auto border-low navbar-dropdown position-relative"> {/*漢堡內部內容 新手指南QA子項目*/}
                                    <button className="select-btn-set text-center navbar-btn-bg-set02" id="select-btn04-active" aria-current="page"
                                    role="button" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">
                                    新手指南QA
                                        <span className="material-symbols-outlined ms-xxl-4">{/*新手指南QA子項目右邊icon*/}
                                            arrow_drop_down
                                        </span>
                                    </button>
                                    <ul className="dropdown-menu dropdown-menu02-set m-0 p-0 mt-xxl-22" aria-labelledby="select-btn04-active">{/*新手指南QA子項目下拉選項*/}
                                        <li><NavLink className="dropdown-item dropdown-item-set" to="/QaPage">客製化流程</NavLink></li>
                                        <li><NavLink className="dropdown-item dropdown-item-set" to="/QaPage">設計需求介紹</NavLink></li>
                                        <li><NavLink className="dropdown-item dropdown-item-set" to="/QaPage">運費說明</NavLink></li>
                                        <li><NavLink className="dropdown-item dropdown-item-set" to="/QaPage">常見問題</NavLink></li>
                                    </ul>
                                </li>
                                <li className="nav-item mb-16 mb-xxl-0 mx-auto border-low"> {/*漢堡內部內容 聯絡我們子項目*/}
                                    <NavLink className="navbar-link select-btn-set text-center" id="select-btn05-active" aria-current="page" to="/AboutusPage">聯絡我們</NavLink>
                                </li>
                            </ul>
                            <div className="navbar-log1" id="navbar-log1"> {/*log-in 未登錄狀態*/}
                                <button type="button" className="navbar-log1-img-box py-0 d-block mx-auto" >
                                    <div className="navbar-log1-img-box">
                                        <img className="navbar-log1-img-box" src="../assets/images/log01.png" alt="log01.png" id="navbar-log1" data-bs-toggle="modal" data-bs-target="#login-modal" />
                                    </div>
                                </button>
                            </div>
                            <div className="navbar-log2" id="navbar-log2"> {/*log-in 登錄狀態*/}
                                <button type="button" className="navbar-log2-img-box py-0 d-block mx-auto">
                                    <div className="navbar-log2-img-box mb-8">
                                        <img className="navbar-log2-img-box" src="../assets/images/log02.png" alt="log02.png" id="navbar-log2" data-bs-toggle="modal" data-bs-target="#logout-modal" />
                                    </div>
                                    <div className="navbar-log2-text fs-16 fw-500 lh-15 text-nautral-white">守倫 歡迎您</div>
                                </button>    
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            <div className="modal fade" id="login-modal" tabIndex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">{/*會員登入彈出頁面-->*/}
                <div className="modal-dialog nav-modal-dialog">
                    <div className="modal-content nav-modal-content bg-nautral-black">
                        <div className="modal-header nav-modal-header border-0 px-48">
                            <h3 className="modal-title w-100 text-center text-lg-start fs-lg-64 text-nautral-white" id="loginModalLabel">會員登入</h3>
                        </div>
                        <div className="modal-body px-48">
                            <form id="loginForm">
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label login-label-set fs-24 fw-900 fw-lg-700 mb-12 text-nautral-white  mb-lg-24">信箱</label>
                                    <input type="email" className="form-control login-input-set mb-24 mb-lg-48 fs-16 fw-500 py-12 px-16 fs-lg-24 py-lg-20 px-lg-36" id="email" placeholder="請輸入信箱" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label login-label-set fs-24 fw-900 fw-lg-700 mb-12 text-nautral-white  mb-lg-24">密碼</label>
                                    <input type="password" className="form-control login-input-set mb-24 mb-lg-48 fs-16 fw-500 py-12 px-16 fs-lg-24 py-lg-20 px-lg-36" id="password" placeholder="請輸入密碼" />
                                </div>

                                <div className="error-message1 text-nautral-white mb-24 fs-32 text-center" id="errorMessage1">請輸入帳號密碼</div>
                                <div className="error-message2 text-nautral-white mb-24 fs-32 text-center" id="errorMessage2">帳號或密碼錯誤</div>

                                <div className="login-main-title-box w-100 mb-24 d-flex justify-content-between">
                                    <h6 className="text-center text-xxl-end fs-xxl-24 text-nautral-white">
                                        <a className="a-re" href="#">
                                            註冊會員
                                        </a>
                                    </h6>
                                    <h6 className="text-center text-xxl-end fs-xxl-24 text-primary3">
                                        <a className="a-re" href="#">
                                            忘記密碼 ?
                                        </a>
                                    </h6>
                                </div>
                                <button type="submit" className="mian-btn1-set-sm fs-24 fw-900 fw-lg-700 w-100 mb-24" id="loginbtn">登入</button>
                                
                                <div className="text-center text-xxl-center fs-xxl-24 text-nautral-white mb-24">
                                {/*------ 其他登入方式 ------*/}
                                </div>
                                
                                <div className="nav-modal-link-btn-box d-flex flex-column justify-content-between align-items-center row-gap-24">
                                    <button className="mian-btn1-set-sm w-100 fs-24 fw-900 fw-lg-700 d-flex justify-content-center align-items-center gap-12" type="button">
                                        <i className="fa fa-facebook-square" aria-hidden="true">
                                        </i>
                                        Facebook 登入
                                    </button>
                                
                                    <button className="mian-btn1-set-sm w-100 fs-24 fw-900 fw-lg-700 d-flex justify-content-center align-items-center gap-12" type="button">
                                        <i className="fa fa-google" aria-hidden="true">
                                        </i>
                                        Google登入
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="logout-modal" tabIndex="-1" aria-labelledby="logoutModalLabel" aria-hidden="true">{/*<!--會員登出彈出頁面-->*/}
                <div className="modal-dialog nav-modal-dialog">
                    <div className="modal-content nav-modal-content bg-nautral-black">
                        <div className="modal-header nav-modal-header border-0 px-48">
                            <h3 className="modal-title w-100 text-center text-lg-start fs-lg-64 text-nautral-white" id="logoutModalLabel">會員登出</h3>
                        </div>
                        <div className="modal-body px-48">
                            <form id="logoutForm">
                                <button type="submit" className="mian-btn1-set-sm fs-24 fw-900 fw-lg-700 w-100 mb-24" id="logoutbtn">登出</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Header;