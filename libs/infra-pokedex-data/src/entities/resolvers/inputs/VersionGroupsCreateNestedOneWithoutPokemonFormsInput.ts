import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionGroupsCreateOrConnectWithoutPokemonFormsInput } from "../inputs/VersionGroupsCreateOrConnectWithoutPokemonFormsInput";
import { VersionGroupsCreateWithoutPokemonFormsInput } from "../inputs/VersionGroupsCreateWithoutPokemonFormsInput";
import { VersionGroupsWhereUniqueInput } from "../inputs/VersionGroupsWhereUniqueInput";

@TypeGraphQL.InputType("VersionGroupsCreateNestedOneWithoutPokemonFormsInput", {})
export class VersionGroupsCreateNestedOneWithoutPokemonFormsInput {
  @TypeGraphQL.Field(_type => VersionGroupsCreateWithoutPokemonFormsInput, {
    nullable: true
  })
  create?: VersionGroupsCreateWithoutPokemonFormsInput | undefined;

  @TypeGraphQL.Field(_type => VersionGroupsCreateOrConnectWithoutPokemonFormsInput, {
    nullable: true
  })
  connectOrCreate?: VersionGroupsCreateOrConnectWithoutPokemonFormsInput | undefined;

  @TypeGraphQL.Field(_type => VersionGroupsWhereUniqueInput, {
    nullable: true
  })
  connect?: VersionGroupsWhereUniqueInput | undefined;
}
