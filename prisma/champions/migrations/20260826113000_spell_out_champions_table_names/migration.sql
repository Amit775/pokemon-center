-- Spell `champ` out as `champions` in the Champions database.
--
-- Written by hand as RENAMEs rather than taken from `prisma migrate dev`, which diffs this
-- change as DROP + CREATE. That would have discarded 20,606 learnset rows and cascaded into
-- the user-owned box and team tables for what is purely a naming change. RENAME preserves
-- every row, and the re-seed afterwards is then a verification rather than a restore.
--
-- Indexes and constraints do not follow their table automatically in Postgres, so they are
-- renamed explicitly; leaving them behind would make the next `migrate diff` dirty.

-- Tables
ALTER TABLE "champ_type"             RENAME TO "champions_type";
ALTER TABLE "champ_type_efficacy"    RENAME TO "champions_type_efficacy";
ALTER TABLE "champ_ability"          RENAME TO "champions_ability";
ALTER TABLE "champ_move"             RENAME TO "champions_move";
ALTER TABLE "champ_pokemon"          RENAME TO "champions_pokemon";
ALTER TABLE "champ_pokemon_ability"  RENAME TO "champions_pokemon_ability";
ALTER TABLE "champ_learnset"         RENAME TO "champions_learnset";

-- Column
ALTER TABLE "champions_pokemon" RENAME COLUMN "national_dex_no" TO "national_pokedex_number";

-- Primary keys, unique constraints and indexes
ALTER INDEX "champ_type_pkey"                RENAME TO "champions_type_pkey";
ALTER INDEX "champ_type_slug_key"            RENAME TO "champions_type_slug_key";
ALTER INDEX "champ_type_efficacy_pkey"       RENAME TO "champions_type_efficacy_pkey";
ALTER INDEX "champ_ability_pkey"             RENAME TO "champions_ability_pkey";
ALTER INDEX "champ_ability_slug_key"         RENAME TO "champions_ability_slug_key";
ALTER INDEX "champ_ability_slug_idx"         RENAME TO "champions_ability_slug_idx";
ALTER INDEX "champ_move_pkey"                RENAME TO "champions_move_pkey";
ALTER INDEX "champ_move_slug_key"            RENAME TO "champions_move_slug_key";
ALTER INDEX "champ_move_slug_idx"            RENAME TO "champions_move_slug_idx";
ALTER INDEX "champ_pokemon_pkey"             RENAME TO "champions_pokemon_pkey";
ALTER INDEX "champ_pokemon_slug_key"         RENAME TO "champions_pokemon_slug_key";
ALTER INDEX "champ_pokemon_slug_idx"         RENAME TO "champions_pokemon_slug_idx";
ALTER INDEX "champ_pokemon_is_mega_idx"      RENAME TO "champions_pokemon_is_mega_idx";
ALTER INDEX "champ_pokemon_ability_pkey"     RENAME TO "champions_pokemon_ability_pkey";
ALTER INDEX "champ_learnset_pkey"            RENAME TO "champions_learnset_pkey";

-- Foreign keys owned by the renamed tables
ALTER TABLE "champions_type_efficacy"   RENAME CONSTRAINT "champ_type_efficacy_attacking_type_id_fkey" TO "champions_type_efficacy_attacking_type_id_fkey";
ALTER TABLE "champions_type_efficacy"   RENAME CONSTRAINT "champ_type_efficacy_defending_type_id_fkey" TO "champions_type_efficacy_defending_type_id_fkey";
ALTER TABLE "champions_move"            RENAME CONSTRAINT "champ_move_type_id_fkey"                    TO "champions_move_type_id_fkey";
ALTER TABLE "champions_pokemon"         RENAME CONSTRAINT "champ_pokemon_type1_id_fkey"                TO "champions_pokemon_type1_id_fkey";
ALTER TABLE "champions_pokemon"         RENAME CONSTRAINT "champ_pokemon_type2_id_fkey"                TO "champions_pokemon_type2_id_fkey";
ALTER TABLE "champions_pokemon"         RENAME CONSTRAINT "champ_pokemon_mega_of_id_fkey"              TO "champions_pokemon_mega_of_id_fkey";
ALTER TABLE "champions_pokemon"         RENAME CONSTRAINT "champ_pokemon_mega_ability_id_fkey"         TO "champions_pokemon_mega_ability_id_fkey";
ALTER TABLE "champions_pokemon_ability" RENAME CONSTRAINT "champ_pokemon_ability_pokemon_id_fkey"      TO "champions_pokemon_ability_pokemon_id_fkey";
ALTER TABLE "champions_pokemon_ability" RENAME CONSTRAINT "champ_pokemon_ability_ability_id_fkey"      TO "champions_pokemon_ability_ability_id_fkey";
ALTER TABLE "champions_learnset"        RENAME CONSTRAINT "champ_learnset_pokemon_id_fkey"             TO "champions_learnset_pokemon_id_fkey";
ALTER TABLE "champions_learnset"        RENAME CONSTRAINT "champ_learnset_move_id_fkey"                TO "champions_learnset_move_id_fkey";
