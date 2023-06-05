import styled from 'styled-components'
import Backgroud from './assets/bg image.svg'

export const Container = styled.div`
    background: url("${Backgroud}");
    background-size: cover;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
`;
export const Image = styled.img`
margin-top: 30px;
`;
export const ContainerItens = styled.div`
background: linear-gradient(157.44deg,
 rgba(255, 255, 255, 0.6) 0.84%,
  rgba(255, 255, 255, 0.6) 0.85%, 
  rgba(255, 255, 255, 0.15) 100%
  );

    height: 100vh;
    border-radius: 61px 61px 0px 0px;

    padding: 50px 36px;
    display: flex;
    flex-direction: column;
`;

export const H1 = styled.h1`
    margin-bottom: 80px;

    font-style: normal;
    font-weight: 700;
    font-size: 34px;
    line-height: 40px;
    text-align: center;
    color: #FFFFFF;
    
`;

export const InputLabel = styled.p`
    letter-spacing: -0.408px;
    line-height: 22px;
    margin-left: 25px;

    color: #EEEEEE;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
`;

export const Input = styled.input`
   background: rgba(255, 255, 255, 0.25);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 14px;
    background: rgba(255, 255, 255, 0.25);

    width: 342px;
    height: 58px;
    margin-bottom: 35px;
    padding-left: 25px;

    border: none;
    outline: none;

    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;

    color: #FFFFFF;
`;
export const Button = styled.button`
    background: rgba(0, 0, 0, 0.8);
    color: #FFFFFF;

    border-radius: 14px;
    width: 342px;
    height: 74px;
    gap: 20px;

    border: none;
    cursor: pointer;

    font-style: normal;
    font-weight: bold;
    font-size: 17px;
    line-height: 28px;

    display: flex;
    align-items: center;
    justify-content: center;
    
    &:hover{
        opacity: 0.8;
    }

    &:active{
        opacity: 0.8;
    }
`;

export const User = styled.li`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 20px;

    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 14px;
   background: rgba(255, 255, 255, 0.25);

   width: 342px;
    height: 58px;

    border: none;
    cursor: pointer;

    p{
        font-style: normal;
        font-weight: normal;
        font-size: 24px;

        color: #ffffff;
    }

    button{
        background: none;
        border: none;
        cursor: pointer;
    }
`