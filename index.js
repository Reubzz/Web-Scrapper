require('dotenv').config();
const axios = require('axios');
const cheerio = require('cheerio');
const express = require('express');
const app = express();
const url = 'https://www.thetechwire.com/'

axios(url)
    .then((res) => {
        const data = res.data;
        const $ = cheerio.load(data)
        // console.log(data)
        const d = []
        $('.entry-title', data).each(function(){
            const title = $(this).text();
            const urll = $(this).find('a').attr('href')
            d.push({
                title,
                urll
            });
        })
        console.log(d)
    }).catch(e => console.log(e))

app.listen(process.env.PORT, () => console.log(`Server on @ PORT - ${process.env.PORT}`));