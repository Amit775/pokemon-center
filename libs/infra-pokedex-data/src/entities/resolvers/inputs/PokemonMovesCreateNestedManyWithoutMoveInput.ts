import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonMovesCreateManyMoveInputEnvelope } from "../inputs/PokemonMovesCreateManyMoveInputEnvelope";
import { PokemonMovesCreateOrConnectWithoutMoveInput } from "../inputs/PokemonMovesCreateOrConnectWithoutMoveInput";
import { PokemonMovesCreateWithoutMoveInput } from "../inputs/PokemonMovesCreateWithoutMoveInput";
import { PokemonMovesWhereUniqueInput } from "../inputs/PokemonMovesWhereUniqueInput";

@TypeGraphQL.InputType("PokemonMovesCreateNestedManyWithoutMoveInput", {})
export class PokemonMovesCreateNestedManyWithoutMoveInput {
  @TypeGraphQL.Field(_type => [PokemonMovesCreateWithoutMoveInput], {
    nullable: true
  })
  create?: PokemonMovesCreateWithoutMoveInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonMovesCreateOrConnectWithoutMoveInput], {
    nullable: true
  })
  connectOrCreate?: PokemonMovesCreateOrConnectWithoutMoveInput[] | undefined;

  @TypeGraphQL.Field(_type => PokemonMovesCreateManyMoveInputEnvelope, {
    nullable: true
  })
  createMany?: PokemonMovesCreateManyMoveInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PokemonMovesWhereUniqueInput], {
    nullable: true
  })
  connect?: PokemonMovesWhereUniqueInput[] | undefined;
}
