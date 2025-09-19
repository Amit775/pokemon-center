import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { PokemonFormGenerationListRelationFilter } from "../inputs/PokemonFormGenerationListRelationFilter";
import { PokemonFormTypeListRelationFilter } from "../inputs/PokemonFormTypeListRelationFilter";
import { PokemonRelationFilter } from "../inputs/PokemonRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { VersionGroupRelationFilter } from "../inputs/VersionGroupRelationFilter";

@TypeGraphQL.InputType("PokemonFormWhereInput", {})
export class PokemonFormWhereInput {
  @TypeGraphQL.Field(_type => [PokemonFormWhereInput], {
    nullable: true
  })
  AND?: PokemonFormWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonFormWhereInput], {
    nullable: true
  })
  OR?: PokemonFormWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonFormWhereInput], {
    nullable: true
  })
  NOT?: PokemonFormWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  identifier?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  form_identifier?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  pokemon_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  introduced_in_version_group_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  is_default?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  is_battle_only?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  is_mega?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  form_order?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  order?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => PokemonRelationFilter, {
    nullable: true
  })
  pokemon?: PokemonRelationFilter | undefined;

  @TypeGraphQL.Field(_type => VersionGroupRelationFilter, {
    nullable: true
  })
  versionGroup?: VersionGroupRelationFilter | undefined;

  @TypeGraphQL.Field(_type => PokemonFormGenerationListRelationFilter, {
    nullable: true
  })
  generations?: PokemonFormGenerationListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => PokemonFormTypeListRelationFilter, {
    nullable: true
  })
  types?: PokemonFormTypeListRelationFilter | undefined;
}
