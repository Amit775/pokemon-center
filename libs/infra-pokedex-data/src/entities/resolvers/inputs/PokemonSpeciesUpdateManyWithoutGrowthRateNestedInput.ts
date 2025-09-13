import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonSpeciesCreateManyGrowthRateInputEnvelope } from "../inputs/PokemonSpeciesCreateManyGrowthRateInputEnvelope";
import { PokemonSpeciesCreateOrConnectWithoutGrowthRateInput } from "../inputs/PokemonSpeciesCreateOrConnectWithoutGrowthRateInput";
import { PokemonSpeciesCreateWithoutGrowthRateInput } from "../inputs/PokemonSpeciesCreateWithoutGrowthRateInput";
import { PokemonSpeciesScalarWhereInput } from "../inputs/PokemonSpeciesScalarWhereInput";
import { PokemonSpeciesUpdateManyWithWhereWithoutGrowthRateInput } from "../inputs/PokemonSpeciesUpdateManyWithWhereWithoutGrowthRateInput";
import { PokemonSpeciesUpdateWithWhereUniqueWithoutGrowthRateInput } from "../inputs/PokemonSpeciesUpdateWithWhereUniqueWithoutGrowthRateInput";
import { PokemonSpeciesUpsertWithWhereUniqueWithoutGrowthRateInput } from "../inputs/PokemonSpeciesUpsertWithWhereUniqueWithoutGrowthRateInput";
import { PokemonSpeciesWhereUniqueInput } from "../inputs/PokemonSpeciesWhereUniqueInput";

@TypeGraphQL.InputType("PokemonSpeciesUpdateManyWithoutGrowthRateNestedInput", {})
export class PokemonSpeciesUpdateManyWithoutGrowthRateNestedInput {
  @TypeGraphQL.Field(_type => [PokemonSpeciesCreateWithoutGrowthRateInput], {
    nullable: true
  })
  create?: PokemonSpeciesCreateWithoutGrowthRateInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonSpeciesCreateOrConnectWithoutGrowthRateInput], {
    nullable: true
  })
  connectOrCreate?: PokemonSpeciesCreateOrConnectWithoutGrowthRateInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonSpeciesUpsertWithWhereUniqueWithoutGrowthRateInput], {
    nullable: true
  })
  upsert?: PokemonSpeciesUpsertWithWhereUniqueWithoutGrowthRateInput[] | undefined;

  @TypeGraphQL.Field(_type => PokemonSpeciesCreateManyGrowthRateInputEnvelope, {
    nullable: true
  })
  createMany?: PokemonSpeciesCreateManyGrowthRateInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PokemonSpeciesWhereUniqueInput], {
    nullable: true
  })
  set?: PokemonSpeciesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonSpeciesWhereUniqueInput], {
    nullable: true
  })
  disconnect?: PokemonSpeciesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonSpeciesWhereUniqueInput], {
    nullable: true
  })
  delete?: PokemonSpeciesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonSpeciesWhereUniqueInput], {
    nullable: true
  })
  connect?: PokemonSpeciesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonSpeciesUpdateWithWhereUniqueWithoutGrowthRateInput], {
    nullable: true
  })
  update?: PokemonSpeciesUpdateWithWhereUniqueWithoutGrowthRateInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonSpeciesUpdateManyWithWhereWithoutGrowthRateInput], {
    nullable: true
  })
  updateMany?: PokemonSpeciesUpdateManyWithWhereWithoutGrowthRateInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonSpeciesScalarWhereInput], {
    nullable: true
  })
  deleteMany?: PokemonSpeciesScalarWhereInput[] | undefined;
}
