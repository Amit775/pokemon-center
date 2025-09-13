import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionGroupsCreateWithoutPokemonMovesInput } from "../inputs/VersionGroupsCreateWithoutPokemonMovesInput";
import { VersionGroupsUpdateWithoutPokemonMovesInput } from "../inputs/VersionGroupsUpdateWithoutPokemonMovesInput";
import { VersionGroupsWhereInput } from "../inputs/VersionGroupsWhereInput";

@TypeGraphQL.InputType("VersionGroupsUpsertWithoutPokemonMovesInput", {})
export class VersionGroupsUpsertWithoutPokemonMovesInput {
  @TypeGraphQL.Field(_type => VersionGroupsUpdateWithoutPokemonMovesInput, {
    nullable: false
  })
  update!: VersionGroupsUpdateWithoutPokemonMovesInput;

  @TypeGraphQL.Field(_type => VersionGroupsCreateWithoutPokemonMovesInput, {
    nullable: false
  })
  create!: VersionGroupsCreateWithoutPokemonMovesInput;

  @TypeGraphQL.Field(_type => VersionGroupsWhereInput, {
    nullable: true
  })
  where?: VersionGroupsWhereInput | undefined;
}
