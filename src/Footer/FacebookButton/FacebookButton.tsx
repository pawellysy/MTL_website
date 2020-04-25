import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
padding: 10rem;
background: `

const FacebookButton = () => {

    const goToFacebook = () => {
        console.log("go to facebook")
    }
return <Button onClick={goToFacebook}>
    Facebook Buuton
</Button>
}

export default FacebookButton;