import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionGroupCreateOrConnectWithoutPokemonMovesInput } from "../inputs/VersionGroupCreateOrConnectWithoutPokemonMovesInput";
import { VersionGroupCreateWithoutPokemonMovesInput } from "../inputs/VersionGroupCreateWithoutPokemonMovesInput";
import { VersionGroupWhereUniqueInput } from "../inputs/VersionGroupWhereUniqueInput";

@TypeGraphQL.InputType("VersionGroupCreateNestedOneWithoutPokemonMovesInput", {})
export class VersionGroupCreateNestedOneWithoutPokemonMovesInput {
  @TypeGraphQL.Field(_type => VersionGroupCreateWithoutPokemonMovesInput, {
    nullable: true
  })
  create?: VersionGroupCreateWithoutPokemonMovesInput | undefined;

  @TypeGraphQL.Field(_type => VersionGroupCreateOrConnectWithoutPokemonMovesInput, {
    nullable: true
  })
  connectOrCreate?: VersionGroupCreateOrConnectWithoutPokemonMovesInput | undefined;

  @TypeGraphQL.Field(_type => VersionGroupWhereUniqueInput, {
    nullable: true
  })
  connect?: VersionGroupWhereUniqueInput | undefined;
}
