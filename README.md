# API com Sequelize, Node.js e MySQL
🤔 Estive pensando...  e se a gente ajudasse uma escola de inglês a gerenciar os seus alunos? <br>

Nesse projeto foi criada uma API que além de conter as informações dos estudantes, turmas, níveis e matriculas, também é possível mostrar todos os dados, incluir mais estudantes, alterar alguma informação e deletar os dados. <br>
Nessa maravilha que é o mundo do desenvolvimento, utilizei o padrão de arquitetura de software MVC (Model, View e Controller). Não sabe o que é isso? Não se preocupe que logo explicarei.
Acompanhe o desenvolvimento a baixo:

✨ Projeto realizado com muito carinho durante as aulas da Trilha Desenvolve - Full Stack da plataforma Alura em parceria com o Grupo Boticário. ✨

###  🛠 Ferramentas utilizadas:
- [x] Node.js
- [x] Express
- [x] Path
- [x] nodemon
- [x] Sequelize
- [x] sequelize-cli
- [x] MySQL
- [x] dotenv
- [x] Docker
- [x] Postman
- [x] CLI

### 📁 Organização das pastas:
- [x] **config** - configuração de conexão com o banco
- [x] **controllers** - com o CRUD das informações
- [x] **migrations** - migrações com os dados das tabelas UP e Down caso necessário. 
- [x] **models** - modelos com o nome e colunas das tabelas com as associações FK.
- [x] **routes** - Rotas
- [x] **seeders** - Povoando as tabelas com dados do seeders

### 🦾 Qual é a importância em utilizar uma ORM? 
Object-Relational Mapping (ORM), em português, mapeamento objeto-relacional, é uma técnica para aproximar o paradigma de desenvolvimento de aplicações orientadas a objetos ao paradigma do banco de dados relacional. O uso da técnica de mapeamento objeto-relacional é realizado através de um mapeador objeto-relacional que geralmente é a biblioteca ou framework que ajuda no mapeamento e uso do banco de dados.
Nesse caso, utilizamos o Sequelize como framework baseado em Promises com Node.js para o banco MySQL.

### 🐳 Qual é a importância em utilizar o Docker?
O Docker é uma plataforma de código aberto que facilita a criação de ambientes isolados durante o desenvolvimento de software. Isso é importante para a gestão da infraestrutura da aplicação, desde a criação até a modificação dos serviços.
A grande diferença — e vantagem — do Docker é poder rodar seus contêineres com menor gasto de recursos, além de funcionalidades de segurança.<br>
Ao invés de baixar o MySQL Workbench e fazer toda a sua configuração, pesar a minha máquina, etc utilizei a imagem MySQL do Docker e ainda utilizei a CLI do MySQL no bash.

### 🎰 Padrão de arquitetura de software MVC
O MVC possibilita a divisão do projeto em camadas muito bem definidas. Cada uma delas, o Model, o Controller e a View, executa o que lhe é definido e nada mais do que isso. A utilização do padrão MVC traz como benefício o isolamento das regras de negócios da lógica de apresentação, que é a interface com o usuário. Isto possibilita a existência de várias interfaces com o usuário que podem ser modificadas sem a necessidade de alterar as regras de negócios, proporcionando muito mais flexibilidade e oportunidades de reuso das classes.

[img controler]

### 🎲 Diagrama Relacional do Banco de Dados
[imagem do diagrama]
No arquivo diagrama de banco - descrição da imagem, você consegue ler a organização certinha de cada dado no banco de dado. Exemplo:
````
Diagrama de banco de dados composto por quatro tabelas: Pessoas, Níveis, Turmas e Matrículas.

A tabela Pessoas é composta pelas colunas:
ID: dado do tipo inteiro
nome: dado do tipo string
ativo: dado do tipo boolean
email: dado do tipo string
role: dado do tipo string
````
Ótima para não se perder na hora de utilizar o Sequelize.

### 🔒 dotenv e sua importância:
Proteja o nome, senha e detalhes delicados da sua aplicação com .ENV. Em poucas palavras, ela vai transformar tudo que for confidencial em variáveis de ambiente que são definidas na raiz do projeto. Por ser confidencial, essa informação é guardada a 7 chaves de dev pra dev. 

### ♦️ Como rodar a aplicação?
````js
npm run start
````

### 💙 Considerações finais:
Obrigada por ler o ReadMe até aqui. Você é fera! <br>
Em caso de dúvidas, estarei à disposição ❣️
