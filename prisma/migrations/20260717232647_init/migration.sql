-- CreateTable
CREATE TABLE "pokemon" (
    "id" INTEGER NOT NULL,
    "identifier" TEXT NOT NULL,
    "species_id" INTEGER NOT NULL,
    "height" INTEGER NOT NULL,
    "weight" INTEGER NOT NULL,
    "base_experience" INTEGER,
    "order" INTEGER,
    "is_default" INTEGER NOT NULL,

    CONSTRAINT "pokemon_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pokemon_species" (
    "id" INTEGER NOT NULL,
    "identifier" TEXT NOT NULL,
    "generation_id" INTEGER NOT NULL,
    "evolves_from_species_id" INTEGER,
    "evolution_chain_id" INTEGER NOT NULL,
    "color_id" INTEGER NOT NULL,
    "shape_id" INTEGER NOT NULL,
    "habitat_id" INTEGER,
    "gender_rate" INTEGER NOT NULL,
    "capture_rate" INTEGER NOT NULL,
    "base_happiness" INTEGER NOT NULL,
    "is_baby" INTEGER NOT NULL,
    "hatch_counter" INTEGER NOT NULL,
    "has_gender_differences" INTEGER NOT NULL,
    "growth_rate_id" INTEGER NOT NULL,
    "forms_switchable" INTEGER NOT NULL,
    "is_legendary" INTEGER NOT NULL,
    "is_mythical" INTEGER NOT NULL,
    "order" INTEGER NOT NULL,
    "conquest_order" INTEGER,

    CONSTRAINT "pokemon_species_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pokemon_forms" (
    "id" INTEGER NOT NULL,
    "identifier" TEXT NOT NULL,
    "form_identifier" TEXT,
    "pokemon_id" INTEGER NOT NULL,
    "introduced_in_version_group_id" INTEGER NOT NULL,
    "is_default" INTEGER NOT NULL,
    "is_battle_only" INTEGER NOT NULL,
    "is_mega" INTEGER NOT NULL,
    "form_order" INTEGER NOT NULL,
    "order" INTEGER NOT NULL,

    CONSTRAINT "pokemon_forms_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "moves" (
    "id" INTEGER NOT NULL,
    "identifier" TEXT NOT NULL,
    "generation_id" INTEGER NOT NULL,
    "type_id" INTEGER NOT NULL,
    "power" INTEGER,
    "pp" INTEGER,
    "accuracy" INTEGER,
    "priority" INTEGER NOT NULL,
    "target_id" INTEGER NOT NULL,
    "damage_class_id" INTEGER NOT NULL,
    "effect_id" INTEGER,
    "effect_chance" INTEGER,
    "contest_type_id" INTEGER,
    "contest_effect_id" INTEGER,
    "super_contest_effect_id" INTEGER,

    CONSTRAINT "moves_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "move_targets" (
    "id" INTEGER NOT NULL,
    "identifier" TEXT NOT NULL,

    CONSTRAINT "move_targets_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "move_damage_classes" (
    "id" INTEGER NOT NULL,
    "identifier" TEXT NOT NULL,

    CONSTRAINT "move_damage_classes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "types" (
    "id" INTEGER NOT NULL,
    "identifier" TEXT NOT NULL,
    "generation_id" INTEGER NOT NULL,
    "damage_class_id" INTEGER,

    CONSTRAINT "types_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "abilities" (
    "id" INTEGER NOT NULL,
    "identifier" TEXT NOT NULL,
    "generation_id" INTEGER NOT NULL,
    "is_main_series" INTEGER NOT NULL,

    CONSTRAINT "abilities_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "items" (
    "id" INTEGER NOT NULL,
    "identifier" TEXT NOT NULL,
    "category_id" INTEGER NOT NULL,
    "cost" INTEGER NOT NULL,
    "fling_power" INTEGER,
    "fling_effect_id" INTEGER,

    CONSTRAINT "items_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "item_categories" (
    "id" INTEGER NOT NULL,
    "pocket_id" INTEGER NOT NULL,
    "identifier" TEXT NOT NULL,

    CONSTRAINT "item_categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "item_pockets" (
    "id" INTEGER NOT NULL,
    "identifier" TEXT NOT NULL,

    CONSTRAINT "item_pockets_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "stats" (
    "id" INTEGER NOT NULL,
    "damage_class_id" INTEGER,
    "identifier" TEXT NOT NULL,
    "is_battle_only" INTEGER NOT NULL,
    "game_index" INTEGER,

    CONSTRAINT "stats_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "generations" (
    "id" INTEGER NOT NULL,
    "main_region_id" INTEGER NOT NULL,
    "identifier" TEXT NOT NULL,

    CONSTRAINT "generations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "version_groups" (
    "id" INTEGER NOT NULL,
    "identifier" TEXT NOT NULL,
    "generation_id" INTEGER NOT NULL,
    "order" INTEGER NOT NULL,

    CONSTRAINT "version_groups_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "versions" (
    "id" INTEGER NOT NULL,
    "version_group_id" INTEGER NOT NULL,
    "identifier" TEXT NOT NULL,

    CONSTRAINT "versions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "regions" (
    "id" INTEGER NOT NULL,
    "identifier" TEXT NOT NULL,

    CONSTRAINT "regions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "locations" (
    "id" INTEGER NOT NULL,
    "region_id" INTEGER,
    "identifier" TEXT NOT NULL,

    CONSTRAINT "locations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "location_areas" (
    "id" INTEGER NOT NULL,
    "location_id" INTEGER NOT NULL,
    "game_index" INTEGER NOT NULL,
    "identifier" TEXT,

    CONSTRAINT "location_areas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pokedexes" (
    "id" INTEGER NOT NULL,
    "region_id" INTEGER,
    "identifier" TEXT NOT NULL,
    "is_main_series" INTEGER NOT NULL,

    CONSTRAINT "pokedexes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "evolution_chains" (
    "id" INTEGER NOT NULL,
    "baby_trigger_item_id" INTEGER,

    CONSTRAINT "evolution_chains_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "evolution_triggers" (
    "id" INTEGER NOT NULL,
    "identifier" TEXT NOT NULL,

    CONSTRAINT "evolution_triggers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pokemon_evolution" (
    "id" INTEGER NOT NULL,
    "evolved_species_id" INTEGER NOT NULL,
    "evolution_trigger_id" INTEGER NOT NULL,
    "trigger_item_id" INTEGER,
    "minimum_level" INTEGER,
    "gender_id" INTEGER,
    "location_id" INTEGER,
    "held_item_id" INTEGER,
    "time_of_day" TEXT,
    "known_move_id" INTEGER,
    "known_move_type_id" INTEGER,
    "minimum_happiness" INTEGER,
    "minimum_beauty" INTEGER,
    "minimum_affection" INTEGER,
    "relative_physical_stats" INTEGER,
    "party_species_id" INTEGER,
    "party_type_id" INTEGER,
    "trade_species_id" INTEGER,
    "needs_overworld_rain" INTEGER NOT NULL,
    "turn_upside_down" INTEGER NOT NULL,
    "version_group_id" INTEGER NOT NULL,
    "is_default" INTEGER NOT NULL,
    "needs_multiplayer" INTEGER NOT NULL,
    "near_special_rock" INTEGER NOT NULL,
    "region_id" INTEGER,
    "base_form_id" INTEGER,
    "evolved_form_id" INTEGER,
    "used_move_id" INTEGER,
    "minimum_move_count" INTEGER,
    "minimum_steps" INTEGER,
    "minimum_damage_taken" INTEGER,

    CONSTRAINT "pokemon_evolution_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "growth_rates" (
    "id" INTEGER NOT NULL,
    "identifier" TEXT NOT NULL,
    "formula" TEXT NOT NULL,

    CONSTRAINT "growth_rates_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "experience" (
    "growth_rate_id" INTEGER NOT NULL,
    "level" INTEGER NOT NULL,
    "experience" INTEGER NOT NULL,

    CONSTRAINT "experience_pkey" PRIMARY KEY ("growth_rate_id","level")
);

-- CreateTable
CREATE TABLE "genders" (
    "id" INTEGER NOT NULL,
    "identifier" TEXT NOT NULL,

    CONSTRAINT "genders_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "languages" (
    "id" INTEGER NOT NULL,
    "iso639" TEXT NOT NULL,
    "iso3166" TEXT NOT NULL,
    "identifier" TEXT NOT NULL,
    "official" INTEGER NOT NULL,
    "order" INTEGER NOT NULL,

    CONSTRAINT "languages_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "egg_groups" (
    "id" INTEGER NOT NULL,
    "identifier" TEXT NOT NULL,

    CONSTRAINT "egg_groups_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "natures" (
    "id" INTEGER NOT NULL,
    "identifier" TEXT NOT NULL,
    "decreased_stat_id" INTEGER NOT NULL,
    "increased_stat_id" INTEGER NOT NULL,
    "hates_flavor_id" INTEGER NOT NULL,
    "likes_flavor_id" INTEGER NOT NULL,
    "game_index" INTEGER NOT NULL,

    CONSTRAINT "natures_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "contest_types" (
    "id" INTEGER NOT NULL,
    "identifier" TEXT NOT NULL,

    CONSTRAINT "contest_types_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "contest_effects" (
    "id" INTEGER NOT NULL,
    "appeal" INTEGER NOT NULL,
    "jam" INTEGER NOT NULL,

    CONSTRAINT "contest_effects_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "super_contest_effects" (
    "id" INTEGER NOT NULL,
    "appeal" INTEGER NOT NULL,

    CONSTRAINT "super_contest_effects_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "machines" (
    "machine_number" INTEGER NOT NULL,
    "version_group_id" INTEGER NOT NULL,
    "item_id" INTEGER NOT NULL,
    "move_id" INTEGER NOT NULL,

    CONSTRAINT "machines_pkey" PRIMARY KEY ("machine_number","version_group_id")
);

-- CreateTable
CREATE TABLE "encounter_methods" (
    "id" INTEGER NOT NULL,
    "identifier" TEXT NOT NULL,
    "order" INTEGER NOT NULL,

    CONSTRAINT "encounter_methods_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "encounter_slots" (
    "id" INTEGER NOT NULL,
    "version_group_id" INTEGER NOT NULL,
    "encounter_method_id" INTEGER NOT NULL,
    "slot" INTEGER,
    "rarity" INTEGER NOT NULL,

    CONSTRAINT "encounter_slots_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "encounters" (
    "id" INTEGER NOT NULL,
    "version_id" INTEGER NOT NULL,
    "location_area_id" INTEGER NOT NULL,
    "encounter_slot_id" INTEGER NOT NULL,
    "pokemon_id" INTEGER NOT NULL,
    "min_level" INTEGER NOT NULL,
    "max_level" INTEGER NOT NULL,

    CONSTRAINT "encounters_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "encounter_conditions" (
    "id" INTEGER NOT NULL,
    "identifier" TEXT NOT NULL,

    CONSTRAINT "encounter_conditions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "encounter_condition_values" (
    "id" INTEGER NOT NULL,
    "encounter_condition_id" INTEGER NOT NULL,
    "identifier" TEXT NOT NULL,
    "is_default" INTEGER NOT NULL,

    CONSTRAINT "encounter_condition_values_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "encounter_condition_value_map" (
    "encounter_id" INTEGER NOT NULL,
    "encounter_condition_value_id" INTEGER NOT NULL,

    CONSTRAINT "encounter_condition_value_map_pkey" PRIMARY KEY ("encounter_id")
);

-- CreateTable
CREATE TABLE "move_meta_categories" (
    "id" INTEGER NOT NULL,
    "identifier" TEXT NOT NULL,

    CONSTRAINT "move_meta_categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "move_meta_ailments" (
    "id" INTEGER NOT NULL,
    "identifier" TEXT NOT NULL,

    CONSTRAINT "move_meta_ailments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "move_meta" (
    "move_id" INTEGER NOT NULL,
    "meta_category_id" INTEGER NOT NULL,
    "meta_ailment_id" INTEGER,
    "min_hits" INTEGER,
    "max_hits" INTEGER,
    "min_turns" INTEGER,
    "max_turns" INTEGER,
    "drain" INTEGER NOT NULL,
    "healing" INTEGER NOT NULL,
    "crit_rate" INTEGER NOT NULL,
    "ailment_chance" INTEGER NOT NULL,
    "flinch_chance" INTEGER NOT NULL,
    "stat_chance" INTEGER NOT NULL,

    CONSTRAINT "move_meta_pkey" PRIMARY KEY ("move_id")
);

-- CreateTable
CREATE TABLE "move_meta_stat_changes" (
    "move_id" INTEGER NOT NULL,
    "stat_id" INTEGER NOT NULL,
    "change" INTEGER NOT NULL,

    CONSTRAINT "move_meta_stat_changes_pkey" PRIMARY KEY ("move_id","stat_id")
);

-- CreateTable
CREATE TABLE "move_flags" (
    "id" INTEGER NOT NULL,
    "identifier" TEXT NOT NULL,

    CONSTRAINT "move_flags_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "move_flag_map" (
    "move_id" INTEGER NOT NULL,
    "move_flag_id" INTEGER NOT NULL,

    CONSTRAINT "move_flag_map_pkey" PRIMARY KEY ("move_id")
);

-- CreateTable
CREATE TABLE "move_battle_styles" (
    "id" INTEGER NOT NULL,
    "identifier" TEXT NOT NULL,

    CONSTRAINT "move_battle_styles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "item_flags" (
    "id" INTEGER NOT NULL,
    "identifier" TEXT NOT NULL,

    CONSTRAINT "item_flags_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "item_flag_map" (
    "item_id" INTEGER NOT NULL,
    "item_flag_id" INTEGER NOT NULL,

    CONSTRAINT "item_flag_map_pkey" PRIMARY KEY ("item_id")
);

-- CreateTable
CREATE TABLE "item_fling_effects" (
    "id" INTEGER NOT NULL,
    "identifier" TEXT NOT NULL,

    CONSTRAINT "item_fling_effects_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "berries" (
    "id" INTEGER NOT NULL,
    "item_id" INTEGER NOT NULL,
    "firmness_id" INTEGER NOT NULL,
    "natural_gift_power" INTEGER,
    "natural_gift_type_id" INTEGER,
    "size" INTEGER NOT NULL,
    "max_harvest" INTEGER NOT NULL,
    "growth_time" INTEGER NOT NULL,
    "soil_dryness" INTEGER NOT NULL,
    "smoothness" INTEGER NOT NULL,

    CONSTRAINT "berries_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "berry_firmness" (
    "id" INTEGER NOT NULL,
    "identifier" TEXT NOT NULL,

    CONSTRAINT "berry_firmness_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "berry_flavors" (
    "berry_id" INTEGER NOT NULL,
    "contest_type_id" INTEGER NOT NULL,
    "flavor" INTEGER NOT NULL,

    CONSTRAINT "berry_flavors_pkey" PRIMARY KEY ("berry_id","contest_type_id")
);

-- CreateTable
CREATE TABLE "characteristics" (
    "id" INTEGER NOT NULL,
    "stat_id" INTEGER NOT NULL,
    "gene_mod_5" INTEGER NOT NULL,

    CONSTRAINT "characteristics_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "contest_combos" (
    "first_move_id" INTEGER NOT NULL,
    "second_move_id" INTEGER NOT NULL,

    CONSTRAINT "contest_combos_pkey" PRIMARY KEY ("first_move_id")
);

-- CreateTable
CREATE TABLE "super_contest_combos" (
    "first_move_id" INTEGER NOT NULL,
    "second_move_id" INTEGER NOT NULL,

    CONSTRAINT "super_contest_combos_pkey" PRIMARY KEY ("first_move_id")
);

-- CreateTable
CREATE TABLE "pokemon_move_methods" (
    "id" INTEGER NOT NULL,
    "identifier" TEXT NOT NULL,

    CONSTRAINT "pokemon_move_methods_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "version_group_pokemon_move_methods" (
    "version_group_id" INTEGER NOT NULL,
    "pokemon_move_method_id" INTEGER NOT NULL,

    CONSTRAINT "version_group_pokemon_move_methods_pkey" PRIMARY KEY ("version_group_id")
);

-- CreateTable
CREATE TABLE "pokemon_shapes" (
    "id" INTEGER NOT NULL,
    "identifier" TEXT NOT NULL,

    CONSTRAINT "pokemon_shapes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pokemon_colors" (
    "id" INTEGER NOT NULL,
    "identifier" TEXT NOT NULL,

    CONSTRAINT "pokemon_colors_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pokemon_habitats" (
    "id" INTEGER NOT NULL,
    "identifier" TEXT NOT NULL,

    CONSTRAINT "pokemon_habitats_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "type_efficacy" (
    "damage_type_id" INTEGER NOT NULL,
    "target_type_id" INTEGER NOT NULL,
    "damage_factor" INTEGER NOT NULL,

    CONSTRAINT "type_efficacy_pkey" PRIMARY KEY ("damage_type_id","target_type_id")
);

-- CreateTable
CREATE TABLE "version_group_regions" (
    "version_group_id" INTEGER NOT NULL,
    "region_id" INTEGER NOT NULL,

    CONSTRAINT "version_group_regions_pkey" PRIMARY KEY ("version_group_id")
);

-- CreateTable
CREATE TABLE "pokedex_version_groups" (
    "pokedex_id" INTEGER NOT NULL,
    "version_group_id" INTEGER NOT NULL,

    CONSTRAINT "pokedex_version_groups_pkey" PRIMARY KEY ("pokedex_id")
);

-- CreateTable
CREATE TABLE "pokemon_abilities" (
    "pokemon_id" INTEGER NOT NULL,
    "ability_id" INTEGER NOT NULL,
    "is_hidden" INTEGER NOT NULL,
    "slot" INTEGER NOT NULL,

    CONSTRAINT "pokemon_abilities_pkey" PRIMARY KEY ("pokemon_id","ability_id")
);

-- CreateTable
CREATE TABLE "pokemon_moves" (
    "pokemon_id" INTEGER NOT NULL,
    "version_group_id" INTEGER NOT NULL,
    "move_id" INTEGER NOT NULL,
    "pokemon_move_method_id" INTEGER NOT NULL,
    "level" INTEGER,
    "order" INTEGER,
    "mastery" INTEGER,

    CONSTRAINT "pokemon_moves_pkey" PRIMARY KEY ("pokemon_id","version_group_id","move_id","pokemon_move_method_id")
);

-- CreateTable
CREATE TABLE "pokemon_stats" (
    "pokemon_id" INTEGER NOT NULL,
    "stat_id" INTEGER NOT NULL,
    "base_stat" INTEGER NOT NULL,
    "effort" INTEGER NOT NULL,

    CONSTRAINT "pokemon_stats_pkey" PRIMARY KEY ("pokemon_id","stat_id")
);

-- CreateTable
CREATE TABLE "pokemon_types" (
    "pokemon_id" INTEGER NOT NULL,
    "type_id" INTEGER NOT NULL,
    "slot" INTEGER NOT NULL,

    CONSTRAINT "pokemon_types_pkey" PRIMARY KEY ("pokemon_id","type_id")
);

-- CreateTable
CREATE TABLE "pokemon_egg_groups" (
    "species_id" INTEGER NOT NULL,
    "egg_group_id" INTEGER NOT NULL,

    CONSTRAINT "pokemon_egg_groups_pkey" PRIMARY KEY ("species_id","egg_group_id")
);

-- CreateTable
CREATE TABLE "pokemon_items" (
    "pokemon_id" INTEGER NOT NULL,
    "version_id" INTEGER NOT NULL,
    "item_id" INTEGER NOT NULL,
    "rarity" INTEGER NOT NULL,

    CONSTRAINT "pokemon_items_pkey" PRIMARY KEY ("pokemon_id","version_id","item_id")
);

-- CreateTable
CREATE TABLE "pokemon_game_indices" (
    "pokemon_id" INTEGER NOT NULL,
    "version_id" INTEGER NOT NULL,
    "game_index" INTEGER NOT NULL,

    CONSTRAINT "pokemon_game_indices_pkey" PRIMARY KEY ("pokemon_id","version_id")
);

-- CreateTable
CREATE TABLE "pokemon_dex_numbers" (
    "species_id" INTEGER NOT NULL,
    "pokedex_id" INTEGER NOT NULL,
    "pokedex_number" INTEGER NOT NULL,

    CONSTRAINT "pokemon_dex_numbers_pkey" PRIMARY KEY ("species_id","pokedex_id")
);

-- CreateTable
CREATE TABLE "pokemon_form_generations" (
    "pokemon_form_id" INTEGER NOT NULL,
    "generation_id" INTEGER NOT NULL,
    "game_index" INTEGER NOT NULL,

    CONSTRAINT "pokemon_form_generations_pkey" PRIMARY KEY ("pokemon_form_id","generation_id")
);

-- CreateTable
CREATE TABLE "pokemon_form_types" (
    "pokemon_form_id" INTEGER NOT NULL,
    "type_id" INTEGER NOT NULL,
    "slot" INTEGER NOT NULL,

    CONSTRAINT "pokemon_form_types_pkey" PRIMARY KEY ("pokemon_form_id","type_id")
);

-- CreateTable
CREATE TABLE "type_game_indices" (
    "type_id" INTEGER NOT NULL,
    "generation_id" INTEGER NOT NULL,
    "game_index" INTEGER NOT NULL,

    CONSTRAINT "type_game_indices_pkey" PRIMARY KEY ("type_id","generation_id")
);

-- CreateTable
CREATE TABLE "item_game_indices" (
    "item_id" INTEGER NOT NULL,
    "generation_id" INTEGER NOT NULL,
    "game_index" INTEGER NOT NULL,

    CONSTRAINT "item_game_indices_pkey" PRIMARY KEY ("item_id","generation_id")
);

-- CreateTable
CREATE TABLE "location_game_indices" (
    "location_id" INTEGER NOT NULL,
    "generation_id" INTEGER NOT NULL,
    "game_index" INTEGER NOT NULL,

    CONSTRAINT "location_game_indices_pkey" PRIMARY KEY ("location_id","generation_id")
);

-- CreateTable
CREATE TABLE "location_area_encounter_rates" (
    "location_area_id" INTEGER NOT NULL,
    "encounter_method_id" INTEGER NOT NULL,
    "version_id" INTEGER NOT NULL,
    "rate" INTEGER NOT NULL,

    CONSTRAINT "location_area_encounter_rates_pkey" PRIMARY KEY ("location_area_id","encounter_method_id","version_id")
);

-- CreateTable
CREATE TABLE "nature_battle_style_preferences" (
    "nature_id" INTEGER NOT NULL,
    "move_battle_style_id" INTEGER NOT NULL,
    "low_hp_preference" INTEGER NOT NULL,
    "high_hp_preference" INTEGER NOT NULL,

    CONSTRAINT "nature_battle_style_preferences_pkey" PRIMARY KEY ("nature_id")
);

-- CreateTable
CREATE TABLE "ability_changelog" (
    "id" INTEGER NOT NULL,
    "ability_id" INTEGER NOT NULL,
    "changed_in_version_group_id" INTEGER NOT NULL,

    CONSTRAINT "ability_changelog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ability_changelog_prose" (
    "ability_changelog_id" INTEGER NOT NULL,
    "local_language_id" INTEGER NOT NULL,
    "effect" TEXT NOT NULL,

    CONSTRAINT "ability_changelog_prose_pkey" PRIMARY KEY ("ability_changelog_id","local_language_id")
);

-- CreateTable
CREATE TABLE "ability_flavor_text" (
    "ability_id" INTEGER NOT NULL,
    "version_group_id" INTEGER NOT NULL,
    "language_id" INTEGER NOT NULL,
    "flavor_text" TEXT NOT NULL,

    CONSTRAINT "ability_flavor_text_pkey" PRIMARY KEY ("ability_id","version_group_id","language_id")
);

-- CreateTable
CREATE TABLE "ability_names" (
    "ability_id" INTEGER NOT NULL,
    "local_language_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "ability_names_pkey" PRIMARY KEY ("ability_id","local_language_id")
);

-- CreateTable
CREATE TABLE "ability_prose" (
    "ability_id" INTEGER NOT NULL,
    "local_language_id" INTEGER NOT NULL,
    "short_effect" TEXT NOT NULL,
    "effect" TEXT NOT NULL,

    CONSTRAINT "ability_prose_pkey" PRIMARY KEY ("ability_id","local_language_id")
);

-- CreateTable
CREATE TABLE "berry_firmness_names" (
    "berry_firmness_id" INTEGER NOT NULL,
    "local_language_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "berry_firmness_names_pkey" PRIMARY KEY ("berry_firmness_id","local_language_id")
);

-- CreateTable
CREATE TABLE "characteristic_text" (
    "characteristic_id" INTEGER NOT NULL,
    "local_language_id" INTEGER NOT NULL,
    "message" TEXT NOT NULL,

    CONSTRAINT "characteristic_text_pkey" PRIMARY KEY ("characteristic_id","local_language_id")
);

-- CreateTable
CREATE TABLE "contest_effect_prose" (
    "contest_effect_id" INTEGER NOT NULL,
    "local_language_id" INTEGER NOT NULL,
    "flavor_text" TEXT NOT NULL,
    "effect" TEXT NOT NULL,

    CONSTRAINT "contest_effect_prose_pkey" PRIMARY KEY ("contest_effect_id","local_language_id")
);

-- CreateTable
CREATE TABLE "contest_type_names" (
    "contest_type_id" INTEGER NOT NULL,
    "local_language_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "flavor" TEXT NOT NULL,
    "color" TEXT,

    CONSTRAINT "contest_type_names_pkey" PRIMARY KEY ("contest_type_id","local_language_id")
);

-- CreateTable
CREATE TABLE "egg_group_prose" (
    "egg_group_id" INTEGER NOT NULL,
    "local_language_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "egg_group_prose_pkey" PRIMARY KEY ("egg_group_id","local_language_id")
);

-- CreateTable
CREATE TABLE "encounter_condition_prose" (
    "encounter_condition_id" INTEGER NOT NULL,
    "local_language_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "encounter_condition_prose_pkey" PRIMARY KEY ("encounter_condition_id","local_language_id")
);

-- CreateTable
CREATE TABLE "encounter_condition_value_prose" (
    "encounter_condition_value_id" INTEGER NOT NULL,
    "local_language_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "encounter_condition_value_prose_pkey" PRIMARY KEY ("encounter_condition_value_id","local_language_id")
);

-- CreateTable
CREATE TABLE "encounter_method_prose" (
    "encounter_method_id" INTEGER NOT NULL,
    "local_language_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "encounter_method_prose_pkey" PRIMARY KEY ("encounter_method_id","local_language_id")
);

-- CreateTable
CREATE TABLE "evolution_trigger_prose" (
    "evolution_trigger_id" INTEGER NOT NULL,
    "local_language_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "evolution_trigger_prose_pkey" PRIMARY KEY ("evolution_trigger_id","local_language_id")
);

-- CreateTable
CREATE TABLE "generation_names" (
    "generation_id" INTEGER NOT NULL,
    "local_language_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "generation_names_pkey" PRIMARY KEY ("generation_id","local_language_id")
);

-- CreateTable
CREATE TABLE "growth_rate_prose" (
    "growth_rate_id" INTEGER NOT NULL,
    "local_language_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "growth_rate_prose_pkey" PRIMARY KEY ("growth_rate_id","local_language_id")
);

-- CreateTable
CREATE TABLE "item_category_prose" (
    "item_category_id" INTEGER NOT NULL,
    "local_language_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "item_category_prose_pkey" PRIMARY KEY ("item_category_id","local_language_id")
);

-- CreateTable
CREATE TABLE "item_flag_prose" (
    "item_flag_id" INTEGER NOT NULL,
    "local_language_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "item_flag_prose_pkey" PRIMARY KEY ("item_flag_id","local_language_id")
);

-- CreateTable
CREATE TABLE "item_flavor_summaries" (
    "item_id" INTEGER NOT NULL,
    "local_language_id" INTEGER NOT NULL,
    "flavor_summary" TEXT NOT NULL,

    CONSTRAINT "item_flavor_summaries_pkey" PRIMARY KEY ("item_id","local_language_id")
);

-- CreateTable
CREATE TABLE "item_flavor_text" (
    "item_id" INTEGER NOT NULL,
    "version_group_id" INTEGER NOT NULL,
    "language_id" INTEGER NOT NULL,
    "flavor_text" TEXT,

    CONSTRAINT "item_flavor_text_pkey" PRIMARY KEY ("item_id","version_group_id","language_id")
);

-- CreateTable
CREATE TABLE "item_fling_effect_prose" (
    "item_fling_effect_id" INTEGER NOT NULL,
    "local_language_id" INTEGER NOT NULL,
    "effect" TEXT NOT NULL,

    CONSTRAINT "item_fling_effect_prose_pkey" PRIMARY KEY ("item_fling_effect_id","local_language_id")
);

-- CreateTable
CREATE TABLE "item_names" (
    "item_id" INTEGER NOT NULL,
    "local_language_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "item_names_pkey" PRIMARY KEY ("item_id","local_language_id")
);

-- CreateTable
CREATE TABLE "item_pocket_names" (
    "item_pocket_id" INTEGER NOT NULL,
    "local_language_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "item_pocket_names_pkey" PRIMARY KEY ("item_pocket_id","local_language_id")
);

-- CreateTable
CREATE TABLE "item_prose" (
    "item_id" INTEGER NOT NULL,
    "local_language_id" INTEGER NOT NULL,
    "short_effect" TEXT,
    "effect" TEXT,

    CONSTRAINT "item_prose_pkey" PRIMARY KEY ("item_id","local_language_id")
);

-- CreateTable
CREATE TABLE "language_names" (
    "language_id" INTEGER NOT NULL,
    "local_language_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "language_names_pkey" PRIMARY KEY ("language_id","local_language_id")
);

-- CreateTable
CREATE TABLE "location_area_prose" (
    "location_area_id" INTEGER NOT NULL,
    "local_language_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "location_area_prose_pkey" PRIMARY KEY ("location_area_id","local_language_id")
);

-- CreateTable
CREATE TABLE "location_names" (
    "location_id" INTEGER NOT NULL,
    "local_language_id" INTEGER NOT NULL,
    "name" TEXT,
    "subtitle" TEXT,

    CONSTRAINT "location_names_pkey" PRIMARY KEY ("location_id","local_language_id")
);

-- CreateTable
CREATE TABLE "move_battle_style_prose" (
    "move_battle_style_id" INTEGER NOT NULL,
    "local_language_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "move_battle_style_prose_pkey" PRIMARY KEY ("move_battle_style_id","local_language_id")
);

-- CreateTable
CREATE TABLE "move_changelog" (
    "move_id" INTEGER NOT NULL,
    "changed_in_version_group_id" INTEGER NOT NULL,
    "type_id" INTEGER,
    "power" INTEGER,
    "pp" INTEGER,
    "accuracy" INTEGER,
    "priority" INTEGER,
    "target_id" INTEGER,
    "effect_id" INTEGER,
    "effect_chance" INTEGER,

    CONSTRAINT "move_changelog_pkey" PRIMARY KEY ("move_id","changed_in_version_group_id")
);

-- CreateTable
CREATE TABLE "move_damage_class_prose" (
    "move_damage_class_id" INTEGER NOT NULL,
    "local_language_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "move_damage_class_prose_pkey" PRIMARY KEY ("move_damage_class_id","local_language_id")
);

-- CreateTable
CREATE TABLE "move_effect_changelog" (
    "id" INTEGER NOT NULL,
    "effect_id" INTEGER NOT NULL,
    "changed_in_version_group_id" INTEGER NOT NULL,

    CONSTRAINT "move_effect_changelog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "move_effect_changelog_prose" (
    "move_effect_changelog_id" INTEGER NOT NULL,
    "local_language_id" INTEGER NOT NULL,
    "effect" TEXT NOT NULL,

    CONSTRAINT "move_effect_changelog_prose_pkey" PRIMARY KEY ("move_effect_changelog_id","local_language_id")
);

-- CreateTable
CREATE TABLE "move_effect_prose" (
    "move_effect_id" INTEGER NOT NULL,
    "local_language_id" INTEGER NOT NULL,
    "short_effect" TEXT NOT NULL,
    "effect" TEXT NOT NULL,

    CONSTRAINT "move_effect_prose_pkey" PRIMARY KEY ("move_effect_id","local_language_id")
);

-- CreateTable
CREATE TABLE "move_effects" (
    "id" INTEGER NOT NULL,

    CONSTRAINT "move_effects_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "move_flag_prose" (
    "move_flag_id" INTEGER NOT NULL,
    "local_language_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "move_flag_prose_pkey" PRIMARY KEY ("move_flag_id","local_language_id")
);

-- CreateTable
CREATE TABLE "move_flavor_summaries" (
    "move_id" INTEGER NOT NULL,
    "local_language_id" INTEGER NOT NULL,
    "flavor_summary" TEXT NOT NULL,

    CONSTRAINT "move_flavor_summaries_pkey" PRIMARY KEY ("move_id","local_language_id")
);

-- CreateTable
CREATE TABLE "move_flavor_text" (
    "move_id" INTEGER NOT NULL,
    "version_group_id" INTEGER NOT NULL,
    "language_id" INTEGER NOT NULL,
    "flavor_text" TEXT NOT NULL,

    CONSTRAINT "move_flavor_text_pkey" PRIMARY KEY ("move_id","version_group_id","language_id")
);

-- CreateTable
CREATE TABLE "move_meta_ailment_names" (
    "move_meta_ailment_id" INTEGER NOT NULL,
    "local_language_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "move_meta_ailment_names_pkey" PRIMARY KEY ("move_meta_ailment_id","local_language_id")
);

-- CreateTable
CREATE TABLE "move_meta_category_prose" (
    "move_meta_category_id" INTEGER NOT NULL,
    "local_language_id" INTEGER NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "move_meta_category_prose_pkey" PRIMARY KEY ("move_meta_category_id","local_language_id")
);

-- CreateTable
CREATE TABLE "move_names" (
    "move_id" INTEGER NOT NULL,
    "local_language_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "move_names_pkey" PRIMARY KEY ("move_id","local_language_id")
);

-- CreateTable
CREATE TABLE "move_target_prose" (
    "move_target_id" INTEGER NOT NULL,
    "local_language_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "move_target_prose_pkey" PRIMARY KEY ("move_target_id","local_language_id")
);

-- CreateTable
CREATE TABLE "nature_names" (
    "nature_id" INTEGER NOT NULL,
    "local_language_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "nature_names_pkey" PRIMARY KEY ("nature_id","local_language_id")
);

-- CreateTable
CREATE TABLE "pokeathlon_stat_names" (
    "pokeathlon_stat_id" INTEGER NOT NULL,
    "local_language_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "pokeathlon_stat_names_pkey" PRIMARY KEY ("pokeathlon_stat_id","local_language_id")
);

-- CreateTable
CREATE TABLE "pokedex_prose" (
    "pokedex_id" INTEGER NOT NULL,
    "local_language_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "pokedex_prose_pkey" PRIMARY KEY ("pokedex_id","local_language_id")
);

-- CreateTable
CREATE TABLE "pokemon_abilities_past" (
    "pokemon_id" INTEGER NOT NULL,
    "generation_id" INTEGER NOT NULL,
    "ability_id" INTEGER,
    "is_hidden" INTEGER NOT NULL,
    "slot" INTEGER NOT NULL,

    CONSTRAINT "pokemon_abilities_past_pkey" PRIMARY KEY ("pokemon_id","generation_id","slot")
);

-- CreateTable
CREATE TABLE "pokemon_color_names" (
    "pokemon_color_id" INTEGER NOT NULL,
    "local_language_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "pokemon_color_names_pkey" PRIMARY KEY ("pokemon_color_id","local_language_id")
);

-- CreateTable
CREATE TABLE "pokemon_form_conditions" (
    "pokemon_form_id" INTEGER NOT NULL,
    "form_trigger_id" INTEGER NOT NULL,
    "trigger_item_id" INTEGER,
    "trigger_ability_id" INTEGER,
    "trigger_move_id" INTEGER,

    CONSTRAINT "pokemon_form_conditions_pkey" PRIMARY KEY ("pokemon_form_id","form_trigger_id")
);

-- CreateTable
CREATE TABLE "pokemon_form_names" (
    "pokemon_form_id" INTEGER NOT NULL,
    "local_language_id" INTEGER NOT NULL,
    "form_name" TEXT,
    "pokemon_name" TEXT,

    CONSTRAINT "pokemon_form_names_pkey" PRIMARY KEY ("pokemon_form_id","local_language_id")
);

-- CreateTable
CREATE TABLE "pokemon_form_trigger_prose" (
    "pokemon_form_trigger_id" INTEGER NOT NULL,
    "local_language_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "pokemon_form_trigger_prose_pkey" PRIMARY KEY ("pokemon_form_trigger_id","local_language_id")
);

-- CreateTable
CREATE TABLE "pokemon_form_triggers" (
    "id" INTEGER NOT NULL,
    "identifier" TEXT NOT NULL,

    CONSTRAINT "pokemon_form_triggers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pokemon_habitat_names" (
    "pokemon_habitat_id" INTEGER NOT NULL,
    "local_language_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "pokemon_habitat_names_pkey" PRIMARY KEY ("pokemon_habitat_id","local_language_id")
);

-- CreateTable
CREATE TABLE "pokemon_move_method_prose" (
    "pokemon_move_method_id" INTEGER NOT NULL,
    "local_language_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "pokemon_move_method_prose_pkey" PRIMARY KEY ("pokemon_move_method_id","local_language_id")
);

-- CreateTable
CREATE TABLE "pokemon_shape_prose" (
    "pokemon_shape_id" INTEGER NOT NULL,
    "local_language_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "awesome_name" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "pokemon_shape_prose_pkey" PRIMARY KEY ("pokemon_shape_id","local_language_id")
);

-- CreateTable
CREATE TABLE "pokemon_species_flavor_summaries" (
    "pokemon_species_id" INTEGER NOT NULL,
    "local_language_id" INTEGER NOT NULL,
    "flavor_summary" TEXT NOT NULL,

    CONSTRAINT "pokemon_species_flavor_summaries_pkey" PRIMARY KEY ("pokemon_species_id","local_language_id")
);

-- CreateTable
CREATE TABLE "pokemon_species_flavor_text" (
    "species_id" INTEGER NOT NULL,
    "version_id" INTEGER NOT NULL,
    "language_id" INTEGER NOT NULL,
    "flavor_text" TEXT NOT NULL,

    CONSTRAINT "pokemon_species_flavor_text_pkey" PRIMARY KEY ("species_id","version_id","language_id")
);

-- CreateTable
CREATE TABLE "pokemon_species_names" (
    "pokemon_species_id" INTEGER NOT NULL,
    "local_language_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "genus" TEXT,

    CONSTRAINT "pokemon_species_names_pkey" PRIMARY KEY ("pokemon_species_id","local_language_id")
);

-- CreateTable
CREATE TABLE "pokemon_species_prose" (
    "pokemon_species_id" INTEGER NOT NULL,
    "local_language_id" INTEGER NOT NULL,
    "form_description" TEXT NOT NULL,

    CONSTRAINT "pokemon_species_prose_pkey" PRIMARY KEY ("pokemon_species_id","local_language_id")
);

-- CreateTable
CREATE TABLE "pokemon_stats_past" (
    "pokemon_id" INTEGER NOT NULL,
    "generation_id" INTEGER NOT NULL,
    "stat_id" INTEGER NOT NULL,
    "base_stat" INTEGER NOT NULL,
    "effort" INTEGER NOT NULL,

    CONSTRAINT "pokemon_stats_past_pkey" PRIMARY KEY ("pokemon_id","generation_id","stat_id")
);

-- CreateTable
CREATE TABLE "pokemon_types_past" (
    "pokemon_id" INTEGER NOT NULL,
    "generation_id" INTEGER NOT NULL,
    "type_id" INTEGER NOT NULL,
    "slot" INTEGER NOT NULL,

    CONSTRAINT "pokemon_types_past_pkey" PRIMARY KEY ("pokemon_id","generation_id","type_id","slot")
);

-- CreateTable
CREATE TABLE "region_names" (
    "region_id" INTEGER NOT NULL,
    "local_language_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "region_names_pkey" PRIMARY KEY ("region_id","local_language_id")
);

-- CreateTable
CREATE TABLE "stat_names" (
    "stat_id" INTEGER NOT NULL,
    "local_language_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "stat_names_pkey" PRIMARY KEY ("stat_id","local_language_id")
);

-- CreateTable
CREATE TABLE "super_contest_effect_prose" (
    "super_contest_effect_id" INTEGER NOT NULL,
    "local_language_id" INTEGER NOT NULL,
    "flavor_text" TEXT NOT NULL,

    CONSTRAINT "super_contest_effect_prose_pkey" PRIMARY KEY ("super_contest_effect_id","local_language_id")
);

-- CreateTable
CREATE TABLE "type_efficacy_past" (
    "damage_type_id" INTEGER NOT NULL,
    "target_type_id" INTEGER NOT NULL,
    "damage_factor" INTEGER NOT NULL,
    "generation_id" INTEGER NOT NULL,

    CONSTRAINT "type_efficacy_past_pkey" PRIMARY KEY ("damage_type_id","target_type_id","generation_id")
);

-- CreateTable
CREATE TABLE "type_names" (
    "type_id" INTEGER NOT NULL,
    "local_language_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "type_names_pkey" PRIMARY KEY ("type_id","local_language_id")
);

-- CreateTable
CREATE TABLE "version_names" (
    "version_id" INTEGER NOT NULL,
    "local_language_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "version_names_pkey" PRIMARY KEY ("version_id","local_language_id")
);

-- AddForeignKey
ALTER TABLE "pokemon" ADD CONSTRAINT "pokemon_species_id_fkey" FOREIGN KEY ("species_id") REFERENCES "pokemon_species"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pokemon_species" ADD CONSTRAINT "pokemon_species_generation_id_fkey" FOREIGN KEY ("generation_id") REFERENCES "generations"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pokemon_species" ADD CONSTRAINT "pokemon_species_evolves_from_species_id_fkey" FOREIGN KEY ("evolves_from_species_id") REFERENCES "pokemon_species"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pokemon_species" ADD CONSTRAINT "pokemon_species_evolution_chain_id_fkey" FOREIGN KEY ("evolution_chain_id") REFERENCES "evolution_chains"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pokemon_species" ADD CONSTRAINT "pokemon_species_color_id_fkey" FOREIGN KEY ("color_id") REFERENCES "pokemon_colors"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pokemon_species" ADD CONSTRAINT "pokemon_species_shape_id_fkey" FOREIGN KEY ("shape_id") REFERENCES "pokemon_shapes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pokemon_species" ADD CONSTRAINT "pokemon_species_habitat_id_fkey" FOREIGN KEY ("habitat_id") REFERENCES "pokemon_habitats"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pokemon_species" ADD CONSTRAINT "pokemon_species_growth_rate_id_fkey" FOREIGN KEY ("growth_rate_id") REFERENCES "growth_rates"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pokemon_forms" ADD CONSTRAINT "pokemon_forms_pokemon_id_fkey" FOREIGN KEY ("pokemon_id") REFERENCES "pokemon"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pokemon_forms" ADD CONSTRAINT "pokemon_forms_introduced_in_version_group_id_fkey" FOREIGN KEY ("introduced_in_version_group_id") REFERENCES "version_groups"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "moves" ADD CONSTRAINT "moves_generation_id_fkey" FOREIGN KEY ("generation_id") REFERENCES "generations"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "moves" ADD CONSTRAINT "moves_type_id_fkey" FOREIGN KEY ("type_id") REFERENCES "types"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "moves" ADD CONSTRAINT "moves_target_id_fkey" FOREIGN KEY ("target_id") REFERENCES "move_targets"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "moves" ADD CONSTRAINT "moves_damage_class_id_fkey" FOREIGN KEY ("damage_class_id") REFERENCES "move_damage_classes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "moves" ADD CONSTRAINT "moves_contest_type_id_fkey" FOREIGN KEY ("contest_type_id") REFERENCES "contest_types"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "moves" ADD CONSTRAINT "moves_contest_effect_id_fkey" FOREIGN KEY ("contest_effect_id") REFERENCES "contest_effects"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "moves" ADD CONSTRAINT "moves_super_contest_effect_id_fkey" FOREIGN KEY ("super_contest_effect_id") REFERENCES "super_contest_effects"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "types" ADD CONSTRAINT "types_generation_id_fkey" FOREIGN KEY ("generation_id") REFERENCES "generations"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "types" ADD CONSTRAINT "types_damage_class_id_fkey" FOREIGN KEY ("damage_class_id") REFERENCES "move_damage_classes"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "abilities" ADD CONSTRAINT "abilities_generation_id_fkey" FOREIGN KEY ("generation_id") REFERENCES "generations"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "items" ADD CONSTRAINT "items_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "item_categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "items" ADD CONSTRAINT "items_fling_effect_id_fkey" FOREIGN KEY ("fling_effect_id") REFERENCES "item_fling_effects"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "item_categories" ADD CONSTRAINT "item_categories_pocket_id_fkey" FOREIGN KEY ("pocket_id") REFERENCES "item_pockets"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "generations" ADD CONSTRAINT "generations_main_region_id_fkey" FOREIGN KEY ("main_region_id") REFERENCES "regions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "version_groups" ADD CONSTRAINT "version_groups_generation_id_fkey" FOREIGN KEY ("generation_id") REFERENCES "generations"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "versions" ADD CONSTRAINT "versions_version_group_id_fkey" FOREIGN KEY ("version_group_id") REFERENCES "version_groups"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "locations" ADD CONSTRAINT "locations_region_id_fkey" FOREIGN KEY ("region_id") REFERENCES "regions"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "location_areas" ADD CONSTRAINT "location_areas_location_id_fkey" FOREIGN KEY ("location_id") REFERENCES "locations"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pokedexes" ADD CONSTRAINT "pokedexes_region_id_fkey" FOREIGN KEY ("region_id") REFERENCES "regions"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "evolution_chains" ADD CONSTRAINT "evolution_chains_baby_trigger_item_id_fkey" FOREIGN KEY ("baby_trigger_item_id") REFERENCES "items"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pokemon_evolution" ADD CONSTRAINT "pokemon_evolution_version_group_id_fkey" FOREIGN KEY ("version_group_id") REFERENCES "version_groups"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pokemon_evolution" ADD CONSTRAINT "pokemon_evolution_region_id_fkey" FOREIGN KEY ("region_id") REFERENCES "regions"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pokemon_evolution" ADD CONSTRAINT "pokemon_evolution_base_form_id_fkey" FOREIGN KEY ("base_form_id") REFERENCES "pokemon_forms"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pokemon_evolution" ADD CONSTRAINT "pokemon_evolution_evolved_form_id_fkey" FOREIGN KEY ("evolved_form_id") REFERENCES "pokemon_forms"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pokemon_evolution" ADD CONSTRAINT "pokemon_evolution_used_move_id_fkey" FOREIGN KEY ("used_move_id") REFERENCES "moves"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pokemon_evolution" ADD CONSTRAINT "pokemon_evolution_evolved_species_id_fkey" FOREIGN KEY ("evolved_species_id") REFERENCES "pokemon_species"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pokemon_evolution" ADD CONSTRAINT "pokemon_evolution_evolution_trigger_id_fkey" FOREIGN KEY ("evolution_trigger_id") REFERENCES "evolution_triggers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pokemon_evolution" ADD CONSTRAINT "pokemon_evolution_trigger_item_id_fkey" FOREIGN KEY ("trigger_item_id") REFERENCES "items"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pokemon_evolution" ADD CONSTRAINT "pokemon_evolution_gender_id_fkey" FOREIGN KEY ("gender_id") REFERENCES "genders"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pokemon_evolution" ADD CONSTRAINT "pokemon_evolution_location_id_fkey" FOREIGN KEY ("location_id") REFERENCES "locations"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pokemon_evolution" ADD CONSTRAINT "pokemon_evolution_held_item_id_fkey" FOREIGN KEY ("held_item_id") REFERENCES "items"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pokemon_evolution" ADD CONSTRAINT "pokemon_evolution_known_move_id_fkey" FOREIGN KEY ("known_move_id") REFERENCES "moves"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pokemon_evolution" ADD CONSTRAINT "pokemon_evolution_known_move_type_id_fkey" FOREIGN KEY ("known_move_type_id") REFERENCES "types"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pokemon_evolution" ADD CONSTRAINT "pokemon_evolution_party_species_id_fkey" FOREIGN KEY ("party_species_id") REFERENCES "pokemon_species"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pokemon_evolution" ADD CONSTRAINT "pokemon_evolution_party_type_id_fkey" FOREIGN KEY ("party_type_id") REFERENCES "types"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pokemon_evolution" ADD CONSTRAINT "pokemon_evolution_trade_species_id_fkey" FOREIGN KEY ("trade_species_id") REFERENCES "pokemon_species"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "experience" ADD CONSTRAINT "experience_growth_rate_id_fkey" FOREIGN KEY ("growth_rate_id") REFERENCES "growth_rates"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "natures" ADD CONSTRAINT "natures_decreased_stat_id_fkey" FOREIGN KEY ("decreased_stat_id") REFERENCES "stats"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "natures" ADD CONSTRAINT "natures_increased_stat_id_fkey" FOREIGN KEY ("increased_stat_id") REFERENCES "stats"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "machines" ADD CONSTRAINT "machines_version_group_id_fkey" FOREIGN KEY ("version_group_id") REFERENCES "version_groups"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "machines" ADD CONSTRAINT "machines_item_id_fkey" FOREIGN KEY ("item_id") REFERENCES "items"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "machines" ADD CONSTRAINT "machines_move_id_fkey" FOREIGN KEY ("move_id") REFERENCES "moves"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "encounter_slots" ADD CONSTRAINT "encounter_slots_version_group_id_fkey" FOREIGN KEY ("version_group_id") REFERENCES "version_groups"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "encounter_slots" ADD CONSTRAINT "encounter_slots_encounter_method_id_fkey" FOREIGN KEY ("encounter_method_id") REFERENCES "encounter_methods"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "encounters" ADD CONSTRAINT "encounters_version_id_fkey" FOREIGN KEY ("version_id") REFERENCES "versions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "encounters" ADD CONSTRAINT "encounters_location_area_id_fkey" FOREIGN KEY ("location_area_id") REFERENCES "location_areas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "encounters" ADD CONSTRAINT "encounters_encounter_slot_id_fkey" FOREIGN KEY ("encounter_slot_id") REFERENCES "encounter_slots"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "encounters" ADD CONSTRAINT "encounters_pokemon_id_fkey" FOREIGN KEY ("pokemon_id") REFERENCES "pokemon"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "encounter_condition_values" ADD CONSTRAINT "encounter_condition_values_encounter_condition_id_fkey" FOREIGN KEY ("encounter_condition_id") REFERENCES "encounter_conditions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "encounter_condition_value_map" ADD CONSTRAINT "encounter_condition_value_map_encounter_id_fkey" FOREIGN KEY ("encounter_id") REFERENCES "encounters"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "encounter_condition_value_map" ADD CONSTRAINT "encounter_condition_value_map_encounter_condition_value_id_fkey" FOREIGN KEY ("encounter_condition_value_id") REFERENCES "encounter_condition_values"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "move_meta" ADD CONSTRAINT "move_meta_move_id_fkey" FOREIGN KEY ("move_id") REFERENCES "moves"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "move_meta" ADD CONSTRAINT "move_meta_meta_category_id_fkey" FOREIGN KEY ("meta_category_id") REFERENCES "move_meta_categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "move_meta" ADD CONSTRAINT "move_meta_meta_ailment_id_fkey" FOREIGN KEY ("meta_ailment_id") REFERENCES "move_meta_ailments"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "move_meta_stat_changes" ADD CONSTRAINT "move_meta_stat_changes_stat_id_fkey" FOREIGN KEY ("stat_id") REFERENCES "stats"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "move_meta_stat_changes" ADD CONSTRAINT "move_meta_stat_changes_move_id_fkey" FOREIGN KEY ("move_id") REFERENCES "move_meta"("move_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "move_flag_map" ADD CONSTRAINT "move_flag_map_move_id_fkey" FOREIGN KEY ("move_id") REFERENCES "moves"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "move_flag_map" ADD CONSTRAINT "move_flag_map_move_flag_id_fkey" FOREIGN KEY ("move_flag_id") REFERENCES "move_flags"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "item_flag_map" ADD CONSTRAINT "item_flag_map_item_id_fkey" FOREIGN KEY ("item_id") REFERENCES "items"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "item_flag_map" ADD CONSTRAINT "item_flag_map_item_flag_id_fkey" FOREIGN KEY ("item_flag_id") REFERENCES "item_flags"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "berries" ADD CONSTRAINT "berries_item_id_fkey" FOREIGN KEY ("item_id") REFERENCES "items"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "berries" ADD CONSTRAINT "berries_firmness_id_fkey" FOREIGN KEY ("firmness_id") REFERENCES "berry_firmness"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "berries" ADD CONSTRAINT "berries_natural_gift_type_id_fkey" FOREIGN KEY ("natural_gift_type_id") REFERENCES "types"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "berry_flavors" ADD CONSTRAINT "berry_flavors_berry_id_fkey" FOREIGN KEY ("berry_id") REFERENCES "berries"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "berry_flavors" ADD CONSTRAINT "berry_flavors_contest_type_id_fkey" FOREIGN KEY ("contest_type_id") REFERENCES "contest_types"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "berry_flavors" ADD CONSTRAINT "berry_flavors_contest_type_id_fkey2" FOREIGN KEY ("contest_type_id") REFERENCES "types"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "characteristics" ADD CONSTRAINT "characteristics_stat_id_fkey" FOREIGN KEY ("stat_id") REFERENCES "stats"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "contest_combos" ADD CONSTRAINT "contest_combos_first_move_id_fkey" FOREIGN KEY ("first_move_id") REFERENCES "moves"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "contest_combos" ADD CONSTRAINT "contest_combos_second_move_id_fkey" FOREIGN KEY ("second_move_id") REFERENCES "moves"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "super_contest_combos" ADD CONSTRAINT "super_contest_combos_first_move_id_fkey" FOREIGN KEY ("first_move_id") REFERENCES "moves"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "super_contest_combos" ADD CONSTRAINT "super_contest_combos_second_move_id_fkey" FOREIGN KEY ("second_move_id") REFERENCES "moves"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "version_group_pokemon_move_methods" ADD CONSTRAINT "version_group_pokemon_move_methods_version_group_id_fkey" FOREIGN KEY ("version_group_id") REFERENCES "version_groups"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "version_group_pokemon_move_methods" ADD CONSTRAINT "version_group_pokemon_move_methods_pokemon_move_method_id_fkey" FOREIGN KEY ("pokemon_move_method_id") REFERENCES "pokemon_move_methods"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "type_efficacy" ADD CONSTRAINT "type_efficacy_damage_type_id_fkey" FOREIGN KEY ("damage_type_id") REFERENCES "types"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "type_efficacy" ADD CONSTRAINT "type_efficacy_target_type_id_fkey" FOREIGN KEY ("target_type_id") REFERENCES "types"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "version_group_regions" ADD CONSTRAINT "version_group_regions_version_group_id_fkey" FOREIGN KEY ("version_group_id") REFERENCES "version_groups"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "version_group_regions" ADD CONSTRAINT "version_group_regions_region_id_fkey" FOREIGN KEY ("region_id") REFERENCES "regions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pokedex_version_groups" ADD CONSTRAINT "pokedex_version_groups_pokedex_id_fkey" FOREIGN KEY ("pokedex_id") REFERENCES "pokedexes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pokedex_version_groups" ADD CONSTRAINT "pokedex_version_groups_version_group_id_fkey" FOREIGN KEY ("version_group_id") REFERENCES "version_groups"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pokemon_abilities" ADD CONSTRAINT "pokemon_abilities_pokemon_id_fkey" FOREIGN KEY ("pokemon_id") REFERENCES "pokemon"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pokemon_abilities" ADD CONSTRAINT "pokemon_abilities_ability_id_fkey" FOREIGN KEY ("ability_id") REFERENCES "abilities"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pokemon_moves" ADD CONSTRAINT "pokemon_moves_pokemon_id_fkey" FOREIGN KEY ("pokemon_id") REFERENCES "pokemon"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pokemon_moves" ADD CONSTRAINT "pokemon_moves_version_group_id_fkey" FOREIGN KEY ("version_group_id") REFERENCES "version_groups"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pokemon_moves" ADD CONSTRAINT "pokemon_moves_move_id_fkey" FOREIGN KEY ("move_id") REFERENCES "moves"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pokemon_moves" ADD CONSTRAINT "pokemon_moves_pokemon_move_method_id_fkey" FOREIGN KEY ("pokemon_move_method_id") REFERENCES "pokemon_move_methods"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pokemon_stats" ADD CONSTRAINT "pokemon_stats_pokemon_id_fkey" FOREIGN KEY ("pokemon_id") REFERENCES "pokemon"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pokemon_stats" ADD CONSTRAINT "pokemon_stats_stat_id_fkey" FOREIGN KEY ("stat_id") REFERENCES "stats"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pokemon_types" ADD CONSTRAINT "pokemon_types_pokemon_id_fkey" FOREIGN KEY ("pokemon_id") REFERENCES "pokemon"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pokemon_types" ADD CONSTRAINT "pokemon_types_type_id_fkey" FOREIGN KEY ("type_id") REFERENCES "types"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pokemon_egg_groups" ADD CONSTRAINT "pokemon_egg_groups_species_id_fkey" FOREIGN KEY ("species_id") REFERENCES "pokemon_species"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pokemon_egg_groups" ADD CONSTRAINT "pokemon_egg_groups_egg_group_id_fkey" FOREIGN KEY ("egg_group_id") REFERENCES "egg_groups"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pokemon_items" ADD CONSTRAINT "pokemon_items_pokemon_id_fkey" FOREIGN KEY ("pokemon_id") REFERENCES "pokemon"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pokemon_items" ADD CONSTRAINT "pokemon_items_version_id_fkey" FOREIGN KEY ("version_id") REFERENCES "versions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pokemon_items" ADD CONSTRAINT "pokemon_items_item_id_fkey" FOREIGN KEY ("item_id") REFERENCES "items"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pokemon_game_indices" ADD CONSTRAINT "pokemon_game_indices_pokemon_id_fkey" FOREIGN KEY ("pokemon_id") REFERENCES "pokemon"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pokemon_game_indices" ADD CONSTRAINT "pokemon_game_indices_version_id_fkey" FOREIGN KEY ("version_id") REFERENCES "versions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pokemon_dex_numbers" ADD CONSTRAINT "pokemon_dex_numbers_species_id_fkey" FOREIGN KEY ("species_id") REFERENCES "pokemon_species"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pokemon_dex_numbers" ADD CONSTRAINT "pokemon_dex_numbers_pokedex_id_fkey" FOREIGN KEY ("pokedex_id") REFERENCES "pokedexes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pokemon_form_generations" ADD CONSTRAINT "pokemon_form_generations_pokemon_form_id_fkey" FOREIGN KEY ("pokemon_form_id") REFERENCES "pokemon_forms"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pokemon_form_generations" ADD CONSTRAINT "pokemon_form_generations_generation_id_fkey" FOREIGN KEY ("generation_id") REFERENCES "generations"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pokemon_form_types" ADD CONSTRAINT "pokemon_form_types_pokemon_form_id_fkey" FOREIGN KEY ("pokemon_form_id") REFERENCES "pokemon_forms"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pokemon_form_types" ADD CONSTRAINT "pokemon_form_types_type_id_fkey" FOREIGN KEY ("type_id") REFERENCES "types"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "type_game_indices" ADD CONSTRAINT "type_game_indices_type_id_fkey" FOREIGN KEY ("type_id") REFERENCES "types"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "type_game_indices" ADD CONSTRAINT "type_game_indices_generation_id_fkey" FOREIGN KEY ("generation_id") REFERENCES "generations"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "item_game_indices" ADD CONSTRAINT "item_game_indices_item_id_fkey" FOREIGN KEY ("item_id") REFERENCES "items"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "item_game_indices" ADD CONSTRAINT "item_game_indices_generation_id_fkey" FOREIGN KEY ("generation_id") REFERENCES "generations"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "location_game_indices" ADD CONSTRAINT "location_game_indices_location_id_fkey" FOREIGN KEY ("location_id") REFERENCES "locations"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "location_game_indices" ADD CONSTRAINT "location_game_indices_generation_id_fkey" FOREIGN KEY ("generation_id") REFERENCES "generations"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "location_area_encounter_rates" ADD CONSTRAINT "location_area_encounter_rates_location_area_id_fkey" FOREIGN KEY ("location_area_id") REFERENCES "location_areas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "location_area_encounter_rates" ADD CONSTRAINT "location_area_encounter_rates_encounter_method_id_fkey" FOREIGN KEY ("encounter_method_id") REFERENCES "encounter_methods"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "location_area_encounter_rates" ADD CONSTRAINT "location_area_encounter_rates_version_id_fkey" FOREIGN KEY ("version_id") REFERENCES "versions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "nature_battle_style_preferences" ADD CONSTRAINT "nature_battle_style_preferences_nature_id_fkey" FOREIGN KEY ("nature_id") REFERENCES "natures"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "nature_battle_style_preferences" ADD CONSTRAINT "nature_battle_style_preferences_move_battle_style_id_fkey" FOREIGN KEY ("move_battle_style_id") REFERENCES "move_battle_styles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ability_changelog" ADD CONSTRAINT "ability_changelog_ability_id_fkey" FOREIGN KEY ("ability_id") REFERENCES "abilities"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ability_changelog" ADD CONSTRAINT "ability_changelog_changed_in_version_group_id_fkey" FOREIGN KEY ("changed_in_version_group_id") REFERENCES "version_groups"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ability_changelog_prose" ADD CONSTRAINT "ability_changelog_prose_ability_changelog_id_fkey" FOREIGN KEY ("ability_changelog_id") REFERENCES "ability_changelog"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ability_changelog_prose" ADD CONSTRAINT "ability_changelog_prose_local_language_id_fkey" FOREIGN KEY ("local_language_id") REFERENCES "languages"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ability_flavor_text" ADD CONSTRAINT "ability_flavor_text_ability_id_fkey" FOREIGN KEY ("ability_id") REFERENCES "abilities"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ability_flavor_text" ADD CONSTRAINT "ability_flavor_text_version_group_id_fkey" FOREIGN KEY ("version_group_id") REFERENCES "version_groups"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ability_flavor_text" ADD CONSTRAINT "ability_flavor_text_language_id_fkey" FOREIGN KEY ("language_id") REFERENCES "languages"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ability_names" ADD CONSTRAINT "ability_names_ability_id_fkey" FOREIGN KEY ("ability_id") REFERENCES "abilities"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ability_names" ADD CONSTRAINT "ability_names_local_language_id_fkey" FOREIGN KEY ("local_language_id") REFERENCES "languages"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ability_prose" ADD CONSTRAINT "ability_prose_ability_id_fkey" FOREIGN KEY ("ability_id") REFERENCES "abilities"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ability_prose" ADD CONSTRAINT "ability_prose_local_language_id_fkey" FOREIGN KEY ("local_language_id") REFERENCES "languages"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "berry_firmness_names" ADD CONSTRAINT "berry_firmness_names_berry_firmness_id_fkey" FOREIGN KEY ("berry_firmness_id") REFERENCES "berry_firmness"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "berry_firmness_names" ADD CONSTRAINT "berry_firmness_names_local_language_id_fkey" FOREIGN KEY ("local_language_id") REFERENCES "languages"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "characteristic_text" ADD CONSTRAINT "characteristic_text_characteristic_id_fkey" FOREIGN KEY ("characteristic_id") REFERENCES "characteristics"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "characteristic_text" ADD CONSTRAINT "characteristic_text_local_language_id_fkey" FOREIGN KEY ("local_language_id") REFERENCES "languages"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "contest_effect_prose" ADD CONSTRAINT "contest_effect_prose_contest_effect_id_fkey" FOREIGN KEY ("contest_effect_id") REFERENCES "contest_effects"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "contest_effect_prose" ADD CONSTRAINT "contest_effect_prose_local_language_id_fkey" FOREIGN KEY ("local_language_id") REFERENCES "languages"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "contest_type_names" ADD CONSTRAINT "contest_type_names_contest_type_id_fkey" FOREIGN KEY ("contest_type_id") REFERENCES "contest_types"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "contest_type_names" ADD CONSTRAINT "contest_type_names_local_language_id_fkey" FOREIGN KEY ("local_language_id") REFERENCES "languages"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "egg_group_prose" ADD CONSTRAINT "egg_group_prose_egg_group_id_fkey" FOREIGN KEY ("egg_group_id") REFERENCES "egg_groups"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "egg_group_prose" ADD CONSTRAINT "egg_group_prose_local_language_id_fkey" FOREIGN KEY ("local_language_id") REFERENCES "languages"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "encounter_condition_prose" ADD CONSTRAINT "encounter_condition_prose_encounter_condition_id_fkey" FOREIGN KEY ("encounter_condition_id") REFERENCES "encounter_conditions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "encounter_condition_prose" ADD CONSTRAINT "encounter_condition_prose_local_language_id_fkey" FOREIGN KEY ("local_language_id") REFERENCES "languages"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "encounter_condition_value_prose" ADD CONSTRAINT "encounter_condition_value_prose_encounter_condition_value__fkey" FOREIGN KEY ("encounter_condition_value_id") REFERENCES "encounter_condition_values"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "encounter_condition_value_prose" ADD CONSTRAINT "encounter_condition_value_prose_local_language_id_fkey" FOREIGN KEY ("local_language_id") REFERENCES "languages"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "encounter_method_prose" ADD CONSTRAINT "encounter_method_prose_encounter_method_id_fkey" FOREIGN KEY ("encounter_method_id") REFERENCES "encounter_methods"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "encounter_method_prose" ADD CONSTRAINT "encounter_method_prose_local_language_id_fkey" FOREIGN KEY ("local_language_id") REFERENCES "languages"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "evolution_trigger_prose" ADD CONSTRAINT "evolution_trigger_prose_evolution_trigger_id_fkey" FOREIGN KEY ("evolution_trigger_id") REFERENCES "evolution_triggers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "evolution_trigger_prose" ADD CONSTRAINT "evolution_trigger_prose_local_language_id_fkey" FOREIGN KEY ("local_language_id") REFERENCES "languages"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "generation_names" ADD CONSTRAINT "generation_names_generation_id_fkey" FOREIGN KEY ("generation_id") REFERENCES "generations"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "generation_names" ADD CONSTRAINT "generation_names_local_language_id_fkey" FOREIGN KEY ("local_language_id") REFERENCES "languages"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "growth_rate_prose" ADD CONSTRAINT "growth_rate_prose_growth_rate_id_fkey" FOREIGN KEY ("growth_rate_id") REFERENCES "growth_rates"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "growth_rate_prose" ADD CONSTRAINT "growth_rate_prose_local_language_id_fkey" FOREIGN KEY ("local_language_id") REFERENCES "languages"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "item_category_prose" ADD CONSTRAINT "item_category_prose_item_category_id_fkey" FOREIGN KEY ("item_category_id") REFERENCES "item_categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "item_category_prose" ADD CONSTRAINT "item_category_prose_local_language_id_fkey" FOREIGN KEY ("local_language_id") REFERENCES "languages"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "item_flag_prose" ADD CONSTRAINT "item_flag_prose_item_flag_id_fkey" FOREIGN KEY ("item_flag_id") REFERENCES "item_flags"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "item_flag_prose" ADD CONSTRAINT "item_flag_prose_local_language_id_fkey" FOREIGN KEY ("local_language_id") REFERENCES "languages"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "item_flavor_summaries" ADD CONSTRAINT "item_flavor_summaries_item_id_fkey" FOREIGN KEY ("item_id") REFERENCES "items"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "item_flavor_summaries" ADD CONSTRAINT "item_flavor_summaries_local_language_id_fkey" FOREIGN KEY ("local_language_id") REFERENCES "languages"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "item_flavor_text" ADD CONSTRAINT "item_flavor_text_item_id_fkey" FOREIGN KEY ("item_id") REFERENCES "items"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "item_flavor_text" ADD CONSTRAINT "item_flavor_text_version_group_id_fkey" FOREIGN KEY ("version_group_id") REFERENCES "version_groups"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "item_flavor_text" ADD CONSTRAINT "item_flavor_text_language_id_fkey" FOREIGN KEY ("language_id") REFERENCES "languages"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "item_fling_effect_prose" ADD CONSTRAINT "item_fling_effect_prose_item_fling_effect_id_fkey" FOREIGN KEY ("item_fling_effect_id") REFERENCES "item_fling_effects"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "item_fling_effect_prose" ADD CONSTRAINT "item_fling_effect_prose_local_language_id_fkey" FOREIGN KEY ("local_language_id") REFERENCES "languages"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "item_names" ADD CONSTRAINT "item_names_item_id_fkey" FOREIGN KEY ("item_id") REFERENCES "items"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "item_names" ADD CONSTRAINT "item_names_local_language_id_fkey" FOREIGN KEY ("local_language_id") REFERENCES "languages"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "item_pocket_names" ADD CONSTRAINT "item_pocket_names_item_pocket_id_fkey" FOREIGN KEY ("item_pocket_id") REFERENCES "item_pockets"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "item_pocket_names" ADD CONSTRAINT "item_pocket_names_local_language_id_fkey" FOREIGN KEY ("local_language_id") REFERENCES "languages"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "item_prose" ADD CONSTRAINT "item_prose_item_id_fkey" FOREIGN KEY ("item_id") REFERENCES "items"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "item_prose" ADD CONSTRAINT "item_prose_local_language_id_fkey" FOREIGN KEY ("local_language_id") REFERENCES "languages"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "language_names" ADD CONSTRAINT "language_names_language_id_fkey" FOREIGN KEY ("language_id") REFERENCES "languages"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "language_names" ADD CONSTRAINT "language_names_local_language_id_fkey" FOREIGN KEY ("local_language_id") REFERENCES "languages"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "location_area_prose" ADD CONSTRAINT "location_area_prose_location_area_id_fkey" FOREIGN KEY ("location_area_id") REFERENCES "location_areas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "location_area_prose" ADD CONSTRAINT "location_area_prose_local_language_id_fkey" FOREIGN KEY ("local_language_id") REFERENCES "languages"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "location_names" ADD CONSTRAINT "location_names_location_id_fkey" FOREIGN KEY ("location_id") REFERENCES "locations"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "location_names" ADD CONSTRAINT "location_names_local_language_id_fkey" FOREIGN KEY ("local_language_id") REFERENCES "languages"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "move_battle_style_prose" ADD CONSTRAINT "move_battle_style_prose_move_battle_style_id_fkey" FOREIGN KEY ("move_battle_style_id") REFERENCES "move_battle_styles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "move_battle_style_prose" ADD CONSTRAINT "move_battle_style_prose_local_language_id_fkey" FOREIGN KEY ("local_language_id") REFERENCES "languages"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "move_changelog" ADD CONSTRAINT "move_changelog_move_id_fkey" FOREIGN KEY ("move_id") REFERENCES "moves"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "move_changelog" ADD CONSTRAINT "move_changelog_changed_in_version_group_id_fkey" FOREIGN KEY ("changed_in_version_group_id") REFERENCES "version_groups"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "move_changelog" ADD CONSTRAINT "move_changelog_type_id_fkey" FOREIGN KEY ("type_id") REFERENCES "types"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "move_changelog" ADD CONSTRAINT "move_changelog_target_id_fkey" FOREIGN KEY ("target_id") REFERENCES "move_targets"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "move_changelog" ADD CONSTRAINT "move_changelog_effect_id_fkey" FOREIGN KEY ("effect_id") REFERENCES "move_effects"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "move_damage_class_prose" ADD CONSTRAINT "move_damage_class_prose_move_damage_class_id_fkey" FOREIGN KEY ("move_damage_class_id") REFERENCES "move_damage_classes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "move_damage_class_prose" ADD CONSTRAINT "move_damage_class_prose_local_language_id_fkey" FOREIGN KEY ("local_language_id") REFERENCES "languages"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "move_effect_changelog" ADD CONSTRAINT "move_effect_changelog_effect_id_fkey" FOREIGN KEY ("effect_id") REFERENCES "move_effects"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "move_effect_changelog" ADD CONSTRAINT "move_effect_changelog_changed_in_version_group_id_fkey" FOREIGN KEY ("changed_in_version_group_id") REFERENCES "version_groups"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "move_effect_changelog_prose" ADD CONSTRAINT "move_effect_changelog_prose_move_effect_changelog_id_fkey" FOREIGN KEY ("move_effect_changelog_id") REFERENCES "move_effect_changelog"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "move_effect_changelog_prose" ADD CONSTRAINT "move_effect_changelog_prose_local_language_id_fkey" FOREIGN KEY ("local_language_id") REFERENCES "languages"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "move_effect_prose" ADD CONSTRAINT "move_effect_prose_move_effect_id_fkey" FOREIGN KEY ("move_effect_id") REFERENCES "move_effects"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "move_effect_prose" ADD CONSTRAINT "move_effect_prose_local_language_id_fkey" FOREIGN KEY ("local_language_id") REFERENCES "languages"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "move_flag_prose" ADD CONSTRAINT "move_flag_prose_move_flag_id_fkey" FOREIGN KEY ("move_flag_id") REFERENCES "move_flags"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "move_flag_prose" ADD CONSTRAINT "move_flag_prose_local_language_id_fkey" FOREIGN KEY ("local_language_id") REFERENCES "languages"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "move_flavor_summaries" ADD CONSTRAINT "move_flavor_summaries_move_id_fkey" FOREIGN KEY ("move_id") REFERENCES "moves"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "move_flavor_summaries" ADD CONSTRAINT "move_flavor_summaries_local_language_id_fkey" FOREIGN KEY ("local_language_id") REFERENCES "languages"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "move_flavor_text" ADD CONSTRAINT "move_flavor_text_move_id_fkey" FOREIGN KEY ("move_id") REFERENCES "moves"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "move_flavor_text" ADD CONSTRAINT "move_flavor_text_version_group_id_fkey" FOREIGN KEY ("version_group_id") REFERENCES "version_groups"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "move_flavor_text" ADD CONSTRAINT "move_flavor_text_language_id_fkey" FOREIGN KEY ("language_id") REFERENCES "languages"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "move_meta_ailment_names" ADD CONSTRAINT "move_meta_ailment_names_move_meta_ailment_id_fkey" FOREIGN KEY ("move_meta_ailment_id") REFERENCES "move_meta_ailments"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "move_meta_ailment_names" ADD CONSTRAINT "move_meta_ailment_names_local_language_id_fkey" FOREIGN KEY ("local_language_id") REFERENCES "languages"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "move_meta_category_prose" ADD CONSTRAINT "move_meta_category_prose_move_meta_category_id_fkey" FOREIGN KEY ("move_meta_category_id") REFERENCES "move_meta_categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "move_meta_category_prose" ADD CONSTRAINT "move_meta_category_prose_local_language_id_fkey" FOREIGN KEY ("local_language_id") REFERENCES "languages"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "move_names" ADD CONSTRAINT "move_names_move_id_fkey" FOREIGN KEY ("move_id") REFERENCES "moves"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "move_names" ADD CONSTRAINT "move_names_local_language_id_fkey" FOREIGN KEY ("local_language_id") REFERENCES "languages"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "move_target_prose" ADD CONSTRAINT "move_target_prose_move_target_id_fkey" FOREIGN KEY ("move_target_id") REFERENCES "move_targets"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "move_target_prose" ADD CONSTRAINT "move_target_prose_local_language_id_fkey" FOREIGN KEY ("local_language_id") REFERENCES "languages"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "nature_names" ADD CONSTRAINT "nature_names_nature_id_fkey" FOREIGN KEY ("nature_id") REFERENCES "natures"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "nature_names" ADD CONSTRAINT "nature_names_local_language_id_fkey" FOREIGN KEY ("local_language_id") REFERENCES "languages"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pokeathlon_stat_names" ADD CONSTRAINT "pokeathlon_stat_names_pokeathlon_stat_id_fkey" FOREIGN KEY ("pokeathlon_stat_id") REFERENCES "stats"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pokeathlon_stat_names" ADD CONSTRAINT "pokeathlon_stat_names_local_language_id_fkey" FOREIGN KEY ("local_language_id") REFERENCES "languages"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pokedex_prose" ADD CONSTRAINT "pokedex_prose_pokedex_id_fkey" FOREIGN KEY ("pokedex_id") REFERENCES "pokedexes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pokedex_prose" ADD CONSTRAINT "pokedex_prose_local_language_id_fkey" FOREIGN KEY ("local_language_id") REFERENCES "languages"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pokemon_abilities_past" ADD CONSTRAINT "pokemon_abilities_past_pokemon_id_fkey" FOREIGN KEY ("pokemon_id") REFERENCES "pokemon"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pokemon_abilities_past" ADD CONSTRAINT "pokemon_abilities_past_generation_id_fkey" FOREIGN KEY ("generation_id") REFERENCES "generations"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pokemon_abilities_past" ADD CONSTRAINT "pokemon_abilities_past_ability_id_fkey" FOREIGN KEY ("ability_id") REFERENCES "abilities"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pokemon_color_names" ADD CONSTRAINT "pokemon_color_names_pokemon_color_id_fkey" FOREIGN KEY ("pokemon_color_id") REFERENCES "pokemon_colors"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pokemon_color_names" ADD CONSTRAINT "pokemon_color_names_local_language_id_fkey" FOREIGN KEY ("local_language_id") REFERENCES "languages"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pokemon_form_conditions" ADD CONSTRAINT "pokemon_form_conditions_pokemon_form_id_fkey" FOREIGN KEY ("pokemon_form_id") REFERENCES "pokemon_forms"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pokemon_form_conditions" ADD CONSTRAINT "pokemon_form_conditions_form_trigger_id_fkey" FOREIGN KEY ("form_trigger_id") REFERENCES "pokemon_form_triggers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pokemon_form_conditions" ADD CONSTRAINT "pokemon_form_conditions_trigger_item_id_fkey" FOREIGN KEY ("trigger_item_id") REFERENCES "items"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pokemon_form_conditions" ADD CONSTRAINT "pokemon_form_conditions_trigger_ability_id_fkey" FOREIGN KEY ("trigger_ability_id") REFERENCES "abilities"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pokemon_form_conditions" ADD CONSTRAINT "pokemon_form_conditions_trigger_move_id_fkey" FOREIGN KEY ("trigger_move_id") REFERENCES "moves"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pokemon_form_names" ADD CONSTRAINT "pokemon_form_names_pokemon_form_id_fkey" FOREIGN KEY ("pokemon_form_id") REFERENCES "pokemon_forms"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pokemon_form_names" ADD CONSTRAINT "pokemon_form_names_local_language_id_fkey" FOREIGN KEY ("local_language_id") REFERENCES "languages"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pokemon_form_trigger_prose" ADD CONSTRAINT "pokemon_form_trigger_prose_pokemon_form_trigger_id_fkey" FOREIGN KEY ("pokemon_form_trigger_id") REFERENCES "pokemon_form_triggers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pokemon_form_trigger_prose" ADD CONSTRAINT "pokemon_form_trigger_prose_local_language_id_fkey" FOREIGN KEY ("local_language_id") REFERENCES "languages"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pokemon_habitat_names" ADD CONSTRAINT "pokemon_habitat_names_pokemon_habitat_id_fkey" FOREIGN KEY ("pokemon_habitat_id") REFERENCES "pokemon_habitats"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pokemon_habitat_names" ADD CONSTRAINT "pokemon_habitat_names_local_language_id_fkey" FOREIGN KEY ("local_language_id") REFERENCES "languages"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pokemon_move_method_prose" ADD CONSTRAINT "pokemon_move_method_prose_pokemon_move_method_id_fkey" FOREIGN KEY ("pokemon_move_method_id") REFERENCES "pokemon_move_methods"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pokemon_move_method_prose" ADD CONSTRAINT "pokemon_move_method_prose_local_language_id_fkey" FOREIGN KEY ("local_language_id") REFERENCES "languages"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pokemon_shape_prose" ADD CONSTRAINT "pokemon_shape_prose_pokemon_shape_id_fkey" FOREIGN KEY ("pokemon_shape_id") REFERENCES "pokemon_shapes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pokemon_shape_prose" ADD CONSTRAINT "pokemon_shape_prose_local_language_id_fkey" FOREIGN KEY ("local_language_id") REFERENCES "languages"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pokemon_species_flavor_summaries" ADD CONSTRAINT "pokemon_species_flavor_summaries_pokemon_species_id_fkey" FOREIGN KEY ("pokemon_species_id") REFERENCES "pokemon_species"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pokemon_species_flavor_summaries" ADD CONSTRAINT "pokemon_species_flavor_summaries_local_language_id_fkey" FOREIGN KEY ("local_language_id") REFERENCES "languages"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pokemon_species_flavor_text" ADD CONSTRAINT "pokemon_species_flavor_text_species_id_fkey" FOREIGN KEY ("species_id") REFERENCES "pokemon_species"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pokemon_species_flavor_text" ADD CONSTRAINT "pokemon_species_flavor_text_version_id_fkey" FOREIGN KEY ("version_id") REFERENCES "versions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pokemon_species_flavor_text" ADD CONSTRAINT "pokemon_species_flavor_text_language_id_fkey" FOREIGN KEY ("language_id") REFERENCES "languages"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pokemon_species_names" ADD CONSTRAINT "pokemon_species_names_pokemon_species_id_fkey" FOREIGN KEY ("pokemon_species_id") REFERENCES "pokemon_species"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pokemon_species_names" ADD CONSTRAINT "pokemon_species_names_local_language_id_fkey" FOREIGN KEY ("local_language_id") REFERENCES "languages"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pokemon_species_prose" ADD CONSTRAINT "pokemon_species_prose_pokemon_species_id_fkey" FOREIGN KEY ("pokemon_species_id") REFERENCES "pokemon_species"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pokemon_species_prose" ADD CONSTRAINT "pokemon_species_prose_local_language_id_fkey" FOREIGN KEY ("local_language_id") REFERENCES "languages"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pokemon_stats_past" ADD CONSTRAINT "pokemon_stats_past_pokemon_id_fkey" FOREIGN KEY ("pokemon_id") REFERENCES "pokemon"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pokemon_stats_past" ADD CONSTRAINT "pokemon_stats_past_generation_id_fkey" FOREIGN KEY ("generation_id") REFERENCES "generations"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pokemon_stats_past" ADD CONSTRAINT "pokemon_stats_past_stat_id_fkey" FOREIGN KEY ("stat_id") REFERENCES "stats"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pokemon_types_past" ADD CONSTRAINT "pokemon_types_past_pokemon_id_fkey" FOREIGN KEY ("pokemon_id") REFERENCES "pokemon"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pokemon_types_past" ADD CONSTRAINT "pokemon_types_past_generation_id_fkey" FOREIGN KEY ("generation_id") REFERENCES "generations"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pokemon_types_past" ADD CONSTRAINT "pokemon_types_past_type_id_fkey" FOREIGN KEY ("type_id") REFERENCES "types"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "region_names" ADD CONSTRAINT "region_names_region_id_fkey" FOREIGN KEY ("region_id") REFERENCES "regions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "region_names" ADD CONSTRAINT "region_names_local_language_id_fkey" FOREIGN KEY ("local_language_id") REFERENCES "languages"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "stat_names" ADD CONSTRAINT "stat_names_stat_id_fkey" FOREIGN KEY ("stat_id") REFERENCES "stats"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "stat_names" ADD CONSTRAINT "stat_names_local_language_id_fkey" FOREIGN KEY ("local_language_id") REFERENCES "languages"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "super_contest_effect_prose" ADD CONSTRAINT "super_contest_effect_prose_super_contest_effect_id_fkey" FOREIGN KEY ("super_contest_effect_id") REFERENCES "super_contest_effects"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "super_contest_effect_prose" ADD CONSTRAINT "super_contest_effect_prose_local_language_id_fkey" FOREIGN KEY ("local_language_id") REFERENCES "languages"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "type_efficacy_past" ADD CONSTRAINT "type_efficacy_past_damage_type_id_fkey" FOREIGN KEY ("damage_type_id") REFERENCES "types"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "type_efficacy_past" ADD CONSTRAINT "type_efficacy_past_target_type_id_fkey" FOREIGN KEY ("target_type_id") REFERENCES "types"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "type_efficacy_past" ADD CONSTRAINT "type_efficacy_past_generation_id_fkey" FOREIGN KEY ("generation_id") REFERENCES "generations"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "type_names" ADD CONSTRAINT "type_names_type_id_fkey" FOREIGN KEY ("type_id") REFERENCES "types"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "type_names" ADD CONSTRAINT "type_names_local_language_id_fkey" FOREIGN KEY ("local_language_id") REFERENCES "languages"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "version_names" ADD CONSTRAINT "version_names_version_id_fkey" FOREIGN KEY ("version_id") REFERENCES "versions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "version_names" ADD CONSTRAINT "version_names_local_language_id_fkey" FOREIGN KEY ("local_language_id") REFERENCES "languages"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
