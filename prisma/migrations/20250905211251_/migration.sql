-- CreateTable
CREATE TABLE "public"."pokemon" (
    "id" INTEGER NOT NULL,
    "identifier" TEXT NOT NULL,
    "species_id" INTEGER NOT NULL,
    "height" INTEGER NOT NULL,
    "weight" INTEGER NOT NULL,
    "base_experience" INTEGER NOT NULL,
    "order" INTEGER NOT NULL,
    "is_default" INTEGER NOT NULL,

    CONSTRAINT "pokemon_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."pokemon_species" (
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
CREATE TABLE "public"."pokemon_forms" (
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
CREATE TABLE "public"."moves" (
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
CREATE TABLE "public"."move_effects" (
    "id" INTEGER NOT NULL,

    CONSTRAINT "move_effects_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."move_targets" (
    "id" INTEGER NOT NULL,
    "identifier" TEXT NOT NULL,

    CONSTRAINT "move_targets_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."move_damage_classes" (
    "id" INTEGER NOT NULL,
    "identifier" TEXT NOT NULL,

    CONSTRAINT "move_damage_classes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."types" (
    "id" INTEGER NOT NULL,
    "identifier" TEXT NOT NULL,
    "generation_id" INTEGER NOT NULL,
    "damage_class_id" INTEGER,

    CONSTRAINT "types_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."abilities" (
    "id" INTEGER NOT NULL,
    "identifier" TEXT NOT NULL,
    "generation_id" INTEGER NOT NULL,
    "is_main_series" INTEGER NOT NULL,

    CONSTRAINT "abilities_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."items" (
    "id" INTEGER NOT NULL,
    "identifier" TEXT NOT NULL,
    "category_id" INTEGER NOT NULL,
    "cost" INTEGER NOT NULL,
    "fling_power" INTEGER,
    "fling_effect_id" INTEGER,

    CONSTRAINT "items_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."item_categories" (
    "id" INTEGER NOT NULL,
    "pocket_id" INTEGER NOT NULL,
    "identifier" TEXT NOT NULL,

    CONSTRAINT "item_categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."item_pockets" (
    "id" INTEGER NOT NULL,
    "identifier" TEXT NOT NULL,

    CONSTRAINT "item_pockets_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."stats" (
    "id" INTEGER NOT NULL,
    "damage_class_id" INTEGER,
    "identifier" TEXT NOT NULL,
    "is_battle_only" INTEGER NOT NULL,
    "game_index" INTEGER,

    CONSTRAINT "stats_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."generations" (
    "id" INTEGER NOT NULL,
    "main_region_id" INTEGER NOT NULL,
    "identifier" TEXT NOT NULL,

    CONSTRAINT "generations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."version_groups" (
    "id" INTEGER NOT NULL,
    "identifier" TEXT NOT NULL,
    "generation_id" INTEGER NOT NULL,
    "order" INTEGER NOT NULL,

    CONSTRAINT "version_groups_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."versions" (
    "id" INTEGER NOT NULL,
    "version_group_id" INTEGER NOT NULL,
    "identifier" TEXT NOT NULL,

    CONSTRAINT "versions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."regions" (
    "id" INTEGER NOT NULL,
    "identifier" TEXT NOT NULL,

    CONSTRAINT "regions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."locations" (
    "id" INTEGER NOT NULL,
    "region_id" INTEGER NOT NULL,
    "identifier" TEXT NOT NULL,

    CONSTRAINT "locations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."location_areas" (
    "id" INTEGER NOT NULL,
    "location_id" INTEGER NOT NULL,
    "game_index" INTEGER NOT NULL,
    "identifier" TEXT NOT NULL,

    CONSTRAINT "location_areas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."languages" (
    "id" INTEGER NOT NULL,
    "iso639" TEXT NOT NULL,
    "iso3166" TEXT NOT NULL,
    "identifier" TEXT NOT NULL,
    "official" INTEGER NOT NULL,
    "order" INTEGER NOT NULL,

    CONSTRAINT "languages_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."pokedexes" (
    "id" INTEGER NOT NULL,
    "region_id" INTEGER NOT NULL,
    "identifier" TEXT NOT NULL,
    "is_main_series" INTEGER NOT NULL,

    CONSTRAINT "pokedexes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."evolution_chains" (
    "id" INTEGER NOT NULL,
    "baby_trigger_item_id" INTEGER,

    CONSTRAINT "evolution_chains_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."evolution_triggers" (
    "id" INTEGER NOT NULL,
    "identifier" TEXT NOT NULL,

    CONSTRAINT "evolution_triggers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."pokemon_evolution" (
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

    CONSTRAINT "pokemon_evolution_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."growth_rates" (
    "id" INTEGER NOT NULL,
    "identifier" TEXT NOT NULL,
    "formula" TEXT NOT NULL,

    CONSTRAINT "growth_rates_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."experience" (
    "growth_rate_id" INTEGER NOT NULL,
    "level" INTEGER NOT NULL,
    "experience" INTEGER NOT NULL,

    CONSTRAINT "experience_pkey" PRIMARY KEY ("growth_rate_id","level")
);

-- CreateTable
CREATE TABLE "public"."genders" (
    "id" INTEGER NOT NULL,
    "identifier" TEXT NOT NULL,

    CONSTRAINT "genders_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."egg_groups" (
    "id" INTEGER NOT NULL,
    "identifier" TEXT NOT NULL,

    CONSTRAINT "egg_groups_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."natures" (
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
CREATE TABLE "public"."contest_types" (
    "id" INTEGER NOT NULL,
    "identifier" TEXT NOT NULL,

    CONSTRAINT "contest_types_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."contest_effects" (
    "id" INTEGER NOT NULL,
    "appeal" INTEGER NOT NULL,
    "jam" INTEGER NOT NULL,

    CONSTRAINT "contest_effects_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."super_contest_effects" (
    "id" INTEGER NOT NULL,
    "appeal" INTEGER NOT NULL,

    CONSTRAINT "super_contest_effects_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."machines" (
    "machine_number" INTEGER NOT NULL,
    "version_group_id" INTEGER NOT NULL,
    "item_id" INTEGER NOT NULL,
    "move_id" INTEGER NOT NULL,

    CONSTRAINT "machines_pkey" PRIMARY KEY ("machine_number","version_group_id")
);

-- CreateTable
CREATE TABLE "public"."encounter_methods" (
    "id" INTEGER NOT NULL,
    "identifier" TEXT NOT NULL,
    "order" INTEGER NOT NULL,

    CONSTRAINT "encounter_methods_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."encounter_slots" (
    "id" INTEGER NOT NULL,
    "version_group_id" INTEGER NOT NULL,
    "encounter_method_id" INTEGER NOT NULL,
    "slot" INTEGER,
    "rarity" INTEGER NOT NULL,

    CONSTRAINT "encounter_slots_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."encounters" (
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
CREATE TABLE "public"."encounter_conditions" (
    "id" INTEGER NOT NULL,
    "identifier" TEXT NOT NULL,

    CONSTRAINT "encounter_conditions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."encounter_condition_values" (
    "id" INTEGER NOT NULL,
    "encounter_condition_id" INTEGER NOT NULL,
    "identifier" TEXT NOT NULL,
    "is_default" INTEGER NOT NULL,

    CONSTRAINT "encounter_condition_values_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."encounter_condition_value_map" (
    "encounter_id" INTEGER NOT NULL,
    "encounter_condition_value_id" INTEGER NOT NULL,

    CONSTRAINT "encounter_condition_value_map_pkey" PRIMARY KEY ("encounter_id")
);

-- CreateTable
CREATE TABLE "public"."pal_park_areas" (
    "id" INTEGER NOT NULL,
    "identifier" TEXT NOT NULL,

    CONSTRAINT "pal_park_areas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."pal_park" (
    "species_id" INTEGER NOT NULL,
    "area_id" INTEGER NOT NULL,
    "base_score" INTEGER NOT NULL,
    "rate" INTEGER NOT NULL,

    CONSTRAINT "pal_park_pkey" PRIMARY KEY ("species_id")
);

-- CreateTable
CREATE TABLE "public"."pokeathlon_stats" (
    "id" INTEGER NOT NULL,
    "identifier" TEXT NOT NULL,

    CONSTRAINT "pokeathlon_stats_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."move_meta_categories" (
    "id" INTEGER NOT NULL,
    "identifier" TEXT NOT NULL,

    CONSTRAINT "move_meta_categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."move_meta_ailments" (
    "id" INTEGER NOT NULL,
    "identifier" TEXT NOT NULL,

    CONSTRAINT "move_meta_ailments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."move_meta" (
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
CREATE TABLE "public"."move_meta_stat_changes" (
    "move_id" INTEGER NOT NULL,
    "stat_id" INTEGER NOT NULL,
    "change" INTEGER NOT NULL,

    CONSTRAINT "move_meta_stat_changes_pkey" PRIMARY KEY ("move_id","stat_id")
);

-- CreateTable
CREATE TABLE "public"."move_flags" (
    "id" INTEGER NOT NULL,
    "identifier" TEXT NOT NULL,

    CONSTRAINT "move_flags_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."move_flag_map" (
    "move_id" INTEGER NOT NULL,
    "move_flag_id" INTEGER NOT NULL,

    CONSTRAINT "move_flag_map_pkey" PRIMARY KEY ("move_id")
);

-- CreateTable
CREATE TABLE "public"."move_battle_styles" (
    "id" INTEGER NOT NULL,
    "identifier" TEXT NOT NULL,

    CONSTRAINT "move_battle_styles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."item_flags" (
    "id" INTEGER NOT NULL,
    "identifier" TEXT NOT NULL,

    CONSTRAINT "item_flags_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."item_flag_map" (
    "item_id" INTEGER NOT NULL,
    "item_flag_id" INTEGER NOT NULL,

    CONSTRAINT "item_flag_map_pkey" PRIMARY KEY ("item_id")
);

-- CreateTable
CREATE TABLE "public"."item_fling_effects" (
    "id" INTEGER NOT NULL,
    "identifier" TEXT NOT NULL,

    CONSTRAINT "item_fling_effects_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."berries" (
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
CREATE TABLE "public"."berry_firmness" (
    "id" INTEGER NOT NULL,
    "identifier" TEXT NOT NULL,

    CONSTRAINT "berry_firmness_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."berry_flavors" (
    "berry_id" INTEGER NOT NULL,
    "contest_type_id" INTEGER NOT NULL,
    "flavor" INTEGER NOT NULL,

    CONSTRAINT "berry_flavors_pkey" PRIMARY KEY ("berry_id","contest_type_id")
);

-- CreateTable
CREATE TABLE "public"."characteristics" (
    "id" INTEGER NOT NULL,
    "stat_id" INTEGER NOT NULL,
    "gene_mod_5" INTEGER NOT NULL,

    CONSTRAINT "characteristics_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."conquest_episodes" (
    "id" INTEGER NOT NULL,
    "identifier" TEXT NOT NULL,

    CONSTRAINT "conquest_episodes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."conquest_kingdoms" (
    "id" INTEGER NOT NULL,
    "identifier" TEXT NOT NULL,
    "type_id" INTEGER NOT NULL,

    CONSTRAINT "conquest_kingdoms_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."conquest_max_links" (
    "warrior_rank_id" INTEGER NOT NULL,
    "pokemon_species_id" INTEGER NOT NULL,
    "max_link" INTEGER NOT NULL,

    CONSTRAINT "conquest_max_links_pkey" PRIMARY KEY ("warrior_rank_id")
);

-- CreateTable
CREATE TABLE "public"."conquest_move_data" (
    "move_id" INTEGER NOT NULL,
    "power" INTEGER,
    "accuracy" INTEGER,
    "effect_chance" INTEGER,
    "effect_id" INTEGER,
    "range_id" INTEGER,
    "displacement_id" INTEGER,

    CONSTRAINT "conquest_move_data_pkey" PRIMARY KEY ("move_id")
);

-- CreateTable
CREATE TABLE "public"."conquest_move_displacements" (
    "id" INTEGER NOT NULL,
    "identifier" TEXT NOT NULL,
    "affects_target" INTEGER NOT NULL,

    CONSTRAINT "conquest_move_displacements_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."conquest_move_effects" (
    "id" INTEGER NOT NULL,

    CONSTRAINT "conquest_move_effects_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."conquest_move_ranges" (
    "id" INTEGER NOT NULL,
    "identifier" TEXT NOT NULL,
    "targets" INTEGER NOT NULL,

    CONSTRAINT "conquest_move_ranges_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."conquest_pokemon_abilities" (
    "pokemon_species_id" INTEGER NOT NULL,
    "slot" INTEGER NOT NULL,
    "ability_id" INTEGER NOT NULL,

    CONSTRAINT "conquest_pokemon_abilities_pkey" PRIMARY KEY ("pokemon_species_id")
);

-- CreateTable
CREATE TABLE "public"."conquest_pokemon_evolution" (
    "evolved_species_id" INTEGER NOT NULL,
    "required_stat_id" INTEGER,
    "minimum_stat" INTEGER,
    "minimum_link" INTEGER,
    "kingdom_id" INTEGER,
    "warrior_gender_id" INTEGER,
    "item_id" INTEGER,
    "recruiting_ko_required" INTEGER NOT NULL,

    CONSTRAINT "conquest_pokemon_evolution_pkey" PRIMARY KEY ("evolved_species_id")
);

-- CreateTable
CREATE TABLE "public"."conquest_pokemon_moves" (
    "pokemon_species_id" INTEGER NOT NULL,
    "move_id" INTEGER NOT NULL,

    CONSTRAINT "conquest_pokemon_moves_pkey" PRIMARY KEY ("pokemon_species_id","move_id")
);

-- CreateTable
CREATE TABLE "public"."conquest_pokemon_stats" (
    "pokemon_species_id" INTEGER NOT NULL,
    "conquest_stat_id" INTEGER NOT NULL,
    "base_stat" INTEGER NOT NULL,

    CONSTRAINT "conquest_pokemon_stats_pkey" PRIMARY KEY ("pokemon_species_id","conquest_stat_id")
);

-- CreateTable
CREATE TABLE "public"."conquest_stats" (
    "id" INTEGER NOT NULL,
    "identifier" TEXT NOT NULL,
    "is_base" INTEGER NOT NULL,

    CONSTRAINT "conquest_stats_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."conquest_transformation_pokemon" (
    "transformation_id" INTEGER NOT NULL,
    "pokemon_species_id" INTEGER NOT NULL,

    CONSTRAINT "conquest_transformation_pokemon_pkey" PRIMARY KEY ("transformation_id")
);

-- CreateTable
CREATE TABLE "public"."conquest_transformation_warriors" (
    "transformation_id" INTEGER NOT NULL,
    "present_warrior_id" INTEGER NOT NULL,

    CONSTRAINT "conquest_transformation_warriors_pkey" PRIMARY KEY ("transformation_id")
);

-- CreateTable
CREATE TABLE "public"."conquest_warriors" (
    "id" INTEGER NOT NULL,
    "identifier" TEXT NOT NULL,
    "gender_id" INTEGER NOT NULL,
    "archetype_id" INTEGER NOT NULL,

    CONSTRAINT "conquest_warriors_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."conquest_warrior_archetypes" (
    "id" INTEGER NOT NULL,
    "identifier" TEXT NOT NULL,

    CONSTRAINT "conquest_warrior_archetypes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."conquest_warrior_ranks" (
    "id" INTEGER NOT NULL,
    "warrior_id" INTEGER NOT NULL,
    "rank" INTEGER NOT NULL,
    "skill_id" INTEGER NOT NULL,

    CONSTRAINT "conquest_warrior_ranks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."conquest_warrior_rank_stat_map" (
    "warrior_rank_id" INTEGER NOT NULL,
    "warrior_stat_id" INTEGER NOT NULL,
    "base_stat" INTEGER NOT NULL,

    CONSTRAINT "conquest_warrior_rank_stat_map_pkey" PRIMARY KEY ("warrior_rank_id")
);

-- CreateTable
CREATE TABLE "public"."conquest_warrior_skills" (
    "id" INTEGER NOT NULL,
    "identifier" TEXT NOT NULL,

    CONSTRAINT "conquest_warrior_skills_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."conquest_warrior_specialties" (
    "warrior_id" INTEGER NOT NULL,
    "type_id" INTEGER NOT NULL,
    "slot" INTEGER NOT NULL,

    CONSTRAINT "conquest_warrior_specialties_pkey" PRIMARY KEY ("warrior_id","type_id")
);

-- CreateTable
CREATE TABLE "public"."conquest_warrior_stats" (
    "id" INTEGER NOT NULL,
    "identifier" TEXT NOT NULL,

    CONSTRAINT "conquest_warrior_stats_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."conquest_warrior_transformation" (
    "transformed_warrior_rank_id" INTEGER NOT NULL,
    "is_automatic" INTEGER NOT NULL,
    "required_link" INTEGER,
    "completed_episode_id" INTEGER,
    "current_episode_id" INTEGER,
    "distant_warrior_id" INTEGER,
    "female_warlord_count" INTEGER,
    "pokemon_count" INTEGER,
    "collection_type_id" INTEGER,
    "warrior_count" INTEGER,

    CONSTRAINT "conquest_warrior_transformation_pkey" PRIMARY KEY ("transformed_warrior_rank_id")
);

-- CreateTable
CREATE TABLE "public"."contest_combos" (
    "first_move_id" INTEGER NOT NULL,
    "second_move_id" INTEGER NOT NULL,

    CONSTRAINT "contest_combos_pkey" PRIMARY KEY ("first_move_id")
);

-- CreateTable
CREATE TABLE "public"."super_contest_combos" (
    "first_move_id" INTEGER NOT NULL,
    "second_move_id" INTEGER NOT NULL,

    CONSTRAINT "super_contest_combos_pkey" PRIMARY KEY ("first_move_id")
);

-- CreateTable
CREATE TABLE "public"."pokemon_move_methods" (
    "id" INTEGER NOT NULL,
    "identifier" TEXT NOT NULL,

    CONSTRAINT "pokemon_move_methods_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."version_group_pokemon_move_methods" (
    "version_group_id" INTEGER NOT NULL,
    "pokemon_move_method_id" INTEGER NOT NULL,

    CONSTRAINT "version_group_pokemon_move_methods_pkey" PRIMARY KEY ("version_group_id")
);

-- CreateTable
CREATE TABLE "public"."pokemon_shapes" (
    "id" INTEGER NOT NULL,
    "identifier" TEXT NOT NULL,

    CONSTRAINT "pokemon_shapes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."pokemon_colors" (
    "id" INTEGER NOT NULL,
    "identifier" TEXT NOT NULL,

    CONSTRAINT "pokemon_colors_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."pokemon_habitats" (
    "id" INTEGER NOT NULL,
    "identifier" TEXT NOT NULL,

    CONSTRAINT "pokemon_habitats_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."type_efficacy" (
    "damage_type_id" INTEGER NOT NULL,
    "target_type_id" INTEGER NOT NULL,
    "damage_factor" INTEGER NOT NULL,

    CONSTRAINT "type_efficacy_pkey" PRIMARY KEY ("damage_type_id","target_type_id")
);

-- CreateTable
CREATE TABLE "public"."type_efficacy_past" (
    "damage_type_id" INTEGER NOT NULL,
    "target_type_id" INTEGER NOT NULL,
    "damage_factor" INTEGER NOT NULL,
    "generation_id" INTEGER NOT NULL,

    CONSTRAINT "type_efficacy_past_pkey" PRIMARY KEY ("damage_type_id","target_type_id","generation_id")
);

-- CreateTable
CREATE TABLE "public"."version_group_regions" (
    "version_group_id" INTEGER NOT NULL,
    "region_id" INTEGER NOT NULL,

    CONSTRAINT "version_group_regions_pkey" PRIMARY KEY ("version_group_id")
);

-- CreateTable
CREATE TABLE "public"."pokedex_version_groups" (
    "pokedex_id" INTEGER NOT NULL,
    "version_group_id" INTEGER NOT NULL,

    CONSTRAINT "pokedex_version_groups_pkey" PRIMARY KEY ("pokedex_id")
);

-- CreateTable
CREATE TABLE "public"."pokemon_abilities" (
    "pokemon_id" INTEGER NOT NULL,
    "ability_id" INTEGER NOT NULL,
    "is_hidden" INTEGER NOT NULL,
    "slot" INTEGER NOT NULL,

    CONSTRAINT "pokemon_abilities_pkey" PRIMARY KEY ("pokemon_id")
);

-- CreateTable
CREATE TABLE "public"."pokemon_abilities_past" (
    "pokemon_id" INTEGER NOT NULL,
    "generation_id" INTEGER NOT NULL,
    "ability_id" INTEGER NOT NULL,
    "is_hidden" INTEGER NOT NULL,
    "slot" INTEGER NOT NULL,

    CONSTRAINT "pokemon_abilities_past_pkey" PRIMARY KEY ("pokemon_id","generation_id","ability_id")
);

-- CreateTable
CREATE TABLE "public"."pokemon_moves" (
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
CREATE TABLE "public"."pokemon_stats" (
    "pokemon_id" INTEGER NOT NULL,
    "stat_id" INTEGER NOT NULL,
    "base_stat" INTEGER NOT NULL,
    "effort" INTEGER NOT NULL,

    CONSTRAINT "pokemon_stats_pkey" PRIMARY KEY ("pokemon_id","stat_id")
);

-- CreateTable
CREATE TABLE "public"."pokemon_types" (
    "pokemon_id" INTEGER NOT NULL,
    "type_id" INTEGER NOT NULL,
    "slot" INTEGER NOT NULL,

    CONSTRAINT "pokemon_types_pkey" PRIMARY KEY ("pokemon_id","type_id")
);

-- CreateTable
CREATE TABLE "public"."pokemon_types_past" (
    "pokemon_id" INTEGER NOT NULL,
    "generation_id" INTEGER NOT NULL,
    "type_id" INTEGER NOT NULL,
    "slot" INTEGER NOT NULL,

    CONSTRAINT "pokemon_types_past_pkey" PRIMARY KEY ("pokemon_id","generation_id","type_id")
);

-- CreateTable
CREATE TABLE "public"."pokemon_egg_groups" (
    "species_id" INTEGER NOT NULL,
    "egg_group_id" INTEGER NOT NULL,

    CONSTRAINT "pokemon_egg_groups_pkey" PRIMARY KEY ("species_id","egg_group_id")
);

-- CreateTable
CREATE TABLE "public"."pokemon_items" (
    "pokemon_id" INTEGER NOT NULL,
    "version_id" INTEGER NOT NULL,
    "item_id" INTEGER NOT NULL,
    "rarity" INTEGER NOT NULL,

    CONSTRAINT "pokemon_items_pkey" PRIMARY KEY ("pokemon_id","version_id","item_id")
);

-- CreateTable
CREATE TABLE "public"."pokemon_game_indices" (
    "pokemon_id" INTEGER NOT NULL,
    "version_id" INTEGER NOT NULL,
    "game_index" INTEGER NOT NULL,

    CONSTRAINT "pokemon_game_indices_pkey" PRIMARY KEY ("pokemon_id","version_id")
);

-- CreateTable
CREATE TABLE "public"."pokemon_dex_numbers" (
    "species_id" INTEGER NOT NULL,
    "pokedex_id" INTEGER NOT NULL,
    "pokedex_number" INTEGER NOT NULL,

    CONSTRAINT "pokemon_dex_numbers_pkey" PRIMARY KEY ("species_id","pokedex_id")
);

-- CreateTable
CREATE TABLE "public"."pokemon_form_generations" (
    "pokemon_form_id" INTEGER NOT NULL,
    "generation_id" INTEGER NOT NULL,
    "game_index" INTEGER NOT NULL,

    CONSTRAINT "pokemon_form_generations_pkey" PRIMARY KEY ("pokemon_form_id","generation_id")
);

-- CreateTable
CREATE TABLE "public"."pokemon_form_types" (
    "pokemon_form_id" INTEGER NOT NULL,
    "type_id" INTEGER NOT NULL,
    "slot" INTEGER NOT NULL,

    CONSTRAINT "pokemon_form_types_pkey" PRIMARY KEY ("pokemon_form_id","type_id")
);

-- CreateTable
CREATE TABLE "public"."pokemon_form_pokeathlon_stats" (
    "pokemon_form_id" INTEGER NOT NULL,
    "pokeathlon_stat_id" INTEGER NOT NULL,
    "minimum_stat" INTEGER NOT NULL,
    "base_stat" INTEGER NOT NULL,
    "maximum_stat" INTEGER NOT NULL,

    CONSTRAINT "pokemon_form_pokeathlon_stats_pkey" PRIMARY KEY ("pokemon_form_id","pokeathlon_stat_id")
);

-- CreateTable
CREATE TABLE "public"."pokemon_form_names" (
    "pokemon_form_id" INTEGER NOT NULL,
    "local_language_id" INTEGER NOT NULL,
    "form_name" TEXT,
    "pokemon_name" TEXT,

    CONSTRAINT "pokemon_form_names_pkey" PRIMARY KEY ("pokemon_form_id","local_language_id")
);

-- CreateTable
CREATE TABLE "public"."pokemon_species_names" (
    "pokemon_species_id" INTEGER NOT NULL,
    "local_language_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "genus" TEXT,

    CONSTRAINT "pokemon_species_names_pkey" PRIMARY KEY ("pokemon_species_id","local_language_id")
);

-- CreateTable
CREATE TABLE "public"."pokemon_species_prose" (
    "pokemon_species_id" INTEGER NOT NULL,
    "local_language_id" INTEGER NOT NULL,
    "form_description" TEXT,

    CONSTRAINT "pokemon_species_prose_pkey" PRIMARY KEY ("pokemon_species_id","local_language_id")
);

-- CreateTable
CREATE TABLE "public"."pokemon_species_flavor_summaries" (
    "pokemon_species_id" INTEGER NOT NULL,
    "local_language_id" INTEGER NOT NULL,
    "flavor_summary" TEXT,

    CONSTRAINT "pokemon_species_flavor_summaries_pkey" PRIMARY KEY ("pokemon_species_id","local_language_id")
);

-- CreateTable
CREATE TABLE "public"."pokemon_species_flavor_text" (
    "species_id" INTEGER NOT NULL,
    "version_id" INTEGER NOT NULL,
    "language_id" INTEGER NOT NULL,
    "flavor_text" TEXT NOT NULL,

    CONSTRAINT "pokemon_species_flavor_text_pkey" PRIMARY KEY ("species_id","version_id","language_id")
);

-- CreateTable
CREATE TABLE "public"."move_names" (
    "move_id" INTEGER NOT NULL,
    "local_language_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "move_names_pkey" PRIMARY KEY ("move_id")
);

-- CreateTable
CREATE TABLE "public"."move_prose" (
    "move_id" INTEGER NOT NULL,
    "local_language_id" INTEGER NOT NULL,
    "short_effect" TEXT,
    "effect" TEXT,

    CONSTRAINT "move_prose_pkey" PRIMARY KEY ("move_id")
);

-- CreateTable
CREATE TABLE "public"."move_flavor_text" (
    "move_id" INTEGER NOT NULL,
    "version_group_id" INTEGER NOT NULL,
    "language_id" INTEGER NOT NULL,
    "flavor_text" TEXT NOT NULL,

    CONSTRAINT "move_flavor_text_pkey" PRIMARY KEY ("move_id","version_group_id","language_id")
);

-- CreateTable
CREATE TABLE "public"."move_flavor_summaries" (
    "move_id" INTEGER NOT NULL,
    "local_language_id" INTEGER NOT NULL,
    "flavor_summary" TEXT,

    CONSTRAINT "move_flavor_summaries_pkey" PRIMARY KEY ("move_id")
);

-- CreateTable
CREATE TABLE "public"."move_changelog" (
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

    CONSTRAINT "move_changelog_pkey" PRIMARY KEY ("move_id")
);

-- CreateTable
CREATE TABLE "public"."move_effect_changelog" (
    "id" INTEGER NOT NULL,
    "effect_id" INTEGER NOT NULL,
    "changed_in_version_group_id" INTEGER NOT NULL,

    CONSTRAINT "move_effect_changelog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."move_effect_changelog_prose" (
    "move_effect_changelog_id" INTEGER NOT NULL,
    "local_language_id" INTEGER NOT NULL,
    "effect" TEXT NOT NULL,

    CONSTRAINT "move_effect_changelog_prose_pkey" PRIMARY KEY ("move_effect_changelog_id")
);

-- CreateTable
CREATE TABLE "public"."move_effect_prose" (
    "move_effect_id" INTEGER NOT NULL,
    "local_language_id" INTEGER NOT NULL,
    "short_effect" TEXT,
    "effect" TEXT,

    CONSTRAINT "move_effect_prose_pkey" PRIMARY KEY ("move_effect_id")
);

-- CreateTable
CREATE TABLE "public"."move_damage_class_prose" (
    "move_damage_class_id" INTEGER NOT NULL,
    "local_language_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "move_damage_class_prose_pkey" PRIMARY KEY ("move_damage_class_id")
);

-- CreateTable
CREATE TABLE "public"."move_target_prose" (
    "move_target_id" INTEGER NOT NULL,
    "local_language_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "move_target_prose_pkey" PRIMARY KEY ("move_target_id")
);

-- CreateTable
CREATE TABLE "public"."move_flag_prose" (
    "move_flag_id" INTEGER NOT NULL,
    "local_language_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "move_flag_prose_pkey" PRIMARY KEY ("move_flag_id")
);

-- CreateTable
CREATE TABLE "public"."move_battle_style_prose" (
    "move_battle_style_id" INTEGER NOT NULL,
    "local_language_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "move_battle_style_prose_pkey" PRIMARY KEY ("move_battle_style_id")
);

-- CreateTable
CREATE TABLE "public"."move_meta_ailment_names" (
    "move_meta_ailment_id" INTEGER NOT NULL,
    "local_language_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "move_meta_ailment_names_pkey" PRIMARY KEY ("move_meta_ailment_id")
);

-- CreateTable
CREATE TABLE "public"."move_meta_category_prose" (
    "move_meta_category_id" INTEGER NOT NULL,
    "local_language_id" INTEGER NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "move_meta_category_prose_pkey" PRIMARY KEY ("move_meta_category_id")
);

-- CreateTable
CREATE TABLE "public"."type_names" (
    "type_id" INTEGER NOT NULL,
    "local_language_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "type_names_pkey" PRIMARY KEY ("type_id")
);

-- CreateTable
CREATE TABLE "public"."type_game_indices" (
    "type_id" INTEGER NOT NULL,
    "generation_id" INTEGER NOT NULL,
    "game_index" INTEGER NOT NULL,

    CONSTRAINT "type_game_indices_pkey" PRIMARY KEY ("type_id")
);

-- CreateTable
CREATE TABLE "public"."ability_names" (
    "ability_id" INTEGER NOT NULL,
    "local_language_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "ability_names_pkey" PRIMARY KEY ("ability_id")
);

-- CreateTable
CREATE TABLE "public"."ability_prose" (
    "ability_id" INTEGER NOT NULL,
    "local_language_id" INTEGER NOT NULL,
    "short_effect" TEXT,
    "effect" TEXT,

    CONSTRAINT "ability_prose_pkey" PRIMARY KEY ("ability_id")
);

-- CreateTable
CREATE TABLE "public"."ability_flavor_text" (
    "ability_id" INTEGER NOT NULL,
    "version_group_id" INTEGER NOT NULL,
    "language_id" INTEGER NOT NULL,
    "flavor_text" TEXT NOT NULL,

    CONSTRAINT "ability_flavor_text_pkey" PRIMARY KEY ("ability_id","version_group_id","language_id")
);

-- CreateTable
CREATE TABLE "public"."ability_changelog" (
    "ability_id" INTEGER NOT NULL,
    "changed_in_version_group_id" INTEGER NOT NULL,

    CONSTRAINT "ability_changelog_pkey" PRIMARY KEY ("ability_id")
);

-- CreateTable
CREATE TABLE "public"."ability_changelog_prose" (
    "ability_changelog_id" INTEGER NOT NULL,
    "local_language_id" INTEGER NOT NULL,
    "effect" TEXT NOT NULL,

    CONSTRAINT "ability_changelog_prose_pkey" PRIMARY KEY ("ability_changelog_id")
);

-- CreateTable
CREATE TABLE "public"."item_names" (
    "item_id" INTEGER NOT NULL,
    "local_language_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "item_names_pkey" PRIMARY KEY ("item_id")
);

-- CreateTable
CREATE TABLE "public"."item_prose" (
    "item_id" INTEGER NOT NULL,
    "local_language_id" INTEGER NOT NULL,
    "short_effect" TEXT,
    "effect" TEXT,

    CONSTRAINT "item_prose_pkey" PRIMARY KEY ("item_id")
);

-- CreateTable
CREATE TABLE "public"."item_flavor_text" (
    "item_id" INTEGER NOT NULL,
    "version_group_id" INTEGER NOT NULL,
    "language_id" INTEGER NOT NULL,
    "flavor_text" TEXT NOT NULL,

    CONSTRAINT "item_flavor_text_pkey" PRIMARY KEY ("item_id","version_group_id","language_id")
);

-- CreateTable
CREATE TABLE "public"."item_flavor_summaries" (
    "item_id" INTEGER NOT NULL,
    "local_language_id" INTEGER NOT NULL,
    "flavor_summary" TEXT,

    CONSTRAINT "item_flavor_summaries_pkey" PRIMARY KEY ("item_id")
);

-- CreateTable
CREATE TABLE "public"."item_game_indices" (
    "item_id" INTEGER NOT NULL,
    "generation_id" INTEGER NOT NULL,
    "game_index" INTEGER NOT NULL,

    CONSTRAINT "item_game_indices_pkey" PRIMARY KEY ("item_id")
);

-- CreateTable
CREATE TABLE "public"."item_category_prose" (
    "item_category_id" INTEGER NOT NULL,
    "local_language_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "item_category_prose_pkey" PRIMARY KEY ("item_category_id")
);

-- CreateTable
CREATE TABLE "public"."item_pocket_names" (
    "item_pocket_id" INTEGER NOT NULL,
    "local_language_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "item_pocket_names_pkey" PRIMARY KEY ("item_pocket_id")
);

-- CreateTable
CREATE TABLE "public"."item_flag_prose" (
    "item_flag_id" INTEGER NOT NULL,
    "local_language_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "item_flag_prose_pkey" PRIMARY KEY ("item_flag_id")
);

-- CreateTable
CREATE TABLE "public"."item_fling_effect_prose" (
    "item_fling_effect_id" INTEGER NOT NULL,
    "local_language_id" INTEGER NOT NULL,
    "effect" TEXT NOT NULL,

    CONSTRAINT "item_fling_effect_prose_pkey" PRIMARY KEY ("item_fling_effect_id")
);

-- CreateTable
CREATE TABLE "public"."stat_names" (
    "stat_id" INTEGER NOT NULL,
    "local_language_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "stat_names_pkey" PRIMARY KEY ("stat_id")
);

-- CreateTable
CREATE TABLE "public"."generation_names" (
    "generation_id" INTEGER NOT NULL,
    "local_language_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "generation_names_pkey" PRIMARY KEY ("generation_id")
);

-- CreateTable
CREATE TABLE "public"."version_names" (
    "version_id" INTEGER NOT NULL,
    "local_language_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "version_names_pkey" PRIMARY KEY ("version_id")
);

-- CreateTable
CREATE TABLE "public"."region_names" (
    "region_id" INTEGER NOT NULL,
    "local_language_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "region_names_pkey" PRIMARY KEY ("region_id")
);

-- CreateTable
CREATE TABLE "public"."location_names" (
    "location_id" INTEGER NOT NULL,
    "local_language_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "subtitle" TEXT,

    CONSTRAINT "location_names_pkey" PRIMARY KEY ("location_id")
);

-- CreateTable
CREATE TABLE "public"."location_game_indices" (
    "location_id" INTEGER NOT NULL,
    "generation_id" INTEGER NOT NULL,
    "game_index" INTEGER NOT NULL,

    CONSTRAINT "location_game_indices_pkey" PRIMARY KEY ("location_id")
);

-- CreateTable
CREATE TABLE "public"."location_area_prose" (
    "location_area_id" INTEGER NOT NULL,
    "local_language_id" INTEGER NOT NULL,
    "name" TEXT,

    CONSTRAINT "location_area_prose_pkey" PRIMARY KEY ("location_area_id")
);

-- CreateTable
CREATE TABLE "public"."location_area_encounter_rates" (
    "location_area_id" INTEGER NOT NULL,
    "encounter_method_id" INTEGER NOT NULL,
    "version_id" INTEGER NOT NULL,
    "rate" INTEGER NOT NULL,

    CONSTRAINT "location_area_encounter_rates_pkey" PRIMARY KEY ("location_area_id","encounter_method_id","version_id")
);

-- CreateTable
CREATE TABLE "public"."language_names" (
    "language_id" INTEGER NOT NULL,
    "local_language_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "language_names_pkey" PRIMARY KEY ("language_id")
);

-- CreateTable
CREATE TABLE "public"."pokedex_prose" (
    "pokedex_id" INTEGER NOT NULL,
    "local_language_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "pokedex_prose_pkey" PRIMARY KEY ("pokedex_id")
);

-- CreateTable
CREATE TABLE "public"."evolution_trigger_prose" (
    "evolution_trigger_id" INTEGER NOT NULL,
    "local_language_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "evolution_trigger_prose_pkey" PRIMARY KEY ("evolution_trigger_id")
);

-- CreateTable
CREATE TABLE "public"."growth_rate_prose" (
    "growth_rate_id" INTEGER NOT NULL,
    "local_language_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "growth_rate_prose_pkey" PRIMARY KEY ("growth_rate_id")
);

-- CreateTable
CREATE TABLE "public"."nature_names" (
    "nature_id" INTEGER NOT NULL,
    "local_language_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "nature_names_pkey" PRIMARY KEY ("nature_id")
);

-- CreateTable
CREATE TABLE "public"."nature_battle_style_preferences" (
    "nature_id" INTEGER NOT NULL,
    "move_battle_style_id" INTEGER NOT NULL,
    "low_hp_preference" INTEGER NOT NULL,
    "high_hp_preference" INTEGER NOT NULL,

    CONSTRAINT "nature_battle_style_preferences_pkey" PRIMARY KEY ("nature_id")
);

-- CreateTable
CREATE TABLE "public"."nature_pokeathlon_stats" (
    "nature_id" INTEGER NOT NULL,
    "pokeathlon_stat_id" INTEGER NOT NULL,
    "max_change" INTEGER NOT NULL,

    CONSTRAINT "nature_pokeathlon_stats_pkey" PRIMARY KEY ("nature_id")
);

-- CreateTable
CREATE TABLE "public"."contest_type_names" (
    "contest_type_id" INTEGER NOT NULL,
    "local_language_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "flavor" TEXT,
    "color" TEXT,

    CONSTRAINT "contest_type_names_pkey" PRIMARY KEY ("contest_type_id")
);

-- CreateTable
CREATE TABLE "public"."contest_effect_prose" (
    "contest_effect_id" INTEGER NOT NULL,
    "local_language_id" INTEGER NOT NULL,
    "flavor_text" TEXT,
    "effect" TEXT,

    CONSTRAINT "contest_effect_prose_pkey" PRIMARY KEY ("contest_effect_id")
);

-- CreateTable
CREATE TABLE "public"."super_contest_effect_prose" (
    "super_contest_effect_id" INTEGER NOT NULL,
    "local_language_id" INTEGER NOT NULL,
    "flavor_text" TEXT,

    CONSTRAINT "super_contest_effect_prose_pkey" PRIMARY KEY ("super_contest_effect_id")
);

-- CreateTable
CREATE TABLE "public"."encounter_method_prose" (
    "encounter_method_id" INTEGER NOT NULL,
    "local_language_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "encounter_method_prose_pkey" PRIMARY KEY ("encounter_method_id")
);

-- CreateTable
CREATE TABLE "public"."encounter_condition_prose" (
    "encounter_condition_id" INTEGER NOT NULL,
    "local_language_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "encounter_condition_prose_pkey" PRIMARY KEY ("encounter_condition_id")
);

-- CreateTable
CREATE TABLE "public"."encounter_condition_value_prose" (
    "encounter_condition_value_id" INTEGER NOT NULL,
    "local_language_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "encounter_condition_value_prose_pkey" PRIMARY KEY ("encounter_condition_value_id")
);

-- CreateTable
CREATE TABLE "public"."pal_park_area_names" (
    "pal_park_area_id" INTEGER NOT NULL,
    "local_language_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "pal_park_area_names_pkey" PRIMARY KEY ("pal_park_area_id")
);

-- CreateTable
CREATE TABLE "public"."pokeathlon_stat_names" (
    "pokeathlon_stat_id" INTEGER NOT NULL,
    "local_language_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "pokeathlon_stat_names_pkey" PRIMARY KEY ("pokeathlon_stat_id")
);

-- CreateTable
CREATE TABLE "public"."pokemon_move_method_prose" (
    "pokemon_move_method_id" INTEGER NOT NULL,
    "local_language_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "pokemon_move_method_prose_pkey" PRIMARY KEY ("pokemon_move_method_id")
);

-- CreateTable
CREATE TABLE "public"."pokemon_shape_prose" (
    "pokemon_shape_id" INTEGER NOT NULL,
    "local_language_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "awesome_name" TEXT,
    "description" TEXT,

    CONSTRAINT "pokemon_shape_prose_pkey" PRIMARY KEY ("pokemon_shape_id")
);

-- CreateTable
CREATE TABLE "public"."pokemon_color_names" (
    "pokemon_color_id" INTEGER NOT NULL,
    "local_language_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "pokemon_color_names_pkey" PRIMARY KEY ("pokemon_color_id")
);

-- CreateTable
CREATE TABLE "public"."pokemon_habitat_names" (
    "pokemon_habitat_id" INTEGER NOT NULL,
    "local_language_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "pokemon_habitat_names_pkey" PRIMARY KEY ("pokemon_habitat_id")
);

-- CreateTable
CREATE TABLE "public"."berry_firmness_names" (
    "berry_firmness_id" INTEGER NOT NULL,
    "local_language_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "berry_firmness_names_pkey" PRIMARY KEY ("berry_firmness_id")
);

-- CreateTable
CREATE TABLE "public"."characteristic_text" (
    "characteristic_id" INTEGER NOT NULL,
    "local_language_id" INTEGER NOT NULL,
    "message" TEXT NOT NULL,

    CONSTRAINT "characteristic_text_pkey" PRIMARY KEY ("characteristic_id")
);

-- CreateTable
CREATE TABLE "public"."conquest_episode_names" (
    "episode_id" INTEGER NOT NULL,
    "local_language_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "conquest_episode_names_pkey" PRIMARY KEY ("episode_id")
);

-- CreateTable
CREATE TABLE "public"."conquest_episode_warriors" (
    "episode_id" INTEGER NOT NULL,
    "warrior_id" INTEGER NOT NULL,

    CONSTRAINT "conquest_episode_warriors_pkey" PRIMARY KEY ("episode_id")
);

-- CreateTable
CREATE TABLE "public"."conquest_kingdom_names" (
    "kingdom_id" INTEGER NOT NULL,
    "local_language_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "conquest_kingdom_names_pkey" PRIMARY KEY ("kingdom_id")
);

-- CreateTable
CREATE TABLE "public"."conquest_move_displacement_prose" (
    "move_displacement_id" INTEGER NOT NULL,
    "local_language_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "short_effect" TEXT,
    "effect" TEXT,

    CONSTRAINT "conquest_move_displacement_prose_pkey" PRIMARY KEY ("move_displacement_id")
);

-- CreateTable
CREATE TABLE "public"."conquest_move_effect_prose" (
    "conquest_move_effect_id" INTEGER NOT NULL,
    "local_language_id" INTEGER NOT NULL,
    "short_effect" TEXT,
    "effect" TEXT,

    CONSTRAINT "conquest_move_effect_prose_pkey" PRIMARY KEY ("conquest_move_effect_id")
);

-- CreateTable
CREATE TABLE "public"."conquest_move_range_prose" (
    "conquest_move_range_id" INTEGER NOT NULL,
    "local_language_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "conquest_move_range_prose_pkey" PRIMARY KEY ("conquest_move_range_id")
);

-- CreateTable
CREATE TABLE "public"."conquest_stat_names" (
    "conquest_stat_id" INTEGER NOT NULL,
    "local_language_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "conquest_stat_names_pkey" PRIMARY KEY ("conquest_stat_id")
);

-- CreateTable
CREATE TABLE "public"."conquest_warrior_names" (
    "warrior_id" INTEGER NOT NULL,
    "local_language_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "conquest_warrior_names_pkey" PRIMARY KEY ("warrior_id")
);

-- CreateTable
CREATE TABLE "public"."conquest_warrior_skill_names" (
    "skill_id" INTEGER NOT NULL,
    "local_language_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "conquest_warrior_skill_names_pkey" PRIMARY KEY ("skill_id")
);

-- CreateTable
CREATE TABLE "public"."conquest_warrior_stat_names" (
    "warrior_stat_id" INTEGER NOT NULL,
    "local_language_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "conquest_warrior_stat_names_pkey" PRIMARY KEY ("warrior_stat_id")
);

-- CreateTable
CREATE TABLE "public"."egg_group_prose" (
    "egg_group_id" INTEGER NOT NULL,
    "local_language_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "egg_group_prose_pkey" PRIMARY KEY ("egg_group_id")
);

-- CreateTable
CREATE TABLE "public"."translations" (
    "language_id" INTEGER NOT NULL,
    "table" TEXT NOT NULL,
    "id" INTEGER NOT NULL,
    "column" TEXT NOT NULL,
    "source_crc" INTEGER NOT NULL,
    "string" TEXT NOT NULL,

    CONSTRAINT "translations_pkey" PRIMARY KEY ("language_id")
);
