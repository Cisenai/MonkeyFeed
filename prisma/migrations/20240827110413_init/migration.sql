-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Subscription` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `idClient` INTEGER NOT NULL,
    `site` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Subscription_idClient_key`(`idClient`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Subscription` ADD CONSTRAINT `Subscription_idClient_fkey` FOREIGN KEY (`idClient`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
