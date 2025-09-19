import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionGroupPokemonMoveMethodUpdateWithoutMoveMethodInput } from "../inputs/VersionGroupPokemonMoveMethodUpdateWithoutMoveMethodInput";
import { VersionGroupPokemonMoveMethodWhereUniqueInput } from "../inputs/VersionGroupPokemonMoveMethodWhereUniqueInput";

@TypeGraphQL.InputType("VersionGroupPokemonMoveMethodUpdateWithWhereUniqueWithoutMoveMethodInput", {})
export class VersionGroupPokemonMoveMethodUpdateWithWhereUniqueWithoutMoveMethodInput {
  @TypeGraphQL.Field(_type => VersionGroupPokemonMoveMethodWhereUniqueInput, {
    nullable: false
  })
  where!: VersionGroupPokemonMoveMethodWhereUniqueInput;

  @TypeGraphQL.Field(_type => VersionGroupPokemonMoveMethodUpdateWithoutMoveMethodInput, {
    nullable: false
  })
  data!: VersionGroupPokemonMoveMethodUpdateWithoutMoveMethodInput;
}
