import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonSpeciesCreateManyGenerationInputEnvelope } from "../inputs/PokemonSpeciesCreateManyGenerationInputEnvelope";
import { PokemonSpeciesCreateOrConnectWithoutGenerationInput } from "../inputs/PokemonSpeciesCreateOrConnectWithoutGenerationInput";
import { PokemonSpeciesCreateWithoutGenerationInput } from "../inputs/PokemonSpeciesCreateWithoutGenerationInput";
import { PokemonSpeciesScalarWhereInput } from "../inputs/PokemonSpeciesScalarWhereInput";
import { PokemonSpeciesUpdateManyWithWhereWithoutGenerationInput } from "../inputs/PokemonSpeciesUpdateManyWithWhereWithoutGenerationInput";
import { PokemonSpeciesUpdateWithWhereUniqueWithoutGenerationInput } from "../inputs/PokemonSpeciesUpdateWithWhereUniqueWithoutGenerationInput";
import { PokemonSpeciesUpsertWithWhereUniqueWithoutGenerationInput } from "../inputs/PokemonSpeciesUpsertWithWhereUniqueWithoutGenerationInput";
import { PokemonSpeciesWhereUniqueInput } from "../inputs/PokemonSpeciesWhereUniqueInput";

@TypeGraphQL.InputType("PokemonSpeciesUpdateManyWithoutGenerationNestedInput", {})
export class PokemonSpeciesUpdateManyWithoutGenerationNestedInput {
  @TypeGraphQL.Field(_type => [PokemonSpeciesCreateWithoutGenerationInput], {
    nullable: true
  })
  create?: PokemonSpeciesCreateWithoutGenerationInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonSpeciesCreateOrConnectWithoutGenerationInput], {
    nullable: true
  })
  connectOrCreate?: PokemonSpeciesCreateOrConnectWithoutGenerationInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonSpeciesUpsertWithWhereUniqueWithoutGenerationInput], {
    nullable: true
  })
  upsert?: PokemonSpeciesUpsertWithWhereUniqueWithoutGenerationInput[] | undefined;

  @TypeGraphQL.Field(_type => PokemonSpeciesCreateManyGenerationInputEnvelope, {
    nullable: true
  })
  createMany?: PokemonSpeciesCreateManyGenerationInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [PokemonSpeciesUpdateWithWhereUniqueWithoutGenerationInput], {
    nullable: true
  })
  update?: PokemonSpeciesUpdateWithWhereUniqueWithoutGenerationInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonSpeciesUpdateManyWithWhereWithoutGenerationInput], {
    nullable: true
  })
  updateMany?: PokemonSpeciesUpdateManyWithWhereWithoutGenerationInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonSpeciesScalarWhereInput], {
    nullable: true
  })
  deleteMany?: PokemonSpeciesScalarWhereInput[] | undefined;
}
