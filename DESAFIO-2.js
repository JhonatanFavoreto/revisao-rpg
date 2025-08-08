// 1. Criação das Variáveis Principais
let nomePersonagem = "Guts";
let classe = "Berserker";
let vidaAtual = 55;    // valor pós poção no nível 1
let vidaMaxima = 100;
let manaAtual = 40;
let manaMaxima = 50;
let nivel = 1;
let experiencia = 1350; // xp do nível 1 + ganho
let ouro = 70;

// 2. Definição de Constantes Mágicas
const NOME_ARMA = "Dragon Slayer";
const DANO_BASE = 250;
const NOME_ARMADURA = "Armadura Berserker";
const DEFESA_BASE = 500;

console.log("Início da jornada de " + nomePersonagem);
console.log(`Nível: ${nivel} | XP: ${experiencia} | Ouro: ${ouro} | Vida: ${vidaAtual}`);

// 3. Aplicação de Operadores de Atribuição
let xpGanho = 150;
let xpAtualizado = experiencia + xpGanho;
ouro -= 30;
vidaAtual -= 45;
let pocaoVida = 40;
let vidaAtualizada = vidaAtual + pocaoVida;
let encantamento = DANO_BASE * 2;

// 4. Cálculo de Atributos Finais
let ataqueTotal = nivel + DANO_BASE;
let defesaTotal = DEFESA_BASE + (nivel / 2);

// 5. Avaliação de Prontidão com Operadores Lógicos
let vidaSuficiente = vidaAtual > 70;
let ataqueForte = ataqueTotal > 60;
let nivelAvancado = nivel >= 10;
let podeEnfrentarGuardiao = vidaSuficiente && (ataqueForte || nivelAvancado);

// 6. Geração da Lore do Personagem
console.log("LORE DO HERÓI");
console.log(`${nomePersonagem}, o ${classe} solitário, acorda nas ruínas de Algorithmia.`);
console.log(`A lendária ${NOME_ARMA}, carrega um poder destrutivo de ${encantamento} pontos de dano.`);
console.log(`Sua armadura, ${NOME_ARMADURA}, oferece ${defesaTotal} pontos de resistência.`);
console.log(`Após treinar por 15 horas, conquistou ${xpGanho} de experiência, somando agora ${xpAtualizado} de XP.`);
console.log(`Durante uma emboscada, perdeu parte de sua vida, ficando com ${vidaAtual} pontos. Felizmente, usou uma poção e se recuperou para ${vidaAtualizada} de vida.`);
console.log(`Mesmo com apenas nível ${nivel}, seu ataque total chegou a ${ataqueTotal} pontos, amedrontando os seres sombrios.`);
console.log(`${nomePersonagem} agora possui ${ouro} moedas restantes.`);
console.log(`Com sangue nos olhos, ele se prepara para desafiar o Guardião dos Pesadelos.`);
console.log(`Vida suficiente? ${vidaSuficiente} | Ataque forte? ${ataqueForte} | Nível avançado? ${nivelAvancado}`);
console.log(`Pode enfrentar o Guardião? ${podeEnfrentarGuardiao} | O destino será reescrito!`);

// === CONTINUAÇÃO DA SUA JORNADA DO NÍVEL 1 ===

// Novos atributos para batalha
let forca = 15;
let defesa = 10;
let agilidade = 12;
let combatesVencidos = 0;

// Estado atual da história
let localAtual = "Monte das Almas";
let missaoAtual = "Derrotar o Boss Final";

// Variáveis auxiliares para decisões
let poderInimigo = 30;

console.log("CONTINUAÇÃO DA JORNADA");
console.log(`Após os eventos no ${localAtual}, ${nomePersonagem}, o ${classe}, estava de frente de um novo desafio.`);
console.log(`Com ${vidaAtual} de vida e ${manaAtual} de mana, a jornada para ${missaoAtual} está mais difícil para ${nomePersonagem}.`);
console.log(`Com ${ouro} moedas que sobraram e experiência de ${xpAtualizado}, buscou elaborar uma estratégia...`);

console.log("CAPÍTULO 1: Aviso dos Anciões");

// Condicionais simples (correção de variáveis)
let manaMinimo = 15;
let moeda = ouro;

// Decisão de compra
if (moeda >= 150) {
    console.log(`${nomePersonagem} comprou uma espada curta e cinco poções de cura.`);
} else {
    console.log(`${nomePersonagem} não tinha moedas suficientes para comprar novos itens.`);
}

console.log(`No momento da compra, misteriosamente apareceram goblins em busca de furtar o mercador.`);
console.log(`Então, ${nomePersonagem} buscou combater os goblins e entrou em batalha.`);
console.log(`Contudo, ${nomePersonagem} só poderia usar seus ataques especiais se tivesse mana suficiente.`);

// Uso de ataque especial
if (manaAtual >= manaMinimo) {
    console.log(`${nomePersonagem}, com a mana necessária, derrotou os goblins com facilidade usando ataques especiais.`);
    manaAtual -= manaMinimo;
} else {
    console.log(`${nomePersonagem} não tinha mana suficiente e precisou lutar com ataques básicos.`);
}

// Decisão de comprar poção de mana
if (moeda >= 15) {
    console.log(`${nomePersonagem} comprou uma poção de mana para se recuperar após a batalha.`);
    manaAtual += 20;
    moeda -= 15;
} else {
    console.log(`${nomePersonagem} não tinha moedas suficientes para comprar uma poção de mana.`);
}

// Atualização de status
console.log(`Mana atual: ${manaAtual}`);
console.log(`Moedas restantes: ${moeda}`);

// CAPÍTULO 1: Condicionais Simples - O Aviso dos Anciões
console.log("CAPÍTULO 1: O Aviso dos Anciões");

if (nivel < 3) {
  console.log(`Um ancião adverte: "Você ainda é jovem demais para esta missão, ${nomePersonagem}!"`);
  console.log(`Mas ${nomePersonagem} ignora e decide prosseguir com sua coragem.`);
}

if (ouro >= 50) {
  console.log(`As moedas no bolso de ${nomePersonagem}, atraindo o olhar em busca de mais.`);
}

if (classe === "Mago") {
  console.log(`A energia mágica flui através das veias de ${nomePersonagem}, pronta para ser canalizada.`);
} else {
  console.log(`O poder físico de ${nomePersonagem} é sua maior arma.`);
}

// CAPÍTULO 2: Condicionais Compostas - A Encruzilhada
console.log("CAPÍTULO 2: A Encruzilhada");

// Decisão baseada no ouro para comprar equipamentos
if (ouro >= 50) {
  console.log(`Com ouro suficiente, ${nomePersonagem} compra equipamentos melhores!`);
  forca += 5;
  defesa += 3;
  ouro -= 50;
  console.log(`Força aumentada para ${forca} e defesa para ${defesa}. Ouro restante: ${ouro}`);
} else {
  console.log(`Sem ouro suficiente, ${nomePersonagem} deve confiar apenas em suas habilidades!`);
  console.log(`A adversidade fortalece o espírito! Agilidade aumentada em 2 pontos.`);
  agilidade += 2;
}

// Decisão baseada na experiência para evolução
if (experiencia >= 1000) {
  console.log(`A sabedoria acumulada se manifesta! ${nomePersonagem} sobe para o nível 2.`);
  nivel++;
  experiencia -= 1000;
  vidaAtual = vidaMaxima; // restaura vida ao subir de nível
  console.log(`Vida restaurada para ${vidaAtual}. Experiência restante: ${experiencia}\n`);
} else {
  console.log(`${nomePersonagem} ainda busca mais conhecimento e experiência.`);
  console.log(`Experiência atual: ${experiencia}/1000`);
}

// CAPÍTULO 3: Condicionais Encadeadas - A Batalha Decisiva
console.log("⚔️ CAPÍTULO 3: A Batalha Decisiva");

if (vidaAtual <= 30) {
  console.log(`Com pouca vida, ${nomePersonagem} usa uma tática desesperada!`);
  console.log("Ataque final com toda a força restante!");
  poderInimigo -= (forca * 2);
} else if (manaAtual >= 30 && classe === "Mago") {
  console.log(`${nomePersonagem} canaliza todo seu poder mágico!`);
  console.log("Uma magia devastadora");
  poderInimigo -= (forca + 20);
  manaAtual -= 30;
} else if (agilidade >= 15) {
  console.log(`Com grande agilidade, ${nomePersonagem} executa um ataque critico`);
  poderInimigo -= forca;
} else {
  console.log(`Luta defensiva e calculada!`);
  poderInimigo -= (forca / 2);
  vidaAtual += 10;
}

console.log(`Poder do inimigo restante: ${poderInimigo}`);

// EPÍLOGO - Consequências das decisões
if (poderInimigo <= 0) {
  console.log(`VITÓRIA ÉPICA! ${nomePersonagem} ganhou a batalha`);
  experiencia += 500;
  combatesVencidos++;
  console.log(`Experiência aumentada para ${experiencia}. Combates vencidos: ${combatesVencidos}`);
} else {
  console.log(`A batalha foi dura, mas ${nomePersonagem} sobrevive para lutar outro dia.`);
}

console.log("FIM DO CAPÍTULO - Prepare-se para o próximo nível da aventura!");