import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionGroupCreateWithoutPokemonFormsInput } from "../inputs/VersionGroupCreateWithoutPokemonFormsInput";
import { VersionGroupUpdateWithoutPokemonFormsInput } from "../inputs/VersionGroupUpdateWithoutPokemonFormsInput";
import { VersionGroupWhereInput } from "../inputs/VersionGroupWhereInput";

@TypeGraphQL.InputType("VersionGroupUpsertWithoutPokemonFormsInput", {})
export class VersionGroupUpsertWithoutPokemonFormsInput {
  @TypeGraphQL.Field(_type => VersionGroupUpdateWithoutPokemonFormsInput, {
    nullable: false
  })
  update!: VersionGroupUpdateWithoutPokemonFormsInput;

  @TypeGraphQL.Field(_type => VersionGroupCreateWithoutPokemonFormsInput, {
    nullable: false
  })
  create!: VersionGroupCreateWithoutPokemonFormsInput;

  @TypeGraphQL.Field(_type => VersionGroupWhereInput, {
    nullable: true
  })
  where?: VersionGroupWhereInput | undefined;
}
