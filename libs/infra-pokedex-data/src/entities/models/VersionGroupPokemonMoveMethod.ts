import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { PokemonMoveMethod } from "../models/PokemonMoveMethod";
import { VersionGroup } from "../models/VersionGroup";

@TypeGraphQL.ObjectType("VersionGroupPokemonMoveMethod", {})
export class VersionGroupPokemonMoveMethod {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  version_group_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  pokemon_move_method_id!: number;

  versionGroup?: VersionGroup;

  moveMethod?: PokemonMoveMethod;
}
