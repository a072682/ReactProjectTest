import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { Offcanvas, Button, Nav, Navbar as BootstrapNavbar, Container, NavDropdown } from "react-bootstrap";

//圖片引入
import Logo from "../../assets/images/logo.png";
import LogoSm from "../../assets/images/logo-sm.png";
import Log01 from "../../assets/images/log01.png";


const routes = [
    { path: "/IndexPage", name: "IndexPage" },
    { path: "/OestimatePage", name: "OestimatePage" },
    { path: "/QaPage", name: "QaPage" },
    { path: "/AboutusPage", name: "AboutusPage" },
  ];

function Header2(){
    //快速渲染畫面
    const location = useLocation();
    //快速渲染畫面

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
    
    //側邊狀態
        //控制側邊狀態
        const [showOffcanvas, setShowOffcanvas] = useState(false);
        //開啟側邊狀態
        const handleShow = () => setShowOffcanvas(true);
        //關閉側邊狀態
        const handleClose = () => setShowOffcanvas(false);
    //側邊狀態


    return(
        <>
            <BootstrapNavbar className="nav-bg-set nav-border-set" expand="lg" variant="dark" fixed="top" >
                <Container>
                    <Link className="navbar-brand py-0 px-0 mx-0" to="/IndexPage"> {/*標格 or Logo標誌*/}
                            <picture>
                                <source srcSet={LogoSm} media="(max-width:992px)" />
                                <img src={Logo} alt="home-section2-1" />
                            </picture>
                    </Link>
                    <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" onClick={handleShow} />
                    <BootstrapNavbar.Collapse id="basic-navbar-nav">
                        <Nav className="d-flex justify-content-center align-items-center">
                            <Nav className="nav-item dropdown">
                                <Link
                                    className={`nav-link fs-24 d-flex justify-content-center align-items-center 
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
                                
                                <ul className={`dropdown-menu ${isIndexDropdownOpen ? "show" : ""}`}> {/* 手動控制選單開關 */}
                                    <li><Link className="dropdown-item dropdown-item-set" to="/IndexPage" onClick={IndexCloseDropdown}>最新消息</Link></li>
                                    <li><Link className="dropdown-item dropdown-item-set" to="/IndexPage" onClick={IndexCloseDropdown}>優惠活動</Link></li>
                                    <li><Link className="dropdown-item dropdown-item-set" to="/IndexPage" onClick={IndexCloseDropdown}>合作廠商</Link></li>
                                    <li><Link className="dropdown-item dropdown-item-set" to="/IndexPage" onClick={IndexCloseDropdown}>聯絡我們</Link></li>
                                </ul>
                            </Nav>
                            <Nav.Link as={NavLink} to="/OestimatePage" className="fs-24">線上估價</Nav.Link>
                            <Nav.Link as={NavLink} to="/" className="fs-24">材料選擇</Nav.Link>
                            <Nav className="nav-item dropdown">
                                <Link
                                    className={`nav-link fs-24 d-flex justify-content-center align-items-center 
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
                                <ul className={`dropdown-menu ${isQaPageDropdownOpen ? "show" : ""}`}> {/* 手動控制選單開關 */}
                                    <li><Link className="dropdown-item fs-24" to="/QaPage" onClick={QaPageCloseDropdown}>客製化流程</Link></li>
                                    <li><Link className="dropdown-item fs-24" to="/QaPage" onClick={QaPageCloseDropdown}>設計需求介紹</Link></li>
                                    <li><Link className="dropdown-item fs-24" to="/QaPage" onClick={QaPageCloseDropdown}>運費說明</Link></li>
                                    <li><Link className="dropdown-item fs-24" to="/QaPage" onClick={QaPageCloseDropdown}>常見問題</Link></li>
                                </ul>
                            </Nav>
                            <Nav.Link as={NavLink} to="/AboutusPage" className="fs-24">聯絡我們</Nav.Link>
                            <Link className="navbar-brand py-0 px-0 mx-0" to="/IndexPage"> {/*標格 or Logo標誌*/}
                                <img src={Log01} alt="" />
                            </Link>
                        </Nav>
                    </BootstrapNavbar.Collapse>
                </Container>
            </BootstrapNavbar>
        </>
    )
}

export default Header2;


// 另一種下拉是寫法
// {/* <NavDropdown as={NavLink} title="Page 3" id="page3Dropdown"
//               className={location.pathname.startsWith("/page3") ? "active" : ""}
//             >
//                 <NavDropdown.Item as={NavLink} to="/page3-1">Page 3-1</NavDropdown.Item>
//                 <NavDropdown.Item as={NavLink} to="/page3-2">Page 3-2</NavDropdown.Item>
//             </NavDropdown> */}