import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonMovesCreateManyVersionGroupInputEnvelope } from "../inputs/PokemonMovesCreateManyVersionGroupInputEnvelope";
import { PokemonMovesCreateOrConnectWithoutVersionGroupInput } from "../inputs/PokemonMovesCreateOrConnectWithoutVersionGroupInput";
import { PokemonMovesCreateWithoutVersionGroupInput } from "../inputs/PokemonMovesCreateWithoutVersionGroupInput";
import { PokemonMovesWhereUniqueInput } from "../inputs/PokemonMovesWhereUniqueInput";

@TypeGraphQL.InputType("PokemonMovesCreateNestedManyWithoutVersionGroupInput", {})
export class PokemonMovesCreateNestedManyWithoutVersionGroupInput {
  @TypeGraphQL.Field(_type => [PokemonMovesCreateWithoutVersionGroupInput], {
    nullable: true
  })
  create?: PokemonMovesCreateWithoutVersionGroupInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonMovesCreateOrConnectWithoutVersionGroupInput], {
    nullable: true
  })
  connectOrCreate?: PokemonMovesCreateOrConnectWithoutVersionGroupInput[] | undefined;

  @TypeGraphQL.Field(_type => PokemonMovesCreateManyVersionGroupInputEnvelope, {
    nullable: true
  })
  createMany?: PokemonMovesCreateManyVersionGroupInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PokemonMovesWhereUniqueInput], {
    nullable: true
  })
  connect?: PokemonMovesWhereUniqueInput[] | undefined;
}
