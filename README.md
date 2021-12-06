# Store API - Freecodecamp.org


Estudo de backend Node-JS com o projeto **Freecodecamp**, para criar uma API de dados de Produtos.
Esta API permite que se faça diversas consultas de maneira dinâmica através da passagem de parâmetros ou operadores de comparação para serem confrontrados em relação à base de dados da API.[^1]

<br />

Assim, é possível pesquisar os dados da API a partir dos seus campos, como nome, preço ou companhia, por exemplo.
Também é possível selecionar quais os campos deve ser retornados pela pesquisa ou fazer a ordenação dos dados por diversos parâmetros simultaneamente (por exemplo, ordem alfabética e por preço).
Finalmente, o usuário pode passar ainda múltiplos parâmetros comparativos para definir o retorno dos campos numéricos segundo condições de igualdade ou desigualdade. 





<br />

Novamente, este projeto trás a mesma implementação modular para a aplicação implementada no **Task Manager app**, separando módulo para rota, para controladores para as rotas, para a criação do modelo de dados e para a conexão com o banco de dados MongoDB.


<br />

Aqui nós também reaproveitamos os módulos customizados para tratamento de erro criados no projeto **Task Manager**. Assim, os configuramos no middleware do Express-JS para tratar exceções **404** e **500** de servidor.




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

Abaixo temos a URL base da rota para a API que de acordo com os parâmetros acrescentados permite o controle dinâmico do retorno dos dados:

<br />

```
/api/v1/products
```

<br />


A rota pode ser construída, por exemplo, das seguintes formas:

<br /> 

1. Get Products segundo a projeção de retornar apenas aqueles produtos que fazem referência à Company Ikea e ao Name 'dining table':
```
/api/v1/products?company=ikea&name=dining table
```

<br />

4. Get Products ordenando de forma ascendente pelo parâmetro Price e usando filtro com condição numérica de valor dos preços retornados maiores que 20:
```
/api/v1/products?sort=price&numericFilters=price>20,rating>=5
```

<br />

3. Get Products ordenando de forma ascendente pelo parâmetro Price e usando filtro com condição numérica de valor dos preços retornados maiores que 20. Finalmente, fazendo projeção para retornar apenas aqueles com Rating maior ou igual a 5:
```
/api/v1/products?sort=price&numericFilters=price>20,rating>=5
```

<br />


4. Get Products ordenando de forma descendente segundo o parâmetro Name e de forma ascendente pelo parâmetro Price,e selecionando para o retorno dos dados apenas os campos Name e Price:
```
/api/v1/products?sort=-name price&field=name price
```

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

### Finalmente, permitindo a passagem de operadores de comparação para realizar queries com os campos numéricos da API de produtos:                
![Imagem da passagem de operadores de comparação para realizar queries com os campos numéricos da API de produtos](/public/images/query-dinamica-com-operadores-logicos.png)



<br />




<br />
<br />

[^1] John Smilga - Freecodecamp.org.






