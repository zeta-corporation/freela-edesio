import { Container, Logout } from './styles';
import { useContext, useEffect } from 'react';
import { UserContext } from '../../context/userContext';

const Home = () => {
    const { user, logout } = useContext(UserContext);

    return (
        <>
            <Container>
                <h1>INFORMAÇÕES DO JOGADOR</h1>
                <p>Nickname: {user.username}</p>
                <p>Email: {user.email}</p>
                <p>Telefone: {user.tel}</p>
                <p>Status: {user.status}</p>
                <button disabled={true && user.status != 'n-pago'}>
                    Enviar Comprovante
                </button>
            </Container>
            <Logout onClick={() => logout()}>
                <img src="src/assets/logout.png" alt="logout" width={15} />
                Sair
            </Logout>
        </>
    );
};
export default Home;
