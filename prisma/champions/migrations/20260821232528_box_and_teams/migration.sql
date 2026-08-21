/*
  Warnings:

  - You are about to drop the `scouted_team` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `scouted_team_member` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "battle_session" DROP CONSTRAINT "battle_session_my_team_id_fkey";

-- DropForeignKey
ALTER TABLE "battle_session" DROP CONSTRAINT "battle_session_their_team_id_fkey";

-- DropForeignKey
ALTER TABLE "scouted_team" DROP CONSTRAINT "scouted_team_regulation_id_fkey";

-- DropForeignKey
ALTER TABLE "scouted_team_member" DROP CONSTRAINT "scouted_team_member_known_set_id_fkey";

-- DropForeignKey
ALTER TABLE "scouted_team_member" DROP CONSTRAINT "scouted_team_member_pokemon_id_fkey";

-- DropForeignKey
ALTER TABLE "scouted_team_member" DROP CONSTRAINT "scouted_team_member_team_id_fkey";

-- DropTable
DROP TABLE "scouted_team";

-- DropTable
DROP TABLE "scouted_team_member";

-- CreateTable
CREATE TABLE "box_pokemon" (
    "id" SERIAL NOT NULL,
    "pokemon_id" INTEGER NOT NULL,
    "nickname" TEXT,
    "nature" TEXT,
    "ability_id" INTEGER,
    "item" TEXT,
    "sp_hp" INTEGER NOT NULL DEFAULT 0,
    "sp_attack" INTEGER NOT NULL DEFAULT 0,
    "sp_defense" INTEGER NOT NULL DEFAULT 0,
    "sp_special_attack" INTEGER NOT NULL DEFAULT 0,
    "sp_special_defense" INTEGER NOT NULL DEFAULT 0,
    "sp_speed" INTEGER NOT NULL DEFAULT 0,
    "notes" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "box_pokemon_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "box_pokemon_move" (
    "box_pokemon_id" INTEGER NOT NULL,
    "move_id" INTEGER NOT NULL,
    "slot" INTEGER NOT NULL,

    CONSTRAINT "box_pokemon_move_pkey" PRIMARY KEY ("box_pokemon_id","move_id")
);

-- CreateTable
CREATE TABLE "team" (
    "id" SERIAL NOT NULL,
    "regulation_id" INTEGER NOT NULL,
    "label" TEXT NOT NULL,
    "is_mine" BOOLEAN NOT NULL DEFAULT false,
    "notes" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "team_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "team_member" (
    "id" SERIAL NOT NULL,
    "team_id" INTEGER NOT NULL,
    "pokemon_id" INTEGER NOT NULL,
    "slot" INTEGER NOT NULL,
    "box_pokemon_id" INTEGER,
    "known_set_id" INTEGER,

    CONSTRAINT "team_member_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "box_pokemon_pokemon_id_idx" ON "box_pokemon"("pokemon_id");

-- CreateIndex
CREATE INDEX "team_is_mine_idx" ON "team"("is_mine");

-- CreateIndex
CREATE UNIQUE INDEX "team_member_team_id_slot_key" ON "team_member"("team_id", "slot");

-- AddForeignKey
ALTER TABLE "box_pokemon" ADD CONSTRAINT "box_pokemon_pokemon_id_fkey" FOREIGN KEY ("pokemon_id") REFERENCES "champ_pokemon"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "box_pokemon" ADD CONSTRAINT "box_pokemon_ability_id_fkey" FOREIGN KEY ("ability_id") REFERENCES "champ_ability"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "box_pokemon_move" ADD CONSTRAINT "box_pokemon_move_box_pokemon_id_fkey" FOREIGN KEY ("box_pokemon_id") REFERENCES "box_pokemon"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "box_pokemon_move" ADD CONSTRAINT "box_pokemon_move_move_id_fkey" FOREIGN KEY ("move_id") REFERENCES "champ_move"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "team" ADD CONSTRAINT "team_regulation_id_fkey" FOREIGN KEY ("regulation_id") REFERENCES "regulation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "team_member" ADD CONSTRAINT "team_member_team_id_fkey" FOREIGN KEY ("team_id") REFERENCES "team"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "team_member" ADD CONSTRAINT "team_member_pokemon_id_fkey" FOREIGN KEY ("pokemon_id") REFERENCES "champ_pokemon"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "team_member" ADD CONSTRAINT "team_member_box_pokemon_id_fkey" FOREIGN KEY ("box_pokemon_id") REFERENCES "box_pokemon"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "team_member" ADD CONSTRAINT "team_member_known_set_id_fkey" FOREIGN KEY ("known_set_id") REFERENCES "known_set"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "battle_session" ADD CONSTRAINT "battle_session_my_team_id_fkey" FOREIGN KEY ("my_team_id") REFERENCES "team"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "battle_session" ADD CONSTRAINT "battle_session_their_team_id_fkey" FOREIGN KEY ("their_team_id") REFERENCES "team"("id") ON DELETE SET NULL ON UPDATE CASCADE;
