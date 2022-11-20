import { H1, Container, Row } from './styles';
import api from '../../services/api';
import { useEffect, useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../context/userContext';
import { Logout } from '../Home/styles';

const Admin = () => {
    const { user, usersList, logout, changeStatus } = useContext(UserContext);

    return (
        <>
            <H1>
                Painel Administrador
                <Logout onClick={() => logout()}>
                    <img src="src/assets/logout.png" alt="logout" width={15} />
                    Sair
                </Logout>
            </H1>
            <Container>
                <div>
                    <span>Nickname</span>
                    <ul>
                        {usersList.map((usr) => (
                            <Row
                                bg={
                                    usr.status != 'confirmado'
                                        ? '#F5F5F5'
                                        : '#E36D00'
                                }
                                key={usr.id}
                            >
                                {usr.username}
                            </Row>
                        ))}
                    </ul>
                </div>
                <div>
                    <span>Email</span>
                    <ul>
                        {usersList.map((usr) => (
                            <Row
                                bg={
                                    usr.status != 'confirmado'
                                        ? '#F5F5F5'
                                        : '#E36D00'
                                }
                                key={usr.id}
                            >
                                {usr.email}
                            </Row>
                        ))}
                    </ul>
                </div>
                <div>
                    <span>Telefone</span>
                    <ul>
                        {usersList.map((usr) => (
                            <Row
                                bg={
                                    usr.status != 'confirmado'
                                        ? '#F5F5F5'
                                        : '#E36D00'
                                }
                                key={usr.id}
                            >
                                {usr.tel}
                            </Row>
                        ))}
                    </ul>
                </div>
                <div>
                    <span>Status</span>
                    <ul>
                        {usersList.map((usr) => (
                            <Row
                                bg={
                                    usr.status != 'confirmado'
                                        ? '#F5F5F5'
                                        : '#E36D00'
                                }
                                btn={
                                    usr.status == 'n-pago'
                                        ? 'none'
                                        : 'inline-block'
                                }
                                key={usr.id}
                            >
                                <select
                                    defaultValue={usr.status}
                                    onChange={(e) =>
                                        changeStatus(e.target.value, usr.id)
                                    }
                                >
                                    <option value="n-pago">Não Pago</option>
                                    <option value="aguardando">
                                        Aguardando
                                    </option>
                                    <option value="confirmado">Pago</option>
                                </select>
                                <button>
                                    <img
                                        src="src/assets/download.png"
                                        alt="download"
                                        width={15}
                                    />
                                </button>
                            </Row>
                        ))}
                    </ul>
                </div>
            </Container>
        </>
    );
};

export default Admin;
