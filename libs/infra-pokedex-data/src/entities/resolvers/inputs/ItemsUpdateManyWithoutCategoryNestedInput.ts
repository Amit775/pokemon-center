import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemsCreateManyCategoryInputEnvelope } from "../inputs/ItemsCreateManyCategoryInputEnvelope";
import { ItemsCreateOrConnectWithoutCategoryInput } from "../inputs/ItemsCreateOrConnectWithoutCategoryInput";
import { ItemsCreateWithoutCategoryInput } from "../inputs/ItemsCreateWithoutCategoryInput";
import { ItemsScalarWhereInput } from "../inputs/ItemsScalarWhereInput";
import { ItemsUpdateManyWithWhereWithoutCategoryInput } from "../inputs/ItemsUpdateManyWithWhereWithoutCategoryInput";
import { ItemsUpdateWithWhereUniqueWithoutCategoryInput } from "../inputs/ItemsUpdateWithWhereUniqueWithoutCategoryInput";
import { ItemsUpsertWithWhereUniqueWithoutCategoryInput } from "../inputs/ItemsUpsertWithWhereUniqueWithoutCategoryInput";
import { ItemsWhereUniqueInput } from "../inputs/ItemsWhereUniqueInput";

@TypeGraphQL.InputType("ItemsUpdateManyWithoutCategoryNestedInput", {})
export class ItemsUpdateManyWithoutCategoryNestedInput {
  @TypeGraphQL.Field(_type => [ItemsCreateWithoutCategoryInput], {
    nullable: true
  })
  create?: ItemsCreateWithoutCategoryInput[] | undefined;

  @TypeGraphQL.Field(_type => [ItemsCreateOrConnectWithoutCategoryInput], {
    nullable: true
  })
  connectOrCreate?: ItemsCreateOrConnectWithoutCategoryInput[] | undefined;

  @TypeGraphQL.Field(_type => [ItemsUpsertWithWhereUniqueWithoutCategoryInput], {
    nullable: true
  })
  upsert?: ItemsUpsertWithWhereUniqueWithoutCategoryInput[] | undefined;

  @TypeGraphQL.Field(_type => ItemsCreateManyCategoryInputEnvelope, {
    nullable: true
  })
  createMany?: ItemsCreateManyCategoryInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ItemsWhereUniqueInput], {
    nullable: true
  })
  set?: ItemsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ItemsWhereUniqueInput], {
    nullable: true
  })
  disconnect?: ItemsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ItemsWhereUniqueInput], {
    nullable: true
  })
  delete?: ItemsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ItemsWhereUniqueInput], {
    nullable: true
  })
  connect?: ItemsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ItemsUpdateWithWhereUniqueWithoutCategoryInput], {
    nullable: true
  })
  update?: ItemsUpdateWithWhereUniqueWithoutCategoryInput[] | undefined;

  @TypeGraphQL.Field(_type => [ItemsUpdateManyWithWhereWithoutCategoryInput], {
    nullable: true
  })
  updateMany?: ItemsUpdateManyWithWhereWithoutCategoryInput[] | undefined;

  @TypeGraphQL.Field(_type => [ItemsScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ItemsScalarWhereInput[] | undefined;
}
