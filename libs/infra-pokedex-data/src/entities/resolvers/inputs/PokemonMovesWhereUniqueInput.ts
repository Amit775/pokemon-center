import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { MovesRelationFilter } from "../inputs/MovesRelationFilter";
import { PokemonMoveMethodsRelationFilter } from "../inputs/PokemonMoveMethodsRelationFilter";
import { PokemonMovesPokemon_idVersion_group_idMove_idPokemon_move_method_idCompoundUniqueInput } from "../inputs/PokemonMovesPokemon_idVersion_group_idMove_idPokemon_move_method_idCompoundUniqueInput";
import { PokemonMovesWhereInput } from "../inputs/PokemonMovesWhereInput";
import { PokemonRelationFilter } from "../inputs/PokemonRelationFilter";
import { VersionGroupsRelationFilter } from "../inputs/VersionGroupsRelationFilter";

@TypeGraphQL.InputType("PokemonMovesWhereUniqueInput", {})
export class PokemonMovesWhereUniqueInput {
  @TypeGraphQL.Field(_type => PokemonMovesPokemon_idVersion_group_idMove_idPokemon_move_method_idCompoundUniqueInput, {
    nullable: true
  })
  pokemon_id_version_group_id_move_id_pokemon_move_method_id?: PokemonMovesPokemon_idVersion_group_idMove_idPokemon_move_method_idCompoundUniqueInput | undefined;

  @TypeGraphQL.Field(_type => [PokemonMovesWhereInput], {
    nullable: true
  })
  AND?: PokemonMovesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonMovesWhereInput], {
    nullable: true
  })
  OR?: PokemonMovesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonMovesWhereInput], {
    nullable: true
  })
  NOT?: PokemonMovesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  pokemon_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  version_group_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  move_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  pokemon_move_method_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  level?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  order?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  mastery?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => PokemonRelationFilter, {
    nullable: true
  })
  pokemon?: PokemonRelationFilter | undefined;

  @TypeGraphQL.Field(_type => VersionGroupsRelationFilter, {
    nullable: true
  })
  versionGroup?: VersionGroupsRelationFilter | undefined;

  @TypeGraphQL.Field(_type => MovesRelationFilter, {
    nullable: true
  })
  move?: MovesRelationFilter | undefined;

  @TypeGraphQL.Field(_type => PokemonMoveMethodsRelationFilter, {
    nullable: true
  })
  moveMethod?: PokemonMoveMethodsRelationFilter | undefined;
}
