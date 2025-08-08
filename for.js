//Listar os numeros de 1 a 20
console.log("Listando de 1 a 20");
for (let i = 1; i <= 20; i++) {
    console.log(i);
}

// Criando um investimento para Ayla
let inventario = ["Poção", "Espada de Fogo", "Mapa Antigo", "Chave Dourada", "Anel da Invisibilidade"];

// Mostrando os itens do inventario
console.log("Inventario de Ayla");
// com length nós pagamos o tamanho exato do array
for (let i = 0; i < inventario.length; i++) {
    console.log(`- ${inventario}`);
}