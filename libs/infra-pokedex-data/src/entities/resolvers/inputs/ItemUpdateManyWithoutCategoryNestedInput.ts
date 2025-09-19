import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemCreateManyCategoryInputEnvelope } from "../inputs/ItemCreateManyCategoryInputEnvelope";
import { ItemCreateOrConnectWithoutCategoryInput } from "../inputs/ItemCreateOrConnectWithoutCategoryInput";
import { ItemCreateWithoutCategoryInput } from "../inputs/ItemCreateWithoutCategoryInput";
import { ItemScalarWhereInput } from "../inputs/ItemScalarWhereInput";
import { ItemUpdateManyWithWhereWithoutCategoryInput } from "../inputs/ItemUpdateManyWithWhereWithoutCategoryInput";
import { ItemUpdateWithWhereUniqueWithoutCategoryInput } from "../inputs/ItemUpdateWithWhereUniqueWithoutCategoryInput";
import { ItemUpsertWithWhereUniqueWithoutCategoryInput } from "../inputs/ItemUpsertWithWhereUniqueWithoutCategoryInput";
import { ItemWhereUniqueInput } from "../inputs/ItemWhereUniqueInput";

@TypeGraphQL.InputType("ItemUpdateManyWithoutCategoryNestedInput", {})
export class ItemUpdateManyWithoutCategoryNestedInput {
  @TypeGraphQL.Field(_type => [ItemCreateWithoutCategoryInput], {
    nullable: true
  })
  create?: ItemCreateWithoutCategoryInput[] | undefined;

  @TypeGraphQL.Field(_type => [ItemCreateOrConnectWithoutCategoryInput], {
    nullable: true
  })
  connectOrCreate?: ItemCreateOrConnectWithoutCategoryInput[] | undefined;

  @TypeGraphQL.Field(_type => [ItemUpsertWithWhereUniqueWithoutCategoryInput], {
    nullable: true
  })
  upsert?: ItemUpsertWithWhereUniqueWithoutCategoryInput[] | undefined;

  @TypeGraphQL.Field(_type => ItemCreateManyCategoryInputEnvelope, {
    nullable: true
  })
  createMany?: ItemCreateManyCategoryInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ItemWhereUniqueInput], {
    nullable: true
  })
  set?: ItemWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ItemWhereUniqueInput], {
    nullable: true
  })
  disconnect?: ItemWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ItemWhereUniqueInput], {
    nullable: true
  })
  delete?: ItemWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ItemWhereUniqueInput], {
    nullable: true
  })
  connect?: ItemWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ItemUpdateWithWhereUniqueWithoutCategoryInput], {
    nullable: true
  })
  update?: ItemUpdateWithWhereUniqueWithoutCategoryInput[] | undefined;

  @TypeGraphQL.Field(_type => [ItemUpdateManyWithWhereWithoutCategoryInput], {
    nullable: true
  })
  updateMany?: ItemUpdateManyWithWhereWithoutCategoryInput[] | undefined;

  @TypeGraphQL.Field(_type => [ItemScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ItemScalarWhereInput[] | undefined;
}
