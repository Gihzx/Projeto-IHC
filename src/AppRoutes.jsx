import { 
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom';
import Home from "./pages/Home";
import Cradt from "./pages/Cradt";

function AppRoutes() {
    return (
        <BrowserRouter basename='https://projeto-ihc-alpha.vercel.app'>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/cradt"element={<Cradt/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;