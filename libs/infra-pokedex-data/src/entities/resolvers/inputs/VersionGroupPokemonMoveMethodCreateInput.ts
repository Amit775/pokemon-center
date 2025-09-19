import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonMoveMethodCreateNestedOneWithoutVersionGroupsInput } from "../inputs/PokemonMoveMethodCreateNestedOneWithoutVersionGroupsInput";
import { VersionGroupCreateNestedOneWithoutVersionGroupPokemonMoveMethodsInput } from "../inputs/VersionGroupCreateNestedOneWithoutVersionGroupPokemonMoveMethodsInput";

@TypeGraphQL.InputType("VersionGroupPokemonMoveMethodCreateInput", {})
export class VersionGroupPokemonMoveMethodCreateInput {
  @TypeGraphQL.Field(_type => VersionGroupCreateNestedOneWithoutVersionGroupPokemonMoveMethodsInput, {
    nullable: false
  })
  versionGroup!: VersionGroupCreateNestedOneWithoutVersionGroupPokemonMoveMethodsInput;

  @TypeGraphQL.Field(_type => PokemonMoveMethodCreateNestedOneWithoutVersionGroupsInput, {
    nullable: false
  })
  moveMethod!: PokemonMoveMethodCreateNestedOneWithoutVersionGroupsInput;
}
