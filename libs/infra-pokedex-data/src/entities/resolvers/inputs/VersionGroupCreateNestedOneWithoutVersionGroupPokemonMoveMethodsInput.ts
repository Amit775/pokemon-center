import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionGroupCreateOrConnectWithoutVersionGroupPokemonMoveMethodsInput } from "../inputs/VersionGroupCreateOrConnectWithoutVersionGroupPokemonMoveMethodsInput";
import { VersionGroupCreateWithoutVersionGroupPokemonMoveMethodsInput } from "../inputs/VersionGroupCreateWithoutVersionGroupPokemonMoveMethodsInput";
import { VersionGroupWhereUniqueInput } from "../inputs/VersionGroupWhereUniqueInput";

@TypeGraphQL.InputType("VersionGroupCreateNestedOneWithoutVersionGroupPokemonMoveMethodsInput", {})
export class VersionGroupCreateNestedOneWithoutVersionGroupPokemonMoveMethodsInput {
  @TypeGraphQL.Field(_type => VersionGroupCreateWithoutVersionGroupPokemonMoveMethodsInput, {
    nullable: true
  })
  create?: VersionGroupCreateWithoutVersionGroupPokemonMoveMethodsInput | undefined;

  @TypeGraphQL.Field(_type => VersionGroupCreateOrConnectWithoutVersionGroupPokemonMoveMethodsInput, {
    nullable: true
  })
  connectOrCreate?: VersionGroupCreateOrConnectWithoutVersionGroupPokemonMoveMethodsInput | undefined;

  @TypeGraphQL.Field(_type => VersionGroupWhereUniqueInput, {
    nullable: true
  })
  connect?: VersionGroupWhereUniqueInput | undefined;
}
