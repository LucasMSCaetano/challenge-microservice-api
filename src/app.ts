import express  from "express";
import { router } from "./routes";
import cors from 'cors';

import swaggerUi from 'swagger-ui-express';

import swaggerFile from './swagger.json';

const app = express ();

const allowedOrigins = ['http://localhost:3000', 'http://localhost:3333'];

const options: cors.CorsOptions = {
  origin: allowedOrigins
};

app.use(cors(options));
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile))
app.use(express.json());
app.use(router);

export { app }