import { Outlet } from "react-router-dom";
import Footer from "../components/common/Footer";
import Header2 from "../components/common/Header2";




function FrontLayout(){
    return(
        <>
            <Header2 />
            <Outlet />
            <Footer />
        </>
    )
}

export default FrontLayout;