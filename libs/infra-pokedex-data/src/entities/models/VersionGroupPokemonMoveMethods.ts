import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { PokemonMoveMethods } from "../models/PokemonMoveMethods";
import { VersionGroups } from "../models/VersionGroups";

@TypeGraphQL.ObjectType("VersionGroupPokemonMoveMethods", {})
export class VersionGroupPokemonMoveMethods {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  version_group_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  pokemon_move_method_id!: number;

  versionGroup?: VersionGroups;

  moveMethod?: PokemonMoveMethods;
}
