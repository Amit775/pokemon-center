import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonFormGenerationsCreateManyGenerationInputEnvelope } from "../inputs/PokemonFormGenerationsCreateManyGenerationInputEnvelope";
import { PokemonFormGenerationsCreateOrConnectWithoutGenerationInput } from "../inputs/PokemonFormGenerationsCreateOrConnectWithoutGenerationInput";
import { PokemonFormGenerationsCreateWithoutGenerationInput } from "../inputs/PokemonFormGenerationsCreateWithoutGenerationInput";
import { PokemonFormGenerationsScalarWhereInput } from "../inputs/PokemonFormGenerationsScalarWhereInput";
import { PokemonFormGenerationsUpdateManyWithWhereWithoutGenerationInput } from "../inputs/PokemonFormGenerationsUpdateManyWithWhereWithoutGenerationInput";
import { PokemonFormGenerationsUpdateWithWhereUniqueWithoutGenerationInput } from "../inputs/PokemonFormGenerationsUpdateWithWhereUniqueWithoutGenerationInput";
import { PokemonFormGenerationsUpsertWithWhereUniqueWithoutGenerationInput } from "../inputs/PokemonFormGenerationsUpsertWithWhereUniqueWithoutGenerationInput";
import { PokemonFormGenerationsWhereUniqueInput } from "../inputs/PokemonFormGenerationsWhereUniqueInput";

@TypeGraphQL.InputType("PokemonFormGenerationsUpdateManyWithoutGenerationNestedInput", {})
export class PokemonFormGenerationsUpdateManyWithoutGenerationNestedInput {
  @TypeGraphQL.Field(_type => [PokemonFormGenerationsCreateWithoutGenerationInput], {
    nullable: true
  })
  create?: PokemonFormGenerationsCreateWithoutGenerationInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonFormGenerationsCreateOrConnectWithoutGenerationInput], {
    nullable: true
  })
  connectOrCreate?: PokemonFormGenerationsCreateOrConnectWithoutGenerationInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonFormGenerationsUpsertWithWhereUniqueWithoutGenerationInput], {
    nullable: true
  })
  upsert?: PokemonFormGenerationsUpsertWithWhereUniqueWithoutGenerationInput[] | undefined;

  @TypeGraphQL.Field(_type => PokemonFormGenerationsCreateManyGenerationInputEnvelope, {
    nullable: true
  })
  createMany?: PokemonFormGenerationsCreateManyGenerationInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PokemonFormGenerationsWhereUniqueInput], {
    nullable: true
  })
  set?: PokemonFormGenerationsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonFormGenerationsWhereUniqueInput], {
    nullable: true
  })
  disconnect?: PokemonFormGenerationsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonFormGenerationsWhereUniqueInput], {
    nullable: true
  })
  delete?: PokemonFormGenerationsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonFormGenerationsWhereUniqueInput], {
    nullable: true
  })
  connect?: PokemonFormGenerationsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonFormGenerationsUpdateWithWhereUniqueWithoutGenerationInput], {
    nullable: true
  })
  update?: PokemonFormGenerationsUpdateWithWhereUniqueWithoutGenerationInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonFormGenerationsUpdateManyWithWhereWithoutGenerationInput], {
    nullable: true
  })
  updateMany?: PokemonFormGenerationsUpdateManyWithWhereWithoutGenerationInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonFormGenerationsScalarWhereInput], {
    nullable: true
  })
  deleteMany?: PokemonFormGenerationsScalarWhereInput[] | undefined;
}
