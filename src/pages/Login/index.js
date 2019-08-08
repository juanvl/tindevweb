import React, { useState } from 'react';
import logo from 'assets/logo.svg';
import api from 'services/api';

import * as S from './styles';

const Login = ({ history }) => {
  const [username, setUsername] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();

    const createdUser = await api.post('/devs', { username });

    const { _id } = createdUser.data;

    history.push(`/dev/${_id}`);
  };

  return (
    <S.Container>
      <S.Form onSubmit={handleSubmit}>
        <S.Img src={logo} alt="Tindev" />
        <S.Input
          placeholder="Digite seu usuário do GitHub"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <S.Button type="submit">Entrar</S.Button>
      </S.Form>
    </S.Container>
  );
};

export default Login;
