import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemCategoryCreateOrConnectWithoutItemsInput } from "../inputs/ItemCategoryCreateOrConnectWithoutItemsInput";
import { ItemCategoryCreateWithoutItemsInput } from "../inputs/ItemCategoryCreateWithoutItemsInput";
import { ItemCategoryUpdateToOneWithWhereWithoutItemsInput } from "../inputs/ItemCategoryUpdateToOneWithWhereWithoutItemsInput";
import { ItemCategoryUpsertWithoutItemsInput } from "../inputs/ItemCategoryUpsertWithoutItemsInput";
import { ItemCategoryWhereUniqueInput } from "../inputs/ItemCategoryWhereUniqueInput";

@TypeGraphQL.InputType("ItemCategoryUpdateOneRequiredWithoutItemsNestedInput", {})
export class ItemCategoryUpdateOneRequiredWithoutItemsNestedInput {
  @TypeGraphQL.Field(_type => ItemCategoryCreateWithoutItemsInput, {
    nullable: true
  })
  create?: ItemCategoryCreateWithoutItemsInput | undefined;

  @TypeGraphQL.Field(_type => ItemCategoryCreateOrConnectWithoutItemsInput, {
    nullable: true
  })
  connectOrCreate?: ItemCategoryCreateOrConnectWithoutItemsInput | undefined;

  @TypeGraphQL.Field(_type => ItemCategoryUpsertWithoutItemsInput, {
    nullable: true
  })
  upsert?: ItemCategoryUpsertWithoutItemsInput | undefined;

  @TypeGraphQL.Field(_type => ItemCategoryWhereUniqueInput, {
    nullable: true
  })
  connect?: ItemCategoryWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ItemCategoryUpdateToOneWithWhereWithoutItemsInput, {
    nullable: true
  })
  update?: ItemCategoryUpdateToOneWithWhereWithoutItemsInput | undefined;
}
