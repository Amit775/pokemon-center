import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { MoveRelationFilter } from "../inputs/MoveRelationFilter";
import { PokemonMoveMethodRelationFilter } from "../inputs/PokemonMoveMethodRelationFilter";
import { PokemonMoveWhereInput } from "../inputs/PokemonMoveWhereInput";
import { PokemonMovesPokemon_idVersion_group_idMove_idPokemon_move_method_idCompoundUniqueInput } from "../inputs/PokemonMovesPokemon_idVersion_group_idMove_idPokemon_move_method_idCompoundUniqueInput";
import { PokemonRelationFilter } from "../inputs/PokemonRelationFilter";
import { VersionGroupRelationFilter } from "../inputs/VersionGroupRelationFilter";

@TypeGraphQL.InputType("PokemonMoveWhereUniqueInput", {})
export class PokemonMoveWhereUniqueInput {
  @TypeGraphQL.Field(_type => PokemonMovesPokemon_idVersion_group_idMove_idPokemon_move_method_idCompoundUniqueInput, {
    nullable: true
  })
  pokemon_id_version_group_id_move_id_pokemon_move_method_id?: PokemonMovesPokemon_idVersion_group_idMove_idPokemon_move_method_idCompoundUniqueInput | undefined;

  @TypeGraphQL.Field(_type => [PokemonMoveWhereInput], {
    nullable: true
  })
  AND?: PokemonMoveWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonMoveWhereInput], {
    nullable: true
  })
  OR?: PokemonMoveWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonMoveWhereInput], {
    nullable: true
  })
  NOT?: PokemonMoveWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => VersionGroupRelationFilter, {
    nullable: true
  })
  versionGroup?: VersionGroupRelationFilter | undefined;

  @TypeGraphQL.Field(_type => MoveRelationFilter, {
    nullable: true
  })
  move?: MoveRelationFilter | undefined;

  @TypeGraphQL.Field(_type => PokemonMoveMethodRelationFilter, {
    nullable: true
  })
  moveMethod?: PokemonMoveMethodRelationFilter | undefined;
}
