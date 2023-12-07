import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Hero from "./Hero";
const Layout = () => {
    return (
        <>
            <Hero/>
            <Header />
            <main className="container mx-auto max-w-screen-xl my-5 min-h-screen">
                <Outlet />
            </main>
            {/* <Footer /> */}
        </>
    )
}
export default Layout;