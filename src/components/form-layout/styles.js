import styled from 'styled-components';

export const Layout = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin: auto;
    margin-top: 70px;
    margin-bottom: 100px;
    width: 100%;
    max-width: 350px;

    > div {
        width: 100%;
    }

    div + div {
    }

    @media (min-width: 768px) {
        max-width: 400px;
    }
`;

export const Button = styled.button`
    width: 50%;
    height: 30px;
    font: 600 16px/18px 'Roboto';

    background-color: ${(props) => props.bgcolor};
    border: none;
    border-radius: 8px 8px 0 0;

    @media (min-width: 768px) {
        font-size: 20px;
        line-height: 24px;
    }
`;
