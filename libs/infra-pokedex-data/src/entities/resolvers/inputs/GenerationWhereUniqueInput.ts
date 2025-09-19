import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AbilityListRelationFilter } from "../inputs/AbilityListRelationFilter";
import { GenerationWhereInput } from "../inputs/GenerationWhereInput";
import { IntFilter } from "../inputs/IntFilter";
import { ItemGameIndexListRelationFilter } from "../inputs/ItemGameIndexListRelationFilter";
import { LocationGameIndexListRelationFilter } from "../inputs/LocationGameIndexListRelationFilter";
import { MoveListRelationFilter } from "../inputs/MoveListRelationFilter";
import { PokemonFormGenerationListRelationFilter } from "../inputs/PokemonFormGenerationListRelationFilter";
import { PokemonSpeciesListRelationFilter } from "../inputs/PokemonSpeciesListRelationFilter";
import { RegionRelationFilter } from "../inputs/RegionRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { TypeGameIndexListRelationFilter } from "../inputs/TypeGameIndexListRelationFilter";
import { TypeListRelationFilter } from "../inputs/TypeListRelationFilter";
import { VersionGroupListRelationFilter } from "../inputs/VersionGroupListRelationFilter";

@TypeGraphQL.InputType("GenerationWhereUniqueInput", {})
export class GenerationWhereUniqueInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => [GenerationWhereInput], {
    nullable: true
  })
  AND?: GenerationWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [GenerationWhereInput], {
    nullable: true
  })
  OR?: GenerationWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [GenerationWhereInput], {
    nullable: true
  })
  NOT?: GenerationWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  main_region_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  identifier?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => RegionRelationFilter, {
    nullable: true
  })
  region?: RegionRelationFilter | undefined;

  @TypeGraphQL.Field(_type => PokemonSpeciesListRelationFilter, {
    nullable: true
  })
  pokemonSpecies?: PokemonSpeciesListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => MoveListRelationFilter, {
    nullable: true
  })
  moves?: MoveListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => TypeListRelationFilter, {
    nullable: true
  })
  types?: TypeListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => AbilityListRelationFilter, {
    nullable: true
  })
  abilities?: AbilityListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => PokemonFormGenerationListRelationFilter, {
    nullable: true
  })
  pokemonFormGenerations?: PokemonFormGenerationListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ItemGameIndexListRelationFilter, {
    nullable: true
  })
  itemGameIndices?: ItemGameIndexListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => TypeGameIndexListRelationFilter, {
    nullable: true
  })
  typeGameIndices?: TypeGameIndexListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => LocationGameIndexListRelationFilter, {
    nullable: true
  })
  locationGameIndices?: LocationGameIndexListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => VersionGroupListRelationFilter, {
    nullable: true
  })
  versionGroups?: VersionGroupListRelationFilter | undefined;
}
