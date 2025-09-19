import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionGroupPokemonMoveMethodCreateWithoutMoveMethodInput } from "../inputs/VersionGroupPokemonMoveMethodCreateWithoutMoveMethodInput";
import { VersionGroupPokemonMoveMethodUpdateWithoutMoveMethodInput } from "../inputs/VersionGroupPokemonMoveMethodUpdateWithoutMoveMethodInput";
import { VersionGroupPokemonMoveMethodWhereUniqueInput } from "../inputs/VersionGroupPokemonMoveMethodWhereUniqueInput";

@TypeGraphQL.InputType("VersionGroupPokemonMoveMethodUpsertWithWhereUniqueWithoutMoveMethodInput", {})
export class VersionGroupPokemonMoveMethodUpsertWithWhereUniqueWithoutMoveMethodInput {
  @TypeGraphQL.Field(_type => VersionGroupPokemonMoveMethodWhereUniqueInput, {
    nullable: false
  })
  where!: VersionGroupPokemonMoveMethodWhereUniqueInput;

  @TypeGraphQL.Field(_type => VersionGroupPokemonMoveMethodUpdateWithoutMoveMethodInput, {
    nullable: false
  })
  update!: VersionGroupPokemonMoveMethodUpdateWithoutMoveMethodInput;

  @TypeGraphQL.Field(_type => VersionGroupPokemonMoveMethodCreateWithoutMoveMethodInput, {
    nullable: false
  })
  create!: VersionGroupPokemonMoveMethodCreateWithoutMoveMethodInput;
}
