/*
  Warnings:

  - A unique constraint covering the columns `[id]` on the table `Subscription` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Subscription_id_key` ON `Subscription`(`id`);
