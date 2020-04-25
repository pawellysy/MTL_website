import React from "react";
import {AppWrapper} from '../AppUI'
import OfferBanner from "./OfferBanner/OfferBanner";
import allYear from "../assets/images/oferta_basen.jpg";
import winter from "../assets/images/oferta_zima.jpeg";
import summer from "../assets/images/oferta_Lato.jpg";




const Offer = () => {
    
    return <AppWrapper>
        <OfferBanner url="/offer/winter" img={winter} text="Oferta Zimowa"/>
        <OfferBanner url="/offer/summer" img={summer} text="Oferta Letnia"/>
        <OfferBanner url="/offer/all-year" img={allYear} text="Oferta Całoroczna"/>
    </AppWrapper>
};

export default Offer;
