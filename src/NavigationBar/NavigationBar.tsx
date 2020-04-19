import React from 'react'
import * as ui from './NavigationBarUI'
import Logo from './Logo/Logo';
const NavigationBar = () => {
    return (
        <ui.NavigationBarWrapper>
            <Logo/>
            <div>
                o Nas
            </div>
            <div>
                oferta
            </div>
            <div>
                galeria
            </div>
            <div>
                kontakt
            </div>
        </ui.NavigationBarWrapper>
    )
}

export default NavigationBar;