import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionGroupsCreateWithoutPokemonFormsInput } from "../inputs/VersionGroupsCreateWithoutPokemonFormsInput";
import { VersionGroupsWhereUniqueInput } from "../inputs/VersionGroupsWhereUniqueInput";

@TypeGraphQL.InputType("VersionGroupsCreateOrConnectWithoutPokemonFormsInput", {})
export class VersionGroupsCreateOrConnectWithoutPokemonFormsInput {
  @TypeGraphQL.Field(_type => VersionGroupsWhereUniqueInput, {
    nullable: false
  })
  where!: VersionGroupsWhereUniqueInput;

  @TypeGraphQL.Field(_type => VersionGroupsCreateWithoutPokemonFormsInput, {
    nullable: false
  })
  create!: VersionGroupsCreateWithoutPokemonFormsInput;
}
