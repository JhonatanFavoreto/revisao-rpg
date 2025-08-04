// 1. Criação das Variáveis Principais
let nome = "Guts"
let classe = "Berserker"
let nivel = 320
let vida = 100
let ouro = 50
let xp = 1200
let pocaoVida = 0
let encantamento = 0 
let vidaAtualizada = 0
let xpAtualizado = 0
let xpGanho = 0

// 2. Definição de Constantes Mágicas
const NOME_ARMA = "Dragon Slayer";
const DANO_BASE = 250;
const NOME_ARMADURA = "Armadura Berserker"
const DEFESA_BASE = 500

console.log("Início da jornada de " + nome);
console.log(`Nível: ${nivel} | XP: ${xp} | Ouro: ${ouro} | Vida: ${vida}`);

// 3. Aplicação de Operadores de Atribuição
xpGanho = 150;
ouro -= 30;
vida -= 45;
xpFinal = xpGanho + xp
pocaoVida = 40
vidaAtualizada = pocaoVida + vida
encantamento = DANO_BASE *2 

// 4. Cálculo de Atributos Finais
ataqueTotal = nivel + DANO_BASE
defesaTotal = DEFESA_BASE + (nivel / 2)

// 5. Avaliação de Prontidão com Operadores Lógicos
vidaSuficiente = vida > 70
ataqueForte = ataqueTotal > 60
nivelAvancado = nivel >= 10
podeEnfrentarGuardiao = vidaSuficiente && (ataqueForte || nivelAvancado)

// 6. Geração da Lore do Personagem (acabar)

console.log(`LORE DO HÉROI: ${nome}`);
console.log(`${nome} da classe ${classe}, com o level ${nivel}, buscou treinar durante 15 horas, ganhando cerca de ${xpGanho} de xp, tendo agora um total de ${xpFinal} de xp.`);
console.log(`Usando a arma ${NOME_ARMA} e com a ${NOME_ARMADURA}, eliminou diversos inimigos, mas com isso perdeu uma pequena parte de seu life, agora tendo ${vida} pontos de vida.`)
console.log(`Em desespero, ${nome} usou poção de cura, recuperando ${pocaoVida}.`)
console.log(`Agora tendo ${vidaAtualizada} pontos de life, ${nome} buscou fazer uma caminhada e medidar no campo.`)
console.log(`Contudo, ${nome} acabou dormindo e entrando em um profundo pesadelo.`)
console.log(`Neste pesadelo, teve revelações sobre o final de sua vida.`)
console.log(`Mas quando acordou, viu que era um pesadelo e DESISTIU DE SUA VIDA.`)
console.log(`Mas a furia que estava sem seu coração o encorajou, buscando agora eliminar os guardiões dos sonhos.`)
console.log(`${nome}, treinou mais 500 horas sem parar.`)
console.log(`${nome}, tirou a conclusão que desbloquiou seu potêncial, e que agora derrotaria todos os inimigos pela frente.`)

console.log(`Vida suficiente? ${vidaSuficiente} | Ataque forte? ${ataqueForte} | Nível avançado? ${nivelAvancado}`);
console.log(`Pode enfrentar o Guardião? ${podeEnfrentarGuardiao}`);