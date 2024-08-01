export const ContatoConteuto = () => {
    return(
        <>
        <main>

            <section className="contato">

                <picture>
                    <img src="dist/imgs/contato.jpg" alt="Cadeira" />
                </picture>

                <div className="container">

                    <div className="formulario">
                        <form action="javascript:void(0);" method="post" enctype="multipart/form-data">
                            <h2>Novo Produto</h2>
                            <label for="nome">Nome</label>
                            <input type="text" name="nome" id="nome" required />
                            <label for="preco">Preço</label>
                            <input type="text" name="preco" id="preco" required />
                            <label for="descricao">Descrição</label>
                            <input type="text" name="descricao" id="descricao" required />
                            <label for="file">Imagem</label>
                            <input type="file" name="file" id="file" required />
                            <button type="submit">Enviar</button>
                        </form>
                    </div>

                </div>

            </section>
            
        </main>
        </>
    )
}