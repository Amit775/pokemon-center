import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemPocketCreateOrConnectWithoutCategoriesInput } from "../inputs/ItemPocketCreateOrConnectWithoutCategoriesInput";
import { ItemPocketCreateWithoutCategoriesInput } from "../inputs/ItemPocketCreateWithoutCategoriesInput";
import { ItemPocketUpdateToOneWithWhereWithoutCategoriesInput } from "../inputs/ItemPocketUpdateToOneWithWhereWithoutCategoriesInput";
import { ItemPocketUpsertWithoutCategoriesInput } from "../inputs/ItemPocketUpsertWithoutCategoriesInput";
import { ItemPocketWhereUniqueInput } from "../inputs/ItemPocketWhereUniqueInput";

@TypeGraphQL.InputType("ItemPocketUpdateOneRequiredWithoutCategoriesNestedInput", {})
export class ItemPocketUpdateOneRequiredWithoutCategoriesNestedInput {
  @TypeGraphQL.Field(_type => ItemPocketCreateWithoutCategoriesInput, {
    nullable: true
  })
  create?: ItemPocketCreateWithoutCategoriesInput | undefined;

  @TypeGraphQL.Field(_type => ItemPocketCreateOrConnectWithoutCategoriesInput, {
    nullable: true
  })
  connectOrCreate?: ItemPocketCreateOrConnectWithoutCategoriesInput | undefined;

  @TypeGraphQL.Field(_type => ItemPocketUpsertWithoutCategoriesInput, {
    nullable: true
  })
  upsert?: ItemPocketUpsertWithoutCategoriesInput | undefined;

  @TypeGraphQL.Field(_type => ItemPocketWhereUniqueInput, {
    nullable: true
  })
  connect?: ItemPocketWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ItemPocketUpdateToOneWithWhereWithoutCategoriesInput, {
    nullable: true
  })
  update?: ItemPocketUpdateToOneWithWhereWithoutCategoriesInput | undefined;
}
