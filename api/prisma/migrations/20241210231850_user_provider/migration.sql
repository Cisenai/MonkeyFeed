/*
  Warnings:

  - A unique constraint covering the columns `[idClient]` on the table `Provider` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `idClient` to the `Provider` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Provider` ADD COLUMN `idClient` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Provider_idClient_key` ON `Provider`(`idClient`);

-- AddForeignKey
ALTER TABLE `Provider` ADD CONSTRAINT `Provider_idClient_fkey` FOREIGN KEY (`idClient`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
