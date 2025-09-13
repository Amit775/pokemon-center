import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncountersListRelationFilter } from "../inputs/EncountersListRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { PokemonAbilitiesListRelationFilter } from "../inputs/PokemonAbilitiesListRelationFilter";
import { PokemonFormsListRelationFilter } from "../inputs/PokemonFormsListRelationFilter";
import { PokemonGameIndicesListRelationFilter } from "../inputs/PokemonGameIndicesListRelationFilter";
import { PokemonItemsListRelationFilter } from "../inputs/PokemonItemsListRelationFilter";
import { PokemonMovesListRelationFilter } from "../inputs/PokemonMovesListRelationFilter";
import { PokemonSpeciesRelationFilter } from "../inputs/PokemonSpeciesRelationFilter";
import { PokemonStatsListRelationFilter } from "../inputs/PokemonStatsListRelationFilter";
import { PokemonTypesListRelationFilter } from "../inputs/PokemonTypesListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("PokemonWhereInput", {})
export class PokemonWhereInput {
  @TypeGraphQL.Field(_type => [PokemonWhereInput], {
    nullable: true
  })
  AND?: PokemonWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonWhereInput], {
    nullable: true
  })
  OR?: PokemonWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonWhereInput], {
    nullable: true
  })
  NOT?: PokemonWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  identifier?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  species_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  height?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  weight?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  base_experience?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  order?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  is_default?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => PokemonSpeciesRelationFilter, {
    nullable: true
  })
  species?: PokemonSpeciesRelationFilter | undefined;

  @TypeGraphQL.Field(_type => PokemonFormsListRelationFilter, {
    nullable: true
  })
  forms?: PokemonFormsListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => PokemonAbilitiesListRelationFilter, {
    nullable: true
  })
  abilities?: PokemonAbilitiesListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => PokemonMovesListRelationFilter, {
    nullable: true
  })
  moves?: PokemonMovesListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => PokemonStatsListRelationFilter, {
    nullable: true
  })
  stats?: PokemonStatsListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => PokemonTypesListRelationFilter, {
    nullable: true
  })
  types?: PokemonTypesListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => PokemonItemsListRelationFilter, {
    nullable: true
  })
  items?: PokemonItemsListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => PokemonGameIndicesListRelationFilter, {
    nullable: true
  })
  gameIndices?: PokemonGameIndicesListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => EncountersListRelationFilter, {
    nullable: true
  })
  encounters?: EncountersListRelationFilter | undefined;
}
