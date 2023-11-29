
let classificacao = ""

const saldoRanqueadas = (vitorias, derrotas) => {
    if (vitorias < 10) {
        classificacao = "Ferro"
        return `O herói tem saldo de ${vitorias} vitórias e está no nível ${classificacao}`
    } else if ((vitorias > 10) && (vitorias <= 20)) {
        classificacao = "Bronze"
        return `O herói tem saldo de ${vitorias} vitórias e está no nível ${classificacao}`
    }  else if ((vitorias > 20) && (vitorias <= 50)) {
        classificacao = "Prata"
        return `O herói tem saldo de ${vitorias} vitórias e está no nível ${classificacao}`
    }  else if ((vitorias > 50) && (vitorias <= 80)) {
        classificacao = "Ouro"
        return `O herói tem saldo de ${vitorias} vitórias e está no nível ${classificacao}`
    }  else if ((vitorias > 80) && (vitorias <= 90)) {
        classificacao = "Diamante"
        return `O herói tem saldo de ${vitorias} vitórias e está no nível ${classificacao}`
    } else if ((vitorias > 90) && (vitorias <= 100)) {
        classificacao = "Lendário"
        return `O herói tem saldo de ${vitorias} vitórias e está no nível ${classificacao}`
    } else {
        classificacao = "Imortal"
        return `O herói tem saldo de ${vitorias} vitórias e está no nível ${classificacao}`
    }
}

console.log(saldoRanqueadas(96, 37))