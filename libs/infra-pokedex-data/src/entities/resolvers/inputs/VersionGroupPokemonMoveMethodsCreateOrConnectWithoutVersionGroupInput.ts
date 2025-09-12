import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionGroupPokemonMoveMethodsCreateWithoutVersionGroupInput } from "../inputs/VersionGroupPokemonMoveMethodsCreateWithoutVersionGroupInput";
import { VersionGroupPokemonMoveMethodsWhereUniqueInput } from "../inputs/VersionGroupPokemonMoveMethodsWhereUniqueInput";

@TypeGraphQL.InputType("VersionGroupPokemonMoveMethodsCreateOrConnectWithoutVersionGroupInput", {})
export class VersionGroupPokemonMoveMethodsCreateOrConnectWithoutVersionGroupInput {
  @TypeGraphQL.Field(_type => VersionGroupPokemonMoveMethodsWhereUniqueInput, {
    nullable: false
  })
  where!: VersionGroupPokemonMoveMethodsWhereUniqueInput;

  @TypeGraphQL.Field(_type => VersionGroupPokemonMoveMethodsCreateWithoutVersionGroupInput, {
    nullable: false
  })
  create!: VersionGroupPokemonMoveMethodsCreateWithoutVersionGroupInput;
}
