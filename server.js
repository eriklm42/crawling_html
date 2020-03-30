const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');

url = 'https://www.vivareal.com.br/aluguel/santa-catarina/balneario-camboriu/apartamento_residencial/?pagina=3';
request(url, (error, res, body ) => {
    if(error) console.log('Error: ' + error);
    const $ = cheerio.load(body);
    $('.results-list').each(function() {
        const apartament = $(this).find('.property-card__header a').text().trim();
        const price = $(this).find('.js-property-card-prices').text();
        console.log('Apartamento: ',  price);
    });
});
