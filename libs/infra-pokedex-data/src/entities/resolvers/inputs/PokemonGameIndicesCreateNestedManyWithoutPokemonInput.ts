import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonGameIndicesCreateManyPokemonInputEnvelope } from "../inputs/PokemonGameIndicesCreateManyPokemonInputEnvelope";
import { PokemonGameIndicesCreateOrConnectWithoutPokemonInput } from "../inputs/PokemonGameIndicesCreateOrConnectWithoutPokemonInput";
import { PokemonGameIndicesCreateWithoutPokemonInput } from "../inputs/PokemonGameIndicesCreateWithoutPokemonInput";
import { PokemonGameIndicesWhereUniqueInput } from "../inputs/PokemonGameIndicesWhereUniqueInput";

@TypeGraphQL.InputType("PokemonGameIndicesCreateNestedManyWithoutPokemonInput", {})
export class PokemonGameIndicesCreateNestedManyWithoutPokemonInput {
  @TypeGraphQL.Field(_type => [PokemonGameIndicesCreateWithoutPokemonInput], {
    nullable: true
  })
  create?: PokemonGameIndicesCreateWithoutPokemonInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonGameIndicesCreateOrConnectWithoutPokemonInput], {
    nullable: true
  })
  connectOrCreate?: PokemonGameIndicesCreateOrConnectWithoutPokemonInput[] | undefined;

  @TypeGraphQL.Field(_type => PokemonGameIndicesCreateManyPokemonInputEnvelope, {
    nullable: true
  })
  createMany?: PokemonGameIndicesCreateManyPokemonInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PokemonGameIndicesWhereUniqueInput], {
    nullable: true
  })
  connect?: PokemonGameIndicesWhereUniqueInput[] | undefined;
}
