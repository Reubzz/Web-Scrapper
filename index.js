require('dotenv').config();
const axios = require('axios');
const cheerio = require('cheerio');
const express = require('express');
const config = require("./config.json")
const app = express();


axios(config.url)
    .then((res) => {
        const data = res.data;
        const $ = cheerio.load(data)
        // console.log(data)
        const d = []
        $(config.target? config.target : "div", data).each(function(){
            const title = $(this).text();
            const url = $(this).find('a').attr('href')
            d.push({
                title,
                url
            });
        })
        console.log(d)
    }).catch(e => console.log(e))

app.listen(process.env.PORT, () => console.log(`Server on @ PORT - ${process.env.PORT}`));