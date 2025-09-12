import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionGroupsUpdateWithoutVersionGroupPokemonMoveMethodsInput } from "../inputs/VersionGroupsUpdateWithoutVersionGroupPokemonMoveMethodsInput";
import { VersionGroupsWhereInput } from "../inputs/VersionGroupsWhereInput";

@TypeGraphQL.InputType("VersionGroupsUpdateToOneWithWhereWithoutVersionGroupPokemonMoveMethodsInput", {})
export class VersionGroupsUpdateToOneWithWhereWithoutVersionGroupPokemonMoveMethodsInput {
  @TypeGraphQL.Field(_type => VersionGroupsWhereInput, {
    nullable: true
  })
  where?: VersionGroupsWhereInput | undefined;

  @TypeGraphQL.Field(_type => VersionGroupsUpdateWithoutVersionGroupPokemonMoveMethodsInput, {
    nullable: false
  })
  data!: VersionGroupsUpdateWithoutVersionGroupPokemonMoveMethodsInput;
}
