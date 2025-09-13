import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemsCreateManyCategoryInputEnvelope } from "../inputs/ItemsCreateManyCategoryInputEnvelope";
import { ItemsCreateOrConnectWithoutCategoryInput } from "../inputs/ItemsCreateOrConnectWithoutCategoryInput";
import { ItemsCreateWithoutCategoryInput } from "../inputs/ItemsCreateWithoutCategoryInput";
import { ItemsWhereUniqueInput } from "../inputs/ItemsWhereUniqueInput";

@TypeGraphQL.InputType("ItemsCreateNestedManyWithoutCategoryInput", {})
export class ItemsCreateNestedManyWithoutCategoryInput {
  @TypeGraphQL.Field(_type => [ItemsCreateWithoutCategoryInput], {
    nullable: true
  })
  create?: ItemsCreateWithoutCategoryInput[] | undefined;

  @TypeGraphQL.Field(_type => [ItemsCreateOrConnectWithoutCategoryInput], {
    nullable: true
  })
  connectOrCreate?: ItemsCreateOrConnectWithoutCategoryInput[] | undefined;

  @TypeGraphQL.Field(_type => ItemsCreateManyCategoryInputEnvelope, {
    nullable: true
  })
  createMany?: ItemsCreateManyCategoryInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ItemsWhereUniqueInput], {
    nullable: true
  })
  connect?: ItemsWhereUniqueInput[] | undefined;
}
