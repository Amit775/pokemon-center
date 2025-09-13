import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonEvolutionOrderByWithRelationInput } from "../../../inputs/PokemonEvolutionOrderByWithRelationInput";
import { PokemonEvolutionWhereInput } from "../../../inputs/PokemonEvolutionWhereInput";
import { PokemonEvolutionWhereUniqueInput } from "../../../inputs/PokemonEvolutionWhereUniqueInput";
import { PokemonEvolutionScalarFieldEnum } from "../../../../enums/PokemonEvolutionScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class PokemonSpeciesPartySpeciesArgs {
  @TypeGraphQL.Field(_type => PokemonEvolutionWhereInput, {
    nullable: true
  })
  where?: PokemonEvolutionWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PokemonEvolutionOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: PokemonEvolutionOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => PokemonEvolutionWhereUniqueInput, {
    nullable: true
  })
  cursor?: PokemonEvolutionWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [PokemonEvolutionScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "evolved_species_id" | "evolution_trigger_id" | "trigger_item_id" | "minimum_level" | "gender_id" | "location_id" | "held_item_id" | "time_of_day" | "known_move_id" | "known_move_type_id" | "minimum_happiness" | "minimum_beauty" | "minimum_affection" | "relative_physical_stats" | "party_species_id" | "party_type_id" | "trade_species_id" | "needs_overworld_rain" | "turn_upside_down"> | undefined;
}
