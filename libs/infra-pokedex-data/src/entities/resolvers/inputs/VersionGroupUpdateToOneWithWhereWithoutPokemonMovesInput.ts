import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionGroupUpdateWithoutPokemonMovesInput } from "../inputs/VersionGroupUpdateWithoutPokemonMovesInput";
import { VersionGroupWhereInput } from "../inputs/VersionGroupWhereInput";

@TypeGraphQL.InputType("VersionGroupUpdateToOneWithWhereWithoutPokemonMovesInput", {})
export class VersionGroupUpdateToOneWithWhereWithoutPokemonMovesInput {
  @TypeGraphQL.Field(_type => VersionGroupWhereInput, {
    nullable: true
  })
  where?: VersionGroupWhereInput | undefined;

  @TypeGraphQL.Field(_type => VersionGroupUpdateWithoutPokemonMovesInput, {
    nullable: false
  })
  data!: VersionGroupUpdateWithoutPokemonMovesInput;
}
