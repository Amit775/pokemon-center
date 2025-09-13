import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionGroupsCreateOrConnectWithoutVersionGroupPokemonMoveMethodsInput } from "../inputs/VersionGroupsCreateOrConnectWithoutVersionGroupPokemonMoveMethodsInput";
import { VersionGroupsCreateWithoutVersionGroupPokemonMoveMethodsInput } from "../inputs/VersionGroupsCreateWithoutVersionGroupPokemonMoveMethodsInput";
import { VersionGroupsWhereUniqueInput } from "../inputs/VersionGroupsWhereUniqueInput";

@TypeGraphQL.InputType("VersionGroupsCreateNestedOneWithoutVersionGroupPokemonMoveMethodsInput", {})
export class VersionGroupsCreateNestedOneWithoutVersionGroupPokemonMoveMethodsInput {
  @TypeGraphQL.Field(_type => VersionGroupsCreateWithoutVersionGroupPokemonMoveMethodsInput, {
    nullable: true
  })
  create?: VersionGroupsCreateWithoutVersionGroupPokemonMoveMethodsInput | undefined;

  @TypeGraphQL.Field(_type => VersionGroupsCreateOrConnectWithoutVersionGroupPokemonMoveMethodsInput, {
    nullable: true
  })
  connectOrCreate?: VersionGroupsCreateOrConnectWithoutVersionGroupPokemonMoveMethodsInput | undefined;

  @TypeGraphQL.Field(_type => VersionGroupsWhereUniqueInput, {
    nullable: true
  })
  connect?: VersionGroupsWhereUniqueInput | undefined;
}
