import { useEffect, useState } from "react"
import { carregaProdutores } from "../../../servicos/carregaDados"
import { FlatList, Image, Text, View } from "react-native"

export default function produtores() {
    const [titulo, setTitulo] = useState("")
    const [lista, setLista] = useState([])

    useEffect(() => {
        const retorno = carregaProdutores()
        setTitulo(retorno.titulo)
        setLista(retorno.lista)
    }, [])

    return <FlatList
    data={lista}
    renderItem={({item: {nome}}) => <Text>{nome}</Text>}
    keyExtractor={({nome}) => nome}

    />
}