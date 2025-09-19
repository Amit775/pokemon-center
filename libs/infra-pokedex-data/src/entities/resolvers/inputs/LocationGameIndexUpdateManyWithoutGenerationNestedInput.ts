import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationGameIndexCreateManyGenerationInputEnvelope } from "../inputs/LocationGameIndexCreateManyGenerationInputEnvelope";
import { LocationGameIndexCreateOrConnectWithoutGenerationInput } from "../inputs/LocationGameIndexCreateOrConnectWithoutGenerationInput";
import { LocationGameIndexCreateWithoutGenerationInput } from "../inputs/LocationGameIndexCreateWithoutGenerationInput";
import { LocationGameIndexScalarWhereInput } from "../inputs/LocationGameIndexScalarWhereInput";
import { LocationGameIndexUpdateManyWithWhereWithoutGenerationInput } from "../inputs/LocationGameIndexUpdateManyWithWhereWithoutGenerationInput";
import { LocationGameIndexUpdateWithWhereUniqueWithoutGenerationInput } from "../inputs/LocationGameIndexUpdateWithWhereUniqueWithoutGenerationInput";
import { LocationGameIndexUpsertWithWhereUniqueWithoutGenerationInput } from "../inputs/LocationGameIndexUpsertWithWhereUniqueWithoutGenerationInput";
import { LocationGameIndexWhereUniqueInput } from "../inputs/LocationGameIndexWhereUniqueInput";

@TypeGraphQL.InputType("LocationGameIndexUpdateManyWithoutGenerationNestedInput", {})
export class LocationGameIndexUpdateManyWithoutGenerationNestedInput {
  @TypeGraphQL.Field(_type => [LocationGameIndexCreateWithoutGenerationInput], {
    nullable: true
  })
  create?: LocationGameIndexCreateWithoutGenerationInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocationGameIndexCreateOrConnectWithoutGenerationInput], {
    nullable: true
  })
  connectOrCreate?: LocationGameIndexCreateOrConnectWithoutGenerationInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocationGameIndexUpsertWithWhereUniqueWithoutGenerationInput], {
    nullable: true
  })
  upsert?: LocationGameIndexUpsertWithWhereUniqueWithoutGenerationInput[] | undefined;

  @TypeGraphQL.Field(_type => LocationGameIndexCreateManyGenerationInputEnvelope, {
    nullable: true
  })
  createMany?: LocationGameIndexCreateManyGenerationInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [LocationGameIndexWhereUniqueInput], {
    nullable: true
  })
  set?: LocationGameIndexWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocationGameIndexWhereUniqueInput], {
    nullable: true
  })
  disconnect?: LocationGameIndexWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocationGameIndexWhereUniqueInput], {
    nullable: true
  })
  delete?: LocationGameIndexWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocationGameIndexWhereUniqueInput], {
    nullable: true
  })
  connect?: LocationGameIndexWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocationGameIndexUpdateWithWhereUniqueWithoutGenerationInput], {
    nullable: true
  })
  update?: LocationGameIndexUpdateWithWhereUniqueWithoutGenerationInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocationGameIndexUpdateManyWithWhereWithoutGenerationInput], {
    nullable: true
  })
  updateMany?: LocationGameIndexUpdateManyWithWhereWithoutGenerationInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocationGameIndexScalarWhereInput], {
    nullable: true
  })
  deleteMany?: LocationGameIndexScalarWhereInput[] | undefined;
}
