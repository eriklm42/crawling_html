const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');

let p=0;
while(p < 18) {
    p++;
    url = `https://sc.olx.com.br/norte-de-santa-catarina/audio-tv-video-e-fotografia/tvs?o=${p}`;
    request(url, (error, res, body ) => {
        if(error) console.log('Error: ' + error);
        const $ = cheerio.load(body);
        $('.OLXad-list-link').each(function() {
            const title = $(this).find('.OLXad-list-title').text().trim();
            const price = $(this).find('.OLXad-list-price').text();
            fs.appendFile(`tvs${p}.txt`, 'Title: ' + title + '\n' + 'Price: ' + price + '\n', (error) => {if(error) {console.log(error)}});            
        }); 
    });
};

