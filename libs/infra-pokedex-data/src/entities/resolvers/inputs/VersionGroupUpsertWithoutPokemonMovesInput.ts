import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionGroupCreateWithoutPokemonMovesInput } from "../inputs/VersionGroupCreateWithoutPokemonMovesInput";
import { VersionGroupUpdateWithoutPokemonMovesInput } from "../inputs/VersionGroupUpdateWithoutPokemonMovesInput";
import { VersionGroupWhereInput } from "../inputs/VersionGroupWhereInput";

@TypeGraphQL.InputType("VersionGroupUpsertWithoutPokemonMovesInput", {})
export class VersionGroupUpsertWithoutPokemonMovesInput {
  @TypeGraphQL.Field(_type => VersionGroupUpdateWithoutPokemonMovesInput, {
    nullable: false
  })
  update!: VersionGroupUpdateWithoutPokemonMovesInput;

  @TypeGraphQL.Field(_type => VersionGroupCreateWithoutPokemonMovesInput, {
    nullable: false
  })
  create!: VersionGroupCreateWithoutPokemonMovesInput;

  @TypeGraphQL.Field(_type => VersionGroupWhereInput, {
    nullable: true
  })
  where?: VersionGroupWhereInput | undefined;
}
