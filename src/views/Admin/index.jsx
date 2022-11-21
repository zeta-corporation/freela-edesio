import { H1, Container, Row, Modal, ImageComprovante } from './styles';
import { useContext, useState } from 'react';
import { UserContext } from '../../context/userContext';
import { Logout } from '../Home/styles';
import logoutImg from '../../assets/logout.png';
import downloadImg from '../../assets/download.png';

const Admin = () => {
    const { usersList, logout, changeStatus } = useContext(UserContext);

    const [imgUrl, setImgUrl] = useState('');
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <H1>
                Painel Administrador
                <Logout onClick={() => logout()}>
                    <img src={logoutImg} alt="logout" width={15} />
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
                                    usr.status !== 'confirmado'
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
                                    usr.status !== 'confirmado'
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
                                    usr.status !== 'confirmado'
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
                                    usr.status !== 'confirmado'
                                        ? '#F5F5F5'
                                        : '#E36D00'
                                }
                                btn={
                                    usr.status === 'n-pago'
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
                                <button
                                    onClick={() => {
                                        setImgUrl(usr.image_url);
                                        setShowModal(true);
                                        console.log(usr.image_url);
                                    }}
                                >
                                    <img
                                        src={downloadImg}
                                        alt="download"
                                        width={15}
                                    />
                                </button>
                            </Row>
                        ))}
                    </ul>
                </div>
            </Container>
            {showModal && (
                <Modal>
                    <div className="modal-content">
                        <button onClick={() => setShowModal(false)}>X</button>
                        <ImageComprovante
                            cloudName="dfqwjjm1u"
                            publicId={imgUrl}
                        />
                    </div>
                </Modal>
            )}
        </>
    );
};

export default Admin;
