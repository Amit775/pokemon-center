import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonMovesCreateWithoutVersionGroupInput } from "../inputs/PokemonMovesCreateWithoutVersionGroupInput";
import { PokemonMovesUpdateWithoutVersionGroupInput } from "../inputs/PokemonMovesUpdateWithoutVersionGroupInput";
import { PokemonMovesWhereUniqueInput } from "../inputs/PokemonMovesWhereUniqueInput";

@TypeGraphQL.InputType("PokemonMovesUpsertWithWhereUniqueWithoutVersionGroupInput", {})
export class PokemonMovesUpsertWithWhereUniqueWithoutVersionGroupInput {
  @TypeGraphQL.Field(_type => PokemonMovesWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonMovesWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonMovesUpdateWithoutVersionGroupInput, {
    nullable: false
  })
  update!: PokemonMovesUpdateWithoutVersionGroupInput;

  @TypeGraphQL.Field(_type => PokemonMovesCreateWithoutVersionGroupInput, {
    nullable: false
  })
  create!: PokemonMovesCreateWithoutVersionGroupInput;
}
