const header= () => {
    return (
        <div className="Header">
        <div className="logo-container">
            <img 
                className="logo"
                src="Users/pavitra-13197Downloads/restaruntLogo.png"
            />
        </div>
        <div classNmae="navigator">
            <ul>
                <li>About Us</li>
                <li>Contact us</li>
                <li>cart</li>
            </ul>
        </div>
        </div>
    );
}

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
        </div>
    );
};

const root= ReactDOM.createRoot(document.getElementById("root"));

root.render("AppLayout");