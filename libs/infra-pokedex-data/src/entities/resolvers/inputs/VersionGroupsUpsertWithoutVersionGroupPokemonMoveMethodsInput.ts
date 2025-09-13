import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionGroupsCreateWithoutVersionGroupPokemonMoveMethodsInput } from "../inputs/VersionGroupsCreateWithoutVersionGroupPokemonMoveMethodsInput";
import { VersionGroupsUpdateWithoutVersionGroupPokemonMoveMethodsInput } from "../inputs/VersionGroupsUpdateWithoutVersionGroupPokemonMoveMethodsInput";
import { VersionGroupsWhereInput } from "../inputs/VersionGroupsWhereInput";

@TypeGraphQL.InputType("VersionGroupsUpsertWithoutVersionGroupPokemonMoveMethodsInput", {})
export class VersionGroupsUpsertWithoutVersionGroupPokemonMoveMethodsInput {
  @TypeGraphQL.Field(_type => VersionGroupsUpdateWithoutVersionGroupPokemonMoveMethodsInput, {
    nullable: false
  })
  update!: VersionGroupsUpdateWithoutVersionGroupPokemonMoveMethodsInput;

  @TypeGraphQL.Field(_type => VersionGroupsCreateWithoutVersionGroupPokemonMoveMethodsInput, {
    nullable: false
  })
  create!: VersionGroupsCreateWithoutVersionGroupPokemonMoveMethodsInput;

  @TypeGraphQL.Field(_type => VersionGroupsWhereInput, {
    nullable: true
  })
  where?: VersionGroupsWhereInput | undefined;
}
