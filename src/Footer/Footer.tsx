import React from "react";
import * as ui from "./FooterUI";
import FacebookButton from "./FacebookButton/FacebookButton";
import ContactData from "./ContactData/ContactData";
const Footer = () => {
    return (
        <ui.FooterWrapper>
            <ContactData />
            <FacebookButton />
            <p> all rights reserved</p>
        </ui.FooterWrapper>
    );
};

export default Footer;
