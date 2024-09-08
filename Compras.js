//Esse estudo foi feito para simular a comrpa de produtos, podendo ser diferenciados se é importado ou fragil, tendo também funções de desconto. Essa atividade foi feita por mim Nicolas Matheus Ferreira de Jesus, juntamente com meu amigo de turma Rafael Machado.

const carrinho = [
    { nome: 'oscar', qtde:1, preco: 10, fragil: false, impor: true},
    { nome: 'Caneta', qtde: 10, preco: 7.99, fragil: true, impor: false },
    { nome: 'Impressora', qtde: 1, preco: 649.50, fragil: true, impor: true },
    { nome: 'Caderno', qtde: 4, preco: 27.10, fragil: false, impor: false },
    { nome: 'Lapis', qtde: 3, preco: 5.82, fragil: false, impor: false },
    { nome: 'Tesoura', qtde: 1, preco: 19.20, fragil: true, impor: false },
    { nome: 'papel', qtde:1, preco: 500, fragil: false, impor: true},
]

const todos = (p1,p2,p3,p4,p5,p6,p7) => 
    p1.qtde * p1.preco +
    p2.qtde * p2.preco +
    p3.qtde * p3.preco +
    p4.qtde * p4.preco +
    p5.qtde * p5.preco

const frageis = (p1,p2,p3,p4,p5,p6,p7) => {
    const parcial1 = p1.fragil ? p1.qtde * p1.preco : 0
    const parcial2 = p2.fragil ? p2.qtde * p2.preco : 0
    const parcial3 = p3.fragil ? p3.qtde * p3.preco : 0
    const parcial4 = p4.fragil ? p4.qtde * p4.preco : 0
    const parcial5 = p5.fragil ? p5.qtde * p5.preco : 0
    return parcial1 + parcial2 + parcial3 + parcial4 + parcial5
}

const desc = (d=0) => (valor) => (1 - d)*valor
const desc10 = desc(0.1)
const desc5 = desc(0.05)

const imported = f=>(p1,p2,p3,p4,p5,p6,p7) => {
    const imported1 = p1.impor ? p1.qtde * p1.preco : f(p1.qtde * p1.preco)
    const imported2 = p2.impor ? p2.qtde * p2.preco : f(p2.qtde * p2.preco)
    const imported3 = p3.impor ? p3.qtde * p3.preco : f(p3.qtde * p3.preco)
    const imported4 = p4.impor ? p4.qtde * p4.preco : f(p4.qtde * p4.preco)
    const imported5 = p5.impor ? p5.qtde * p5.preco : f(p5.qtde * p5.preco)
    const imported6 = p6.impor ? p6.qtde * p6.preco : f(p6.qtde * p6.preco)
    const imported7 = p7.impor ? p7.qtde * p7.preco : f(p7.qtde * p7.preco)
    return imported1 + imported2 + imported3 + imported4 + imported5
}

const imported2 = (p1,p2,p3,p4,p5,p6,p7) => {
    const imported1 = p1.impor ? 0 : p1.qtde * p1.preco
    const imported2 = p2.impor ? 0 : p2.qtde * p2.preco
    const imported3 = p3.impor ? 0 : p3.qtde * p3.preco
    const imported4 = p4.impor ? 0 : p4.qtde * p4.preco
    const imported5 = p5.impor ? 0 : p5.qtde * p5.preco
    const imported6 = p6.impor ? 0 : p6.qtde * p6.preco
    const imported7 = p7.impor ? 0 : p7.qtde * p7.preco
    return imported1 + imported2 + imported3 + imported4 + imported5+imported6+imported7
}
const calcular = (fdesc) => (fcalc) => (p1,p2,p3,p4,p5,p6,p7) => fdesc(fcalc(p1,p2,p3,p4,p5,p6,p7))

const res1 = calcular(desc10)(todos)(carrinho[0],carrinho[1],carrinho[2],carrinho[3],carrinho[4],carrinho[5],carrinho[6])
const res2 = calcular(desc5)(frageis)(carrinho[0],carrinho[1],carrinho[2],carrinho[3],carrinho[4],carrinho[5],carrinho[6])
const res3 = calcular(desc())(todos)(carrinho[0],carrinho[1],carrinho[2],carrinho[3],carrinho[4],carrinho[5],carrinho[6])
const res4 = calcular(desc())(imported(desc(0.5)))(carrinho[0],carrinho[1],carrinho[2],carrinho[3],carrinho[4],carrinho[5],carrinho[6])

console.log(`Valor total sem desconto é ${res3}!`)
console.log(`valor total com desconto de itens importadosé ${res4}!`)