import { useEffect, useState } from "react"
import { FlatList, Image, StyleSheet, Text, View } from "react-native"

import { carregaProdutores } from "../../../servicos/carregaDados"
import Produtor from "./Produtor"

import estrela from "../../../assets/estrela.png"
import estrelaCinza from "../../../assets/estrelaCinza.png"

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
        renderItem={({item}) => <Produtor{...item} />}
        keyExtractor={({ nome }) => nome}

    />
}

const estilos = StyleSheet.create({
    produtor: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    informacoes: {
        justifyContent: "space-between"
    }
})