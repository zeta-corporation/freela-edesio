import { Container, Logout } from './styles';
import { useContext } from 'react';
import { UserContext } from '../../context/userContext';
import logoutImg from '../../assets/logout.png';

const Home = () => {
    const { user, logout, uploadImage, setImage, image } =
        useContext(UserContext);

    return (
        <>
            <Container bglabel={true && image} txtlabel={true && image}>
                <h1>INFORMAÇÕES DO JOGADOR</h1>
                <p>Nickname: {user.username}</p>
                <p>Email: {user.email}</p>
                <p>Telefone: {user.tel}</p>
                <p>Status: {user.status}</p>
                <div className="comprovante">
                    <p className="pix">Chave pix (celular): 81983075243</p>
                    <label>
                        Inserir Comprovante <span>&#x21D1;</span>
                        <input
                            type="file"
                            disabled={true && user.status !== 'n-pago'}
                            onChange={(event) =>
                                setImage(event.target.files[0])
                            }
                        />
                    </label>
                    <span>*apenas imagens (.png, .jpg, etc)</span>
                    <button
                        disabled={
                            user.status !== 'n-pago'
                                ? true
                                : !image
                                ? true
                                : false
                        }
                        bglabel={true && !image}
                        txtlabel={true && !image}
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
