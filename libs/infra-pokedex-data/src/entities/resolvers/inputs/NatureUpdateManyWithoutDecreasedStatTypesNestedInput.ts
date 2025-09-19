import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NatureCreateOrConnectWithoutDecreasedStatTypesInput } from "../inputs/NatureCreateOrConnectWithoutDecreasedStatTypesInput";
import { NatureCreateWithoutDecreasedStatTypesInput } from "../inputs/NatureCreateWithoutDecreasedStatTypesInput";
import { NatureScalarWhereInput } from "../inputs/NatureScalarWhereInput";
import { NatureUpdateManyWithWhereWithoutDecreasedStatTypesInput } from "../inputs/NatureUpdateManyWithWhereWithoutDecreasedStatTypesInput";
import { NatureUpdateWithWhereUniqueWithoutDecreasedStatTypesInput } from "../inputs/NatureUpdateWithWhereUniqueWithoutDecreasedStatTypesInput";
import { NatureUpsertWithWhereUniqueWithoutDecreasedStatTypesInput } from "../inputs/NatureUpsertWithWhereUniqueWithoutDecreasedStatTypesInput";
import { NatureWhereUniqueInput } from "../inputs/NatureWhereUniqueInput";

@TypeGraphQL.InputType("NatureUpdateManyWithoutDecreasedStatTypesNestedInput", {})
export class NatureUpdateManyWithoutDecreasedStatTypesNestedInput {
  @TypeGraphQL.Field(_type => [NatureCreateWithoutDecreasedStatTypesInput], {
    nullable: true
  })
  create?: NatureCreateWithoutDecreasedStatTypesInput[] | undefined;

  @TypeGraphQL.Field(_type => [NatureCreateOrConnectWithoutDecreasedStatTypesInput], {
    nullable: true
  })
  connectOrCreate?: NatureCreateOrConnectWithoutDecreasedStatTypesInput[] | undefined;

  @TypeGraphQL.Field(_type => [NatureUpsertWithWhereUniqueWithoutDecreasedStatTypesInput], {
    nullable: true
  })
  upsert?: NatureUpsertWithWhereUniqueWithoutDecreasedStatTypesInput[] | undefined;

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

  @TypeGraphQL.Field(_type => [NatureUpdateWithWhereUniqueWithoutDecreasedStatTypesInput], {
    nullable: true
  })
  update?: NatureUpdateWithWhereUniqueWithoutDecreasedStatTypesInput[] | undefined;

  @TypeGraphQL.Field(_type => [NatureUpdateManyWithWhereWithoutDecreasedStatTypesInput], {
    nullable: true
  })
  updateMany?: NatureUpdateManyWithWhereWithoutDecreasedStatTypesInput[] | undefined;

  @TypeGraphQL.Field(_type => [NatureScalarWhereInput], {
    nullable: true
  })
  deleteMany?: NatureScalarWhereInput[] | undefined;
}
