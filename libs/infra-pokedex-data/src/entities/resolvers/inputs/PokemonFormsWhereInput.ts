import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { PokemonFormGenerationsListRelationFilter } from "../inputs/PokemonFormGenerationsListRelationFilter";
import { PokemonFormTypesListRelationFilter } from "../inputs/PokemonFormTypesListRelationFilter";
import { PokemonRelationFilter } from "../inputs/PokemonRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { VersionGroupsRelationFilter } from "../inputs/VersionGroupsRelationFilter";

@TypeGraphQL.InputType("PokemonFormsWhereInput", {})
export class PokemonFormsWhereInput {
  @TypeGraphQL.Field(_type => [PokemonFormsWhereInput], {
    nullable: true
  })
  AND?: PokemonFormsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonFormsWhereInput], {
    nullable: true
  })
  OR?: PokemonFormsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonFormsWhereInput], {
    nullable: true
  })
  NOT?: PokemonFormsWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => VersionGroupsRelationFilter, {
    nullable: true
  })
  versionGroup?: VersionGroupsRelationFilter | undefined;

  @TypeGraphQL.Field(_type => PokemonFormGenerationsListRelationFilter, {
    nullable: true
  })
  generations?: PokemonFormGenerationsListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => PokemonFormTypesListRelationFilter, {
    nullable: true
  })
  types?: PokemonFormTypesListRelationFilter | undefined;
}
