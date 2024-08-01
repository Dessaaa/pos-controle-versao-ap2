import { Link } from "react-router-dom"

export const Header = ({title}) => {
    return(
        <header>
            <nav>
                <div className="inicio">
                    <a href="/">{title}</a>
                </div>
                <div className="menu">
                    <ul>
                        <li><Link to={"/"}>Home</Link></li>
                        <li><Link to={"/produtos"}>Produtos</Link></li>
                        <li><Link to={"/contato"}>Contato</Link></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}