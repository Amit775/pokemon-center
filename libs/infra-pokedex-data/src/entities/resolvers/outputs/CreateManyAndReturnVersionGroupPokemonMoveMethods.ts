import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonMoveMethods } from "../../models/PokemonMoveMethods";
import { VersionGroups } from "../../models/VersionGroups";

@TypeGraphQL.ObjectType("CreateManyAndReturnVersionGroupPokemonMoveMethods", {})
export class CreateManyAndReturnVersionGroupPokemonMoveMethods {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  version_group_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  pokemon_move_method_id!: number;

  @TypeGraphQL.Field(_type => VersionGroups, {
    nullable: false
  })
  versionGroup!: VersionGroups;

  @TypeGraphQL.Field(_type => PokemonMoveMethods, {
    nullable: false
  })
  moveMethod!: PokemonMoveMethods;
}
