import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonMovesCreateManyMoveMethodInputEnvelope } from "../inputs/PokemonMovesCreateManyMoveMethodInputEnvelope";
import { PokemonMovesCreateOrConnectWithoutMoveMethodInput } from "../inputs/PokemonMovesCreateOrConnectWithoutMoveMethodInput";
import { PokemonMovesCreateWithoutMoveMethodInput } from "../inputs/PokemonMovesCreateWithoutMoveMethodInput";
import { PokemonMovesWhereUniqueInput } from "../inputs/PokemonMovesWhereUniqueInput";

@TypeGraphQL.InputType("PokemonMovesCreateNestedManyWithoutMoveMethodInput", {})
export class PokemonMovesCreateNestedManyWithoutMoveMethodInput {
  @TypeGraphQL.Field(_type => [PokemonMovesCreateWithoutMoveMethodInput], {
    nullable: true
  })
  create?: PokemonMovesCreateWithoutMoveMethodInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonMovesCreateOrConnectWithoutMoveMethodInput], {
    nullable: true
  })
  connectOrCreate?: PokemonMovesCreateOrConnectWithoutMoveMethodInput[] | undefined;

  @TypeGraphQL.Field(_type => PokemonMovesCreateManyMoveMethodInputEnvelope, {
    nullable: true
  })
  createMany?: PokemonMovesCreateManyMoveMethodInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PokemonMovesWhereUniqueInput], {
    nullable: true
  })
  connect?: PokemonMovesWhereUniqueInput[] | undefined;
}
