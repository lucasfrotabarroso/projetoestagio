import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../componentes/Button";
import useAuth from "../../hooks/useAuth";
import * as C from "./styles";
import corpvslogo from '../../imagens/corpvs login.png'
const Home = () => {
  const { signout } = useAuth();
  const navigate = useNavigate();

  return (
    <C.Container>
      <C.Title>BEM VINDO AO SISTEMA CORPVS</C.Title>
      <img src ={corpvslogo}/>
      <Button Text="Sair" onClick={() => [signout(), navigate("/")]}>
        Sair
      </Button>
    </C.Container>
  );
};

export default Home;