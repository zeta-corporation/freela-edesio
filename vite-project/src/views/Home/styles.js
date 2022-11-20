import styled from 'styled-components';

export const Container = styled.div`
    margin: 0 auto;
    max-width: 240px;
    background-color: #8b8b8b;
    padding: 12px 10px;
    border-radius: 8px;

    h1 {
        font: 400 24px/25px 'Bangers';
        padding-bottom: 10px;
    }

    p {
        font: 400 12px/20px 'Roboto';
        color: #000;

        &::before {
            content: ' ';
            display: block;
            background-color: #e36d00;
            width: 20px;
            height: 4px;
        }
    }

    button {
        padding: 6px 14px;
        background-color: #e36d00;
        border: none;
        border-radius: 8px;
        margin: 0 auto;
        display: block;
        font: 600 12px/14px 'Roboto';
        cursor: pointer;

        &:disabled {
            cursor: not-allowed;
        }
    }

    @media (min-width: 768px) {
        padding: 38px 21px;
        max-width: 587px;

        h1 {
            font-size: 50px;
            padding-bottom: 15px;
        }

        p {
            font: 400 28px/37px 'Roboto';
            &::before {
                width: 34px;
                height: 8px;
            }
        }

        button {
            font-size: 24px;
            line-height: 28px;
            padding: 12px 20px;
        }
    }
`;

export const Logout = styled.button`
    border: none;
    margin: 10px auto;
    background-color: #8b8b8b;
    padding: 4px;
    font: 600 14px/18px 'Roboto';

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    border-radius: 4px;

    @media (min-width: 768px) {
        border-radius: 8px;
        font: 600 24px/26px 'Roboto';
        padding: 6px;
        img {
            width: 30px;
        }
    }
`;
