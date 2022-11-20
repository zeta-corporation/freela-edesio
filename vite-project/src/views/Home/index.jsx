import { Container, Logout } from './styles';
import { useContext, useEffect } from 'react';
import { UserContext } from '../../context/userContext';
import logoutImg from '../../assets/logout.png';

const Home = () => {
    const { user, logout, uploadImage, setImage } = useContext(UserContext);

    return (
        <>
            <Container>
                <h1>INFORMAÇÕES DO JOGADOR</h1>
                <p>Nickname: {user.username}</p>
                <p>Email: {user.email}</p>
                <p>Telefone: {user.tel}</p>
                <p>Status: {user.status}</p>
                <div className="comprovante">
                    <label>
                        Inserir Comprovante <span>&#x21D1;</span>
                        <input
                            type="file"
                            disabled={true && user.status != 'n-pago'}
                            onChange={(event) =>
                                setImage(event.target.files[0])
                            }
                        />
                    </label>
                    <span>*apenas imagens (.png, .jpg, etc)</span>
                    <button
                        disabled={true && user.status != 'n-pago'}
                        onClick={uploadImage}
                    >
                        Enviar
                    </button>
                </div>
            </Container>
            <Logout onClick={() => logout()}>
                <img src={logoutImg} alt="logout" width={15} />
                Sair
            </Logout>
        </>
    );
};
export default Home;
