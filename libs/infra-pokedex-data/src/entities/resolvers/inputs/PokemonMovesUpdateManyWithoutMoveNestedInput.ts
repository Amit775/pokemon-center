import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonMovesCreateManyMoveInputEnvelope } from "../inputs/PokemonMovesCreateManyMoveInputEnvelope";
import { PokemonMovesCreateOrConnectWithoutMoveInput } from "../inputs/PokemonMovesCreateOrConnectWithoutMoveInput";
import { PokemonMovesCreateWithoutMoveInput } from "../inputs/PokemonMovesCreateWithoutMoveInput";
import { PokemonMovesScalarWhereInput } from "../inputs/PokemonMovesScalarWhereInput";
import { PokemonMovesUpdateManyWithWhereWithoutMoveInput } from "../inputs/PokemonMovesUpdateManyWithWhereWithoutMoveInput";
import { PokemonMovesUpdateWithWhereUniqueWithoutMoveInput } from "../inputs/PokemonMovesUpdateWithWhereUniqueWithoutMoveInput";
import { PokemonMovesUpsertWithWhereUniqueWithoutMoveInput } from "../inputs/PokemonMovesUpsertWithWhereUniqueWithoutMoveInput";
import { PokemonMovesWhereUniqueInput } from "../inputs/PokemonMovesWhereUniqueInput";

@TypeGraphQL.InputType("PokemonMovesUpdateManyWithoutMoveNestedInput", {})
export class PokemonMovesUpdateManyWithoutMoveNestedInput {
  @TypeGraphQL.Field(_type => [PokemonMovesCreateWithoutMoveInput], {
    nullable: true
  })
  create?: PokemonMovesCreateWithoutMoveInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonMovesCreateOrConnectWithoutMoveInput], {
    nullable: true
  })
  connectOrCreate?: PokemonMovesCreateOrConnectWithoutMoveInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonMovesUpsertWithWhereUniqueWithoutMoveInput], {
    nullable: true
  })
  upsert?: PokemonMovesUpsertWithWhereUniqueWithoutMoveInput[] | undefined;

  @TypeGraphQL.Field(_type => PokemonMovesCreateManyMoveInputEnvelope, {
    nullable: true
  })
  createMany?: PokemonMovesCreateManyMoveInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [PokemonMovesUpdateWithWhereUniqueWithoutMoveInput], {
    nullable: true
  })
  update?: PokemonMovesUpdateWithWhereUniqueWithoutMoveInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonMovesUpdateManyWithWhereWithoutMoveInput], {
    nullable: true
  })
  updateMany?: PokemonMovesUpdateManyWithWhereWithoutMoveInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonMovesScalarWhereInput], {
    nullable: true
  })
  deleteMany?: PokemonMovesScalarWhereInput[] | undefined;
}
