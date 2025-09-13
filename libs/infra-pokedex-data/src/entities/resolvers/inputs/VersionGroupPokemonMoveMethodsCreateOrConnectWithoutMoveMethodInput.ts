import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionGroupPokemonMoveMethodsCreateWithoutMoveMethodInput } from "../inputs/VersionGroupPokemonMoveMethodsCreateWithoutMoveMethodInput";
import { VersionGroupPokemonMoveMethodsWhereUniqueInput } from "../inputs/VersionGroupPokemonMoveMethodsWhereUniqueInput";

@TypeGraphQL.InputType("VersionGroupPokemonMoveMethodsCreateOrConnectWithoutMoveMethodInput", {})
export class VersionGroupPokemonMoveMethodsCreateOrConnectWithoutMoveMethodInput {
  @TypeGraphQL.Field(_type => VersionGroupPokemonMoveMethodsWhereUniqueInput, {
    nullable: false
  })
  where!: VersionGroupPokemonMoveMethodsWhereUniqueInput;

  @TypeGraphQL.Field(_type => VersionGroupPokemonMoveMethodsCreateWithoutMoveMethodInput, {
    nullable: false
  })
  create!: VersionGroupPokemonMoveMethodsCreateWithoutMoveMethodInput;
}
