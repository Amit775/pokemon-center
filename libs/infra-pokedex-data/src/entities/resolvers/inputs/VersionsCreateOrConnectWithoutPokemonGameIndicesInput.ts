import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionsCreateWithoutPokemonGameIndicesInput } from "../inputs/VersionsCreateWithoutPokemonGameIndicesInput";
import { VersionsWhereUniqueInput } from "../inputs/VersionsWhereUniqueInput";

@TypeGraphQL.InputType("VersionsCreateOrConnectWithoutPokemonGameIndicesInput", {})
export class VersionsCreateOrConnectWithoutPokemonGameIndicesInput {
  @TypeGraphQL.Field(_type => VersionsWhereUniqueInput, {
    nullable: false
  })
  where!: VersionsWhereUniqueInput;

  @TypeGraphQL.Field(_type => VersionsCreateWithoutPokemonGameIndicesInput, {
    nullable: false
  })
  create!: VersionsCreateWithoutPokemonGameIndicesInput;
}
