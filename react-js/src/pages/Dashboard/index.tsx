import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Dashboard</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="">
          <img
            src="https://avatars1.githubusercontent.com/u/45099648?s=460&u=b503a229f171a530bd33450bb834a763122dd4e7&v=4"
            alt="My Profile"
          />
          <div>
            <strong>atirson/gostack</strong>
            <p>
              O GoStack é um curso oferecido pela RocketSeat onde trazem 100%
              prática e do jeito certo, ou seja as metodologias aplicadas são
              totalmente alinhadas com que o mercado de trabalho exige. As
              stacks são NodeJS, ReactJS e React Native.
            </p>
          </div>

          <FiChevronRight size={80} />
        </a>

        <a href="">
          <img
            src="https://avatars1.githubusercontent.com/u/45099648?s=460&u=b503a229f171a530bd33450bb834a763122dd4e7&v=4"
            alt="My Profile"
          />
          <div>
            <strong>atirson/gostack</strong>
            <p>
              O GoStack é um curso oferecido pela RocketSeat onde trazem 100%
              prática e do jeito certo, ou seja as metodologias aplicadas são
              totalmente alinhadas com que o mercado de trabalho exige. As
              stacks são NodeJS, ReactJS e React Native.
            </p>
          </div>

          <FiChevronRight size={80} />
        </a>

        <a href="">
          <img
            src="https://avatars1.githubusercontent.com/u/45099648?s=460&u=b503a229f171a530bd33450bb834a763122dd4e7&v=4"
            alt="My Profile"
          />
          <div>
            <strong>atirson/gostack</strong>
            <p>
              O GoStack é um curso oferecido pela RocketSeat onde trazem 100%
              prática e do jeito certo, ou seja as metodologias aplicadas são
              totalmente alinhadas com que o mercado de trabalho exige. As
              stacks são NodeJS, ReactJS e React Native.
            </p>
          </div>

          <FiChevronRight size={80} />
        </a>

        <a href="">
          <img
            src="https://avatars1.githubusercontent.com/u/45099648?s=460&u=b503a229f171a530bd33450bb834a763122dd4e7&v=4"
            alt="My Profile"
          />
          <div>
            <strong>atirson/gostack</strong>
            <p>
              O GoStack é um curso oferecido pela RocketSeat onde trazem 100%
              prática e do jeito certo, ou seja as metodologias aplicadas são
              totalmente alinhadas com que o mercado de trabalho exige. As
              stacks são NodeJS, ReactJS e React Native.
            </p>
          </div>

          <FiChevronRight size={80} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
