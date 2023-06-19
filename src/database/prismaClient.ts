import { PrismaClient } from "@prisma/client";

const prismaClient = new PrismaClient()

async function main() {
    const conta = await prismaClient.receita.create(
        {
            data: {
                valor: 100,
                conta: {
                    connect: {
                        codigo: 1
                    }
                }
            }
        }
    )

    console.log(conta)

    const deleteConta = await prismaClient.receita.delete(
        {
            where: {
                codigo: 2
            }
        }
    )
  }
  
main()