import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenerationRelationFilter } from "../inputs/GenerationRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { PokemonFormGenerationWhereInput } from "../inputs/PokemonFormGenerationWhereInput";
import { PokemonFormGenerationsPokemon_form_idGeneration_idCompoundUniqueInput } from "../inputs/PokemonFormGenerationsPokemon_form_idGeneration_idCompoundUniqueInput";
import { PokemonFormRelationFilter } from "../inputs/PokemonFormRelationFilter";

@TypeGraphQL.InputType("PokemonFormGenerationWhereUniqueInput", {})
export class PokemonFormGenerationWhereUniqueInput {
  @TypeGraphQL.Field(_type => PokemonFormGenerationsPokemon_form_idGeneration_idCompoundUniqueInput, {
    nullable: true
  })
  pokemon_form_id_generation_id?: PokemonFormGenerationsPokemon_form_idGeneration_idCompoundUniqueInput | undefined;

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
