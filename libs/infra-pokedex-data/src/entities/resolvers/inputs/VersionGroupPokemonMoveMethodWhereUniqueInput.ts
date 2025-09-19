import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { PokemonMoveMethodRelationFilter } from "../inputs/PokemonMoveMethodRelationFilter";
import { VersionGroupPokemonMoveMethodWhereInput } from "../inputs/VersionGroupPokemonMoveMethodWhereInput";
import { VersionGroupRelationFilter } from "../inputs/VersionGroupRelationFilter";

@TypeGraphQL.InputType("VersionGroupPokemonMoveMethodWhereUniqueInput", {})
export class VersionGroupPokemonMoveMethodWhereUniqueInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  version_group_id?: number | undefined;

  @TypeGraphQL.Field(_type => [VersionGroupPokemonMoveMethodWhereInput], {
    nullable: true
  })
  AND?: VersionGroupPokemonMoveMethodWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [VersionGroupPokemonMoveMethodWhereInput], {
    nullable: true
  })
  OR?: VersionGroupPokemonMoveMethodWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [VersionGroupPokemonMoveMethodWhereInput], {
    nullable: true
  })
  NOT?: VersionGroupPokemonMoveMethodWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  pokemon_move_method_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => VersionGroupRelationFilter, {
    nullable: true
  })
  versionGroup?: VersionGroupRelationFilter | undefined;

  @TypeGraphQL.Field(_type => PokemonMoveMethodRelationFilter, {
    nullable: true
  })
  moveMethod?: PokemonMoveMethodRelationFilter | undefined;
}
