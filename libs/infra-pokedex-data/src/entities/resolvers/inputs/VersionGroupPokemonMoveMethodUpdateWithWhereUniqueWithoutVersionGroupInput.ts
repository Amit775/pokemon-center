import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionGroupPokemonMoveMethodUpdateWithoutVersionGroupInput } from "../inputs/VersionGroupPokemonMoveMethodUpdateWithoutVersionGroupInput";
import { VersionGroupPokemonMoveMethodWhereUniqueInput } from "../inputs/VersionGroupPokemonMoveMethodWhereUniqueInput";

@TypeGraphQL.InputType("VersionGroupPokemonMoveMethodUpdateWithWhereUniqueWithoutVersionGroupInput", {})
export class VersionGroupPokemonMoveMethodUpdateWithWhereUniqueWithoutVersionGroupInput {
  @TypeGraphQL.Field(_type => VersionGroupPokemonMoveMethodWhereUniqueInput, {
    nullable: false
  })
  where!: VersionGroupPokemonMoveMethodWhereUniqueInput;

  @TypeGraphQL.Field(_type => VersionGroupPokemonMoveMethodUpdateWithoutVersionGroupInput, {
    nullable: false
  })
  data!: VersionGroupPokemonMoveMethodUpdateWithoutVersionGroupInput;
}
