import * as TypeGraphQL from "type-graphql";

export enum PokemonEvolutionScalarFieldEnum {
  id = "id",
  evolved_species_id = "evolved_species_id",
  evolution_trigger_id = "evolution_trigger_id",
  trigger_item_id = "trigger_item_id",
  minimum_level = "minimum_level",
  gender_id = "gender_id",
  location_id = "location_id",
  held_item_id = "held_item_id",
  time_of_day = "time_of_day",
  known_move_id = "known_move_id",
  known_move_type_id = "known_move_type_id",
  minimum_happiness = "minimum_happiness",
  minimum_beauty = "minimum_beauty",
  minimum_affection = "minimum_affection",
  relative_physical_stats = "relative_physical_stats",
  party_species_id = "party_species_id",
  party_type_id = "party_type_id",
  trade_species_id = "trade_species_id",
  needs_overworld_rain = "needs_overworld_rain",
  turn_upside_down = "turn_upside_down"
}
TypeGraphQL.registerEnumType(PokemonEvolutionScalarFieldEnum, {
  name: "PokemonEvolutionScalarFieldEnum",
  description: undefined,
});
