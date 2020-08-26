import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no GitHub</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/36796278?s=460&u=136f1a74986a2c656cf7cc8b5139f18d165f46bf&v=4"
            alt="Marcelo Buongermino"
          />
          <div>
            <strong>rocketseat/reactjs</strong>
            <p>Lorem ipsum</p>
          </div>
          <FiChevronRight size="20" />
        </a>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/36796278?s=460&u=136f1a74986a2c656cf7cc8b5139f18d165f46bf&v=4"
            alt="Marcelo Buongermino"
          />
          <div>
            <strong>rocketseat/reactjs</strong>
            <p>Lorem ipsum</p>
          </div>

          <FiChevronRight size="20" />
        </a>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/36796278?s=460&u=136f1a74986a2c656cf7cc8b5139f18d165f46bf&v=4"
            alt="Marcelo Buongermino"
          />
          <div>
            <strong>rocketseat/reactjs</strong>
            <p>Lorem ipsum</p>
          </div>

          <FiChevronRight size="20" />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
