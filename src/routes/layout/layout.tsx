import Header from "../../components/Header";
import Footer from "../../components/Footer"
import { Outlet } from "react-router-dom";

const LayoutPage = () => { 
    return (<>
    <Header />
    <Outlet />
    <Footer />
    </>
    )    
 }
 
 export default LayoutPage;