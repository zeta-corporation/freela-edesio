import { useForm } from 'react-hook-form';
import { FormCadastroStyled } from './styles';
import { useContext } from 'react';
import { UserContext } from '../../context/userContext';

const FormCadastro = () => {
    const { createUser } = useContext(UserContext);

    const { register, handleSubmit } = useForm();

    return (
        <FormCadastroStyled onSubmit={handleSubmit(createUser)}>
            <label htmlFor="email">Email:</label>
            <input
                type="email"
                id="email"
                placeholder="Digite seu email"
                {...register('email')}
                required
            />

            <label htmlFor="nickname">Nickname no Free Fire:</label>
            <input
                type="text"
                id="nickname"
                placeholder="Digite seu nickname no jogo"
                {...register('username')}
                required
            />

            <label htmlFor="password">Senha:</label>
            <input
                type="password"
                id="password"
                placeholder="Digite sua senha"
                {...register('password')}
                required
            />

            <label htmlFor="confirmPassword">Confirmar senha:</label>
            <input
                type="password"
                id="confirmPassword"
                placeholder="Confirme sua senha"
                {...register('confirmPassword')}
                required
            />

            <label htmlFor="telefone">Telefone/Celular:</label>
            <input
                type="text"
                id="telefone"
                placeholder="(XX) 99999-9999"
                {...register('tel')}
                required
            />

            <button type="submit">Cadastrar</button>
        </FormCadastroStyled>
    );
};

export default FormCadastro;
