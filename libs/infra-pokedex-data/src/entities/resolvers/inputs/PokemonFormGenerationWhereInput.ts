import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenerationRelationFilter } from "../inputs/GenerationRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { PokemonFormRelationFilter } from "../inputs/PokemonFormRelationFilter";

@TypeGraphQL.InputType("PokemonFormGenerationWhereInput", {})
export class PokemonFormGenerationWhereInput {
  @TypeGraphQL.Field(_type => [PokemonFormGenerationWhereInput], {
    nullable: true
  })
  AND?: PokemonFormGenerationWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonFormGenerationWhereInput], {
    nullable: true
  })
  OR?: PokemonFormGenerationWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonFormGenerationWhereInput], {
    nullable: true
  })
  NOT?: PokemonFormGenerationWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  pokemon_form_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  generation_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  game_index?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => PokemonFormRelationFilter, {
    nullable: true
  })
  pokemonForm?: PokemonFormRelationFilter | undefined;

  @TypeGraphQL.Field(_type => GenerationRelationFilter, {
    nullable: true
  })
  generation?: GenerationRelationFilter | undefined;
}
