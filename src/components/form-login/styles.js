import styled from 'styled-components';

export const FormLoginStyled = styled.form`
    background-color: #f5f5f5;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 0 0 8px 8px;
    padding: 20px 30px;

    @media (min-width: 768px) {
        padding: 40px 30px;
    }

    input {
        border: none;
        border-radius: 6px;
        background-color: #d9d9d9;
        color: #000;
        width: 100%;
        padding: 10px 15px;
        margin-bottom: 15px;
    }

    label {
        color: #000;
        font: 400 14px/16px 'Roboto';
        align-self: flex-start;
        margin-bottom: 5px;
    }

    button {
        height: 30px;
        width: 150px;
        background-color: #e36d00;
        border: none;
        border-radius: 8px;
        font: 600 16px/18px 'Roboto';
        margin: 10px 0 0;
        cursor: pointer;

        @media (min-width: 768px) {
            height: 40px;
            margin: 20px 0 0;
        }
    }
`;
