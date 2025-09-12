import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionGroupsCreateWithoutVersionGroupPokemonMoveMethodsInput } from "../inputs/VersionGroupsCreateWithoutVersionGroupPokemonMoveMethodsInput";
import { VersionGroupsWhereUniqueInput } from "../inputs/VersionGroupsWhereUniqueInput";

@TypeGraphQL.InputType("VersionGroupsCreateOrConnectWithoutVersionGroupPokemonMoveMethodsInput", {})
export class VersionGroupsCreateOrConnectWithoutVersionGroupPokemonMoveMethodsInput {
  @TypeGraphQL.Field(_type => VersionGroupsWhereUniqueInput, {
    nullable: false
  })
  where!: VersionGroupsWhereUniqueInput;

  @TypeGraphQL.Field(_type => VersionGroupsCreateWithoutVersionGroupPokemonMoveMethodsInput, {
    nullable: false
  })
  create!: VersionGroupsCreateWithoutVersionGroupPokemonMoveMethodsInput;
}
