import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionGroupsCreateWithoutPokemonMovesInput } from "../inputs/VersionGroupsCreateWithoutPokemonMovesInput";
import { VersionGroupsWhereUniqueInput } from "../inputs/VersionGroupsWhereUniqueInput";

@TypeGraphQL.InputType("VersionGroupsCreateOrConnectWithoutPokemonMovesInput", {})
export class VersionGroupsCreateOrConnectWithoutPokemonMovesInput {
  @TypeGraphQL.Field(_type => VersionGroupsWhereUniqueInput, {
    nullable: false
  })
  where!: VersionGroupsWhereUniqueInput;

  @TypeGraphQL.Field(_type => VersionGroupsCreateWithoutPokemonMovesInput, {
    nullable: false
  })
  create!: VersionGroupsCreateWithoutPokemonMovesInput;
}
