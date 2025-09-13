import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationGameIndicesCreateManyGenerationInputEnvelope } from "../inputs/LocationGameIndicesCreateManyGenerationInputEnvelope";
import { LocationGameIndicesCreateOrConnectWithoutGenerationInput } from "../inputs/LocationGameIndicesCreateOrConnectWithoutGenerationInput";
import { LocationGameIndicesCreateWithoutGenerationInput } from "../inputs/LocationGameIndicesCreateWithoutGenerationInput";
import { LocationGameIndicesScalarWhereInput } from "../inputs/LocationGameIndicesScalarWhereInput";
import { LocationGameIndicesUpdateManyWithWhereWithoutGenerationInput } from "../inputs/LocationGameIndicesUpdateManyWithWhereWithoutGenerationInput";
import { LocationGameIndicesUpdateWithWhereUniqueWithoutGenerationInput } from "../inputs/LocationGameIndicesUpdateWithWhereUniqueWithoutGenerationInput";
import { LocationGameIndicesUpsertWithWhereUniqueWithoutGenerationInput } from "../inputs/LocationGameIndicesUpsertWithWhereUniqueWithoutGenerationInput";
import { LocationGameIndicesWhereUniqueInput } from "../inputs/LocationGameIndicesWhereUniqueInput";

@TypeGraphQL.InputType("LocationGameIndicesUpdateManyWithoutGenerationNestedInput", {})
export class LocationGameIndicesUpdateManyWithoutGenerationNestedInput {
  @TypeGraphQL.Field(_type => [LocationGameIndicesCreateWithoutGenerationInput], {
    nullable: true
  })
  create?: LocationGameIndicesCreateWithoutGenerationInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocationGameIndicesCreateOrConnectWithoutGenerationInput], {
    nullable: true
  })
  connectOrCreate?: LocationGameIndicesCreateOrConnectWithoutGenerationInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocationGameIndicesUpsertWithWhereUniqueWithoutGenerationInput], {
    nullable: true
  })
  upsert?: LocationGameIndicesUpsertWithWhereUniqueWithoutGenerationInput[] | undefined;

  @TypeGraphQL.Field(_type => LocationGameIndicesCreateManyGenerationInputEnvelope, {
    nullable: true
  })
  createMany?: LocationGameIndicesCreateManyGenerationInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [LocationGameIndicesWhereUniqueInput], {
    nullable: true
  })
  set?: LocationGameIndicesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocationGameIndicesWhereUniqueInput], {
    nullable: true
  })
  disconnect?: LocationGameIndicesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocationGameIndicesWhereUniqueInput], {
    nullable: true
  })
  delete?: LocationGameIndicesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocationGameIndicesWhereUniqueInput], {
    nullable: true
  })
  connect?: LocationGameIndicesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocationGameIndicesUpdateWithWhereUniqueWithoutGenerationInput], {
    nullable: true
  })
  update?: LocationGameIndicesUpdateWithWhereUniqueWithoutGenerationInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocationGameIndicesUpdateManyWithWhereWithoutGenerationInput], {
    nullable: true
  })
  updateMany?: LocationGameIndicesUpdateManyWithWhereWithoutGenerationInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocationGameIndicesScalarWhereInput], {
    nullable: true
  })
  deleteMany?: LocationGameIndicesScalarWhereInput[] | undefined;
}
