
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', (req, res)=>{
res.send('Cookies: ' + req.query.cookies);
})
app.listen(8091, ()=>{
  console.log('App works on 8091 port...lol');
});
