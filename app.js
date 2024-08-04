const express = require('express');
const app = express();
const axios = require('axios');
app.set('views','./view');
//defini le moteur de template qui ici est ejs
app.set('view engine','ejs');
// Servir des fichiers statiques depuis le répertoire 'public'
app.use(express.static('./public'));
//definir les routes

app.get('/',(req,resp)=>{
    resp.render('index',{weather:null,error:null})
})

app.get('/weather',async (req,resp)=>{
    const city = req.query.city;
    const key = 'A49DWJUC7WHG64AUAAZ6NT89C'
    const API_URL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=${key} `
    let weather = null;
    let error = null;
    try{
        const response = await axios.get(API_URL);
        weather = response.data;
        error=null;
        console.log(response.data)

    }
    catch(err){
        weather=null;
        error='hell nahfff'
    }
    resp.render('index',{weather,error})
})

module.exports = app;
