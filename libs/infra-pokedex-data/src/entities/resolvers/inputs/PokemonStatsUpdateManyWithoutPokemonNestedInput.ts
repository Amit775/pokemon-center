import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonStatsCreateManyPokemonInputEnvelope } from "../inputs/PokemonStatsCreateManyPokemonInputEnvelope";
import { PokemonStatsCreateOrConnectWithoutPokemonInput } from "../inputs/PokemonStatsCreateOrConnectWithoutPokemonInput";
import { PokemonStatsCreateWithoutPokemonInput } from "../inputs/PokemonStatsCreateWithoutPokemonInput";
import { PokemonStatsScalarWhereInput } from "../inputs/PokemonStatsScalarWhereInput";
import { PokemonStatsUpdateManyWithWhereWithoutPokemonInput } from "../inputs/PokemonStatsUpdateManyWithWhereWithoutPokemonInput";
import { PokemonStatsUpdateWithWhereUniqueWithoutPokemonInput } from "../inputs/PokemonStatsUpdateWithWhereUniqueWithoutPokemonInput";
import { PokemonStatsUpsertWithWhereUniqueWithoutPokemonInput } from "../inputs/PokemonStatsUpsertWithWhereUniqueWithoutPokemonInput";
import { PokemonStatsWhereUniqueInput } from "../inputs/PokemonStatsWhereUniqueInput";

@TypeGraphQL.InputType("PokemonStatsUpdateManyWithoutPokemonNestedInput", {})
export class PokemonStatsUpdateManyWithoutPokemonNestedInput {
  @TypeGraphQL.Field(_type => [PokemonStatsCreateWithoutPokemonInput], {
    nullable: true
  })
  create?: PokemonStatsCreateWithoutPokemonInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonStatsCreateOrConnectWithoutPokemonInput], {
    nullable: true
  })
  connectOrCreate?: PokemonStatsCreateOrConnectWithoutPokemonInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonStatsUpsertWithWhereUniqueWithoutPokemonInput], {
    nullable: true
  })
  upsert?: PokemonStatsUpsertWithWhereUniqueWithoutPokemonInput[] | undefined;

  @TypeGraphQL.Field(_type => PokemonStatsCreateManyPokemonInputEnvelope, {
    nullable: true
  })
  createMany?: PokemonStatsCreateManyPokemonInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [PokemonStatsUpdateWithWhereUniqueWithoutPokemonInput], {
    nullable: true
  })
  update?: PokemonStatsUpdateWithWhereUniqueWithoutPokemonInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonStatsUpdateManyWithWhereWithoutPokemonInput], {
    nullable: true
  })
  updateMany?: PokemonStatsUpdateManyWithWhereWithoutPokemonInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonStatsScalarWhereInput], {
    nullable: true
  })
  deleteMany?: PokemonStatsScalarWhereInput[] | undefined;
}
