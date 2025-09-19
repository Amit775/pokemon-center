import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionGroupUpdateWithoutPokemonFormsInput } from "../inputs/VersionGroupUpdateWithoutPokemonFormsInput";
import { VersionGroupWhereInput } from "../inputs/VersionGroupWhereInput";

@TypeGraphQL.InputType("VersionGroupUpdateToOneWithWhereWithoutPokemonFormsInput", {})
export class VersionGroupUpdateToOneWithWhereWithoutPokemonFormsInput {
  @TypeGraphQL.Field(_type => VersionGroupWhereInput, {
    nullable: true
  })
  where?: VersionGroupWhereInput | undefined;

  @TypeGraphQL.Field(_type => VersionGroupUpdateWithoutPokemonFormsInput, {
    nullable: false
  })
  data!: VersionGroupUpdateWithoutPokemonFormsInput;
}
