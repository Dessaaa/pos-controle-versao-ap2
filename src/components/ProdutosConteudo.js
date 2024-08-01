import { Link } from "react-router-dom"

export const ProdutosConteuto = ({ data }) => {
    return(
        <main>

            <section className="produtos">
                <div className="container">
                { data && data.map((produto) => (
                    <Link to={`/produto/${produto.id}`} key={produto.id}>
                        <picture>
                            <img src={produto.photo_url} alt={produto.name} />
                        </picture>
                        <div className="infos">
                            <h2>{produto.name}</h2>
                            <div>R$ {produto.price}</div>
                        </div>
                    </Link>
                    ))}
                </div>
            </section>
            
        </main>
    )
}