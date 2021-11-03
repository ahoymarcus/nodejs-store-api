# Task Manager App - Freecodecamp.org


Estudo com o projeto **Freecodecamp** usando o backend javascript com Node-JS, para criar uma API de dados de Produtos.[^1]

<br />

Esta API permite que se faça a consulta aos dados passando parâmetros dinamicamente, inclusive permitindo o uso de critérios múltiplos de ordenação para os dados.

<br />

Novamente, este projeto trás a mesma implementação modular para a aplicação, separando módulo para rota, para controladores para as rotas, para a criação do modelo de dados e para a conexão com o banco de dados MongoDB.


<br />

Aqui nós também reaproveitamos os módulos customizados para tratamento de erro criados no projeto **Task Manager**. Assim, os configuramos no middleware do Express-JS para tratar exceções **404** e **500** de servidor.

<br />

Finalmente, culminando o projeto com a integração com o Frontend, criado pelo professor Smilga e que é servido pelo servidor através do middleware Static do Express-JS.



<br />

[Freecodecamp.org](https://www.freecodecamp.org/learn/back-end-development-and-apis/)



<br />


Dependências:

- Dotenv
- Express JS
- Mongoose
- Nodemon
- Express-async-errors



<br />

### Retornando uma query básica de todos os dados existentes:              
![Imagem de uma query básica de todos os dados existentes](/public/images/query-basica-retornando-todos-os-dados.png)



<br />

### Passando dinamicamente um query para procura de produtos a partir da propriedade **name** de um produto:                
![Imagem de uma query para procura de produtos a partir da propriedade **name** de um produto](/public/images/query-dinamica-com-passagem-de-parametros.png)




<br />

### Agora, passando dinamicamente um query que retorna dados da API selecionando apenas os campos **name** e **price** e ordenando **name** de forma descendente e **price** de forma ascendente:                
![Imagem de uma query para retorno de dados com ordenamento e seleção de campos específicos](/public/images/query-dinamica-com-selecao-de-campos-e-ordenados.png)





<br />




<br />
<br />

[^1] John Smilga - Freecodecamp.org.






