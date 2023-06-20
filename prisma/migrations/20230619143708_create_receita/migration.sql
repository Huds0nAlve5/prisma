-- CreateTable
CREATE TABLE `Receita` (
    `codigo` INTEGER NOT NULL AUTO_INCREMENT,
    `valor` DOUBLE NOT NULL,
    `data_inclusao` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `conta_id` INTEGER NOT NULL,

    PRIMARY KEY (`codigo`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Receita` ADD CONSTRAINT `Receita_conta_id_fkey` FOREIGN KEY (`conta_id`) REFERENCES `contas`(`codigo`) ON DELETE RESTRICT ON UPDATE CASCADE;
