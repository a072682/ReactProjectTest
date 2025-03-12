import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { Offcanvas, Button, Nav, Navbar as BootstrapNavbar, Container, NavDropdown } from "react-bootstrap";
import Login from "./Login";

//圖片引入
import Logo from "../../assets/images/Header/logo.png";
import LogoSm from "../../assets/images/Header/logo-sm.png";
import Log01 from "../../assets/images/Header/log01.png";
import Close from "../../assets/images/Header/Close.png";


const routes = [
    { path: "/IndexPage", name: "IndexPage" },
    { path: "/OestimatePage", name: "OestimatePage" },
    { path: "/MateriaPage", name: "MateriaPage" },
    { path: "/QaPage", name: "QaPage" },
    { path: "/AboutusPage", name: "AboutusPage" },
    { path: "/MemberPage", name: "MemberPage" },
  ];

function Header(){
    //快速渲染畫面
    const location = useLocation();
    //快速渲染畫面

    //Login(登入狀態)
    const[handleLoginPageModal,setHandleLoginPageModal]=useState(null);

    //Index
        //Index頁面下拉選單狀態
        const [isIndexDropdownOpen, setIsIndexDropdownOpen] = useState(false);
        // 點擊 Page3 時，切換下拉選單
        const IndexOpenDropdown = () => {
            setIsIndexDropdownOpen(true);
        };
        // 點擊下拉選單的選項時，關閉下拉選單
        const IndexCloseDropdown = () => {
            setIsIndexDropdownOpen(false);
        };
    //Index
    //QaPage
        //Index頁面下拉選單狀態
        const [isQaPageDropdownOpen, setQaPageDropdownOpen] = useState(false);
        // 點擊 Page3 時，切換下拉選單
        const QaPageOpenDropdown = () => {
            setQaPageDropdownOpen(true);
        };
        // 點擊下拉選單的選項時，關閉下拉選單
        const QaPageCloseDropdown = () => {
            setQaPageDropdownOpen(false);
        };
    //QaPage
    //登入狀態
        //登入狀態頁面下拉選單狀態
        const [isLoginDropdownOpen, setIsLoginDropdownOpen] = useState(false);
        // 點擊 Page3 時，切換下拉選單
        const isLoginOpenDropdown = () => {
            setIsLoginDropdownOpen(true);
        };
        // 點擊下拉選單的選項時，關閉下拉選單
        const isLoginCloseDropdown = () => {
            setIsLoginDropdownOpen(false);
        };
    //登入狀態
    
    //側邊狀態
        //控制側邊狀態
        const [showOffcanvas, setShowOffcanvas] = useState(false);
        //開啟側邊狀態
        const handleShow = () => setShowOffcanvas(true);
        //關閉側邊狀態
        const handleClose = () => setShowOffcanvas(false);

        //index狀態
        const [isIndex, setIsIndex] = useState(false);
        //QaPage狀態
        const [isQaPage, setIsQaPage] = useState(false);
        //登入狀態
        const [isLogin,setisLogin] = useState(false);
    //側邊狀態


    return(
        <>
            <BootstrapNavbar className="nav-bg-set nav-border-set" expand="xl" variant="dark" fixed="top" >
                <Container>
                    <Link className="navbar-brand py-0 px-0 mx-0" to="/IndexPage"> {/*標格 or Logo標誌*/}
                            <picture>
                                <source srcSet={LogoSm} media="(max-width:992px)" />
                                <img src={Logo} alt="home-section2-1" />
                            </picture>
                    </Link>
                    <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" onClick={handleShow} />
                    <BootstrapNavbar.Collapse id="basic-navbar-nav" className="d-xl-block d-none">
                        <Nav className="ms-auto d-flex align-items-center gap-16">
                            <Nav className="nav-item dropdown">
                                <Link
                                    className={`nav-link fs-16 fs-xxl-20 d-flex justify-content-center align-items-center pt-24 px-8 mb-24 borderLow
                                        ${["/IndexPage"].includes(location.pathname) ? "active" : ""}`}
                                    to="/"
                                    id="IndexDropdown"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    onClick={IndexOpenDropdown} // 點擊時開關下拉選單
                                >
                                    最新消息
                                    <span className="material-symbols-outlined ms-xxl-4">
                                            arrow_drop_down
                                    </span>
                                </Link>
                                
                                <ul className={`dropdown-menu customDropdown indexPagePosition ${isIndexDropdownOpen ? "show" : ""}`}> {/* 手動控制選單開關 */}
                                    <li><Link className="dropdown-item dropdown-item-set" to="/IndexPage" onClick={IndexCloseDropdown}>最新消息</Link></li>
                                    <li><Link className="dropdown-item dropdown-item-set" to="/IndexPage" onClick={IndexCloseDropdown}>優惠活動</Link></li>
                                    <li><Link className="dropdown-item dropdown-item-set" to="/IndexPage" onClick={IndexCloseDropdown}>合作廠商</Link></li>
                                    <li><Link className="dropdown-item dropdown-item-set" to="/IndexPage" onClick={IndexCloseDropdown}>聯絡我們</Link></li>
                                </ul>
                            </Nav>
                            <Nav.Link as={NavLink} to="/OestimatePage" className="fs-16 fs-xxl-20 pt-24 px-8 mb-20 borderLow">線上估價</Nav.Link>
                            <Nav.Link as={NavLink} to="/MateriaPage" className="fs-16 fs-xxl-20 pt-24 px-8 mb-20 borderLow">材料選擇</Nav.Link>
                            <Nav className="nav-item dropdown">
                                <Link
                                    className={`nav-link fs-16 fs-xxl-20 d-flex justify-content-center align-items-center pt-24 px-8 mb-20 borderLow
                                        ${["/QaPage"].includes(location.pathname) ? "active" : ""}`}
                                    to="/QaPage"
                                    id="QaPageDropdown"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    onClick={QaPageOpenDropdown} // 點擊時開關下拉選單
                                >
                                    新手指南QA
                                    <span className="material-symbols-outlined ms-xxl-4">
                                            arrow_drop_down
                                    </span>
                                </Link>
                                <ul className={`dropdown-menu customDropdown QaPagePosition ${isQaPageDropdownOpen ? "show" : ""}`}> {/* 手動控制選單開關 */}
                                    <li><Link className="dropdown-item dropdown-item-set" to="/QaPage" onClick={QaPageCloseDropdown}>客製化流程</Link></li>
                                    <li><Link className="dropdown-item dropdown-item-set" to="/QaPage" onClick={QaPageCloseDropdown}>設計需求介紹</Link></li>
                                    <li><Link className="dropdown-item dropdown-item-set" to="/QaPage" onClick={QaPageCloseDropdown}>運費說明</Link></li>
                                    <li><Link className="dropdown-item dropdown-item-set" to="/QaPage" onClick={QaPageCloseDropdown}>常見問題</Link></li>
                                </ul>
                            </Nav>
                            <Nav.Link as={NavLink} to="/AboutusPage" className="fs-16 fs-xxl-20 pt-24 px-8 mb-20 borderLow">聯絡我們</Nav.Link>
                            <Nav>
                                <Link
                                    className={`nav-link fs-16 fs-xxl-20 d-flex justify-content-center align-items-center pt-24 px-8 mb-20 borderLow
                                        ${["/isLogin"].includes(location.pathname) ? "active" : ""}`}
                                    to="/"
                                    id="isLogin"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    onClick={isLoginOpenDropdown} // 點擊時開關下拉選單
                                >
                                    <img src={Log01} alt="" />
                                </Link>
                                <ul className={`dropdown-menu customDropdown  ${isLoginDropdownOpen ? "show" : ""}`}> 
                                    <li><button className="dropdown-item dropdown-item-set" onClick={()=>{handleLoginPageModal?.show();isLoginCloseDropdown();}}>會員中心</button></li>
                                    <li><Link className="dropdown-item dropdown-item-set" to="/" onClick={isLoginCloseDropdown}>登出</Link></li>
                                    <li><Link className="dropdown-item dropdown-item-set" to="/MemberPage" onClick={isLoginCloseDropdown}>測試用</Link></li>
                                </ul>
                            </Nav>
                            <Nav.Link as={NavLink} to="/Manager/" className="fs-16 fs-xxl-20 pt-24 px-8 mb-20 borderLow">管理者按鈕(測試)</Nav.Link>
                        </Nav>
                    </BootstrapNavbar.Collapse>
                </Container>
            </BootstrapNavbar>

             {/* 🔹 側邊選單（RWD 漢堡選單） */}
            <Offcanvas show={showOffcanvas} onHide={handleClose} placement="end" className="offcanvasSet">
                <Offcanvas.Header >
                <Offcanvas.Title></Offcanvas.Title>
                <button className="custom-close-btn ms-auto offcanvasCloseBtn" onClick={handleClose}>
                    <img src={Close} alt="Close" width="24" height="24" />
                </button>
                </Offcanvas.Header>
                <Offcanvas.Body className="" >
                    <Nav className="flex-column d-flex justify-content-center align-items-center">
                        <Nav className="nav-item dropdown sidebar-dropdown offcanvasIndexNav pb-8">
                            <button className="dropdown-toggle-btn d-flex justify-content-center align-items-center fs-24 indexBtn" 
                            onClick={() => setIsIndex(!isIndex)}>
                                最新消息
                                <span className="material-symbols-outlined ms-xxl-4">
                                        arrow_drop_down
                                </span>
                            </button>
                            <div className={`dropdown-content gap-8 px-0 py-0 ${isIndex ? "show" : ""}`}>
                                <Link className="dropdown-item indexItemSet" to="/IndexPage" onClick={handleClose}>最新消息</Link>
                                <Link className="dropdown-item indexItemSet" to="/IndexPage" onClick={handleClose}>優惠活動</Link>
                                <Link className="dropdown-item indexItemSet" to="/IndexPage" onClick={handleClose}>合作廠商</Link>
                                <Link className="dropdown-item indexItemSet" to="/IndexPage" onClick={handleClose}>聯絡我們</Link>
                            </div>
                        </Nav>
                        <Nav.Link as={NavLink} to="/OestimatePage" className="fs-24 normalNavLink normalNavBtn" onClick={handleClose}>線上估價</Nav.Link>
                        <Nav.Link as={NavLink} to="/" className="fs-24 normalNavLink normalNavBtn" onClick={handleClose}>材料選擇</Nav.Link>
                        <Nav className="nav-item dropdown sidebar-dropdown offcanvasQaPageNav pb-8">
                            <button className="dropdown-toggle-btn d-flex justify-content-center align-items-center fs-24 qaPageBtn" 
                            onClick={() => setIsQaPage(!isQaPage)}>
                                新手指南QA
                                <span className="material-symbols-outlined ms-xxl-4">
                                        arrow_drop_down
                                </span>
                            </button>
                            <div className={`dropdown-content gap-8 px-0 py-0 ${isQaPage ? "show" : ""}`}>
                                <Link className="dropdown-item qaPageItemSet" to="/QaPage" onClick={handleClose}>客製化流程</Link>
                                <Link className="dropdown-item qaPageItemSet" to="/QaPage" onClick={handleClose}>設計需求介紹</Link>
                                <Link className="dropdown-item qaPageItemSet" to="/QaPage" onClick={handleClose}>運費說明</Link>
                                <Link className="dropdown-item qaPageItemSet" to="/QaPage" onClick={handleClose}>常見問題</Link>
                            </div>
                        </Nav>
                        <Nav.Link as={NavLink} to="/AboutusPage" className="fs-24 normalNavLink normalNavBtn" onClick={handleClose}>聯絡我們</Nav.Link>
                        <Nav className="nav-item dropdown sidebar-dropdown offcanvasQaPageNav pb-8">
                            <button className="dropdown-toggle-btn d-flex justify-content-center align-items-center fs-24 qaPageBtn" 
                            onClick={() => setisLogin(!isLogin)}>
                                <img src={Log01} alt="" />
                            </button>
                            <div className={`dropdown-content gap-8 px-0 py-0 ${isLogin ? "show" : ""}`}>
                                <Link className="dropdown-item qaPageItemSet" to="/" onClick={handleClose}>會員中心</Link>
                                <Link className="dropdown-item qaPageItemSet" to="/" onClick={handleClose}>登出</Link>
                            </div>
                        </Nav>
                    </Nav>
                </Offcanvas.Body>
            </Offcanvas>
            <Login setHandleLoginPageModal={setHandleLoginPageModal}/>
        </>
    )
}

export default Header;


// 另一種下拉是寫法
// {/* <NavDropdown as={NavLink} title="Page 3" id="page3Dropdown"
//               className={location.pathname.startsWith("/page3") ? "active" : ""}
//             >
//                 <NavDropdown.Item as={NavLink} to="/page3-1">Page 3-1</NavDropdown.Item>
//                 <NavDropdown.Item as={NavLink} to="/page3-2">Page 3-2</NavDropdown.Item>
//             </NavDropdown> */}