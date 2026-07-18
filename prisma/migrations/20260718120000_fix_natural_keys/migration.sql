-- DropForeignKey
ALTER TABLE "move_meta_stat_changes" DROP CONSTRAINT "move_meta_stat_changes_move_id_fkey";

-- AlterTable
ALTER TABLE "contest_combos" DROP CONSTRAINT "contest_combos_pkey",
ADD CONSTRAINT "contest_combos_pkey" PRIMARY KEY ("first_move_id", "second_move_id");

-- AlterTable
ALTER TABLE "encounter_condition_value_map" DROP CONSTRAINT "encounter_condition_value_map_pkey",
ADD CONSTRAINT "encounter_condition_value_map_pkey" PRIMARY KEY ("encounter_id", "encounter_condition_value_id");

-- AlterTable
ALTER TABLE "item_flag_map" DROP CONSTRAINT "item_flag_map_pkey",
ADD CONSTRAINT "item_flag_map_pkey" PRIMARY KEY ("item_id", "item_flag_id");

-- AlterTable
ALTER TABLE "location_game_indices" DROP CONSTRAINT "location_game_indices_pkey",
ADD CONSTRAINT "location_game_indices_pkey" PRIMARY KEY ("location_id", "generation_id", "game_index");

-- AlterTable
ALTER TABLE "move_flag_map" DROP CONSTRAINT "move_flag_map_pkey",
ADD CONSTRAINT "move_flag_map_pkey" PRIMARY KEY ("move_id", "move_flag_id");

-- AlterTable
ALTER TABLE "nature_battle_style_preferences" DROP CONSTRAINT "nature_battle_style_preferences_pkey",
ADD CONSTRAINT "nature_battle_style_preferences_pkey" PRIMARY KEY ("nature_id", "move_battle_style_id");

-- AlterTable
ALTER TABLE "pokedex_version_groups" DROP CONSTRAINT "pokedex_version_groups_pkey",
ADD CONSTRAINT "pokedex_version_groups_pkey" PRIMARY KEY ("pokedex_id", "version_group_id");

-- AlterTable
ALTER TABLE "pokemon_form_conditions" DROP CONSTRAINT "pokemon_form_conditions_pkey",
ADD COLUMN     "row_id" SERIAL NOT NULL,
ADD CONSTRAINT "pokemon_form_conditions_pkey" PRIMARY KEY ("row_id");

-- AlterTable
ALTER TABLE "pokemon_moves" DROP CONSTRAINT "pokemon_moves_pkey",
ALTER COLUMN "level" SET NOT NULL,
ADD CONSTRAINT "pokemon_moves_pkey" PRIMARY KEY ("pokemon_id", "version_group_id", "move_id", "pokemon_move_method_id", "level");

-- AlterTable
ALTER TABLE "super_contest_combos" DROP CONSTRAINT "super_contest_combos_pkey",
ADD CONSTRAINT "super_contest_combos_pkey" PRIMARY KEY ("first_move_id", "second_move_id");

-- AlterTable
ALTER TABLE "version_group_pokemon_move_methods" DROP CONSTRAINT "version_group_pokemon_move_methods_pkey",
ADD CONSTRAINT "version_group_pokemon_move_methods_pkey" PRIMARY KEY ("version_group_id", "pokemon_move_method_id");

-- AlterTable
ALTER TABLE "version_group_regions" DROP CONSTRAINT "version_group_regions_pkey",
ADD CONSTRAINT "version_group_regions_pkey" PRIMARY KEY ("version_group_id", "region_id");

-- AddForeignKey
ALTER TABLE "move_meta_stat_changes" ADD CONSTRAINT "move_meta_stat_changes_move_id_fkey" FOREIGN KEY ("move_id") REFERENCES "moves"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
