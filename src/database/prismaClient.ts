import { PrismaClient } from "@prisma/client";

export const prismaClient = new PrismaClient()

async function main() {
    const criar_conta = await prismaClient.conta.create( //create
        {
            data: {
                conta: "nubank",
                saldo: 100
            }
        }
    )

    const consultar_conta = await prismaClient.conta.findMany( //select
        {
            
        }
    )

    const atualizar_conta = await prismaClient.conta.update(  //update
        {
            where: {
                codigo: 1
            },
            data: {
                conta: "inter"
            }
        }
    )

    const new_receita = await prismaClient.receita.create(
        {
            data: {
                valor: 200,
                conta: {
                    connect: {
                        codigo: 1
                    }
                }
            }
        }
    )

    const receitaComConta = await prismaClient.receita.findMany({
        include: {
            conta: true
        }
    })

    //const deleteReceita = await prismaClient.receita.delete(
    //    {
    //        where: {
    //           codigo: 1
    //        }
    //    }
    //)

    const conta = await prismaClient.conta.findFirst({
        where: {
            codigo: 1
        }
    })

    const deleteReceitasComFiltro = await prismaClient.receita.deleteMany(          //deletar baseado no codigo da conta
        {
            where: {
                conta_id: conta?.codigo
            }
        }
    )

    console.log(criar_conta)
    console.log(consultar_conta)
    console.log(atualizar_conta)
    console.log(new_receita)
    console.log(receitaComConta)
    console.log(conta?.codigo)
    console.log(deleteReceitasComFiltro)
  }
  
main()