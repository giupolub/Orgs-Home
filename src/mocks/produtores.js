import green from "../assets/produtores/green.png"
import grow from "../assets/produtores/grow.png"
import jennyJack from "../assets/produtores/jenny-jack.png"
import potager from "../assets/produtores/potager.png"
import salad from "../assets/produtores/salad.png"

const gerarNumeroAleatorio = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + 1)
}

const produtores = {
    titulo: "Produtores",
    lista: [
        {
            imagem: green,
            nome: "Green",
            distancia: `${gerarNumeroAleatorio(1, 500)} m`,
            estrelas: gerarNumeroAleatorio(1, 500),
        }, 
        {
            imagem: grow,
            nome: "Grow",
            distancia: `${gerarNumeroAleatorio(1, 500)} m`,
            estrelas: gerarNumeroAleatorio(1, 500),
        },
        {
            imagem: jennyJack,
            nome: "Jenny Jack",
            distancia: `${gerarNumeroAleatorio(1, 500)} m`,
            estrelas: gerarNumeroAleatorio(1, 500),
        }, 
        {
            imagem: potager,
            nome: "Potager",
            distancia: `${gerarNumeroAleatorio(1, 500)} m`,
            estrelas: gerarNumeroAleatorio(1, 500),
        },
        {
            imagem: salad,
            nome: "Salad",
            distancia: `${gerarNumeroAleatorio(1, 500)} m`,
            estrelas: gerarNumeroAleatorio(1, 500),
        },

    ]
}

export default produtores