import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionGroupPokemonMoveMethodsCreateWithoutVersionGroupInput } from "../inputs/VersionGroupPokemonMoveMethodsCreateWithoutVersionGroupInput";
import { VersionGroupPokemonMoveMethodsUpdateWithoutVersionGroupInput } from "../inputs/VersionGroupPokemonMoveMethodsUpdateWithoutVersionGroupInput";
import { VersionGroupPokemonMoveMethodsWhereUniqueInput } from "../inputs/VersionGroupPokemonMoveMethodsWhereUniqueInput";

@TypeGraphQL.InputType("VersionGroupPokemonMoveMethodsUpsertWithWhereUniqueWithoutVersionGroupInput", {})
export class VersionGroupPokemonMoveMethodsUpsertWithWhereUniqueWithoutVersionGroupInput {
  @TypeGraphQL.Field(_type => VersionGroupPokemonMoveMethodsWhereUniqueInput, {
    nullable: false
  })
  where!: VersionGroupPokemonMoveMethodsWhereUniqueInput;

  @TypeGraphQL.Field(_type => VersionGroupPokemonMoveMethodsUpdateWithoutVersionGroupInput, {
    nullable: false
  })
  update!: VersionGroupPokemonMoveMethodsUpdateWithoutVersionGroupInput;

  @TypeGraphQL.Field(_type => VersionGroupPokemonMoveMethodsCreateWithoutVersionGroupInput, {
    nullable: false
  })
  create!: VersionGroupPokemonMoveMethodsCreateWithoutVersionGroupInput;
}
