import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonMoveMethodCreateNestedOneWithoutVersionGroupsInput } from "../inputs/PokemonMoveMethodCreateNestedOneWithoutVersionGroupsInput";

@TypeGraphQL.InputType("VersionGroupPokemonMoveMethodCreateWithoutVersionGroupInput", {})
export class VersionGroupPokemonMoveMethodCreateWithoutVersionGroupInput {
  @TypeGraphQL.Field(_type => PokemonMoveMethodCreateNestedOneWithoutVersionGroupsInput, {
    nullable: false
  })
  moveMethod!: PokemonMoveMethodCreateNestedOneWithoutVersionGroupsInput;
}
