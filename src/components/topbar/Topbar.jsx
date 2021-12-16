import "./topbar.scss";

export default function Topbar() {
    return (
        <div className="topbar">
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">
                        delAd
                    </a>
                    <div className="itemContainer"></div>
                </div>
                <div className="right"></div>
            </div>
        </div>
    );
}