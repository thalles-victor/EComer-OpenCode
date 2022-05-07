/*
  Warnings:

  - The `classification` column on the `Products` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Products" ADD COLUMN     "interested" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "sold" INTEGER NOT NULL DEFAULT 0,
DROP COLUMN "classification",
ADD COLUMN     "classification" INTEGER NOT NULL DEFAULT 0;
