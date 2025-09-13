import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionGroupsCreateNestedOneWithoutVersionGroupPokemonMoveMethodsInput } from "../inputs/VersionGroupsCreateNestedOneWithoutVersionGroupPokemonMoveMethodsInput";

@TypeGraphQL.InputType("VersionGroupPokemonMoveMethodsCreateWithoutMoveMethodInput", {})
export class VersionGroupPokemonMoveMethodsCreateWithoutMoveMethodInput {
  @TypeGraphQL.Field(_type => VersionGroupsCreateNestedOneWithoutVersionGroupPokemonMoveMethodsInput, {
    nullable: false
  })
  versionGroup!: VersionGroupsCreateNestedOneWithoutVersionGroupPokemonMoveMethodsInput;
}
