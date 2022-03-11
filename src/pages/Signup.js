import React from 'react'
import styled from 'styled-components';
import landingImage from '../static/assets/landingImage.png';
import FormComp from '../components/signup/FormComp';

const StyledSignup = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
width: 90%;
margin: 0 auto;
@media(min-width: 37.5em) {
    width: 90%;
}

@media(min-width: 50em) {
    width: 70%;
}
`;

const StyledContentdiv = styled.div`
display: flex;
gap: 2em;
flex-direction: column-reverse;

@media(min-width: 37.5em) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    *{
        flex: 1 1 0;
    }
}
`;

const Signup = () => {
    return (
        <StyledSignup>
            <h1>Signup</h1>
            <StyledContentdiv>
                <FormComp />
                <img src={landingImage}/>
            </StyledContentdiv>
        </StyledSignup>
    )
}

export default Signup