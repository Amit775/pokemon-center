import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AbilityWhereInput } from "../inputs/AbilityWhereInput";
import { GenerationRelationFilter } from "../inputs/GenerationRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { PokemonAbilityListRelationFilter } from "../inputs/PokemonAbilityListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("AbilityWhereUniqueInput", {})
export class AbilityWhereUniqueInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => [AbilityWhereInput], {
    nullable: true
  })
  AND?: AbilityWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [AbilityWhereInput], {
    nullable: true
  })
  OR?: AbilityWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [AbilityWhereInput], {
    nullable: true
  })
  NOT?: AbilityWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  identifier?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  generation_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  is_main_series?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => GenerationRelationFilter, {
    nullable: true
  })
  generation?: GenerationRelationFilter | undefined;

  @TypeGraphQL.Field(_type => PokemonAbilityListRelationFilter, {
    nullable: true
  })
  pokemonAbilities?: PokemonAbilityListRelationFilter | undefined;
}
