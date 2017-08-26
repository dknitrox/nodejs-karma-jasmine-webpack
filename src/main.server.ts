import * as express from 'express';
const app = express();
const port = 8000;
const baseUrl = `http://localhost:${port}`;


app.set('view engine', 'html');
app.set('views', 'src');

app.use('/', express.static('dist', {index: false}));

app.get('/data', (req, res) => {
  console.time(`GET: ${req.originalUrl}`);
  res.send("exitoo");
  console.timeEnd(`GET: ${req.originalUrl}`);
});


app.listen(8000,() => {
	console.log(`Listening at ${baseUrl}`);
});
