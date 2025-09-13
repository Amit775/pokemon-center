import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionGroupsUpdateWithoutPokemonFormsInput } from "../inputs/VersionGroupsUpdateWithoutPokemonFormsInput";
import { VersionGroupsWhereInput } from "../inputs/VersionGroupsWhereInput";

@TypeGraphQL.InputType("VersionGroupsUpdateToOneWithWhereWithoutPokemonFormsInput", {})
export class VersionGroupsUpdateToOneWithWhereWithoutPokemonFormsInput {
  @TypeGraphQL.Field(_type => VersionGroupsWhereInput, {
    nullable: true
  })
  where?: VersionGroupsWhereInput | undefined;

  @TypeGraphQL.Field(_type => VersionGroupsUpdateWithoutPokemonFormsInput, {
    nullable: false
  })
  data!: VersionGroupsUpdateWithoutPokemonFormsInput;
}
