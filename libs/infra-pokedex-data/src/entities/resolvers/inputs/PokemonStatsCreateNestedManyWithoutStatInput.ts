import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonStatsCreateManyStatInputEnvelope } from "../inputs/PokemonStatsCreateManyStatInputEnvelope";
import { PokemonStatsCreateOrConnectWithoutStatInput } from "../inputs/PokemonStatsCreateOrConnectWithoutStatInput";
import { PokemonStatsCreateWithoutStatInput } from "../inputs/PokemonStatsCreateWithoutStatInput";
import { PokemonStatsWhereUniqueInput } from "../inputs/PokemonStatsWhereUniqueInput";

@TypeGraphQL.InputType("PokemonStatsCreateNestedManyWithoutStatInput", {})
export class PokemonStatsCreateNestedManyWithoutStatInput {
  @TypeGraphQL.Field(_type => [PokemonStatsCreateWithoutStatInput], {
    nullable: true
  })
  create?: PokemonStatsCreateWithoutStatInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonStatsCreateOrConnectWithoutStatInput], {
    nullable: true
  })
  connectOrCreate?: PokemonStatsCreateOrConnectWithoutStatInput[] | undefined;

  @TypeGraphQL.Field(_type => PokemonStatsCreateManyStatInputEnvelope, {
    nullable: true
  })
  createMany?: PokemonStatsCreateManyStatInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PokemonStatsWhereUniqueInput], {
    nullable: true
  })
  connect?: PokemonStatsWhereUniqueInput[] | undefined;
}
