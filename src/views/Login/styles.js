import styled from 'styled-components';

export const H2 = styled.h2`
    color: #f5f5f5;
    font: 400 18px/19px 'Bangers';
    margin: 0;
    text-align: center;

    @media (min-width: 768px) {
        font-size: 24px;
        line-height: 28px;
    }

    > strong {
        color: #c7650b;
    }
`;
