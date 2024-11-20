/*
  Warnings:

  - You are about to drop the column `nome` on the `Provider` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `Provider` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `name` to the `Provider` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `Provider_nome_key` ON `Provider`;

-- AlterTable
ALTER TABLE `Provider` DROP COLUMN `nome`,
    ADD COLUMN `name` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Provider_name_key` ON `Provider`(`name`);
