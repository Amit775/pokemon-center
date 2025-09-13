import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonStatsCreateManyStatInputEnvelope } from "../inputs/PokemonStatsCreateManyStatInputEnvelope";
import { PokemonStatsCreateOrConnectWithoutStatInput } from "../inputs/PokemonStatsCreateOrConnectWithoutStatInput";
import { PokemonStatsCreateWithoutStatInput } from "../inputs/PokemonStatsCreateWithoutStatInput";
import { PokemonStatsScalarWhereInput } from "../inputs/PokemonStatsScalarWhereInput";
import { PokemonStatsUpdateManyWithWhereWithoutStatInput } from "../inputs/PokemonStatsUpdateManyWithWhereWithoutStatInput";
import { PokemonStatsUpdateWithWhereUniqueWithoutStatInput } from "../inputs/PokemonStatsUpdateWithWhereUniqueWithoutStatInput";
import { PokemonStatsUpsertWithWhereUniqueWithoutStatInput } from "../inputs/PokemonStatsUpsertWithWhereUniqueWithoutStatInput";
import { PokemonStatsWhereUniqueInput } from "../inputs/PokemonStatsWhereUniqueInput";

@TypeGraphQL.InputType("PokemonStatsUpdateManyWithoutStatNestedInput", {})
export class PokemonStatsUpdateManyWithoutStatNestedInput {
  @TypeGraphQL.Field(_type => [PokemonStatsCreateWithoutStatInput], {
    nullable: true
  })
  create?: PokemonStatsCreateWithoutStatInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonStatsCreateOrConnectWithoutStatInput], {
    nullable: true
  })
  connectOrCreate?: PokemonStatsCreateOrConnectWithoutStatInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonStatsUpsertWithWhereUniqueWithoutStatInput], {
    nullable: true
  })
  upsert?: PokemonStatsUpsertWithWhereUniqueWithoutStatInput[] | undefined;

  @TypeGraphQL.Field(_type => PokemonStatsCreateManyStatInputEnvelope, {
    nullable: true
  })
  createMany?: PokemonStatsCreateManyStatInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PokemonStatsWhereUniqueInput], {
    nullable: true
  })
  set?: PokemonStatsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonStatsWhereUniqueInput], {
    nullable: true
  })
  disconnect?: PokemonStatsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonStatsWhereUniqueInput], {
    nullable: true
  })
  delete?: PokemonStatsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonStatsWhereUniqueInput], {
    nullable: true
  })
  connect?: PokemonStatsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonStatsUpdateWithWhereUniqueWithoutStatInput], {
    nullable: true
  })
  update?: PokemonStatsUpdateWithWhereUniqueWithoutStatInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonStatsUpdateManyWithWhereWithoutStatInput], {
    nullable: true
  })
  updateMany?: PokemonStatsUpdateManyWithWhereWithoutStatInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonStatsScalarWhereInput], {
    nullable: true
  })
  deleteMany?: PokemonStatsScalarWhereInput[] | undefined;
}
