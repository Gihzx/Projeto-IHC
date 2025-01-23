import Header from "../Header";
import Sidebar from "../Siddebar";
import AppRoutes from "../../AppRoutes";
import './styles.css';

function Layout() {
    return (
        <div className="container">
            <div className="wrapper">
                <Header/>
                <div className="wrapper-content">
                    <Sidebar/>
                    <AppRoutes/>
                </div>
            </div>
        </div>
    )
}

export default Layout;
