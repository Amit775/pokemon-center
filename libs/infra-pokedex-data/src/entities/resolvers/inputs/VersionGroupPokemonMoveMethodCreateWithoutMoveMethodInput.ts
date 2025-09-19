import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionGroupCreateNestedOneWithoutVersionGroupPokemonMoveMethodsInput } from "../inputs/VersionGroupCreateNestedOneWithoutVersionGroupPokemonMoveMethodsInput";

@TypeGraphQL.InputType("VersionGroupPokemonMoveMethodCreateWithoutMoveMethodInput", {})
export class VersionGroupPokemonMoveMethodCreateWithoutMoveMethodInput {
  @TypeGraphQL.Field(_type => VersionGroupCreateNestedOneWithoutVersionGroupPokemonMoveMethodsInput, {
    nullable: false
  })
  versionGroup!: VersionGroupCreateNestedOneWithoutVersionGroupPokemonMoveMethodsInput;
}
