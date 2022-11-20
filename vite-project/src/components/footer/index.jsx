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
                    E-mail: zetacorp@gmail.com
                </a>
                <a href="tel:81985194257">(81) 98519-4257</a>
            </div>
        </FooterStyled>
    );
};

export default Footer;
