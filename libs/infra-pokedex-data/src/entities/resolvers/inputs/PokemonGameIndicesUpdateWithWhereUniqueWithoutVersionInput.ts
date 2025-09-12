import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonGameIndicesUpdateWithoutVersionInput } from "../inputs/PokemonGameIndicesUpdateWithoutVersionInput";
import { PokemonGameIndicesWhereUniqueInput } from "../inputs/PokemonGameIndicesWhereUniqueInput";

@TypeGraphQL.InputType("PokemonGameIndicesUpdateWithWhereUniqueWithoutVersionInput", {})
export class PokemonGameIndicesUpdateWithWhereUniqueWithoutVersionInput {
  @TypeGraphQL.Field(_type => PokemonGameIndicesWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonGameIndicesWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonGameIndicesUpdateWithoutVersionInput, {
    nullable: false
  })
  data!: PokemonGameIndicesUpdateWithoutVersionInput;
}
