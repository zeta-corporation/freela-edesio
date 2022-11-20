import { FormLoginStyled } from './styles';
import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { UserContext } from '../../context/userContext';

const FormLogin = () => {
    const { loginUser } = useContext(UserContext);

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    return (
        <FormLoginStyled onSubmit={handleSubmit(loginUser)}>
            <label htmlFor="nickname">Nickname:</label>
            <input
                type="text"
                placeholder="Digite seu nickname"
                id="nickname"
                {...register('username')}
            />

            <label htmlFor="password">Senha:</label>
            <input
                type="password"
                placeholder="Digite sua senha"
                id="password"
                {...register('password')}
            />

            <button type="submit">Login</button>
        </FormLoginStyled>
    );
};

export default FormLogin;
