import { useContext, useEffect, useState } from "react"
import { Header } from "../components/Header"
import { ProdutosConteuto } from "../components/ProdutosConteudo"
import { ProdutoContext } from "../contexts/produtoContext"
import { Link, useNavigate } from "react-router-dom"
import useFetch from "../hooks/useFetch"

function Produtos() {
    const [data, request] = useFetch("http://localhost:3001/products")
    const produtoContext = useContext(ProdutoContext)
    produtoContext.setProdutos(data)
  

    useEffect(() => {
        request()
    }, [request])
    return (
        <>
            <Header title={"Produtos"} />
            
            <ProdutosConteuto data={data} />        
        </>
    )
}

export default Produtos