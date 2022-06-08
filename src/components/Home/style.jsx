import styled from 'styled-component'


export const AddresLinks = styled.div`
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    @media (max-width: 600px) {
            width: 70%;
            margin-bottom: 20px;
        }
    
    div {

        @media (max-width: 600px) {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
        }
    
        
    }
    /* img {
        width: 65px;
        margin-right: 20px;

        @media (max-width: 600px) {
            width: 20px;
        }
    } */
    h3 {
        font-size: 30px;
        margin-bottom: 15px;
        @media (max-width: 600px) {
            font-size: 15px;
            margin: 0;
        }
    }
    a {
        text-decoration: none;
        color: #ffffffa8;
        font-size: 20px;
        @media (max-width: 600px) {
            font-size: 10px;
        }
    }
    
`

export const SendMessage = styled.div`
    width: 45%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 600px) {
            width: 100%;
            
        }

    h1 {
        font-size: 3em;

        @media (max-width: 600px) {
            font-size: 1rem;
        }
    }
    input {
        width: 60%;
        height: 70px;
        border: none;
        outline: none;
        background-color: transparent;
        font-size: 30px;
        border-bottom: 2px solid #FFF;


        @media (max-width: 600px) {
            font-size: 10px;
            height: 20px;
            border-bottom: 1px solid #ffffff7d;
            margin-bottom: 5px;
        }

        :nth-child(2){
            margin: 30px 0;
        }
    }
    textarea {
        width: 60% !important;
        height: 300px;
        background: transparent;
        border: none;
        outline: none;
        background-color: transparent;
        font-size: 30px;
        border-bottom: 2px solid #FFF;

        @media (max-width: 600px) {
            font-size: 10px;
            height: 80px;
            border-bottom: 1px solid #ffffff7d;
        }
    }
`
export const AddresPage = styled.div`
    width: 45%;
    height: 70%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 600px) {
        width: 100%;
        margin: 30px 0;
        border-bottom: 1px solid #ffffff7d;
    }

`