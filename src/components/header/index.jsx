import { HeaderStyled } from './styles';
import logo from '../../assets/logo@2x.png';
import logolg from '../../assets/logo-lg.png';
import logolg2 from '../../assets/logo-lg@2x.png';

const Header = () => {
    return (
        <HeaderStyled>
            <picture>
                <source
                    srcSet={`${logolg} 1x, ${logolg2} 2x"`}
                    media="(min-width: 992px)"
                />
                <img src={logo} alt="Logo" width={285} />
            </picture>
        </HeaderStyled>
    );
};

export default Header;
