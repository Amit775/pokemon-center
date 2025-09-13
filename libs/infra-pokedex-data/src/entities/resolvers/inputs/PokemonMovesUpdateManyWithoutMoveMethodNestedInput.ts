import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonMovesCreateManyMoveMethodInputEnvelope } from "../inputs/PokemonMovesCreateManyMoveMethodInputEnvelope";
import { PokemonMovesCreateOrConnectWithoutMoveMethodInput } from "../inputs/PokemonMovesCreateOrConnectWithoutMoveMethodInput";
import { PokemonMovesCreateWithoutMoveMethodInput } from "../inputs/PokemonMovesCreateWithoutMoveMethodInput";
import { PokemonMovesScalarWhereInput } from "../inputs/PokemonMovesScalarWhereInput";
import { PokemonMovesUpdateManyWithWhereWithoutMoveMethodInput } from "../inputs/PokemonMovesUpdateManyWithWhereWithoutMoveMethodInput";
import { PokemonMovesUpdateWithWhereUniqueWithoutMoveMethodInput } from "../inputs/PokemonMovesUpdateWithWhereUniqueWithoutMoveMethodInput";
import { PokemonMovesUpsertWithWhereUniqueWithoutMoveMethodInput } from "../inputs/PokemonMovesUpsertWithWhereUniqueWithoutMoveMethodInput";
import { PokemonMovesWhereUniqueInput } from "../inputs/PokemonMovesWhereUniqueInput";

@TypeGraphQL.InputType("PokemonMovesUpdateManyWithoutMoveMethodNestedInput", {})
export class PokemonMovesUpdateManyWithoutMoveMethodNestedInput {
  @TypeGraphQL.Field(_type => [PokemonMovesCreateWithoutMoveMethodInput], {
    nullable: true
  })
  create?: PokemonMovesCreateWithoutMoveMethodInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonMovesCreateOrConnectWithoutMoveMethodInput], {
    nullable: true
  })
  connectOrCreate?: PokemonMovesCreateOrConnectWithoutMoveMethodInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonMovesUpsertWithWhereUniqueWithoutMoveMethodInput], {
    nullable: true
  })
  upsert?: PokemonMovesUpsertWithWhereUniqueWithoutMoveMethodInput[] | undefined;

  @TypeGraphQL.Field(_type => PokemonMovesCreateManyMoveMethodInputEnvelope, {
    nullable: true
  })
  createMany?: PokemonMovesCreateManyMoveMethodInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [PokemonMovesUpdateWithWhereUniqueWithoutMoveMethodInput], {
    nullable: true
  })
  update?: PokemonMovesUpdateWithWhereUniqueWithoutMoveMethodInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonMovesUpdateManyWithWhereWithoutMoveMethodInput], {
    nullable: true
  })
  updateMany?: PokemonMovesUpdateManyWithWhereWithoutMoveMethodInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonMovesScalarWhereInput], {
    nullable: true
  })
  deleteMany?: PokemonMovesScalarWhereInput[] | undefined;
}
