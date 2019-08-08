import styled from 'styled-components';

export const Container = styled.div`
  max-width: 980px;
  margin: 0 auto;
  padding: 50px 0;
  text-align: center;
`;

export const LogoImg = styled.img``;

export const Ul = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
  margin-top: 50px;
`;

export const Li = styled.li`
  display: flex;
  flex-direction: column;
`;

export const AvatarImg = styled.img`
  max-width: 100%;
  border-radius: 5px 5px 0 0;
`;

export const Footer = styled.div`
  flex: 1;
  word-break: break-all;
  background-color: #fff;
  border: 1px solid #eee;
  padding: 15px 20px;
  text-align: left;
  border-radius: 0 0 5px 5px;
`;

export const Strong = styled.strong`
  font-size: 16px;
  color: #333;
`;

export const P = styled.p`
  font-size: 14px;
  line-height: 20px;
  color: #999;
  margin-top: 5px;
`;

export const ButtonsContainer = styled.div`
  margin-top: 10px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
`;

export const ChooseButtonImg = styled.img``;

export const ChooseButton = styled.button`
  height: 50px;
  box-shadow: 0 2px 2px 0 rgb(0, 0, 0, 0.05);
  border: 0;
  border-radius: 4px;
  background-color: #fff;
  cursor: pointer;

  :hover ${ChooseButtonImg} {
    transform: translateY(-5px);
    transition: all 0.2s;
  }
`;

export const EmptyUsers = styled.div`
  font-size: 32px;
  color: #999;
  font-weight: bold;
  margin-top: 300px;
`;
