import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonSpeciesOrderByWithRelationInput } from "../../../inputs/PokemonSpeciesOrderByWithRelationInput";
import { PokemonSpeciesWhereInput } from "../../../inputs/PokemonSpeciesWhereInput";
import { PokemonSpeciesWhereUniqueInput } from "../../../inputs/PokemonSpeciesWhereUniqueInput";
import { PokemonSpeciesScalarFieldEnum } from "../../../../enums/PokemonSpeciesScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class PokemonShapesSpeciesArgs {
  @TypeGraphQL.Field(_type => PokemonSpeciesWhereInput, {
    nullable: true
  })
  where?: PokemonSpeciesWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PokemonSpeciesOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: PokemonSpeciesOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => PokemonSpeciesWhereUniqueInput, {
    nullable: true
  })
  cursor?: PokemonSpeciesWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [PokemonSpeciesScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "identifier" | "generation_id" | "evolves_from_species_id" | "evolution_chain_id" | "color_id" | "shape_id" | "habitat_id" | "gender_rate" | "capture_rate" | "base_happiness" | "is_baby" | "hatch_counter" | "has_gender_differences" | "growth_rate_id" | "forms_switchable" | "is_legendary" | "is_mythical" | "order" | "conquest_order"> | undefined;
}
