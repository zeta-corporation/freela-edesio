import { FooterStyled } from './styles';

const Footer = () => {
    return (
        <FooterStyled>
            <div>
                <p>© Zeta Corporation</p>
                <p>® Todos os direitos reservados.</p>
            </div>
            <div>
                <a href="mailto:zetacorp@gmail.com">
                    E-mail: zetacorp.dev@gmail.com
                </a>
                <a href="tel:81983075243">(81) 98307-5243</a>
            </div>
        </FooterStyled>
    );
};

export default Footer;
