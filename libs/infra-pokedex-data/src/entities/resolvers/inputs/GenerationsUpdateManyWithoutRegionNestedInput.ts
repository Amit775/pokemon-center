import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenerationsCreateManyRegionInputEnvelope } from "../inputs/GenerationsCreateManyRegionInputEnvelope";
import { GenerationsCreateOrConnectWithoutRegionInput } from "../inputs/GenerationsCreateOrConnectWithoutRegionInput";
import { GenerationsCreateWithoutRegionInput } from "../inputs/GenerationsCreateWithoutRegionInput";
import { GenerationsScalarWhereInput } from "../inputs/GenerationsScalarWhereInput";
import { GenerationsUpdateManyWithWhereWithoutRegionInput } from "../inputs/GenerationsUpdateManyWithWhereWithoutRegionInput";
import { GenerationsUpdateWithWhereUniqueWithoutRegionInput } from "../inputs/GenerationsUpdateWithWhereUniqueWithoutRegionInput";
import { GenerationsUpsertWithWhereUniqueWithoutRegionInput } from "../inputs/GenerationsUpsertWithWhereUniqueWithoutRegionInput";
import { GenerationsWhereUniqueInput } from "../inputs/GenerationsWhereUniqueInput";

@TypeGraphQL.InputType("GenerationsUpdateManyWithoutRegionNestedInput", {})
export class GenerationsUpdateManyWithoutRegionNestedInput {
  @TypeGraphQL.Field(_type => [GenerationsCreateWithoutRegionInput], {
    nullable: true
  })
  create?: GenerationsCreateWithoutRegionInput[] | undefined;

  @TypeGraphQL.Field(_type => [GenerationsCreateOrConnectWithoutRegionInput], {
    nullable: true
  })
  connectOrCreate?: GenerationsCreateOrConnectWithoutRegionInput[] | undefined;

  @TypeGraphQL.Field(_type => [GenerationsUpsertWithWhereUniqueWithoutRegionInput], {
    nullable: true
  })
  upsert?: GenerationsUpsertWithWhereUniqueWithoutRegionInput[] | undefined;

  @TypeGraphQL.Field(_type => GenerationsCreateManyRegionInputEnvelope, {
    nullable: true
  })
  createMany?: GenerationsCreateManyRegionInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [GenerationsWhereUniqueInput], {
    nullable: true
  })
  set?: GenerationsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [GenerationsWhereUniqueInput], {
    nullable: true
  })
  disconnect?: GenerationsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [GenerationsWhereUniqueInput], {
    nullable: true
  })
  delete?: GenerationsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [GenerationsWhereUniqueInput], {
    nullable: true
  })
  connect?: GenerationsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [GenerationsUpdateWithWhereUniqueWithoutRegionInput], {
    nullable: true
  })
  update?: GenerationsUpdateWithWhereUniqueWithoutRegionInput[] | undefined;

  @TypeGraphQL.Field(_type => [GenerationsUpdateManyWithWhereWithoutRegionInput], {
    nullable: true
  })
  updateMany?: GenerationsUpdateManyWithWhereWithoutRegionInput[] | undefined;

  @TypeGraphQL.Field(_type => [GenerationsScalarWhereInput], {
    nullable: true
  })
  deleteMany?: GenerationsScalarWhereInput[] | undefined;
}
