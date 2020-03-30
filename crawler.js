const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');


let i = 0;
id = 0;
while( i <= 36) {
    i++;
    const url = `https://www.vivareal.com.br/aluguel/santa-catarina/balneario-camboriu/apartamento_residencial/?pagina=${i}#onde=BR-Santa_Catarina-NULL-Balneario_Camboriu&tipos=apartamento_residencial`;
    request(url, (error, body) => {
        if (error) console.log('Error', error);
        const $ = cheerio.load(body);
        $('.results-list').each(function() {
            id++;
            const apartament = $(this).find('.property-card__header a').text().trim();
            const price = $(this).find('.js-property-card-prices').text().trim();
            console.log('Apartamento: ', id, apartament, price);
        });
    });
};
