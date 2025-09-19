import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenerationCreateManyRegionInputEnvelope } from "../inputs/GenerationCreateManyRegionInputEnvelope";
import { GenerationCreateOrConnectWithoutRegionInput } from "../inputs/GenerationCreateOrConnectWithoutRegionInput";
import { GenerationCreateWithoutRegionInput } from "../inputs/GenerationCreateWithoutRegionInput";
import { GenerationScalarWhereInput } from "../inputs/GenerationScalarWhereInput";
import { GenerationUpdateManyWithWhereWithoutRegionInput } from "../inputs/GenerationUpdateManyWithWhereWithoutRegionInput";
import { GenerationUpdateWithWhereUniqueWithoutRegionInput } from "../inputs/GenerationUpdateWithWhereUniqueWithoutRegionInput";
import { GenerationUpsertWithWhereUniqueWithoutRegionInput } from "../inputs/GenerationUpsertWithWhereUniqueWithoutRegionInput";
import { GenerationWhereUniqueInput } from "../inputs/GenerationWhereUniqueInput";

@TypeGraphQL.InputType("GenerationUpdateManyWithoutRegionNestedInput", {})
export class GenerationUpdateManyWithoutRegionNestedInput {
  @TypeGraphQL.Field(_type => [GenerationCreateWithoutRegionInput], {
    nullable: true
  })
  create?: GenerationCreateWithoutRegionInput[] | undefined;

  @TypeGraphQL.Field(_type => [GenerationCreateOrConnectWithoutRegionInput], {
    nullable: true
  })
  connectOrCreate?: GenerationCreateOrConnectWithoutRegionInput[] | undefined;

  @TypeGraphQL.Field(_type => [GenerationUpsertWithWhereUniqueWithoutRegionInput], {
    nullable: true
  })
  upsert?: GenerationUpsertWithWhereUniqueWithoutRegionInput[] | undefined;

  @TypeGraphQL.Field(_type => GenerationCreateManyRegionInputEnvelope, {
    nullable: true
  })
  createMany?: GenerationCreateManyRegionInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [GenerationWhereUniqueInput], {
    nullable: true
  })
  set?: GenerationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [GenerationWhereUniqueInput], {
    nullable: true
  })
  disconnect?: GenerationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [GenerationWhereUniqueInput], {
    nullable: true
  })
  delete?: GenerationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [GenerationWhereUniqueInput], {
    nullable: true
  })
  connect?: GenerationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [GenerationUpdateWithWhereUniqueWithoutRegionInput], {
    nullable: true
  })
  update?: GenerationUpdateWithWhereUniqueWithoutRegionInput[] | undefined;

  @TypeGraphQL.Field(_type => [GenerationUpdateManyWithWhereWithoutRegionInput], {
    nullable: true
  })
  updateMany?: GenerationUpdateManyWithWhereWithoutRegionInput[] | undefined;

  @TypeGraphQL.Field(_type => [GenerationScalarWhereInput], {
    nullable: true
  })
  deleteMany?: GenerationScalarWhereInput[] | undefined;
}
