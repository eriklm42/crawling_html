Documentação Crawling Viva Real

    1. Deverá iniciar o node com as seguintes bibliotecas: request, cheerio e fs;
    2. Crie o arquivo principal do servidor em js;
    3. Importe as bibliotecas citadas acima; 
    4. Fazer um loop onde uma variavel terá o valor zero e irá adicionar 1 a cada loop enquanto ela seja menor que 18 (numero de paginas do resultado da pesquisa)
    5. Crie uma variavel para a url com syntax interpolada com a seguinte url: https://sc.olx.com.br/norte-de-santa-catarina/audio-tv-video-e-fotografia/tvs?o=${variavel do loop}
    6. Faça um request passando a url acima e uma função que irá receber como parametro: erro, resposta, e corpo
    7. Trate o erro caso está função retorne um erro. Ex: if(error) console.log('Error: ' + error);
    8. Crie uma constante chamada ‘$’ com o valor de cheerio.load(corpo) (irá lhe retornar o corpo da resposta em html)
    9. Busque a classe OLXad-list-link dentro do html que deseja capturar. Ex: $('.classe_desejada)
    10. faça um each que recebera uma função.
    11. Nesta função uma constante que irá procurar a classe filho responsável pelo titulo do anuncio com o seguinte valor: $(this).find('.OLXad-list-title').text().trim();
    12. E outra constante que irá procurar procurar a classe filho responsável pelo valor do anuncio com o seguinte valor:  const price = $(this).find('.OLXad-list-price').text();
    13. Após faça um fs.appendFile que irá adicionar os valores adquiridos a um arquivo txt. Ex: fs.appendFile(`tvs${p}.txt`, 'Title: ' + title + '\n' + 'Price: ' + price + '\n', (error) => {if(error) {console.log(error)}}); 
    14. Verifique a indentação
    15. Execute o código. 
