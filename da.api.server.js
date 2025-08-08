
import express from "express";
import helmet from "helmet";
import compression from "compression";
import { config } from "dotenv";

import "./src/config/db.config.js";
import "./src/constants/init.js";
import Api404Error from "./src/exceptions/api404Error.js";
import fileUpload from "express-fileupload";
import errorHandler from "./src/helpers/errorHandler.js";
import headers from "./src/helpers/handler.js";
import initRoutes from "./src/routes/main.routes.js";
import cors from "cors";
import morgan from "morgan";
import cookieParser from 'cookie-parser';


const app = express();

//** .env
config();

app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//** For Security
app.use(helmet());
app.use(compression());

/** Use for ClientIp. */
app.set('trust proxy', true);

//** FileUpload */
app.use(fileUpload());

//* Handle to default URL and display main website.
app.use(express.static('public'));
app.use(express.static('uploads'));

app.use(cors());

// Mount all routes on / path
app.use('/api/v1/', initRoutes);


// node js app error class (error) extending
app.all("*", (req, res, next) => {
  next(new Api404Error(`The URL ${req.originalUrl} does not exists`, 404));
});

// using errors headers
app.use(headers);

// using errors handler
app.use(errorHandler);

export default app;
