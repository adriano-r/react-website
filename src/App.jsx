import Work from "./components/work/Work";
import Intro from "./components/intro/Intro";
import Topbar from "./components/topbar/Topbar";
import Contact from "./components/contact/Contact";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonials from "./components/testimonials/Testimonials";
import "./app.scss";

function App() {
    return (
        <div className="app">
            <Topbar />
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
