import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonMoveCreateManyVersionGroupInputEnvelope } from "../inputs/PokemonMoveCreateManyVersionGroupInputEnvelope";
import { PokemonMoveCreateOrConnectWithoutVersionGroupInput } from "../inputs/PokemonMoveCreateOrConnectWithoutVersionGroupInput";
import { PokemonMoveCreateWithoutVersionGroupInput } from "../inputs/PokemonMoveCreateWithoutVersionGroupInput";
import { PokemonMoveScalarWhereInput } from "../inputs/PokemonMoveScalarWhereInput";
import { PokemonMoveUpdateManyWithWhereWithoutVersionGroupInput } from "../inputs/PokemonMoveUpdateManyWithWhereWithoutVersionGroupInput";
import { PokemonMoveUpdateWithWhereUniqueWithoutVersionGroupInput } from "../inputs/PokemonMoveUpdateWithWhereUniqueWithoutVersionGroupInput";
import { PokemonMoveUpsertWithWhereUniqueWithoutVersionGroupInput } from "../inputs/PokemonMoveUpsertWithWhereUniqueWithoutVersionGroupInput";
import { PokemonMoveWhereUniqueInput } from "../inputs/PokemonMoveWhereUniqueInput";

@TypeGraphQL.InputType("PokemonMoveUpdateManyWithoutVersionGroupNestedInput", {})
export class PokemonMoveUpdateManyWithoutVersionGroupNestedInput {
  @TypeGraphQL.Field(_type => [PokemonMoveCreateWithoutVersionGroupInput], {
    nullable: true
  })
  create?: PokemonMoveCreateWithoutVersionGroupInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonMoveCreateOrConnectWithoutVersionGroupInput], {
    nullable: true
  })
  connectOrCreate?: PokemonMoveCreateOrConnectWithoutVersionGroupInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonMoveUpsertWithWhereUniqueWithoutVersionGroupInput], {
    nullable: true
  })
  upsert?: PokemonMoveUpsertWithWhereUniqueWithoutVersionGroupInput[] | undefined;

  @TypeGraphQL.Field(_type => PokemonMoveCreateManyVersionGroupInputEnvelope, {
    nullable: true
  })
  createMany?: PokemonMoveCreateManyVersionGroupInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PokemonMoveWhereUniqueInput], {
    nullable: true
  })
  set?: PokemonMoveWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonMoveWhereUniqueInput], {
    nullable: true
  })
  disconnect?: PokemonMoveWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonMoveWhereUniqueInput], {
    nullable: true
  })
  delete?: PokemonMoveWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonMoveWhereUniqueInput], {
    nullable: true
  })
  connect?: PokemonMoveWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonMoveUpdateWithWhereUniqueWithoutVersionGroupInput], {
    nullable: true
  })
  update?: PokemonMoveUpdateWithWhereUniqueWithoutVersionGroupInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonMoveUpdateManyWithWhereWithoutVersionGroupInput], {
    nullable: true
  })
  updateMany?: PokemonMoveUpdateManyWithWhereWithoutVersionGroupInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonMoveScalarWhereInput], {
    nullable: true
  })
  deleteMany?: PokemonMoveScalarWhereInput[] | undefined;
}
