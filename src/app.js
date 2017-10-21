
import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.get('/cookies', (req, res)=>{
res.send('Cookies: ' + req.query.cookies);
})
app.post('/cookies', (req, res)=>{
res.send('Cookies: ' + req.query.cookies);
});
app.listen(8090, ()=>{
  console.log('App works on 8090 port...');
});
