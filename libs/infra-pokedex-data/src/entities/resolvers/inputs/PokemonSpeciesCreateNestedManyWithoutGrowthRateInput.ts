import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonSpeciesCreateManyGrowthRateInputEnvelope } from "../inputs/PokemonSpeciesCreateManyGrowthRateInputEnvelope";
import { PokemonSpeciesCreateOrConnectWithoutGrowthRateInput } from "../inputs/PokemonSpeciesCreateOrConnectWithoutGrowthRateInput";
import { PokemonSpeciesCreateWithoutGrowthRateInput } from "../inputs/PokemonSpeciesCreateWithoutGrowthRateInput";
import { PokemonSpeciesWhereUniqueInput } from "../inputs/PokemonSpeciesWhereUniqueInput";

@TypeGraphQL.InputType("PokemonSpeciesCreateNestedManyWithoutGrowthRateInput", {})
export class PokemonSpeciesCreateNestedManyWithoutGrowthRateInput {
  @TypeGraphQL.Field(_type => [PokemonSpeciesCreateWithoutGrowthRateInput], {
    nullable: true
  })
  create?: PokemonSpeciesCreateWithoutGrowthRateInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonSpeciesCreateOrConnectWithoutGrowthRateInput], {
    nullable: true
  })
  connectOrCreate?: PokemonSpeciesCreateOrConnectWithoutGrowthRateInput[] | undefined;

  @TypeGraphQL.Field(_type => PokemonSpeciesCreateManyGrowthRateInputEnvelope, {
    nullable: true
  })
  createMany?: PokemonSpeciesCreateManyGrowthRateInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PokemonSpeciesWhereUniqueInput], {
    nullable: true
  })
  connect?: PokemonSpeciesWhereUniqueInput[] | undefined;
}
