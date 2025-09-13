import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonMovesCreateManyVersionGroupInputEnvelope } from "../inputs/PokemonMovesCreateManyVersionGroupInputEnvelope";
import { PokemonMovesCreateOrConnectWithoutVersionGroupInput } from "../inputs/PokemonMovesCreateOrConnectWithoutVersionGroupInput";
import { PokemonMovesCreateWithoutVersionGroupInput } from "../inputs/PokemonMovesCreateWithoutVersionGroupInput";
import { PokemonMovesScalarWhereInput } from "../inputs/PokemonMovesScalarWhereInput";
import { PokemonMovesUpdateManyWithWhereWithoutVersionGroupInput } from "../inputs/PokemonMovesUpdateManyWithWhereWithoutVersionGroupInput";
import { PokemonMovesUpdateWithWhereUniqueWithoutVersionGroupInput } from "../inputs/PokemonMovesUpdateWithWhereUniqueWithoutVersionGroupInput";
import { PokemonMovesUpsertWithWhereUniqueWithoutVersionGroupInput } from "../inputs/PokemonMovesUpsertWithWhereUniqueWithoutVersionGroupInput";
import { PokemonMovesWhereUniqueInput } from "../inputs/PokemonMovesWhereUniqueInput";

@TypeGraphQL.InputType("PokemonMovesUpdateManyWithoutVersionGroupNestedInput", {})
export class PokemonMovesUpdateManyWithoutVersionGroupNestedInput {
  @TypeGraphQL.Field(_type => [PokemonMovesCreateWithoutVersionGroupInput], {
    nullable: true
  })
  create?: PokemonMovesCreateWithoutVersionGroupInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonMovesCreateOrConnectWithoutVersionGroupInput], {
    nullable: true
  })
  connectOrCreate?: PokemonMovesCreateOrConnectWithoutVersionGroupInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonMovesUpsertWithWhereUniqueWithoutVersionGroupInput], {
    nullable: true
  })
  upsert?: PokemonMovesUpsertWithWhereUniqueWithoutVersionGroupInput[] | undefined;

  @TypeGraphQL.Field(_type => PokemonMovesCreateManyVersionGroupInputEnvelope, {
    nullable: true
  })
  createMany?: PokemonMovesCreateManyVersionGroupInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PokemonMovesWhereUniqueInput], {
    nullable: true
  })
  set?: PokemonMovesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonMovesWhereUniqueInput], {
    nullable: true
  })
  disconnect?: PokemonMovesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonMovesWhereUniqueInput], {
    nullable: true
  })
  delete?: PokemonMovesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonMovesWhereUniqueInput], {
    nullable: true
  })
  connect?: PokemonMovesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonMovesUpdateWithWhereUniqueWithoutVersionGroupInput], {
    nullable: true
  })
  update?: PokemonMovesUpdateWithWhereUniqueWithoutVersionGroupInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonMovesUpdateManyWithWhereWithoutVersionGroupInput], {
    nullable: true
  })
  updateMany?: PokemonMovesUpdateManyWithWhereWithoutVersionGroupInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonMovesScalarWhereInput], {
    nullable: true
  })
  deleteMany?: PokemonMovesScalarWhereInput[] | undefined;
}
