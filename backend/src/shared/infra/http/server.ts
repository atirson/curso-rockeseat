import 'reflect-metadata';
import express, { Request, Response, NextFunction} from 'express';

import cors from 'cors';
import 'express-async-errors'


import routes from './routes/index';
import uploadConfig from '@config/upload';
import AppError from '@shared/errors/AppError';

import '@shared/infra/typeorm';
import '@shared/container';

const app = express();
app.use(cors());
app.use(express.json());
app.use('/files',express.static(uploadConfig.uploadsFolder));// servir as pastas de moto statico para o usuario
app.use(routes);
app.use( (err:Error,request:Request,response:Response, _:NextFunction) =>{
  if(err instanceof AppError){
    return response.status(err.statusCode).json({
      status:'error',
      message:err.message,
    });
  }


  console.error(err);// precisa instalar um biblioteca express async error para pode captar os erros async do express
  return response.status(500).json({
    status:'error',
    message: 'Internal server error',
  });
});

app.listen(3333, () =>{
  console.log('Server subiu !!!');
});
///
