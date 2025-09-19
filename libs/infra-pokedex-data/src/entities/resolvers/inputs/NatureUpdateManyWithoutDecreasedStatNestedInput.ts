import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NatureCreateManyDecreasedStatInputEnvelope } from "../inputs/NatureCreateManyDecreasedStatInputEnvelope";
import { NatureCreateOrConnectWithoutDecreasedStatInput } from "../inputs/NatureCreateOrConnectWithoutDecreasedStatInput";
import { NatureCreateWithoutDecreasedStatInput } from "../inputs/NatureCreateWithoutDecreasedStatInput";
import { NatureScalarWhereInput } from "../inputs/NatureScalarWhereInput";
import { NatureUpdateManyWithWhereWithoutDecreasedStatInput } from "../inputs/NatureUpdateManyWithWhereWithoutDecreasedStatInput";
import { NatureUpdateWithWhereUniqueWithoutDecreasedStatInput } from "../inputs/NatureUpdateWithWhereUniqueWithoutDecreasedStatInput";
import { NatureUpsertWithWhereUniqueWithoutDecreasedStatInput } from "../inputs/NatureUpsertWithWhereUniqueWithoutDecreasedStatInput";
import { NatureWhereUniqueInput } from "../inputs/NatureWhereUniqueInput";

@TypeGraphQL.InputType("NatureUpdateManyWithoutDecreasedStatNestedInput", {})
export class NatureUpdateManyWithoutDecreasedStatNestedInput {
  @TypeGraphQL.Field(_type => [NatureCreateWithoutDecreasedStatInput], {
    nullable: true
  })
  create?: NatureCreateWithoutDecreasedStatInput[] | undefined;

  @TypeGraphQL.Field(_type => [NatureCreateOrConnectWithoutDecreasedStatInput], {
    nullable: true
  })
  connectOrCreate?: NatureCreateOrConnectWithoutDecreasedStatInput[] | undefined;

  @TypeGraphQL.Field(_type => [NatureUpsertWithWhereUniqueWithoutDecreasedStatInput], {
    nullable: true
  })
  upsert?: NatureUpsertWithWhereUniqueWithoutDecreasedStatInput[] | undefined;

  @TypeGraphQL.Field(_type => NatureCreateManyDecreasedStatInputEnvelope, {
    nullable: true
  })
  createMany?: NatureCreateManyDecreasedStatInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [NatureUpdateWithWhereUniqueWithoutDecreasedStatInput], {
    nullable: true
  })
  update?: NatureUpdateWithWhereUniqueWithoutDecreasedStatInput[] | undefined;

  @TypeGraphQL.Field(_type => [NatureUpdateManyWithWhereWithoutDecreasedStatInput], {
    nullable: true
  })
  updateMany?: NatureUpdateManyWithWhereWithoutDecreasedStatInput[] | undefined;

  @TypeGraphQL.Field(_type => [NatureScalarWhereInput], {
    nullable: true
  })
  deleteMany?: NatureScalarWhereInput[] | undefined;
}
