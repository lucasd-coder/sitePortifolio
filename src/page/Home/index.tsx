import React from 'react';

import {
  IoLogoJavascript,
  IoLogoCss3,
  IoLogoNodejs,
  IoLogoLinkedin,
} from 'react-icons/io';

import { DiPostgresql, DiMongodb } from 'react-icons/di';
import { SiSpring, SiReact, SiTypescript, SiGithub } from 'react-icons/si';
import { FaDiscord, FaJava } from 'react-icons/fa';

import { Card, Button, CardColumns } from 'react-bootstrap';
import photograph from '../../assets/icons/photograph3.png';
import iconsRect from '../../assets/icons/React.svg';

import Header from '../../components/Header';
import Cards from '../../components/Card';
import TypeWriter from '../../components/TypeWriter';

import {
  Container,
  Phote,
  Linha,
  CardIcon,
  BorderIcon,
  Footer,
  About,
  TitleHabilit,
  TitleProject,
  ContainerFliud,
  LinhaProject,
  RowFluid,
  ColMd,
} from './style';

const Home: React.FC = () => {
  return (
    <Container>
      <Header />
      <main>
        <TypeWriter
          value="Sou Programador Fullstack"
          valas="Ser Programador é uma arte"
        />
        <About>
          <Phote>
            <img src={photograph} alt="Photograph" />
          </Phote>
          <h1>Oi, Me chamo Lucas</h1>
          <p>
            Sou um jovem de São Paulo que gosta de aproveitar a vida, comecei na
            tecnologia reparando hardware do computador com defeito, aos 17 anos
            de idade me tornei Amante da programação depois de uma experiência
            boa como estagiário. esse “mundo” da tecnologia é muito massa.
          </p>
          <span>idade: 22</span>
          <span>Endereço: Jandira - SP</span>

          <h2>Os Cursos em que estou fazendo </h2>

          <h3>Analise e Desenvolvimento de Sistemas</h3>
          <p>
            O Curso Superior de Tecnologia em Análise e Desenvolvimento de
            Sistemas tem o objetivo de capacitar o aluno a projetar, documentar,
            especificar, implementar, testar, implantar e manter sistemas
            computacionais de informação. Para tanto, o aluno utiliza modernas
            ferramentas computacionais, bem como métodos e técnicas avançadas
            para projetos aplicados durante todo o ciclo de desenvolvimento de
            sistemas, e conta, ainda, com professores altamente qualificados.
          </p>

          <h3>Bootcamp GoStack</h3>
          <p>
            O GoStack é um treinamento online, prático e intensivo. No GoStack o
            aluno vai a fundo nas tecnologias NodeJS, ReactJS e React Native e
            todo o ecossistema ao redor dessas ferramentas, do zero ao deploy.
            Incluindo testes automatizados, integração contínua, publicação nas
            stores e todas as bibliotecas e frameworks importantes para quem
            deseja ficar pronto para os desafios do mundo real e se destacar no
            mercado de trabalho. No GoStack os módulos são liberados semana a
            semana de acordo com o cronograma da turma, utilizando o nosso
            método para te dar segurança e mostrar que você está assimilando
            todos os conceitos através de exercícios e desafios.
          </p>
        </About>

        <TitleHabilit>
          As stacks que me interessa e quero aprender mais sobre
        </TitleHabilit>
        <Linha>
          <ContainerFliud>
            <RowFluid>
              <ColMd>
                <Cards>
                  <BorderIcon backgroundCard="#3dc0dc">
                    <CardIcon>
                      <img src={iconsRect} alt="React" />
                    </CardIcon>
                  </BorderIcon>
                  <p>ReactJS</p>
                </Cards>
              </ColMd>
              <ColMd>
                <Cards>
                  <BorderIcon backgroundCard="#f6da3a">
                    <IoLogoJavascript size={50} />
                  </BorderIcon>
                  <p>JavaScript</p>
                </Cards>
              </ColMd>
              <ColMd>
                <Cards>
                  <BorderIcon backgroundCard="#2965f1">
                    <IoLogoCss3 size={50} />
                  </BorderIcon>
                  <p>CSS3</p>
                </Cards>
              </ColMd>
              <ColMd>
                <Cards>
                  <BorderIcon backgroundCard="#3178c6">
                    <SiTypescript size={50} />
                  </BorderIcon>
                  <p>TypeScript</p>
                </Cards>
              </ColMd>
              <ColMd>
                <Cards>
                  <BorderIcon backgroundCard="#617afc">
                    <SiReact size={50} />
                  </BorderIcon>
                  <p>React Native</p>
                </Cards>
              </ColMd>
              <ColMd>
                <Cards>
                  <BorderIcon backgroundCard="#ebebeb">
                    <FaJava size={50} color="#05738c" />
                  </BorderIcon>
                  <p>Java</p>
                </Cards>
              </ColMd>
              <ColMd>
                <Cards>
                  <BorderIcon backgroundCard="#8cc84b">
                    <IoLogoNodejs size={50} />
                  </BorderIcon>
                  <p>NodeJS</p>
                </Cards>
              </ColMd>
              <ColMd>
                <Cards>
                  <BorderIcon backgroundCard="#336791">
                    <DiPostgresql size={50} />
                  </BorderIcon>
                  <p>PostgreSQL</p>
                </Cards>
              </ColMd>
              <ColMd>
                <Cards>
                  <BorderIcon backgroundCard="#116149">
                    <DiMongodb size={50} color="#13aa52" />
                  </BorderIcon>
                  <p>MongoDB</p>
                </Cards>
              </ColMd>
              <ColMd>
                <Cards>
                  <BorderIcon backgroundCard="#fff">
                    <SiSpring size={50} color="#6DB33F" />
                  </BorderIcon>
                  <p>Spring Boot</p>
                </Cards>
              </ColMd>
            </RowFluid>
          </ContainerFliud>
        </Linha>

        <TitleProject>Meus Projetos</TitleProject>

        <LinhaProject>
          <CardColumns>
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title style={{ color: '#000' }}>
                  Projeto-Spring
                </Card.Title>
                <Card.Text style={{ color: '#000' }}>
                  Projeto-Spring é projeto pequeno que contém o Backend com 3
                  rotas, rotas GET games e uma rota paginada records e uma única
                  rota POST records que recebe no body name, age, gameId. Esse
                  pequeno projeto tem o Backend, front-mobile, front-web.
                </Card.Text>
                <Button
                  target="_blank"
                  href="https://github.com/lucasd-coder/Projeto-Spring"
                >
                  Visitar no Github
                </Button>
              </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title style={{ color: '#000' }}>
                  Api_rest_Gerencia_alunos
                </Card.Title>
                <Card.Text style={{ color: '#000' }}>
                  Uma API REST simples para consumo de dados Atividade da
                  faculdade criar um CRUD (Create Read Update Delete) para
                  consumir em um frontend
                </Card.Text>
                <Button
                  target="_blank"
                  href="https://github.com/lucasd-coder/Api_rest_Gerencia_alunos"
                >
                  Visitar no Github
                </Button>
              </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title style={{ color: '#000' }}>
                  Frontend_api_rest_Gerencia_alunos
                </Card.Title>
                <Card.Text style={{ color: '#000' }}>
                  Frontend-web para consumir o Backend Api_rest_Gerencia_alunos
                  primeiro projeto ReactJS com styled-components.
                </Card.Text>
                <Button
                  target="_blank"
                  href="https://github.com/lucasd-coder/Frontend_api_rest_Gerencia_alunos"
                >
                  Visitar no Github
                </Button>
              </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title style={{ color: '#000' }}>
                  pim_unip_2020_backend
                </Card.Title>
                <Card.Text style={{ color: '#000' }}>
                  Backend feito para projeto integral multidisciplinar semestral
                  da unip, ideia é gerenciar operações de uma casa de câmbio
                  tecnologias usadas Spring-boot, Spring-security para login.
                </Card.Text>
                <Button
                  target="_blank"
                  href="https://github.com/lucasd-coder/pim_unip_2020_backend"
                >
                  Visitar no Github
                </Button>
              </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title style={{ color: '#000' }}>
                  pim_2020_unip_frontend
                </Card.Title>
                <Card.Text style={{ color: '#000' }}>
                  Frontend para consumir o Backend pim_unip_2020_backend,
                  consiste em telas cadastro, login, troca de senha, listagem de
                  produtos e de realizar um pedido.
                </Card.Text>
                <Button
                  target="_blank"
                  href="https://github.com/lucasd-coder/pim_2020_unip_frontend"
                >
                  Visitar no Github
                </Button>
              </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title style={{ color: '#000' }}>
                  desafio_conceitos_react_native
                </Card.Title>
                <Card.Text style={{ color: '#000' }}>
                  desafio_conceitos_react_native, consiste em desafio nos
                  conceitos de react-native no desenvolvimento mobile.
                </Card.Text>
                <Button
                  target="_blank"
                  href="https://github.com/lucasd-coder/desafio_conceitos_react_native"
                >
                  Visitar no Github
                </Button>
              </Card.Body>
            </Card>
          </CardColumns>
        </LinhaProject>

        <Footer>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/lucasd-coder"
          >
            <SiGithub size={35} />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://discord.gg/F7nfTWKj"
          >
            <FaDiscord size={35} color="#fff" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://linkedin.com/in/lucas-da-rocha-silva-ba736813a"
          >
            <IoLogoLinkedin size={40} color="#fff" />
          </a>
          <p>© 2021 - Lucas da Rocha Silva</p>
        </Footer>
      </main>
    </Container>
  );
};

export default Home;
