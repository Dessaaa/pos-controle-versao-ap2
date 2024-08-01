import React from "react";

const ProdutoConteudo = ({ produto }) => {
  return (
    <main>
      <section className="produto-detalhe">
        <div className="container">
          <div className="produto">
            <picture>
              <img src={produto.photo_url} alt={produto.name} />
            </picture>
            <div className="infos">
              <h2>{produto.name}</h2>
              <div className="valor">R$ {produto.price}</div>
              <div className="descricao">{produto.description}</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProdutoConteudo;