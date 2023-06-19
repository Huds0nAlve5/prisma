-- CreateTable
CREATE TABLE `contas` (
    `codigo` INTEGER NOT NULL AUTO_INCREMENT,
    `conta` VARCHAR(191) NOT NULL,
    `saldo` DOUBLE NOT NULL,

    PRIMARY KEY (`codigo`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
