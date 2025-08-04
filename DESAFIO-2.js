// 1. Criação das Variáveis Principais
let nome = "Guts"
let classe = "Berserker"
let nivel = 1
let vida = 100
let ouro = 100
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

// === CONTINUAÇÃO DA SUA JORNADA DO NÍVEL 1 ===
// Resgate seus dados do personagem anterior e adicione:

let nomePersonagem = "SEU_NOME_DO_NIVEL_1";
let vidaAtual = 100;
let vidaMaxima = 100;
let manaAtual = 50;
let manaMaxima = 50;
let experiencia = 0;

// Novos atributos para batalha
let forca = 15;
let defesa = 10;
let agilidade = 12;
let combatesVencidos = 0;

// Estado atual da história (continue de onde parou no Nível 1)
let localAtual = "monte_das_almas";
let missaoAtual = "derrotar_boss_final";

/* 2. Estrutura Narrativa Obrigatória 
Prólogo: Recapitule brevemente o que aconteceu no Nível 1 e apresente a nova situação/conflito. */
console.log(`${nome} foi atrás de bosses com level alto, assim que terminou seu treinamento de 500 horas.`)
console.log(`Nessa jornada, ${nome} encontrou o mercador do monte das almas, onde ${nome} buscou comprar uma espada reserva e poções de cura.`)

// Capítulo 1 - Primeira Decisão: Use condicionais simples (if) para reagir a uma situação de perigo ou oportunidade.
if (moeda >= 150) {
    console.log(`${nome} comprou uma espada curta, e cinco poções de cura.`)
}

console.log(`Mas no momento da compra, misteriosamente apareceu goblins em busca de furtar o mercador`)
console.log(`Então, ${nome} buscou combater os goblins, e entrou em batalha.`)
console.log(`Contudo, ${nome} só poderia usar seus ataques especiais se este tivesse um número mimino de mana.`)

if (manaMinimo >= 15) {
    console.log(`${nome}, como tinha o tanto de mana necessário, derrotou os goblins com facilidade.`)
}

console.log(`Mas ${nome} gastou muita mana nesta batalha, levando ele a comprar uma poção de mana no mercador.`)
if (moeda >= 15) {
    console.log(`${nome} comprou uma poção de mana.`)
}