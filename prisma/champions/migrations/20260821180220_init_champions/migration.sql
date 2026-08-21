-- CreateExtension
CREATE EXTENSION IF NOT EXISTS "pg_trgm";

-- CreateEnum
CREATE TYPE "DamageClass" AS ENUM ('PHYSICAL', 'SPECIAL', 'STATUS');

-- CreateEnum
CREATE TYPE "SetSource" AS ENUM ('CURATED', 'OBSERVED');

-- CreateEnum
CREATE TYPE "BattleFormat" AS ENUM ('SINGLES', 'DOUBLES');

-- CreateEnum
CREATE TYPE "BattleResult" AS ENUM ('IN_PROGRESS', 'WIN', 'LOSS', 'DRAW', 'ABANDONED');

-- CreateTable
CREATE TABLE "champ_type" (
    "id" INTEGER NOT NULL,
    "slug" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "champ_type_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "champ_type_efficacy" (
    "attacking_type_id" INTEGER NOT NULL,
    "defending_type_id" INTEGER NOT NULL,
    "damage_factor" INTEGER NOT NULL,

    CONSTRAINT "champ_type_efficacy_pkey" PRIMARY KEY ("attacking_type_id","defending_type_id")
);

-- CreateTable
CREATE TABLE "champ_ability" (
    "id" INTEGER NOT NULL,
    "slug" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "effect_text" TEXT,
    "is_mega" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "champ_ability_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "champ_move" (
    "id" INTEGER NOT NULL,
    "slug" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type_id" INTEGER NOT NULL,
    "damage_class" "DamageClass" NOT NULL,
    "power" INTEGER,
    "pp" INTEGER,
    "accuracy" INTEGER,
    "priority" INTEGER NOT NULL DEFAULT 0,
    "effect_text" TEXT,
    "effect_chance" INTEGER,
    "flags" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "is_overridden" BOOLEAN NOT NULL DEFAULT false,
    "override_note" TEXT,

    CONSTRAINT "champ_move_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "champ_pokemon" (
    "id" INTEGER NOT NULL,
    "slug" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "national_dex_no" INTEGER NOT NULL,
    "type1_id" INTEGER NOT NULL,
    "type2_id" INTEGER,
    "base_hp" INTEGER NOT NULL,
    "base_attack" INTEGER NOT NULL,
    "base_defense" INTEGER NOT NULL,
    "base_special_attack" INTEGER NOT NULL,
    "base_special_defense" INTEGER NOT NULL,
    "base_speed" INTEGER NOT NULL,
    "is_mega" BOOLEAN NOT NULL DEFAULT false,
    "mega_of_id" INTEGER,
    "mega_ability_id" INTEGER,
    "sprite_key" TEXT,

    CONSTRAINT "champ_pokemon_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "champ_pokemon_ability" (
    "pokemon_id" INTEGER NOT NULL,
    "ability_id" INTEGER NOT NULL,
    "slot" INTEGER NOT NULL,
    "is_hidden" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "champ_pokemon_ability_pkey" PRIMARY KEY ("pokemon_id","ability_id")
);

-- CreateTable
CREATE TABLE "champ_learnset" (
    "pokemon_id" INTEGER NOT NULL,
    "move_id" INTEGER NOT NULL,

    CONSTRAINT "champ_learnset_pkey" PRIMARY KEY ("pokemon_id","move_id")
);

-- CreateTable
CREATE TABLE "regulation" (
    "id" SERIAL NOT NULL,
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "starts_on" DATE NOT NULL,
    "ends_on" DATE NOT NULL,
    "is_current" BOOLEAN NOT NULL DEFAULT false,
    "notes" TEXT,

    CONSTRAINT "regulation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "regulation_legality" (
    "regulation_id" INTEGER NOT NULL,
    "pokemon_id" INTEGER NOT NULL,

    CONSTRAINT "regulation_legality_pkey" PRIMARY KEY ("regulation_id","pokemon_id")
);

-- CreateTable
CREATE TABLE "known_set" (
    "id" SERIAL NOT NULL,
    "pokemon_id" INTEGER NOT NULL,
    "label" TEXT NOT NULL,
    "item" TEXT,
    "ability_id" INTEGER,
    "nature" TEXT,
    "sp_hp" INTEGER NOT NULL DEFAULT 0,
    "sp_attack" INTEGER NOT NULL DEFAULT 0,
    "sp_defense" INTEGER NOT NULL DEFAULT 0,
    "sp_special_attack" INTEGER NOT NULL DEFAULT 0,
    "sp_special_defense" INTEGER NOT NULL DEFAULT 0,
    "sp_speed" INTEGER NOT NULL DEFAULT 0,
    "source" "SetSource" NOT NULL DEFAULT 'CURATED',
    "seen_count" INTEGER NOT NULL DEFAULT 0,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "known_set_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "known_set_move" (
    "known_set_id" INTEGER NOT NULL,
    "move_id" INTEGER NOT NULL,
    "slot" INTEGER NOT NULL,

    CONSTRAINT "known_set_move_pkey" PRIMARY KEY ("known_set_id","move_id")
);

-- CreateTable
CREATE TABLE "scouted_team" (
    "id" SERIAL NOT NULL,
    "regulation_id" INTEGER NOT NULL,
    "label" TEXT NOT NULL,
    "is_mine" BOOLEAN NOT NULL DEFAULT false,
    "notes" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "scouted_team_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "scouted_team_member" (
    "id" SERIAL NOT NULL,
    "team_id" INTEGER NOT NULL,
    "pokemon_id" INTEGER NOT NULL,
    "slot" INTEGER NOT NULL,
    "known_set_id" INTEGER,

    CONSTRAINT "scouted_team_member_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "battle_session" (
    "id" SERIAL NOT NULL,
    "regulation_id" INTEGER NOT NULL,
    "my_team_id" INTEGER,
    "their_team_id" INTEGER,
    "format" "BattleFormat" NOT NULL DEFAULT 'SINGLES',
    "started_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "ended_at" TIMESTAMP(3),
    "result" "BattleResult" NOT NULL DEFAULT 'IN_PROGRESS',
    "notes" TEXT,

    CONSTRAINT "battle_session_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "battle_turn" (
    "id" SERIAL NOT NULL,
    "session_id" INTEGER NOT NULL,
    "turn_no" INTEGER NOT NULL,
    "state" JSONB NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "battle_turn_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "champ_type_slug_key" ON "champ_type"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "champ_ability_slug_key" ON "champ_ability"("slug");

-- CreateIndex
CREATE INDEX "champ_ability_slug_idx" ON "champ_ability" USING GIN ("slug" gin_trgm_ops);

-- CreateIndex
CREATE UNIQUE INDEX "champ_move_slug_key" ON "champ_move"("slug");

-- CreateIndex
CREATE INDEX "champ_move_slug_idx" ON "champ_move" USING GIN ("slug" gin_trgm_ops);

-- CreateIndex
CREATE UNIQUE INDEX "champ_pokemon_slug_key" ON "champ_pokemon"("slug");

-- CreateIndex
CREATE INDEX "champ_pokemon_slug_idx" ON "champ_pokemon" USING GIN ("slug" gin_trgm_ops);

-- CreateIndex
CREATE INDEX "champ_pokemon_is_mega_idx" ON "champ_pokemon"("is_mega");

-- CreateIndex
CREATE UNIQUE INDEX "regulation_code_key" ON "regulation"("code");

-- CreateIndex
CREATE INDEX "regulation_is_current_idx" ON "regulation"("is_current");

-- CreateIndex
CREATE INDEX "known_set_pokemon_id_source_idx" ON "known_set"("pokemon_id", "source");

-- CreateIndex
CREATE UNIQUE INDEX "scouted_team_member_team_id_slot_key" ON "scouted_team_member"("team_id", "slot");

-- CreateIndex
CREATE INDEX "battle_session_result_started_at_idx" ON "battle_session"("result", "started_at");

-- CreateIndex
CREATE UNIQUE INDEX "battle_turn_session_id_turn_no_key" ON "battle_turn"("session_id", "turn_no");

-- AddForeignKey
ALTER TABLE "champ_type_efficacy" ADD CONSTRAINT "champ_type_efficacy_attacking_type_id_fkey" FOREIGN KEY ("attacking_type_id") REFERENCES "champ_type"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "champ_type_efficacy" ADD CONSTRAINT "champ_type_efficacy_defending_type_id_fkey" FOREIGN KEY ("defending_type_id") REFERENCES "champ_type"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "champ_move" ADD CONSTRAINT "champ_move_type_id_fkey" FOREIGN KEY ("type_id") REFERENCES "champ_type"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "champ_pokemon" ADD CONSTRAINT "champ_pokemon_type1_id_fkey" FOREIGN KEY ("type1_id") REFERENCES "champ_type"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "champ_pokemon" ADD CONSTRAINT "champ_pokemon_type2_id_fkey" FOREIGN KEY ("type2_id") REFERENCES "champ_type"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "champ_pokemon" ADD CONSTRAINT "champ_pokemon_mega_of_id_fkey" FOREIGN KEY ("mega_of_id") REFERENCES "champ_pokemon"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "champ_pokemon" ADD CONSTRAINT "champ_pokemon_mega_ability_id_fkey" FOREIGN KEY ("mega_ability_id") REFERENCES "champ_ability"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "champ_pokemon_ability" ADD CONSTRAINT "champ_pokemon_ability_pokemon_id_fkey" FOREIGN KEY ("pokemon_id") REFERENCES "champ_pokemon"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "champ_pokemon_ability" ADD CONSTRAINT "champ_pokemon_ability_ability_id_fkey" FOREIGN KEY ("ability_id") REFERENCES "champ_ability"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "champ_learnset" ADD CONSTRAINT "champ_learnset_pokemon_id_fkey" FOREIGN KEY ("pokemon_id") REFERENCES "champ_pokemon"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "champ_learnset" ADD CONSTRAINT "champ_learnset_move_id_fkey" FOREIGN KEY ("move_id") REFERENCES "champ_move"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "regulation_legality" ADD CONSTRAINT "regulation_legality_regulation_id_fkey" FOREIGN KEY ("regulation_id") REFERENCES "regulation"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "regulation_legality" ADD CONSTRAINT "regulation_legality_pokemon_id_fkey" FOREIGN KEY ("pokemon_id") REFERENCES "champ_pokemon"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "known_set" ADD CONSTRAINT "known_set_pokemon_id_fkey" FOREIGN KEY ("pokemon_id") REFERENCES "champ_pokemon"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "known_set" ADD CONSTRAINT "known_set_ability_id_fkey" FOREIGN KEY ("ability_id") REFERENCES "champ_ability"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "known_set_move" ADD CONSTRAINT "known_set_move_known_set_id_fkey" FOREIGN KEY ("known_set_id") REFERENCES "known_set"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "known_set_move" ADD CONSTRAINT "known_set_move_move_id_fkey" FOREIGN KEY ("move_id") REFERENCES "champ_move"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "scouted_team" ADD CONSTRAINT "scouted_team_regulation_id_fkey" FOREIGN KEY ("regulation_id") REFERENCES "regulation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "scouted_team_member" ADD CONSTRAINT "scouted_team_member_team_id_fkey" FOREIGN KEY ("team_id") REFERENCES "scouted_team"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "scouted_team_member" ADD CONSTRAINT "scouted_team_member_pokemon_id_fkey" FOREIGN KEY ("pokemon_id") REFERENCES "champ_pokemon"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "scouted_team_member" ADD CONSTRAINT "scouted_team_member_known_set_id_fkey" FOREIGN KEY ("known_set_id") REFERENCES "known_set"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "battle_session" ADD CONSTRAINT "battle_session_regulation_id_fkey" FOREIGN KEY ("regulation_id") REFERENCES "regulation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "battle_session" ADD CONSTRAINT "battle_session_my_team_id_fkey" FOREIGN KEY ("my_team_id") REFERENCES "scouted_team"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "battle_session" ADD CONSTRAINT "battle_session_their_team_id_fkey" FOREIGN KEY ("their_team_id") REFERENCES "scouted_team"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "battle_turn" ADD CONSTRAINT "battle_turn_session_id_fkey" FOREIGN KEY ("session_id") REFERENCES "battle_session"("id") ON DELETE CASCADE ON UPDATE CASCADE;
