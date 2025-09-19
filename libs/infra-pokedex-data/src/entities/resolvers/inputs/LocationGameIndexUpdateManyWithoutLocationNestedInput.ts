import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationGameIndexCreateManyLocationInputEnvelope } from "../inputs/LocationGameIndexCreateManyLocationInputEnvelope";
import { LocationGameIndexCreateOrConnectWithoutLocationInput } from "../inputs/LocationGameIndexCreateOrConnectWithoutLocationInput";
import { LocationGameIndexCreateWithoutLocationInput } from "../inputs/LocationGameIndexCreateWithoutLocationInput";
import { LocationGameIndexScalarWhereInput } from "../inputs/LocationGameIndexScalarWhereInput";
import { LocationGameIndexUpdateManyWithWhereWithoutLocationInput } from "../inputs/LocationGameIndexUpdateManyWithWhereWithoutLocationInput";
import { LocationGameIndexUpdateWithWhereUniqueWithoutLocationInput } from "../inputs/LocationGameIndexUpdateWithWhereUniqueWithoutLocationInput";
import { LocationGameIndexUpsertWithWhereUniqueWithoutLocationInput } from "../inputs/LocationGameIndexUpsertWithWhereUniqueWithoutLocationInput";
import { LocationGameIndexWhereUniqueInput } from "../inputs/LocationGameIndexWhereUniqueInput";

@TypeGraphQL.InputType("LocationGameIndexUpdateManyWithoutLocationNestedInput", {})
export class LocationGameIndexUpdateManyWithoutLocationNestedInput {
  @TypeGraphQL.Field(_type => [LocationGameIndexCreateWithoutLocationInput], {
    nullable: true
  })
  create?: LocationGameIndexCreateWithoutLocationInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocationGameIndexCreateOrConnectWithoutLocationInput], {
    nullable: true
  })
  connectOrCreate?: LocationGameIndexCreateOrConnectWithoutLocationInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocationGameIndexUpsertWithWhereUniqueWithoutLocationInput], {
    nullable: true
  })
  upsert?: LocationGameIndexUpsertWithWhereUniqueWithoutLocationInput[] | undefined;

  @TypeGraphQL.Field(_type => LocationGameIndexCreateManyLocationInputEnvelope, {
    nullable: true
  })
  createMany?: LocationGameIndexCreateManyLocationInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [LocationGameIndexUpdateWithWhereUniqueWithoutLocationInput], {
    nullable: true
  })
  update?: LocationGameIndexUpdateWithWhereUniqueWithoutLocationInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocationGameIndexUpdateManyWithWhereWithoutLocationInput], {
    nullable: true
  })
  updateMany?: LocationGameIndexUpdateManyWithWhereWithoutLocationInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocationGameIndexScalarWhereInput], {
    nullable: true
  })
  deleteMany?: LocationGameIndexScalarWhereInput[] | undefined;
}
