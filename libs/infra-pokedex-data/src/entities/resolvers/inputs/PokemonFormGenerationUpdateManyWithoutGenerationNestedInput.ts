import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonFormGenerationCreateManyGenerationInputEnvelope } from "../inputs/PokemonFormGenerationCreateManyGenerationInputEnvelope";
import { PokemonFormGenerationCreateOrConnectWithoutGenerationInput } from "../inputs/PokemonFormGenerationCreateOrConnectWithoutGenerationInput";
import { PokemonFormGenerationCreateWithoutGenerationInput } from "../inputs/PokemonFormGenerationCreateWithoutGenerationInput";
import { PokemonFormGenerationScalarWhereInput } from "../inputs/PokemonFormGenerationScalarWhereInput";
import { PokemonFormGenerationUpdateManyWithWhereWithoutGenerationInput } from "../inputs/PokemonFormGenerationUpdateManyWithWhereWithoutGenerationInput";
import { PokemonFormGenerationUpdateWithWhereUniqueWithoutGenerationInput } from "../inputs/PokemonFormGenerationUpdateWithWhereUniqueWithoutGenerationInput";
import { PokemonFormGenerationUpsertWithWhereUniqueWithoutGenerationInput } from "../inputs/PokemonFormGenerationUpsertWithWhereUniqueWithoutGenerationInput";
import { PokemonFormGenerationWhereUniqueInput } from "../inputs/PokemonFormGenerationWhereUniqueInput";

@TypeGraphQL.InputType("PokemonFormGenerationUpdateManyWithoutGenerationNestedInput", {})
export class PokemonFormGenerationUpdateManyWithoutGenerationNestedInput {
  @TypeGraphQL.Field(_type => [PokemonFormGenerationCreateWithoutGenerationInput], {
    nullable: true
  })
  create?: PokemonFormGenerationCreateWithoutGenerationInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonFormGenerationCreateOrConnectWithoutGenerationInput], {
    nullable: true
  })
  connectOrCreate?: PokemonFormGenerationCreateOrConnectWithoutGenerationInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonFormGenerationUpsertWithWhereUniqueWithoutGenerationInput], {
    nullable: true
  })
  upsert?: PokemonFormGenerationUpsertWithWhereUniqueWithoutGenerationInput[] | undefined;

  @TypeGraphQL.Field(_type => PokemonFormGenerationCreateManyGenerationInputEnvelope, {
    nullable: true
  })
  createMany?: PokemonFormGenerationCreateManyGenerationInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PokemonFormGenerationWhereUniqueInput], {
    nullable: true
  })
  set?: PokemonFormGenerationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonFormGenerationWhereUniqueInput], {
    nullable: true
  })
  disconnect?: PokemonFormGenerationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonFormGenerationWhereUniqueInput], {
    nullable: true
  })
  delete?: PokemonFormGenerationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonFormGenerationWhereUniqueInput], {
    nullable: true
  })
  connect?: PokemonFormGenerationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonFormGenerationUpdateWithWhereUniqueWithoutGenerationInput], {
    nullable: true
  })
  update?: PokemonFormGenerationUpdateWithWhereUniqueWithoutGenerationInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonFormGenerationUpdateManyWithWhereWithoutGenerationInput], {
    nullable: true
  })
  updateMany?: PokemonFormGenerationUpdateManyWithWhereWithoutGenerationInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonFormGenerationScalarWhereInput], {
    nullable: true
  })
  deleteMany?: PokemonFormGenerationScalarWhereInput[] | undefined;
}
