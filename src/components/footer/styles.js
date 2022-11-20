import styled from 'styled-components';

export const FooterStyled = styled.footer`
    background-color: #131313;
    padding: 20px 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    bottom: 0px;
    right: 0;
    left: 0;
    font: 600 10px/12px 'Roboto';

    div {
        p {
            color: #8b8b8b;
        }

        a {
            text-decoration: none;
            color: #8b8b8b;
        }
    }

    div + div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 16px;
    }

    @media (min-width: 768px) {
        padding: 30px 100px;
        font: 600 18px/20px 'Roboto';
    }
`;
