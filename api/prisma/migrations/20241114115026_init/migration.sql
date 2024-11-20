/*
  Warnings:

  - You are about to drop the column `nome` on the `subscription` table. All the data in the column will be lost.
  - Added the required column `name` to the `Subscription` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `subscription` DROP COLUMN `nome`,
    ADD COLUMN `name` VARCHAR(191) NOT NULL;
