import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemCategoriesCreateOrConnectWithoutItemsInput } from "../inputs/ItemCategoriesCreateOrConnectWithoutItemsInput";
import { ItemCategoriesCreateWithoutItemsInput } from "../inputs/ItemCategoriesCreateWithoutItemsInput";
import { ItemCategoriesUpdateToOneWithWhereWithoutItemsInput } from "../inputs/ItemCategoriesUpdateToOneWithWhereWithoutItemsInput";
import { ItemCategoriesUpsertWithoutItemsInput } from "../inputs/ItemCategoriesUpsertWithoutItemsInput";
import { ItemCategoriesWhereUniqueInput } from "../inputs/ItemCategoriesWhereUniqueInput";

@TypeGraphQL.InputType("ItemCategoriesUpdateOneRequiredWithoutItemsNestedInput", {})
export class ItemCategoriesUpdateOneRequiredWithoutItemsNestedInput {
  @TypeGraphQL.Field(_type => ItemCategoriesCreateWithoutItemsInput, {
    nullable: true
  })
  create?: ItemCategoriesCreateWithoutItemsInput | undefined;

  @TypeGraphQL.Field(_type => ItemCategoriesCreateOrConnectWithoutItemsInput, {
    nullable: true
  })
  connectOrCreate?: ItemCategoriesCreateOrConnectWithoutItemsInput | undefined;

  @TypeGraphQL.Field(_type => ItemCategoriesUpsertWithoutItemsInput, {
    nullable: true
  })
  upsert?: ItemCategoriesUpsertWithoutItemsInput | undefined;

  @TypeGraphQL.Field(_type => ItemCategoriesWhereUniqueInput, {
    nullable: true
  })
  connect?: ItemCategoriesWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ItemCategoriesUpdateToOneWithWhereWithoutItemsInput, {
    nullable: true
  })
  update?: ItemCategoriesUpdateToOneWithWhereWithoutItemsInput | undefined;
}
