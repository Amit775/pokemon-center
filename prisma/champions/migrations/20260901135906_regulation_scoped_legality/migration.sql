/*
  Warnings:

  - You are about to drop the column `is_current` on the `regulation` table. All the data in the column will be lost.
  - You are about to drop the `regulation_legality` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "LegalityStatus" AS ENUM ('LEGAL', 'TRANSFER_ONLY', 'EVENT_ONLY', 'RESTRICTED');

-- DropForeignKey
ALTER TABLE "regulation_legality" DROP CONSTRAINT "regulation_legality_pokemon_id_fkey";

-- DropForeignKey
ALTER TABLE "regulation_legality" DROP CONSTRAINT "regulation_legality_regulation_id_fkey";

-- DropIndex
DROP INDEX "regulation_is_current_idx";

-- AlterTable
ALTER TABLE "champions_pokemon" ADD COLUMN     "introduced_in" TEXT,
ADD COLUMN     "legality_status" "LegalityStatus" NOT NULL DEFAULT 'LEGAL',
ADD COLUMN     "restriction_note" TEXT;

-- AlterTable
ALTER TABLE "regulation" DROP COLUMN "is_current";

-- DropTable
DROP TABLE "regulation_legality";

-- CreateIndex
CREATE INDEX "champions_pokemon_legality_status_idx" ON "champions_pokemon"("legality_status");
