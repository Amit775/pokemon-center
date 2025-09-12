import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovesCreateManyGenerationInputEnvelope } from "../inputs/MovesCreateManyGenerationInputEnvelope";
import { MovesCreateOrConnectWithoutGenerationInput } from "../inputs/MovesCreateOrConnectWithoutGenerationInput";
import { MovesCreateWithoutGenerationInput } from "../inputs/MovesCreateWithoutGenerationInput";
import { MovesScalarWhereInput } from "../inputs/MovesScalarWhereInput";
import { MovesUpdateManyWithWhereWithoutGenerationInput } from "../inputs/MovesUpdateManyWithWhereWithoutGenerationInput";
import { MovesUpdateWithWhereUniqueWithoutGenerationInput } from "../inputs/MovesUpdateWithWhereUniqueWithoutGenerationInput";
import { MovesUpsertWithWhereUniqueWithoutGenerationInput } from "../inputs/MovesUpsertWithWhereUniqueWithoutGenerationInput";
import { MovesWhereUniqueInput } from "../inputs/MovesWhereUniqueInput";

@TypeGraphQL.InputType("MovesUpdateManyWithoutGenerationNestedInput", {})
export class MovesUpdateManyWithoutGenerationNestedInput {
  @TypeGraphQL.Field(_type => [MovesCreateWithoutGenerationInput], {
    nullable: true
  })
  create?: MovesCreateWithoutGenerationInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovesCreateOrConnectWithoutGenerationInput], {
    nullable: true
  })
  connectOrCreate?: MovesCreateOrConnectWithoutGenerationInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovesUpsertWithWhereUniqueWithoutGenerationInput], {
    nullable: true
  })
  upsert?: MovesUpsertWithWhereUniqueWithoutGenerationInput[] | undefined;

  @TypeGraphQL.Field(_type => MovesCreateManyGenerationInputEnvelope, {
    nullable: true
  })
  createMany?: MovesCreateManyGenerationInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [MovesWhereUniqueInput], {
    nullable: true
  })
  set?: MovesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovesWhereUniqueInput], {
    nullable: true
  })
  disconnect?: MovesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovesWhereUniqueInput], {
    nullable: true
  })
  delete?: MovesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovesWhereUniqueInput], {
    nullable: true
  })
  connect?: MovesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovesUpdateWithWhereUniqueWithoutGenerationInput], {
    nullable: true
  })
  update?: MovesUpdateWithWhereUniqueWithoutGenerationInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovesUpdateManyWithWhereWithoutGenerationInput], {
    nullable: true
  })
  updateMany?: MovesUpdateManyWithWhereWithoutGenerationInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovesScalarWhereInput], {
    nullable: true
  })
  deleteMany?: MovesScalarWhereInput[] | undefined;
}
