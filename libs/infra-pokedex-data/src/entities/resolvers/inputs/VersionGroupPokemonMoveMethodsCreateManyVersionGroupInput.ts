import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("VersionGroupPokemonMoveMethodsCreateManyVersionGroupInput", {})
export class VersionGroupPokemonMoveMethodsCreateManyVersionGroupInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  pokemon_move_method_id!: number;
}
