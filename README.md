# projeto-final-eldorado
Projeto Final do Curso EldoradoTech

LINK BACKEND API
https://desafio-final-eldorado.herokuapp.com/

LINK FRONTEND API
https://desafio-final-front.herokuapp.com/home
________________________________________________________________________________________________________________________________________________________________________
# BACKEND
# A PRINCIPIO ESTOU USANDO AS TECNOLOGIAS ABAIXO
BACKEND API, NESTA API ESTOU USANDO SEQUELIZE E SEQUELIZE CLI, MIGRATIONS, SEED, SWAGGER, SQLITE, JEST, DOTENV, SUPERTEST MYSQL, JWT TOKEN.

# BANCO 
EDITAR O ARQUIVO NA RAIZ .env 
  COLOCAR SUAS CONFIGURAÇÕES DE BANCO MYSQL
  
# INSTALANDO DEPENDÊNCIAS - BACKEND
  ENTRE NA PASTA BACKEND
  
  COM O NODE INSTALADO NA PASTA BACKEND DIGITE
   - npm install ( instala as dependencias )
   - npm run database ( cria a database )
   - npm run migrate ( cria a migração do banco )
   - npm run seed ( insere apenas um dado para teste )
   - npm start ( roda o sistema porta 3000 )

  TESTES  ESTOU ultilizando o banco SQLITE PARA OS TESTE
   - npm run test (RODA O JEST EM AMBIENTE DE TESTE, E CRIA UM BANCO SQLLITE PARA O MESMO TESTE)
 
 #ROTA DE TESTE - SWAGGER
 - Gerar token em na rota signin
 - email:rafael.wfc@gmail.com  senha:123
 - copiar token gerado
 - adicionar token em Authorize 
 - Copia igual ex: ( token: token gerado )

 - http://localhost:3000/
  ____________________________________________________________________________________________________________________________________________________________________
***FRONTEND

# INSTALANDO DEPENDÊNCIAS - BACKEND
  ENTRE NA PASTA FRONTEND
  -npm install
  -npm install -g @angular/cli
  -ng s
