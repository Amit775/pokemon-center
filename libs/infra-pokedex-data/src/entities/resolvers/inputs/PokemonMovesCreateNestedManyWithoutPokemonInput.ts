import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonMovesCreateManyPokemonInputEnvelope } from "../inputs/PokemonMovesCreateManyPokemonInputEnvelope";
import { PokemonMovesCreateOrConnectWithoutPokemonInput } from "../inputs/PokemonMovesCreateOrConnectWithoutPokemonInput";
import { PokemonMovesCreateWithoutPokemonInput } from "../inputs/PokemonMovesCreateWithoutPokemonInput";
import { PokemonMovesWhereUniqueInput } from "../inputs/PokemonMovesWhereUniqueInput";

@TypeGraphQL.InputType("PokemonMovesCreateNestedManyWithoutPokemonInput", {})
export class PokemonMovesCreateNestedManyWithoutPokemonInput {
  @TypeGraphQL.Field(_type => [PokemonMovesCreateWithoutPokemonInput], {
    nullable: true
  })
  create?: PokemonMovesCreateWithoutPokemonInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonMovesCreateOrConnectWithoutPokemonInput], {
    nullable: true
  })
  connectOrCreate?: PokemonMovesCreateOrConnectWithoutPokemonInput[] | undefined;

  @TypeGraphQL.Field(_type => PokemonMovesCreateManyPokemonInputEnvelope, {
    nullable: true
  })
  createMany?: PokemonMovesCreateManyPokemonInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PokemonMovesWhereUniqueInput], {
    nullable: true
  })
  connect?: PokemonMovesWhereUniqueInput[] | undefined;
}
