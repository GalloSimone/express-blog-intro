const express = require('express')
const { url } = require('inspector');
const app = express()
const port = 3000
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.send('Server del mio blog!')
    });
    app.get('/bacheca',(req, res)=> {
        const posts =[
            {   
                titolo: "Ciambellone",
                contenuto:"Un dolce soffice e genuino, perfetto per addolcire le tue giornate con un tocco di tradizione casalinga.",
                img:"./public/img/ciambellone.jpeg",
                tags : ["ciambellone", "tradizione"]
            },
            {   
                titolo: "Cracker alla barbabietola",
                contenuto:"Leggeri e croccanti, questi cracker uniscono il sapore unico della barbabietola a una bontà irresistibile.",
                img:"./public/img/cracker_barbabietola.jpeg",
                tags : ["cracker","salato","barbabietola"]
            },
            {   
                titolo: "Pane fritto",
                contenuto:" Una delizia dorata e fragrante, ricoperta di zucchero o miele, che regala un'esplosione di dolcezza al primo morso.",
                img:"./public/img/cracker_barbabietola.jpeg",
                tags : ["pane", "fritto"]
            },
            {   
                titolo: "Pasta alla barbabietola",
                contenuto:"Un primo piatto scenografico e raffinato, dal sapore delicato e dalla crema vellutata che conquista",
                img:"./public/img/pasta_barbabietola.jpeg",
                tags : ["pasta", "barbabietola"]
            },
            {   
                titolo: "Torta paesana",
                contenuto:"Il dolce rustico che racchiude tutta la magia dei sapori antichi, con note di cacao, uvetta e pinoli.",
                img:"./public/img/torta_paesana.jpeg",
                tags : ["dolce", "torta", "paesana"]
            }]

            res.json(posts);
            })





    app.listen(port, () => {
    console.log(`il server risulta online`)
    })