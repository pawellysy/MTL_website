import React from "react";
import {AppWrapper} from '../AppUI'
import WinterOffer from "./WinterOffer/WinterOffer";
import SummerOffer from "./SummerOffer/SummerOffer";
import AllYearOffer from "./AllYearOffer/AllYearOffer";

const Offer = () => {
    
    return <AppWrapper>
        <WinterOffer />
        <SummerOffer />
        <AllYearOffer />
    </AppWrapper>
};

export default Offer;
