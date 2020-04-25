import React from "react";
import * as ui from "./NavigationBarUI";
import Logo from "./Logo/Logo";
import { Link } from "react-router-dom";
const NavigationBar = () => {
    return (
        <ui.NavigationBarWrapper>
            <Link to="/">
                <Logo />
            </Link>
            <Link to="/about">
                <ui.NavigationButton>O nas</ui.NavigationButton>
            </Link>
            <Link to="/offer">
                <ui.NavigationButton>oferta</ui.NavigationButton>
            </Link>
            <Link to="/gallery">
                <ui.NavigationButton>galeria</ui.NavigationButton>
            </Link>
            <Link to="/contact">
                <ui.NavigationButton>kontakt</ui.NavigationButton>
            </Link>
        </ui.NavigationBarWrapper>
    );
};

export default NavigationBar;
