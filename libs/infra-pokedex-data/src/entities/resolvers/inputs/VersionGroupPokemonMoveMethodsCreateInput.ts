import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonMoveMethodsCreateNestedOneWithoutVersionGroupsInput } from "../inputs/PokemonMoveMethodsCreateNestedOneWithoutVersionGroupsInput";
import { VersionGroupsCreateNestedOneWithoutVersionGroupPokemonMoveMethodsInput } from "../inputs/VersionGroupsCreateNestedOneWithoutVersionGroupPokemonMoveMethodsInput";

@TypeGraphQL.InputType("VersionGroupPokemonMoveMethodsCreateInput", {})
export class VersionGroupPokemonMoveMethodsCreateInput {
  @TypeGraphQL.Field(_type => VersionGroupsCreateNestedOneWithoutVersionGroupPokemonMoveMethodsInput, {
    nullable: false
  })
  versionGroup!: VersionGroupsCreateNestedOneWithoutVersionGroupPokemonMoveMethodsInput;

  @TypeGraphQL.Field(_type => PokemonMoveMethodsCreateNestedOneWithoutVersionGroupsInput, {
    nullable: false
  })
  moveMethod!: PokemonMoveMethodsCreateNestedOneWithoutVersionGroupsInput;
}
