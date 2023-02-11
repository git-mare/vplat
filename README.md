# VPLAT

<h4> Um sistema simples de upload de vídeos. Feito em NodeJS.</h4>
<h3> Descrição </h3>
<ul>
  <li> Página inicial (print 1) contendo os vídeos publicados (se houver) com título e número de visualizações da página </li>
  <li> 
    Página de vídeos (print 2) contendo player, título, data de postagem, número de visualizações, descrição, botão para copiar link do vídeo e menu lateral listando os últimos vídeos publicados
  </li>
  <li> Página de uploads contendo um formulário com título, descrição e área para adicionar e pré visualizar o vídeo inserido. </li>
</ul>

<h3> Antes de iniciar o servidor </h3>
<ul>
  <li> 
    Configure o arquivo <b>database.js</b> localizado na pasta <b>database/</b> inserindo o nome da sua database, o nome do seu usuário e a senha do seu usuário do seu servidor mysql
  </li>
  <li> 
    Crie uma Database com o nome que você configurou em <b>database.js</b>.
  </li>
  
</ul>
<h4> Certifique-se de instalar as bibliotecas NPM abaixo: </h4>
<ul>
  <li> <a href="https://www.npmjs.com/package/express"> Express </a> </li>
  <li> <a href="https://www.npmjs.com/package/ejs"> EJS </a> </li>
  <li> <a href="https://www.npmjs.com/package/sequelize"> Sequelize </a> (será necessário instalar a biblioteca <a href="https://www.npmjs.com/package/mysql2"> mysql2 </a> para uso) </li>
  <li> <a href="https://www.npmjs.com/package/body-parser"> Body-parser </a> </li>
  <li> <a href="https://www.npmjs.com/package/express-session"> Express-session </a> </li>
  <li> <a href="https://www.npmjs.com/package/connect-flash"> Connect-flash </a> </li>
  <li> <a href="https://www.npmjs.com/package/multer"> Multer </a> </li>
</ul>

<h3> Prints </h3>
<h4> Página inicial </h4>
<img src="https://i.imgur.com/iW73oxM.png">

<h4> Página de vídeo </h4>
<img src="https://i.imgur.com/PJ6i8YF.png">

