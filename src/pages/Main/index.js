import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from 'services/api';
import logo from 'assets/logo.svg';
import like from 'assets/like.svg';
import dislike from 'assets/dislike.svg';
import * as S from './styles';

const Main = ({ match }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await api.get('/devs', {
        headers: {
          user: match.params.id,
        },
      });
      setUsers(res.data);
    })();
  }, [match.params.id]);

  const handleLike = async targetId => {
    await api.post(`/devs/${targetId}/likes`, null, {
      headers: {
        user: match.params.id,
      },
    });

    setUsers(users.filter(user => user._id !== targetId));
  };

  const handleDislike = async targetId => {
    await api.post(`/devs/${targetId}/dislikes`, null, {
      headers: {
        user: match.params.id,
      },
    });

    setUsers(users.filter(user => user._id !== targetId));
  };

  return (
    <S.Container>
      <Link to="/">
        <S.LogoImg src={logo} alt="Tindev"></S.LogoImg>
      </Link>

      {users.length > 0 ? (
        <S.Ul>
          {users.map(user => (
            <S.Li key={user._id}>
              <S.AvatarImg src={user.avatar} alt={user.name} />
              <S.Footer>
                <S.Strong>{user.name}</S.Strong>
                <S.P>{user.bio}</S.P>
              </S.Footer>
              <S.ButtonsContainer>
                <S.ChooseButton
                  type="button"
                  onClick={() => handleDislike(user._id)}
                >
                  <S.ChooseButtonImg src={dislike} alt="Dislike" />
                </S.ChooseButton>
                <S.ChooseButton
                  type="button"
                  onClick={() => handleLike(user._id)}
                >
                  <S.ChooseButtonImg src={like} alt="Like" />
                </S.ChooseButton>
              </S.ButtonsContainer>
            </S.Li>
          ))}
        </S.Ul>
      ) : (
        <S.EmptyUsers>Nenhum dev encontrado :/ </S.EmptyUsers>
      )}
    </S.Container>
  );
};

export default Main;
