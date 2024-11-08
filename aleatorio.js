const nomes = ["Larissa", "Julia", "Joao", "Isabella", "Diogo", "Sonia", "Manuela", "Amanda", "Diego", "Ilana"];



export function aleatorio(lista){
    const posicao = Math.floor(Math.random()*lista.length)
    return lista [posicao];
}

export const nome = aleatorio (nomes)