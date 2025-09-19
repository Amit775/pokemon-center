import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CharacteristicListRelationFilter } from "../inputs/CharacteristicListRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { MoveMetaStatChangesListRelationFilter } from "../inputs/MoveMetaStatChangesListRelationFilter";
import { NatureListRelationFilter } from "../inputs/NatureListRelationFilter";
import { PokemonStatListRelationFilter } from "../inputs/PokemonStatListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("StatWhereInput", {})
export class StatWhereInput {
  @TypeGraphQL.Field(_type => [StatWhereInput], {
    nullable: true
  })
  AND?: StatWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [StatWhereInput], {
    nullable: true
  })
  OR?: StatWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [StatWhereInput], {
    nullable: true
  })
  NOT?: StatWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  damage_class_id?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  identifier?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  is_battle_only?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  game_index?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => PokemonStatListRelationFilter, {
    nullable: true
  })
  pokemonStats?: PokemonStatListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => MoveMetaStatChangesListRelationFilter, {
    nullable: true
  })
  moveMetaStatChanges?: MoveMetaStatChangesListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => CharacteristicListRelationFilter, {
    nullable: true
  })
  characteristics?: CharacteristicListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => NatureListRelationFilter, {
    nullable: true
  })
  natures?: NatureListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => NatureListRelationFilter, {
    nullable: true
  })
  naturesIncreased?: NatureListRelationFilter | undefined;
}
