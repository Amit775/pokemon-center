import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonMoveCreateManyVersionGroupInputEnvelope } from "../inputs/PokemonMoveCreateManyVersionGroupInputEnvelope";
import { PokemonMoveCreateOrConnectWithoutVersionGroupInput } from "../inputs/PokemonMoveCreateOrConnectWithoutVersionGroupInput";
import { PokemonMoveCreateWithoutVersionGroupInput } from "../inputs/PokemonMoveCreateWithoutVersionGroupInput";
import { PokemonMoveWhereUniqueInput } from "../inputs/PokemonMoveWhereUniqueInput";

@TypeGraphQL.InputType("PokemonMoveCreateNestedManyWithoutVersionGroupInput", {})
export class PokemonMoveCreateNestedManyWithoutVersionGroupInput {
  @TypeGraphQL.Field(_type => [PokemonMoveCreateWithoutVersionGroupInput], {
    nullable: true
  })
  create?: PokemonMoveCreateWithoutVersionGroupInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonMoveCreateOrConnectWithoutVersionGroupInput], {
    nullable: true
  })
  connectOrCreate?: PokemonMoveCreateOrConnectWithoutVersionGroupInput[] | undefined;

  @TypeGraphQL.Field(_type => PokemonMoveCreateManyVersionGroupInputEnvelope, {
    nullable: true
  })
  createMany?: PokemonMoveCreateManyVersionGroupInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PokemonMoveWhereUniqueInput], {
    nullable: true
  })
  connect?: PokemonMoveWhereUniqueInput[] | undefined;
}
