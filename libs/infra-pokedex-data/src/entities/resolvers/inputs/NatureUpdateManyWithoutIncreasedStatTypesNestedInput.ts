import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NatureCreateOrConnectWithoutIncreasedStatTypesInput } from "../inputs/NatureCreateOrConnectWithoutIncreasedStatTypesInput";
import { NatureCreateWithoutIncreasedStatTypesInput } from "../inputs/NatureCreateWithoutIncreasedStatTypesInput";
import { NatureScalarWhereInput } from "../inputs/NatureScalarWhereInput";
import { NatureUpdateManyWithWhereWithoutIncreasedStatTypesInput } from "../inputs/NatureUpdateManyWithWhereWithoutIncreasedStatTypesInput";
import { NatureUpdateWithWhereUniqueWithoutIncreasedStatTypesInput } from "../inputs/NatureUpdateWithWhereUniqueWithoutIncreasedStatTypesInput";
import { NatureUpsertWithWhereUniqueWithoutIncreasedStatTypesInput } from "../inputs/NatureUpsertWithWhereUniqueWithoutIncreasedStatTypesInput";
import { NatureWhereUniqueInput } from "../inputs/NatureWhereUniqueInput";

@TypeGraphQL.InputType("NatureUpdateManyWithoutIncreasedStatTypesNestedInput", {})
export class NatureUpdateManyWithoutIncreasedStatTypesNestedInput {
  @TypeGraphQL.Field(_type => [NatureCreateWithoutIncreasedStatTypesInput], {
    nullable: true
  })
  create?: NatureCreateWithoutIncreasedStatTypesInput[] | undefined;

  @TypeGraphQL.Field(_type => [NatureCreateOrConnectWithoutIncreasedStatTypesInput], {
    nullable: true
  })
  connectOrCreate?: NatureCreateOrConnectWithoutIncreasedStatTypesInput[] | undefined;

  @TypeGraphQL.Field(_type => [NatureUpsertWithWhereUniqueWithoutIncreasedStatTypesInput], {
    nullable: true
  })
  upsert?: NatureUpsertWithWhereUniqueWithoutIncreasedStatTypesInput[] | undefined;

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

  @TypeGraphQL.Field(_type => [NatureUpdateWithWhereUniqueWithoutIncreasedStatTypesInput], {
    nullable: true
  })
  update?: NatureUpdateWithWhereUniqueWithoutIncreasedStatTypesInput[] | undefined;

  @TypeGraphQL.Field(_type => [NatureUpdateManyWithWhereWithoutIncreasedStatTypesInput], {
    nullable: true
  })
  updateMany?: NatureUpdateManyWithWhereWithoutIncreasedStatTypesInput[] | undefined;

  @TypeGraphQL.Field(_type => [NatureScalarWhereInput], {
    nullable: true
  })
  deleteMany?: NatureScalarWhereInput[] | undefined;
}
