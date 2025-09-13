import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionGroupPokemonMoveMethodsCreateWithoutMoveMethodInput } from "../inputs/VersionGroupPokemonMoveMethodsCreateWithoutMoveMethodInput";
import { VersionGroupPokemonMoveMethodsUpdateWithoutMoveMethodInput } from "../inputs/VersionGroupPokemonMoveMethodsUpdateWithoutMoveMethodInput";
import { VersionGroupPokemonMoveMethodsWhereUniqueInput } from "../inputs/VersionGroupPokemonMoveMethodsWhereUniqueInput";

@TypeGraphQL.InputType("VersionGroupPokemonMoveMethodsUpsertWithWhereUniqueWithoutMoveMethodInput", {})
export class VersionGroupPokemonMoveMethodsUpsertWithWhereUniqueWithoutMoveMethodInput {
  @TypeGraphQL.Field(_type => VersionGroupPokemonMoveMethodsWhereUniqueInput, {
    nullable: false
  })
  where!: VersionGroupPokemonMoveMethodsWhereUniqueInput;

  @TypeGraphQL.Field(_type => VersionGroupPokemonMoveMethodsUpdateWithoutMoveMethodInput, {
    nullable: false
  })
  update!: VersionGroupPokemonMoveMethodsUpdateWithoutMoveMethodInput;

  @TypeGraphQL.Field(_type => VersionGroupPokemonMoveMethodsCreateWithoutMoveMethodInput, {
    nullable: false
  })
  create!: VersionGroupPokemonMoveMethodsCreateWithoutMoveMethodInput;
}
