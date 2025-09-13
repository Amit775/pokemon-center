import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AbilitiesWhereInput } from "../inputs/AbilitiesWhereInput";
import { GenerationsRelationFilter } from "../inputs/GenerationsRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { PokemonAbilitiesListRelationFilter } from "../inputs/PokemonAbilitiesListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("AbilitiesWhereUniqueInput", {})
export class AbilitiesWhereUniqueInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => [AbilitiesWhereInput], {
    nullable: true
  })
  AND?: AbilitiesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [AbilitiesWhereInput], {
    nullable: true
  })
  OR?: AbilitiesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [AbilitiesWhereInput], {
    nullable: true
  })
  NOT?: AbilitiesWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => GenerationsRelationFilter, {
    nullable: true
  })
  generation?: GenerationsRelationFilter | undefined;

  @TypeGraphQL.Field(_type => PokemonAbilitiesListRelationFilter, {
    nullable: true
  })
  pokemonAbilities?: PokemonAbilitiesListRelationFilter | undefined;
}
