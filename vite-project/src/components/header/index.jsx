import { HeaderStyled } from './styles';

const Header = () => {
    return (
        <HeaderStyled>
            <picture>
                <source
                    srcSet="src/assets/logo-lg.png 1x, src/assets/logo-lg@2x.png 2x"
                    media="(min-width: 992px)"
                />
                <img src="src/assets/logo@2x.png" alt="Logo" width={285} />
            </picture>
        </HeaderStyled>
    );
};

export default Header;
