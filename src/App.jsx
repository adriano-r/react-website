import "./app.scss";
import { useState } from "react";
import Work from "./components/work/Work";
import Menu from "./components/menu/Menu";
import Intro from "./components/intro/Intro";
import Topbar from "./components/topbar/Topbar";
import Contact from "./components/contact/Contact";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonials from "./components/testimonials/Testimonials";

function App() {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <div className="app">
            <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <div className="sections">
                <Intro />
                <Portfolio />
                <Work />
                <Testimonials />
                <Contact />
            </div>
        </div>
    );
}

export default App;
