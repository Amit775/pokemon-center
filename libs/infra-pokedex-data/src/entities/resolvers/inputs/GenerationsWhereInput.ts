import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AbilitiesListRelationFilter } from "../inputs/AbilitiesListRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { ItemGameIndicesListRelationFilter } from "../inputs/ItemGameIndicesListRelationFilter";
import { LocationGameIndicesListRelationFilter } from "../inputs/LocationGameIndicesListRelationFilter";
import { MovesListRelationFilter } from "../inputs/MovesListRelationFilter";
import { PokemonFormGenerationsListRelationFilter } from "../inputs/PokemonFormGenerationsListRelationFilter";
import { PokemonSpeciesListRelationFilter } from "../inputs/PokemonSpeciesListRelationFilter";
import { RegionsRelationFilter } from "../inputs/RegionsRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { TypeGameIndicesListRelationFilter } from "../inputs/TypeGameIndicesListRelationFilter";
import { TypesListRelationFilter } from "../inputs/TypesListRelationFilter";
import { VersionGroupsListRelationFilter } from "../inputs/VersionGroupsListRelationFilter";

@TypeGraphQL.InputType("GenerationsWhereInput", {})
export class GenerationsWhereInput {
  @TypeGraphQL.Field(_type => [GenerationsWhereInput], {
    nullable: true
  })
  AND?: GenerationsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [GenerationsWhereInput], {
    nullable: true
  })
  OR?: GenerationsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [GenerationsWhereInput], {
    nullable: true
  })
  NOT?: GenerationsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  main_region_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  identifier?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => RegionsRelationFilter, {
    nullable: true
  })
  region?: RegionsRelationFilter | undefined;

  @TypeGraphQL.Field(_type => PokemonSpeciesListRelationFilter, {
    nullable: true
  })
  pokemonSpecies?: PokemonSpeciesListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => MovesListRelationFilter, {
    nullable: true
  })
  moves?: MovesListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => TypesListRelationFilter, {
    nullable: true
  })
  types?: TypesListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => AbilitiesListRelationFilter, {
    nullable: true
  })
  abilities?: AbilitiesListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => PokemonFormGenerationsListRelationFilter, {
    nullable: true
  })
  pokemonFormGenerations?: PokemonFormGenerationsListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ItemGameIndicesListRelationFilter, {
    nullable: true
  })
  itemGameIndices?: ItemGameIndicesListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => TypeGameIndicesListRelationFilter, {
    nullable: true
  })
  typeGameIndices?: TypeGameIndicesListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => LocationGameIndicesListRelationFilter, {
    nullable: true
  })
  locationGameIndices?: LocationGameIndicesListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => VersionGroupsListRelationFilter, {
    nullable: true
  })
  versionGroups?: VersionGroupsListRelationFilter | undefined;
}
