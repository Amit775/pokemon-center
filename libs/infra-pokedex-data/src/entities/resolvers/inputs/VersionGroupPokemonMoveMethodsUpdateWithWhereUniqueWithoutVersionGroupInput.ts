import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionGroupPokemonMoveMethodsUpdateWithoutVersionGroupInput } from "../inputs/VersionGroupPokemonMoveMethodsUpdateWithoutVersionGroupInput";
import { VersionGroupPokemonMoveMethodsWhereUniqueInput } from "../inputs/VersionGroupPokemonMoveMethodsWhereUniqueInput";

@TypeGraphQL.InputType("VersionGroupPokemonMoveMethodsUpdateWithWhereUniqueWithoutVersionGroupInput", {})
export class VersionGroupPokemonMoveMethodsUpdateWithWhereUniqueWithoutVersionGroupInput {
  @TypeGraphQL.Field(_type => VersionGroupPokemonMoveMethodsWhereUniqueInput, {
    nullable: false
  })
  where!: VersionGroupPokemonMoveMethodsWhereUniqueInput;

  @TypeGraphQL.Field(_type => VersionGroupPokemonMoveMethodsUpdateWithoutVersionGroupInput, {
    nullable: false
  })
  data!: VersionGroupPokemonMoveMethodsUpdateWithoutVersionGroupInput;
}
