import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionGroupPokemonMoveMethodCreateWithoutVersionGroupInput } from "../inputs/VersionGroupPokemonMoveMethodCreateWithoutVersionGroupInput";
import { VersionGroupPokemonMoveMethodUpdateWithoutVersionGroupInput } from "../inputs/VersionGroupPokemonMoveMethodUpdateWithoutVersionGroupInput";
import { VersionGroupPokemonMoveMethodWhereUniqueInput } from "../inputs/VersionGroupPokemonMoveMethodWhereUniqueInput";

@TypeGraphQL.InputType("VersionGroupPokemonMoveMethodUpsertWithWhereUniqueWithoutVersionGroupInput", {})
export class VersionGroupPokemonMoveMethodUpsertWithWhereUniqueWithoutVersionGroupInput {
  @TypeGraphQL.Field(_type => VersionGroupPokemonMoveMethodWhereUniqueInput, {
    nullable: false
  })
  where!: VersionGroupPokemonMoveMethodWhereUniqueInput;

  @TypeGraphQL.Field(_type => VersionGroupPokemonMoveMethodUpdateWithoutVersionGroupInput, {
    nullable: false
  })
  update!: VersionGroupPokemonMoveMethodUpdateWithoutVersionGroupInput;

  @TypeGraphQL.Field(_type => VersionGroupPokemonMoveMethodCreateWithoutVersionGroupInput, {
    nullable: false
  })
  create!: VersionGroupPokemonMoveMethodCreateWithoutVersionGroupInput;
}
