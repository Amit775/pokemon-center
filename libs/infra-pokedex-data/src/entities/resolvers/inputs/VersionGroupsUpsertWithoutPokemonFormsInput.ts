import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionGroupsCreateWithoutPokemonFormsInput } from "../inputs/VersionGroupsCreateWithoutPokemonFormsInput";
import { VersionGroupsUpdateWithoutPokemonFormsInput } from "../inputs/VersionGroupsUpdateWithoutPokemonFormsInput";
import { VersionGroupsWhereInput } from "../inputs/VersionGroupsWhereInput";

@TypeGraphQL.InputType("VersionGroupsUpsertWithoutPokemonFormsInput", {})
export class VersionGroupsUpsertWithoutPokemonFormsInput {
  @TypeGraphQL.Field(_type => VersionGroupsUpdateWithoutPokemonFormsInput, {
    nullable: false
  })
  update!: VersionGroupsUpdateWithoutPokemonFormsInput;

  @TypeGraphQL.Field(_type => VersionGroupsCreateWithoutPokemonFormsInput, {
    nullable: false
  })
  create!: VersionGroupsCreateWithoutPokemonFormsInput;

  @TypeGraphQL.Field(_type => VersionGroupsWhereInput, {
    nullable: true
  })
  where?: VersionGroupsWhereInput | undefined;
}
