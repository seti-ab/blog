import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Hero from "./Hero";

const Layout = () => {
    const location = useLocation();
    
    return (
        <div className="bg-secondary">
            {location.pathname === '/' && < Hero />}
            <Header />
            <main className="mx-auto max-w-screen-xl min-h-[92vh] pb-5 pt-28">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}
export default Layout;