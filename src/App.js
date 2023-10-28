import express, { json } from 'express';
import cors from 'cors';
import router from './routers/index.routes.js';
import errorsHandler from './middlewares/errorsHandler.middleware.js';


const app = express();

app.use(cors());
app.use(json());
app.use(router);
app.use(errorsHandler)

const port = process.env.PORT || 5000
app.listen(port, () => {
	console.log(`Servidor rodando na porta ${port}`)
})