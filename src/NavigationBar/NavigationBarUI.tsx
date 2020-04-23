import styled from "styled-components";

export const NavigationBarWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: #2969cf;
    color: white;
    align-items: center;
    padding 4rem;
    height: 6rem;
`;

export const NavigationButton = styled.button`
    background-color: #44c767;
    border-radius: 18px;
    border: 6px solid #2c77b0;
    display: inline-block;
    cursor: pointer;
    color: #ffffff;
    font-family: Arial;
    font-size: 22px;
    padding: 10px
    text-decoration: none;
    text-shadow: 0px 0px 0px #2f6627;
    .hover{ 
        background-color:#5cbf2a;
    }
`;
