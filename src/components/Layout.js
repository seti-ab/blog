import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
const Layout = () => {
    return (
        <>
            <Header />
            <main className="container mx-auto px-4 mt-5 min-h-screen">
                <Outlet />
            </main>
            <Footer/>
        </>
    )
}
export default Layout;