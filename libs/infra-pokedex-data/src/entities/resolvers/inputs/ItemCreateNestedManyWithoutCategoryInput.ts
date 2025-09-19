import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemCreateManyCategoryInputEnvelope } from "../inputs/ItemCreateManyCategoryInputEnvelope";
import { ItemCreateOrConnectWithoutCategoryInput } from "../inputs/ItemCreateOrConnectWithoutCategoryInput";
import { ItemCreateWithoutCategoryInput } from "../inputs/ItemCreateWithoutCategoryInput";
import { ItemWhereUniqueInput } from "../inputs/ItemWhereUniqueInput";

@TypeGraphQL.InputType("ItemCreateNestedManyWithoutCategoryInput", {})
export class ItemCreateNestedManyWithoutCategoryInput {
  @TypeGraphQL.Field(_type => [ItemCreateWithoutCategoryInput], {
    nullable: true
  })
  create?: ItemCreateWithoutCategoryInput[] | undefined;

  @TypeGraphQL.Field(_type => [ItemCreateOrConnectWithoutCategoryInput], {
    nullable: true
  })
  connectOrCreate?: ItemCreateOrConnectWithoutCategoryInput[] | undefined;

  @TypeGraphQL.Field(_type => ItemCreateManyCategoryInputEnvelope, {
    nullable: true
  })
  createMany?: ItemCreateManyCategoryInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ItemWhereUniqueInput], {
    nullable: true
  })
  connect?: ItemWhereUniqueInput[] | undefined;
}
