import AppRoutes from "../../AppRoutes";
import Header from "../Header";


function Layout() {
    return (
        <div className="container">
            <div className="wrapper">
                <Header/>
                <AppRoutes/>
            </div>
        </div>

        
    )
}

export default Layout;
