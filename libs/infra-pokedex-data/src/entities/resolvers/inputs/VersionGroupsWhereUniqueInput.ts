import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterSlotsListRelationFilter } from "../inputs/EncounterSlotsListRelationFilter";
import { GenerationsRelationFilter } from "../inputs/GenerationsRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { MachinesListRelationFilter } from "../inputs/MachinesListRelationFilter";
import { PokedexVersionGroupsListRelationFilter } from "../inputs/PokedexVersionGroupsListRelationFilter";
import { PokemonFormsListRelationFilter } from "../inputs/PokemonFormsListRelationFilter";
import { PokemonMovesListRelationFilter } from "../inputs/PokemonMovesListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { VersionGroupPokemonMoveMethodsListRelationFilter } from "../inputs/VersionGroupPokemonMoveMethodsListRelationFilter";
import { VersionGroupRegionsListRelationFilter } from "../inputs/VersionGroupRegionsListRelationFilter";
import { VersionGroupsWhereInput } from "../inputs/VersionGroupsWhereInput";
import { VersionsListRelationFilter } from "../inputs/VersionsListRelationFilter";

@TypeGraphQL.InputType("VersionGroupsWhereUniqueInput", {})
export class VersionGroupsWhereUniqueInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => [VersionGroupsWhereInput], {
    nullable: true
  })
  AND?: VersionGroupsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [VersionGroupsWhereInput], {
    nullable: true
  })
  OR?: VersionGroupsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [VersionGroupsWhereInput], {
    nullable: true
  })
  NOT?: VersionGroupsWhereInput[] | undefined;

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
  order?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => GenerationsRelationFilter, {
    nullable: true
  })
  generation?: GenerationsRelationFilter | undefined;

  @TypeGraphQL.Field(_type => VersionsListRelationFilter, {
    nullable: true
  })
  versions?: VersionsListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => EncounterSlotsListRelationFilter, {
    nullable: true
  })
  encounterSlots?: EncounterSlotsListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => MachinesListRelationFilter, {
    nullable: true
  })
  machines?: MachinesListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => VersionGroupPokemonMoveMethodsListRelationFilter, {
    nullable: true
  })
  versionGroupPokemonMoveMethods?: VersionGroupPokemonMoveMethodsListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => VersionGroupRegionsListRelationFilter, {
    nullable: true
  })
  versionGroupRegions?: VersionGroupRegionsListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => PokedexVersionGroupsListRelationFilter, {
    nullable: true
  })
  pokedexVersionGroups?: PokedexVersionGroupsListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => PokemonMovesListRelationFilter, {
    nullable: true
  })
  pokemonMoves?: PokemonMovesListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => PokemonFormsListRelationFilter, {
    nullable: true
  })
  pokemonForms?: PokemonFormsListRelationFilter | undefined;
}
