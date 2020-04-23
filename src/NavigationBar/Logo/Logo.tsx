import React from 'react'
import logo from '../../assets/images/logo.png'
import * as ui from './LogoUI'
const Logo = () => {
    return (
    <ui.LogoWrapper> 
            <img src={logo} alt="logo" />
    </ui.LogoWrapper>
    )
}

export default Logo;