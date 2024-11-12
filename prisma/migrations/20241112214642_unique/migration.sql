/*
  Warnings:

  - A unique constraint covering the columns `[nome]` on the table `Provider` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[link]` on the table `Provider` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Provider_nome_key` ON `Provider`(`nome`);

-- CreateIndex
CREATE UNIQUE INDEX `Provider_link_key` ON `Provider`(`link`);
