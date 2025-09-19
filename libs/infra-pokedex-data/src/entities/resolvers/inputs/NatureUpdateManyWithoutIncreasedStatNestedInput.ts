import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NatureCreateManyIncreasedStatInputEnvelope } from "../inputs/NatureCreateManyIncreasedStatInputEnvelope";
import { NatureCreateOrConnectWithoutIncreasedStatInput } from "../inputs/NatureCreateOrConnectWithoutIncreasedStatInput";
import { NatureCreateWithoutIncreasedStatInput } from "../inputs/NatureCreateWithoutIncreasedStatInput";
import { NatureScalarWhereInput } from "../inputs/NatureScalarWhereInput";
import { NatureUpdateManyWithWhereWithoutIncreasedStatInput } from "../inputs/NatureUpdateManyWithWhereWithoutIncreasedStatInput";
import { NatureUpdateWithWhereUniqueWithoutIncreasedStatInput } from "../inputs/NatureUpdateWithWhereUniqueWithoutIncreasedStatInput";
import { NatureUpsertWithWhereUniqueWithoutIncreasedStatInput } from "../inputs/NatureUpsertWithWhereUniqueWithoutIncreasedStatInput";
import { NatureWhereUniqueInput } from "../inputs/NatureWhereUniqueInput";

@TypeGraphQL.InputType("NatureUpdateManyWithoutIncreasedStatNestedInput", {})
export class NatureUpdateManyWithoutIncreasedStatNestedInput {
  @TypeGraphQL.Field(_type => [NatureCreateWithoutIncreasedStatInput], {
    nullable: true
  })
  create?: NatureCreateWithoutIncreasedStatInput[] | undefined;

  @TypeGraphQL.Field(_type => [NatureCreateOrConnectWithoutIncreasedStatInput], {
    nullable: true
  })
  connectOrCreate?: NatureCreateOrConnectWithoutIncreasedStatInput[] | undefined;

  @TypeGraphQL.Field(_type => [NatureUpsertWithWhereUniqueWithoutIncreasedStatInput], {
    nullable: true
  })
  upsert?: NatureUpsertWithWhereUniqueWithoutIncreasedStatInput[] | undefined;

  @TypeGraphQL.Field(_type => NatureCreateManyIncreasedStatInputEnvelope, {
    nullable: true
  })
  createMany?: NatureCreateManyIncreasedStatInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [NatureWhereUniqueInput], {
    nullable: true
  })
  set?: NatureWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [NatureWhereUniqueInput], {
    nullable: true
  })
  disconnect?: NatureWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [NatureWhereUniqueInput], {
    nullable: true
  })
  delete?: NatureWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [NatureWhereUniqueInput], {
    nullable: true
  })
  connect?: NatureWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [NatureUpdateWithWhereUniqueWithoutIncreasedStatInput], {
    nullable: true
  })
  update?: NatureUpdateWithWhereUniqueWithoutIncreasedStatInput[] | undefined;

  @TypeGraphQL.Field(_type => [NatureUpdateManyWithWhereWithoutIncreasedStatInput], {
    nullable: true
  })
  updateMany?: NatureUpdateManyWithWhereWithoutIncreasedStatInput[] | undefined;

  @TypeGraphQL.Field(_type => [NatureScalarWhereInput], {
    nullable: true
  })
  deleteMany?: NatureScalarWhereInput[] | undefined;
}
