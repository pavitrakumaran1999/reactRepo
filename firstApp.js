import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./Src/Component/Body";
import RestaruntCard from "./Src/Component/RestaruntCard";
import Header from "./Src/Component/Header";

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    );
};

const root= ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);