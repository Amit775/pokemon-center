import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonMovesUpdateWithoutVersionGroupInput } from "../inputs/PokemonMovesUpdateWithoutVersionGroupInput";
import { PokemonMovesWhereUniqueInput } from "../inputs/PokemonMovesWhereUniqueInput";

@TypeGraphQL.InputType("PokemonMovesUpdateWithWhereUniqueWithoutVersionGroupInput", {})
export class PokemonMovesUpdateWithWhereUniqueWithoutVersionGroupInput {
  @TypeGraphQL.Field(_type => PokemonMovesWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonMovesWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonMovesUpdateWithoutVersionGroupInput, {
    nullable: false
  })
  data!: PokemonMovesUpdateWithoutVersionGroupInput;
}
