# API com Sequelize, Node.js e MySQL

![school](https://github.com/EricaSantos-FullStack/sequelize-node/assets/71906862/4fe6043f-ac14-4866-84d2-a5fdae83ad46)

🤔 Estive pensando... e se a gente ajudasse uma escola de inglês a gerenciar os dados dos seus alunos? <br>

Nesse projeto foi criada uma API que além de conter as informações dos estudantes, turmas, níveis e matriculas, também é possível mostrar todos os dados, incluir mais estudantes, alterar alguma informação e deletar os dados. <br>
Nessa maravilha que é o mundo do desenvolvimento, utilizei o padrão de arquitetura de software MVC (Model, View e Controller). Não sabe o que é isso? Não se preocupe que logo explicarei.
Acompanhe o desenvolvimento a baixo:

✨ Projeto realizado com muito carinho durante as aulas da Trilha Desenvolve - Full Stack da plataforma Alura em parceria com o Grupo Boticário. ✨

### 🛠 Ferramentas utilizadas:

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
- [x] **migrations** - migrações - o processo de documentar e rastrear mudanças em um banco de dados. (As alterações feitas no banco via migrações podem ser rastreadas e revertidas para debugar conflitos e erros)
- [x] **models** - modelos com o nome e colunas das tabelas com as associações FK.
- [x] **routes** - Rotas
- [x] **services** - camada extra do MVC/ camada de serviços 🆕
- [x] **seeders** - Povoando as tabelas com dados do seeders

### 🆕 Novas Funcionalidades e camadas de segurança:
- [x] Paranoid: true // Soft delete =  para fazer o Soft delete dos dados [leia a explicação abaixo]
- [x] Validação de dados na entrada = Não deixando a responsabilidade de validação apenas na mão do frontend
- [x] Transactions = garantir a integridade dos dados que envolvem a regra de negócio [leia a explicação abaixo]
- [x] Scope (escopos) de queries, de associação, etc
- [x] Filtros para fazer buscar refinadas
- [x] Camada extra de Serviços
- [x] Criação de uma nova Controller - Matricula = desvinculando os funções de matriculas com as funções de Pessoas.
- [x] Refatoração do código antigo
      
### 🦾 Qual é a importância em utilizar uma ORM?

Object-Relational Mapping (ORM), em português, mapeamento objeto-relacional, é uma técnica para aproximar o paradigma de desenvolvimento de aplicações orientadas a objetos ao paradigma do banco de dados relacional. O uso da técnica de mapeamento objeto-relacional é realizado através de um mapeador objeto-relacional que geralmente é a biblioteca ou framework que ajuda no mapeamento e uso do banco de dados.
Nesse caso, utilizamos o Sequelize como framework baseado em Promises com Node.js para o banco MySQL.

### 🐳 Qual é a importância em utilizar o Docker?

O Docker é uma plataforma de código aberto que facilita a criação de ambientes isolados durante o desenvolvimento de software. Isso é importante para a gestão da infraestrutura da aplicação, desde a criação até a modificação dos serviços.
A grande diferença — e vantagem — do Docker é poder rodar seus contêineres com menor gasto de recursos, além de funcionalidades de segurança.<br>
Ao invés de baixar o MySQL Workbench e fazer toda a sua configuração, pesar a minha máquina, etc utilizei a imagem MySQL do Docker e ainda utilizei a CLI do MySQL no bash.

### 🎰 Padrão de arquitetura de software MVC

O MVC possibilita a divisão do projeto em camadas muito bem definidas. Cada uma delas, o Model, o Controller e a View, executa o que lhe é definido e nada mais do que isso. A utilização do padrão MVC traz como benefício o isolamento das regras de negócios da lógica de apresentação, que é a interface com o usuário. Isto possibilita a existência de várias interfaces com o usuário que podem ser modificadas sem a necessidade de alterar as regras de negócios, proporcionando muito mais flexibilidade e oportunidades de reuso das classes.

![Untitled](https://github.com/EricaSantos-FullStack/sequelize-node/assets/71906862/c7149e21-0375-47a7-b16f-3f3ddb5b5ad3)

### 🎲 Diagrama Relacional do Banco de Dados

Aqui você consegue ver o diagrama que indica quais tabelas ou relações compõem o banco de dados, bem como os campos incluídos em cada tabela.
![diagrama_relacional](https://github.com/EricaSantos-FullStack/sequelize-node/assets/71906862/bdf8e3de-b9b0-4263-a21c-ff06bdf14b33)

No arquivo diagrama de banco - descrição da imagem, você consegue ler a organização certinha de cada dado no banco de dado. <br>
**Exemplo:**

```
Diagrama de banco de dados composto por quatro tabelas: Pessoas, Níveis, Turmas e Matrículas.

A tabela Pessoas é composta pelas colunas:
ID: dado do tipo inteiro
nome: dado do tipo string
ativo: dado do tipo boolean
email: dado do tipo string
role: dado do tipo string
```

Ótima para não se perder na hora de utilizar o Sequelize.

### 🔒 dotenv e sua importância:

Proteja o nome, senha e detalhes delicados da sua aplicação com .ENV. Em poucas palavras, ela vai transformar tudo que for confidencial em variáveis de ambiente que são definidas na raiz do projeto. Por ser confidencial, essa informação é guardada a 7 chaves de dev pra dev.

### 🪄 Camada extra no MVC - Camada de Serviços:🆕

Você sabe porque é importante criar uma nova camada para a nossa aplicação? <br>

- Além de isolar o “contato” da aplicação com o banco e facilitar inclusive a troca, a separação entre serviços e controladores não deixa a manutenção mais complexa. Pelo contrário, quanto mais separadas as responsabilidades de cada parte do sistema, mais fácil de dar manutenção, atualizar e lidar com o crescimento da aplicação.
- Os serviços podem herdar e se conectar entre si, independente das outras camadas. Por exemplo: ProdutoServices.js pode utilizar métodos das classes FornecedorServices.js e herdar métodos a partir de uma classe Services mais genérica.
- A separação entre serviços e controladores ajuda a aplicação a ficar mais modular, fácil de se atualizar e dar manutenção.
- A camada de serviços passa a ser a única com acesso aos modelos, tirando essa responsabilidade dos controladores. Passamos toda a conexão com os modelos (e com o banco) para a camada de serviços, que vai ser a responsável por chamar os métodos que o Sequelize utiliza para montar as queries.
- É uma boa prática conectar um controlador somente ao seu próprio serviço.
- O controlador perdeu a responsabilidade de se conectar aos modelos; agora é encarregado de passar para o serviço correspondente as informações que ele precisa passar para a query (através dos parâmetros), receber o retorno e tratar os resultados.

### 🧮 Transactions (Transações) 🆕
As transações servem para garantir a integridade dos dados em operações delicadas. Por exemplo, uma operação que acesse mais de uma tabela, acesse várias tabelas, ou que faça atualizações em várias linhas de uma tabela.
Se acontece qualquer erro nesse processo, qualquer erro de banco, e temos uma falha em qualquer parte dessa operação, nenhum dado é salvo, nenhum dado é atualizado no banco, na realidade, e o banco volta para o ponto onde ele estava antes de tudo isso começar, antes de todas as operações que passamos começarem.

### ❤️‍🩹 Soft delete - Paranoid 🆕
É quando o dado não é realmente apagado do banco de dados. É interessante que ele inclui na tabela que aquele dado não está mais ativo ou valido.
É importante usar ele para não perder dados importantes para sempre. No caso da nossa escola, é sempre bom ainda ter os dados dos estudantes que não estudam mais com a gente.

### ♦️ Como rodar a aplicação?

```js
npm run start
```

### 💙 Considerações finais:

Obrigada por ler o ReadMe até aqui. Você é fera! <br>
Em caso de dúvidas, estarei à disposição ❣️
