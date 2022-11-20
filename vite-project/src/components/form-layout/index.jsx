import { useState } from 'react';
import { Layout, Button } from './styles';

import FormCadastro from '../form-cadastro';
import FormLogin from '../form-login';

const FormLayout = () => {
    const [login, setLogin] = useState(true);

    return (
        <Layout>
            <div>
                <Button
                    bgcolor={!login && '#C7650B'}
                    onClick={() => setLogin(false)}
                >
                    Inscreva-se
                </Button>
                <Button
                    bgcolor={login && '#C7650B'}
                    onClick={() => setLogin(true)}
                >
                    Login
                </Button>
            </div>
            <div>{!login ? <FormCadastro /> : <FormLogin />}</div>
        </Layout>
    );
};

export default FormLayout;
