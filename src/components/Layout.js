import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Hero from "./Hero";
const Layout = () => {
    return (
        <div className="bg-secondary">
            <Hero />
            <Header />
            <main className="container mx-auto max-w-screen-xl pb-5 pt-28 min-h-screen">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}
export default Layout;