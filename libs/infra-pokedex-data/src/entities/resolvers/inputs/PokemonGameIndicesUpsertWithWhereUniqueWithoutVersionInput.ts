import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonGameIndicesCreateWithoutVersionInput } from "../inputs/PokemonGameIndicesCreateWithoutVersionInput";
import { PokemonGameIndicesUpdateWithoutVersionInput } from "../inputs/PokemonGameIndicesUpdateWithoutVersionInput";
import { PokemonGameIndicesWhereUniqueInput } from "../inputs/PokemonGameIndicesWhereUniqueInput";

@TypeGraphQL.InputType("PokemonGameIndicesUpsertWithWhereUniqueWithoutVersionInput", {})
export class PokemonGameIndicesUpsertWithWhereUniqueWithoutVersionInput {
  @TypeGraphQL.Field(_type => PokemonGameIndicesWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonGameIndicesWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonGameIndicesUpdateWithoutVersionInput, {
    nullable: false
  })
  update!: PokemonGameIndicesUpdateWithoutVersionInput;

  @TypeGraphQL.Field(_type => PokemonGameIndicesCreateWithoutVersionInput, {
    nullable: false
  })
  create!: PokemonGameIndicesCreateWithoutVersionInput;
}
