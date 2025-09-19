import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionGroupCreateWithoutPokemonFormsInput } from "../inputs/VersionGroupCreateWithoutPokemonFormsInput";
import { VersionGroupWhereUniqueInput } from "../inputs/VersionGroupWhereUniqueInput";

@TypeGraphQL.InputType("VersionGroupCreateOrConnectWithoutPokemonFormsInput", {})
export class VersionGroupCreateOrConnectWithoutPokemonFormsInput {
  @TypeGraphQL.Field(_type => VersionGroupWhereUniqueInput, {
    nullable: false
  })
  where!: VersionGroupWhereUniqueInput;

  @TypeGraphQL.Field(_type => VersionGroupCreateWithoutPokemonFormsInput, {
    nullable: false
  })
  create!: VersionGroupCreateWithoutPokemonFormsInput;
}
