import { PrismaClient } from "@prisma/client";

const prismaClient = new PrismaClient()

async function main() {
    // const criar_conta = await prismaClient.conta.create( //create
    //     {
    //         data: {
    //             conta: "nubank",
    //             saldo: 100
    //         }
    //     }
    // )

    // const consultar_conta = await prismaClient.conta.findMany( //select
    //     {
            
    //     }
    // )

    // const atualizar_conta = await prismaClient.conta.update(  //update
    //     {
    //         where: {
    //             codigo: 1
    //         },
    //         data: {
    //             conta: "inter"
    //         }
    //     }
    // )

    // const new_receita = await prismaClient.receita.create(
    //     {
    //         data: {
    //             valor: 200,
    //             conta: {
    //                 connect: {
    //                     codigo: 1
    //                 }
    //             }
    //         }
    //     }
    // )

    // const receitaComConta = await prismaClient.receita.findMany({
    //     include: {
    //         conta: true
    //     }
    // })

    const selectCampos = await prismaClient.receita.findFirst({
        where: {
            codigo: 21
        },
        select: {
            conta: {
                select: {
                    conta: true
                }
            },
            valor: true
        }
    })  //select são os campos que eu quero, e o .conta() no final faz o objeto conta ser associado a variavel
    //o include inclui o objeto referenciado na tabela como FK, assim traz os dados da outra tabela
    //pelo visto, o select: {conta: true} faz o mesmo que o include: {conta: true}, com a diferença que o
    //include traz os outros dados da tabela, o select nao

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

    const saldoContaNu = await prismaClient.conta.aggregate( // faz calculos
        {
            _sum: {
                saldo: true
            },
            where: {
                conta: "nubank"
            }
        }
    )

    const saldoPorConta = await prismaClient.conta.groupBy({
        by: ['conta'],
        _sum: {
            saldo: true
        }
    })

    const queryManual = await prismaClient.$queryRaw`select * from contas`

    console.log(saldoContaNu)
    console.log(saldoPorConta)

    console.log(queryManual)

    // const deleteReceitasComFiltro = await prismaClient.receita.deleteMany(          //deletar baseado no codigo da conta
    //    {
    //        where: {
    //            conta_id: conta?.codigo
    //        }
    //    }
    // )

    //console.log(criar_conta)
    //console.log(consultar_conta)
    // console.log(atualizar_conta)
    // console.log(new_receita)
    // console.log(receitaComConta)
    // console.log(conta?.codigo)
    //console.log(deleteReceitasComFiltro)
    console.log(selectCampos)//
  }
  
main()