import styled from 'styled-components';
import { Image } from 'cloudinary-react';

export const Modal = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-color: rgb(0, 0, 0, 0.4);
    display: flex;
    align-items: center;
    justify-content: center;

    .modal-content {
        background-color: #f5f5f5;
        width: 500px;
        height: 600px;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        border-radius: 8px;
        padding: 20px 10px;
    }

    button {
        position: absolute;
        top: -15px;
        right: -15px;
        border: none;
        border-radius: 50%;
        background-color: #e36d00;
        width: 30px;
        height: 30px;
        font-size: 16px;
        cursor: pointer;
    }
`;

export const ImageComprovante = styled(Image)`
    height: 100%;
`;

export const H1 = styled.h1`
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: left;
    max-width: 340px;
    margin: 0 auto;

    font: 600 24px/25px 'Roboto';
    padding-bottom: 25px;

    button {
        margin: 0;
    }

    @media (min-width: 768px) {
        max-width: 835px;
        font-size: 50px;
        padding-bottom: 40px;
    }
`;

export const Container = styled.div`
    margin: 0 auto;
    background-color: #d9d9d9;
    border-radius: 8px;
    overflow: hidden;
    color: #000;

    max-width: 340px;

    @media (min-width: 768px) {
        max-width: 835px;
    }

    display: flex;

    div {
        width: 25%;
        background-color: #d9d9d9;
        span {
            font: 600 24px/28px 'Roboto';
            color: #131313;
            display: block;
            text-align: center;
            padding: 20px 0;
        }

        ul {
            list-style: none;
            padding: 0;
            margin: 0;
        }
    }
`;

export const Row = styled.li`
    padding: 15px 0 15px 30px;
    border-top: 1px solid #000;
    background-color: ${(props) => props.bg};
    font: 400 16px/20px 'Roboto';

    select {
        border: none;
        background-color: inherit;
        cursor: pointer;
    }

    button {
        background-color: inherit;
        padding: 0;
        margin: 0;
        outline: 0;
        border: none;
        margin-left: 20px;
        cursor: pointer;
        display: ${(props) => props.btn};
    }
`;
