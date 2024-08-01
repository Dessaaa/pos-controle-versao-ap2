import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import ProdutoConteudo from "../components/ProdutoConteudo";
import { ProdutoContext } from "../contexts/produtoContext";

const Produto = () => {
  const { id } = useParams();
  const { produtos } = useContext(ProdutoContext);

  const produto = produtos.find((p) => p.id === id);

  if (!produto) {
    return <div>Produto não encontrado</div>;
  }

  return (
    <>
      <Header title={produto.name} />
      <ProdutoConteudo produto={produto} />
    </>
  );
};

export default Produto;