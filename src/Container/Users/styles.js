import styled from 'styled-components'
import Backgroud from '../../assets/background.svg';

export const Container = styled.div`
    background: url("${Backgroud}");
    background-size: cover;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;

    height: 100vh;
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
    backdrop-filter: blur(45px);

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

export const Button = styled.button`
    background: transparent;
    color: #FFFFFF;

    border-radius: 14px;
    width: 342px;
    height: 74px;
    margin-top: 130px;

    border: none;
    cursor: pointer;

    font-style: normal;
    font-weight: bold;
    font-size: 17px;
    line-height: 28px;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;

    
    
    &:hover{
        opacity: 0.8;
    }

    &:active{
        opacity: 0.8;
    }

    img{
        transform: rotateY(180deg);
    }
`;

export const User = styled.Users`
    
`;





