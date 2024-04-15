INSTRUÇÕES:

Execute o comando npm install dentro dos diretórios backend e ui separadamente para instalar as dependências necessárias.
Dentro diretório backend, use o comando npm start para executar o backend e em seguida faça o mesmo dentro do diretório ui.

PREMISSAS: 

Meu Canino Feliz: Está distante 2km do canil. Em dias de semana o banho para
cães pequenos custa R$20,00 e o banho em cães grandes custa R$40,00.
Durante os finais de semana o preço dos banhos é aumentado em 20%.

Vai Rex: Está localizado na mesma avenida do canil, a 1,7km. O preço do banho
para dias úteis em cães pequenos é R$15,00 e em cães grandes é R$50,00.
Durante os finais de semana o preço para cães pequenos é R$ 20,00 e para os
grandes é R$ 55,00.

ChowChawgas: Fica a 800m do canil. O preço do banho é o mesmo em todos os
dias da semana. Para cães pequenos custa R$30 e para cães grandes R$45,00


O problema proposto é sobre a escolha do melhor petshop para levar os cães, levando em consideração os preços dos banhos e a distância dos petshops em relação ao canil. 
O melhor petshop é definido como aquele que oferece os menores preços, e em caso de empate, o mais próximo do canil é escolhido. 
A entrada consiste na data da consulta, quantidade de cães pequenos e quantidade de cães grandes. A saída deve conter o nome do melhor petshop e o preço total dos banhos.

DECISÕES DE PROJETO:

Comunicação com o servidor back-end: A aplicação front-end se comunica com o servidor back-end através de requisições HTTP utilizando o método POST para enviar os dados para análise e receber a resposta com a melhor opção de petshop. 
Isso permite uma arquitetura cliente-servidor, onde o back-end é responsável pelo processamento das informações e o front-end pela apresentação dos resultados.

Tratamento de entrada do usuário: A função handleInputChange trata a entrada do usuário, atualizando o estado inputValue com o valor do input do formulário. 
Isso garante que os dados inseridos pelo usuário sejam capturados corretamente antes de serem enviados para o back-end.

Modularização: As funções getBestPetShop, comparePrices e as funções auxiliares são responsáveis por calcular a melhor opção de petshop com base nos dados fornecidos. 
Essa separação de responsabilidades facilita a manutenção e o entendimento do código.

Back-end com Express e Node.js: A decisão de utilizar Express e Node.js para o servidor back-end por questões de familiaridade e experiência prévia. Express é um framework que permite manipular com facilidade requisições HTTP e rotas.

