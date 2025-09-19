import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionGroupCreateWithoutPokemonMovesInput } from "../inputs/VersionGroupCreateWithoutPokemonMovesInput";
import { VersionGroupWhereUniqueInput } from "../inputs/VersionGroupWhereUniqueInput";

@TypeGraphQL.InputType("VersionGroupCreateOrConnectWithoutPokemonMovesInput", {})
export class VersionGroupCreateOrConnectWithoutPokemonMovesInput {
  @TypeGraphQL.Field(_type => VersionGroupWhereUniqueInput, {
    nullable: false
  })
  where!: VersionGroupWhereUniqueInput;

  @TypeGraphQL.Field(_type => VersionGroupCreateWithoutPokemonMovesInput, {
    nullable: false
  })
  create!: VersionGroupCreateWithoutPokemonMovesInput;
}
