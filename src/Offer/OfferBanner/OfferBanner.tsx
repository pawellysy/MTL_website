import React from "react";
import { Link } from "react-router-dom";
import * as ui from "./OfferBannerUI"

type OfferBannerProps = {
    url: string;
    img?: string;
    text?: string;
};

const OfferBanner = ({ url, img, text }: OfferBannerProps) => {
    return (
        <ui.OfferBannerWrapper>

        <Link to={url}>
            <img src={img} alt="banner"></img>
            <h1>{text}</h1>
        </Link>
        </ui.OfferBannerWrapper>
    );
};

export default OfferBanner;
