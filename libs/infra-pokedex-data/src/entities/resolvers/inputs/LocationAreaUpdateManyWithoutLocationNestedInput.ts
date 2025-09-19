import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationAreaCreateManyLocationInputEnvelope } from "../inputs/LocationAreaCreateManyLocationInputEnvelope";
import { LocationAreaCreateOrConnectWithoutLocationInput } from "../inputs/LocationAreaCreateOrConnectWithoutLocationInput";
import { LocationAreaCreateWithoutLocationInput } from "../inputs/LocationAreaCreateWithoutLocationInput";
import { LocationAreaScalarWhereInput } from "../inputs/LocationAreaScalarWhereInput";
import { LocationAreaUpdateManyWithWhereWithoutLocationInput } from "../inputs/LocationAreaUpdateManyWithWhereWithoutLocationInput";
import { LocationAreaUpdateWithWhereUniqueWithoutLocationInput } from "../inputs/LocationAreaUpdateWithWhereUniqueWithoutLocationInput";
import { LocationAreaUpsertWithWhereUniqueWithoutLocationInput } from "../inputs/LocationAreaUpsertWithWhereUniqueWithoutLocationInput";
import { LocationAreaWhereUniqueInput } from "../inputs/LocationAreaWhereUniqueInput";

@TypeGraphQL.InputType("LocationAreaUpdateManyWithoutLocationNestedInput", {})
export class LocationAreaUpdateManyWithoutLocationNestedInput {
  @TypeGraphQL.Field(_type => [LocationAreaCreateWithoutLocationInput], {
    nullable: true
  })
  create?: LocationAreaCreateWithoutLocationInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocationAreaCreateOrConnectWithoutLocationInput], {
    nullable: true
  })
  connectOrCreate?: LocationAreaCreateOrConnectWithoutLocationInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocationAreaUpsertWithWhereUniqueWithoutLocationInput], {
    nullable: true
  })
  upsert?: LocationAreaUpsertWithWhereUniqueWithoutLocationInput[] | undefined;

  @TypeGraphQL.Field(_type => LocationAreaCreateManyLocationInputEnvelope, {
    nullable: true
  })
  createMany?: LocationAreaCreateManyLocationInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [LocationAreaWhereUniqueInput], {
    nullable: true
  })
  set?: LocationAreaWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocationAreaWhereUniqueInput], {
    nullable: true
  })
  disconnect?: LocationAreaWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocationAreaWhereUniqueInput], {
    nullable: true
  })
  delete?: LocationAreaWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocationAreaWhereUniqueInput], {
    nullable: true
  })
  connect?: LocationAreaWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocationAreaUpdateWithWhereUniqueWithoutLocationInput], {
    nullable: true
  })
  update?: LocationAreaUpdateWithWhereUniqueWithoutLocationInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocationAreaUpdateManyWithWhereWithoutLocationInput], {
    nullable: true
  })
  updateMany?: LocationAreaUpdateManyWithWhereWithoutLocationInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocationAreaScalarWhereInput], {
    nullable: true
  })
  deleteMany?: LocationAreaScalarWhereInput[] | undefined;
}
