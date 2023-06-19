import { Request, Response } from 'express'
import { prismaClient } from '../database/prismaClient';

export class CreateContaController {
    async handle(request: Request, response: Response){
        const {conta, saldo} = request.body;

        const new_conta = await prismaClient.conta.create(
            {
                data: {
                    conta,
                    saldo
                },
            }
        )

        return response.json(new_conta)
    }
}