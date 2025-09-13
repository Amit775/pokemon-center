import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonMoveMethodsCreateNestedOneWithoutVersionGroupsInput } from "../inputs/PokemonMoveMethodsCreateNestedOneWithoutVersionGroupsInput";

@TypeGraphQL.InputType("VersionGroupPokemonMoveMethodsCreateWithoutVersionGroupInput", {})
export class VersionGroupPokemonMoveMethodsCreateWithoutVersionGroupInput {
  @TypeGraphQL.Field(_type => PokemonMoveMethodsCreateNestedOneWithoutVersionGroupsInput, {
    nullable: false
  })
  moveMethod!: PokemonMoveMethodsCreateNestedOneWithoutVersionGroupsInput;
}
