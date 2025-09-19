import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionGroupCreateWithoutVersionGroupPokemonMoveMethodsInput } from "../inputs/VersionGroupCreateWithoutVersionGroupPokemonMoveMethodsInput";
import { VersionGroupUpdateWithoutVersionGroupPokemonMoveMethodsInput } from "../inputs/VersionGroupUpdateWithoutVersionGroupPokemonMoveMethodsInput";
import { VersionGroupWhereInput } from "../inputs/VersionGroupWhereInput";

@TypeGraphQL.InputType("VersionGroupUpsertWithoutVersionGroupPokemonMoveMethodsInput", {})
export class VersionGroupUpsertWithoutVersionGroupPokemonMoveMethodsInput {
  @TypeGraphQL.Field(_type => VersionGroupUpdateWithoutVersionGroupPokemonMoveMethodsInput, {
    nullable: false
  })
  update!: VersionGroupUpdateWithoutVersionGroupPokemonMoveMethodsInput;

  @TypeGraphQL.Field(_type => VersionGroupCreateWithoutVersionGroupPokemonMoveMethodsInput, {
    nullable: false
  })
  create!: VersionGroupCreateWithoutVersionGroupPokemonMoveMethodsInput;

  @TypeGraphQL.Field(_type => VersionGroupWhereInput, {
    nullable: true
  })
  where?: VersionGroupWhereInput | undefined;
}
