import styled from 'styled-components';

export const HeaderStyled = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 60px;

    @media (min-width: 768px) {
        padding-top: 30px;

        picture img {
            width: 400px;
        }
    }
`;
