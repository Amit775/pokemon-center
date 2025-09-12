import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionGroupPokemonMoveMethodsUpdateWithoutMoveMethodInput } from "../inputs/VersionGroupPokemonMoveMethodsUpdateWithoutMoveMethodInput";
import { VersionGroupPokemonMoveMethodsWhereUniqueInput } from "../inputs/VersionGroupPokemonMoveMethodsWhereUniqueInput";

@TypeGraphQL.InputType("VersionGroupPokemonMoveMethodsUpdateWithWhereUniqueWithoutMoveMethodInput", {})
export class VersionGroupPokemonMoveMethodsUpdateWithWhereUniqueWithoutMoveMethodInput {
  @TypeGraphQL.Field(_type => VersionGroupPokemonMoveMethodsWhereUniqueInput, {
    nullable: false
  })
  where!: VersionGroupPokemonMoveMethodsWhereUniqueInput;

  @TypeGraphQL.Field(_type => VersionGroupPokemonMoveMethodsUpdateWithoutMoveMethodInput, {
    nullable: false
  })
  data!: VersionGroupPokemonMoveMethodsUpdateWithoutMoveMethodInput;
}
