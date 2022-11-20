import styled from 'styled-components';

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
