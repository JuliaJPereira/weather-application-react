import styled from "styled-components";

export const Label = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
`;

export const Input = styled.input`
    border-radius: 5px;
    border: none;
    padding: 8px;
    margin-right: 10px;
    outline: 0px;
`;

export const Button = styled.button`
    background-color: #feb201;
    border: none;
    padding: 10px;
    border-radius: 5px;
    color: white;
    font-weight: 700;
    cursor: pointer;

    :hover {
        background-color: #fe9901;
    }
`;

export const DivIconWeather = styled.div`
    display: flex;

    img {
        width: 60px;
    }

    p {
        font-size: 20px;
        font-weight: 700;
    }
`;