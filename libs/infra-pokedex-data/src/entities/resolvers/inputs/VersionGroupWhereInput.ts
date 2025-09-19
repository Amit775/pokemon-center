import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterSlotListRelationFilter } from "../inputs/EncounterSlotListRelationFilter";
import { GenerationRelationFilter } from "../inputs/GenerationRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { MachineListRelationFilter } from "../inputs/MachineListRelationFilter";
import { PokedexVersionGroupListRelationFilter } from "../inputs/PokedexVersionGroupListRelationFilter";
import { PokemonFormListRelationFilter } from "../inputs/PokemonFormListRelationFilter";
import { PokemonMoveListRelationFilter } from "../inputs/PokemonMoveListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { VersionGroupPokemonMoveMethodListRelationFilter } from "../inputs/VersionGroupPokemonMoveMethodListRelationFilter";
import { VersionGroupRegionListRelationFilter } from "../inputs/VersionGroupRegionListRelationFilter";
import { VersionListRelationFilter } from "../inputs/VersionListRelationFilter";

@TypeGraphQL.InputType("VersionGroupWhereInput", {})
export class VersionGroupWhereInput {
  @TypeGraphQL.Field(_type => [VersionGroupWhereInput], {
    nullable: true
  })
  AND?: VersionGroupWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [VersionGroupWhereInput], {
    nullable: true
  })
  OR?: VersionGroupWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [VersionGroupWhereInput], {
    nullable: true
  })
  NOT?: VersionGroupWhereInput[] | undefined;

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
  generation_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  order?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => GenerationRelationFilter, {
    nullable: true
  })
  generation?: GenerationRelationFilter | undefined;

  @TypeGraphQL.Field(_type => VersionListRelationFilter, {
    nullable: true
  })
  versions?: VersionListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => EncounterSlotListRelationFilter, {
    nullable: true
  })
  encounterSlots?: EncounterSlotListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => MachineListRelationFilter, {
    nullable: true
  })
  machines?: MachineListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => VersionGroupPokemonMoveMethodListRelationFilter, {
    nullable: true
  })
  versionGroupPokemonMoveMethods?: VersionGroupPokemonMoveMethodListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => VersionGroupRegionListRelationFilter, {
    nullable: true
  })
  versionGroupRegions?: VersionGroupRegionListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => PokedexVersionGroupListRelationFilter, {
    nullable: true
  })
  pokedexVersionGroups?: PokedexVersionGroupListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => PokemonMoveListRelationFilter, {
    nullable: true
  })
  pokemonMoves?: PokemonMoveListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => PokemonFormListRelationFilter, {
    nullable: true
  })
  pokemonForms?: PokemonFormListRelationFilter | undefined;
}
