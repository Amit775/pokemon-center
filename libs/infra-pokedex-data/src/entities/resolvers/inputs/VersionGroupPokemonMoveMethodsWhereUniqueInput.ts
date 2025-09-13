import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { PokemonMoveMethodsRelationFilter } from "../inputs/PokemonMoveMethodsRelationFilter";
import { VersionGroupPokemonMoveMethodsWhereInput } from "../inputs/VersionGroupPokemonMoveMethodsWhereInput";
import { VersionGroupsRelationFilter } from "../inputs/VersionGroupsRelationFilter";

@TypeGraphQL.InputType("VersionGroupPokemonMoveMethodsWhereUniqueInput", {})
export class VersionGroupPokemonMoveMethodsWhereUniqueInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  version_group_id?: number | undefined;

  @TypeGraphQL.Field(_type => [VersionGroupPokemonMoveMethodsWhereInput], {
    nullable: true
  })
  AND?: VersionGroupPokemonMoveMethodsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [VersionGroupPokemonMoveMethodsWhereInput], {
    nullable: true
  })
  OR?: VersionGroupPokemonMoveMethodsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [VersionGroupPokemonMoveMethodsWhereInput], {
    nullable: true
  })
  NOT?: VersionGroupPokemonMoveMethodsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  pokemon_move_method_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => VersionGroupsRelationFilter, {
    nullable: true
  })
  versionGroup?: VersionGroupsRelationFilter | undefined;

  @TypeGraphQL.Field(_type => PokemonMoveMethodsRelationFilter, {
    nullable: true
  })
  moveMethod?: PokemonMoveMethodsRelationFilter | undefined;
}
