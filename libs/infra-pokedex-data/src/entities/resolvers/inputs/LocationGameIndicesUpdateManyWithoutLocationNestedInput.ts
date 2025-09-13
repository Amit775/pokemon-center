import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationGameIndicesCreateManyLocationInputEnvelope } from "../inputs/LocationGameIndicesCreateManyLocationInputEnvelope";
import { LocationGameIndicesCreateOrConnectWithoutLocationInput } from "../inputs/LocationGameIndicesCreateOrConnectWithoutLocationInput";
import { LocationGameIndicesCreateWithoutLocationInput } from "../inputs/LocationGameIndicesCreateWithoutLocationInput";
import { LocationGameIndicesScalarWhereInput } from "../inputs/LocationGameIndicesScalarWhereInput";
import { LocationGameIndicesUpdateManyWithWhereWithoutLocationInput } from "../inputs/LocationGameIndicesUpdateManyWithWhereWithoutLocationInput";
import { LocationGameIndicesUpdateWithWhereUniqueWithoutLocationInput } from "../inputs/LocationGameIndicesUpdateWithWhereUniqueWithoutLocationInput";
import { LocationGameIndicesUpsertWithWhereUniqueWithoutLocationInput } from "../inputs/LocationGameIndicesUpsertWithWhereUniqueWithoutLocationInput";
import { LocationGameIndicesWhereUniqueInput } from "../inputs/LocationGameIndicesWhereUniqueInput";

@TypeGraphQL.InputType("LocationGameIndicesUpdateManyWithoutLocationNestedInput", {})
export class LocationGameIndicesUpdateManyWithoutLocationNestedInput {
  @TypeGraphQL.Field(_type => [LocationGameIndicesCreateWithoutLocationInput], {
    nullable: true
  })
  create?: LocationGameIndicesCreateWithoutLocationInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocationGameIndicesCreateOrConnectWithoutLocationInput], {
    nullable: true
  })
  connectOrCreate?: LocationGameIndicesCreateOrConnectWithoutLocationInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocationGameIndicesUpsertWithWhereUniqueWithoutLocationInput], {
    nullable: true
  })
  upsert?: LocationGameIndicesUpsertWithWhereUniqueWithoutLocationInput[] | undefined;

  @TypeGraphQL.Field(_type => LocationGameIndicesCreateManyLocationInputEnvelope, {
    nullable: true
  })
  createMany?: LocationGameIndicesCreateManyLocationInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [LocationGameIndicesUpdateWithWhereUniqueWithoutLocationInput], {
    nullable: true
  })
  update?: LocationGameIndicesUpdateWithWhereUniqueWithoutLocationInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocationGameIndicesUpdateManyWithWhereWithoutLocationInput], {
    nullable: true
  })
  updateMany?: LocationGameIndicesUpdateManyWithWhereWithoutLocationInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocationGameIndicesScalarWhereInput], {
    nullable: true
  })
  deleteMany?: LocationGameIndicesScalarWhereInput[] | undefined;
}
