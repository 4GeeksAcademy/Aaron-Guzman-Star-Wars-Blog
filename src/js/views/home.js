import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import Characters from "../component/Characters.jsx";
import Planets from "../component/Planets.jsx";
const Home = () => {
    const { store, actions } = useContext(Context);
    return (
        <>
            <Characters />
            <Planets />
        </>
    );
};
export default Home;