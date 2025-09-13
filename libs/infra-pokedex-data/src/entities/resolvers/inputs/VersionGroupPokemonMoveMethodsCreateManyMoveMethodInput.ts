import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("VersionGroupPokemonMoveMethodsCreateManyMoveMethodInput", {})
export class VersionGroupPokemonMoveMethodsCreateManyMoveMethodInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  version_group_id!: number;
}
