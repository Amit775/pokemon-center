import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonStatsCreateManyPokemonInputEnvelope } from "../inputs/PokemonStatsCreateManyPokemonInputEnvelope";
import { PokemonStatsCreateOrConnectWithoutPokemonInput } from "../inputs/PokemonStatsCreateOrConnectWithoutPokemonInput";
import { PokemonStatsCreateWithoutPokemonInput } from "../inputs/PokemonStatsCreateWithoutPokemonInput";
import { PokemonStatsWhereUniqueInput } from "../inputs/PokemonStatsWhereUniqueInput";

@TypeGraphQL.InputType("PokemonStatsCreateNestedManyWithoutPokemonInput", {})
export class PokemonStatsCreateNestedManyWithoutPokemonInput {
  @TypeGraphQL.Field(_type => [PokemonStatsCreateWithoutPokemonInput], {
    nullable: true
  })
  create?: PokemonStatsCreateWithoutPokemonInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonStatsCreateOrConnectWithoutPokemonInput], {
    nullable: true
  })
  connectOrCreate?: PokemonStatsCreateOrConnectWithoutPokemonInput[] | undefined;

  @TypeGraphQL.Field(_type => PokemonStatsCreateManyPokemonInputEnvelope, {
    nullable: true
  })
  createMany?: PokemonStatsCreateManyPokemonInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PokemonStatsWhereUniqueInput], {
    nullable: true
  })
  connect?: PokemonStatsWhereUniqueInput[] | undefined;
}
