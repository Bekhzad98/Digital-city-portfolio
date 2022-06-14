import styled from 'styled-components';


export const Container  = styled.div`
    width: 100%;
    /* height: 100vh; */
    /* margin: 0 auto; */
`
export const BackgroundImg = styled.div`
    width: 100%;
    height: auto;
    background-repeat: no-repeat;
    background: url(${props=>props.Background}) fixed center;
    background-size: cover;
    padding-top: 100px;

    @media (max-width:1200px) {
        padding-top: 80px;
    }
`