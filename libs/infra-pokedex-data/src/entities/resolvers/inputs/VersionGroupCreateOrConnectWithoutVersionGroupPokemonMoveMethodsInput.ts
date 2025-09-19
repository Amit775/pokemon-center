import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionGroupCreateWithoutVersionGroupPokemonMoveMethodsInput } from "../inputs/VersionGroupCreateWithoutVersionGroupPokemonMoveMethodsInput";
import { VersionGroupWhereUniqueInput } from "../inputs/VersionGroupWhereUniqueInput";

@TypeGraphQL.InputType("VersionGroupCreateOrConnectWithoutVersionGroupPokemonMoveMethodsInput", {})
export class VersionGroupCreateOrConnectWithoutVersionGroupPokemonMoveMethodsInput {
  @TypeGraphQL.Field(_type => VersionGroupWhereUniqueInput, {
    nullable: false
  })
  where!: VersionGroupWhereUniqueInput;

  @TypeGraphQL.Field(_type => VersionGroupCreateWithoutVersionGroupPokemonMoveMethodsInput, {
    nullable: false
  })
  create!: VersionGroupCreateWithoutVersionGroupPokemonMoveMethodsInput;
}
